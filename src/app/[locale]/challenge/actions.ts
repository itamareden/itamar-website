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
