"use server";

/*
 * The contact form. A Server Action: it runs on the server when the form
 * is submitted, so the email service's secret key never reaches the browser.
 */

export type ContactState = { status: "idle" | "success" | "invalid" | "not-ready" };

export async function sendMessage(_previous: ContactState, formData: FormData): Promise<ContactState> {
  const [name, email, message] = ["name", "email", "message"].map((field) => {
    const value = formData.get(field);
    return typeof value === "string" ? value.trim() : "";
  });

  // The browser checks these too, but anything can be sent to a server.
  if (!name || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return { status: "invalid" };
  }

  // No email service is connected yet. Once one is chosen (e.g. Resend,
  // after itamareden.love is set up), the message is emailed to Itamar
  // here, with the sender's address as reply-to, and this returns
  // { status: "success" }.
  return { status: "not-ready" };
}
