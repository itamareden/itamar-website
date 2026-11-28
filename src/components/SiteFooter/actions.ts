"use server";

/*
 * The mailing-list sign-up in the footer. A Server Action: it runs on the
 * server, so the email service's secret key never reaches the browser.
 *
 * It adds the address (and first name, if given) to the "Newsletter" group
 * in Sender, the only group occasional updates go to. Someone already in
 * Sender keeps their other groups (e.g. the challenge): Sender adds the
 * group, it doesn't replace them (tested 28 Nov 2026).
 */

export type NewsletterState = { status: "idle" | "success" | "invalid" | "failed" };

const NEWSLETTER_GROUP = "avzA1r"; // "Newsletter" in Sender

export async function joinNewsletter(_previous: NewsletterState, formData: FormData): Promise<NewsletterState> {
  const [firstName, email] = ["firstName", "email"].map((field) => {
    const value = formData.get(field);
    return typeof value === "string" ? value.trim() : "";
  });

  // The browser checks the address too, but anything can be sent to a server.
  if (!/^\S+@\S+\.\S+$/.test(email) || firstName.length > 100) {
    return { status: "invalid" };
  }

  const token = process.env.SENDER_API_TOKEN?.trim();
  if (!token) {
    console.error("Newsletter sign-up: SENDER_API_TOKEN is not set");
    return { status: "failed" };
  }

  try {
    const response = await fetch("https://api.sender.net/v2/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        ...(firstName && { firstname: firstName }),
        groups: [NEWSLETTER_GROUP],
        trigger_automation: false, // no automation is tied to this group (yet)
      }),
    });

    if (!response.ok) {
      console.error("Newsletter sign-up: Sender answered", response.status, await response.text());
      return { status: "failed" };
    }
    return { status: "success" };
  } catch (error) {
    console.error("Newsletter sign-up: could not reach Sender", error);
    return { status: "failed" };
  }
}
