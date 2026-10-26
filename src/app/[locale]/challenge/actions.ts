"use server";

/*
 * Email sign-up for the self-guided challenge (used when the challenge
 * mode is "email").
 *
 * A Server Action: it runs on the server when the form is submitted, so
 * the email service's secret key will never reach the browser.
 */

export type SignupState = { status: "idle" | "success" | "invalid" | "not-ready" };

export async function subscribe(_previous: SignupState, formData: FormData): Promise<SignupState> {
  const email = formData.get("email");
  const consent = formData.get("consent");

  // The browser checks these too, but anything can be sent to a server.
  if (typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email) || consent !== "on") {
    return { status: "invalid" };
  }

  // No email service is connected yet. Once one is chosen, the address is
  // sent to it here (which starts the welcome + day 1-5 emails) and this
  // returns { status: "success" }.
  return { status: "not-ready" };
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
