"use server";

import { dayOneForSender } from "@/lib/challenge-schedule";

/*
 * Email sign-up for the self-guided challenge (used when the challenge
 * mode is "email").
 *
 * A Server Action: it runs on the server when the form is submitted, so
 * the email service's secret key never reaches the browser.
 *
 * It adds the address to the challenge group in Sender, which starts the
 * challenge automation there: the welcome email at once, then day 1 at
 * the time saved in the "Challenge day 1" field (6:00 in the subscriber's
 * own time zone), then a day every 24 hours.
 */

export type SignupState = { status: "idle" | "success" | "invalid" | "failed" };

const CHALLENGE_GROUP = "e1nZPG"; // "Meditation Challenge" in Sender
const DAY_ONE_FIELD = "{$challenge_day_1}";

export async function subscribe(_previous: SignupState, formData: FormData): Promise<SignupState> {
  const email = formData.get("email");
  const consent = formData.get("consent");
  const timeZone = formData.get("timeZone");

  // The browser checks these too, but anything can be sent to a server.
  if (typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email.trim()) || consent !== "on") {
    return { status: "invalid" };
  }

  const token = process.env.SENDER_API_TOKEN?.trim();
  if (!token) {
    console.error("Challenge sign-up: SENDER_API_TOKEN is not set");
    return { status: "failed" };
  }

  try {
    // An address that's already in Sender is updated, not duplicated.
    const response = await fetch("https://api.sender.net/v2/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email.trim(),
        groups: [CHALLENGE_GROUP],
        fields: { [DAY_ONE_FIELD]: dayOneForSender(typeof timeZone === "string" ? timeZone : "") },
        trigger_automation: true,
      }),
    });

    if (!response.ok) {
      const reason = `Sender answered ${response.status}: ${await response.text()}`;
      console.error("Challenge sign-up:", reason);
      await alertItamar(token, email.trim(), reason);
      return { status: "failed" };
    }
    return { status: "success" };
  } catch (error) {
    console.error("Challenge sign-up: could not reach Sender", error);
    await alertItamar(token, email.trim(), `Could not reach Sender: ${error}`);
    return { status: "failed" };
  }
}

/*
 * Tells Itamar a sign-up failed, with the address, so he can add it by
 * hand. Sent through Sender too, so if Sender itself is down this may not
 * arrive either; the Vercel log always has the details.
 */
async function alertItamar(token: string, email: string, reason: string) {
  try {
    const response = await fetch("https://api.sender.net/v2/message/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        from: { email: "itamar@itamareden.love", name: "Website" },
        to: { email: "itamar@itamareden.love", name: "Itamar Eden" },
        subject: `Challenge sign-up failed: ${email}`,
        text: `${email} tried to sign up for the challenge, but it failed.

Add them by hand in Sender (group "Meditation Challenge", and set "Challenge day 1"), or write to them.

Reason: ${reason}`,
      }),
    });
    if (!response.ok) console.error("Challenge sign-up: the alert email failed too", response.status);
  } catch (error) {
    console.error("Challenge sign-up: the alert email failed too", error);
  }
}

/*
 * "How was the journey?" on the closing page: every field is optional,
 * but at least one must be filled in (the page also keeps Send disabled
 * until then; this check is for anything sent some other way).
 */

export type ShareState = { status: "idle" | "success" | "empty" | "not-ready" };

export async function shareExperience(_previous: ShareState, formData: FormData): Promise<ShareState> {
  const fields = ["day", "takeAway", "improve", "contact"].map((name) => {
    const value = formData.get(name);
    return typeof value === "string" ? value.trim() : "";
  });

  if (fields.every((value) => value === "")) {
    return { status: "empty" };
  }

  // No email service is connected yet. Once one is chosen, the answers are
  // emailed to Itamar here and this returns { status: "success" }.
  return { status: "not-ready" };
}
