"use server";

/*
 * The contact form. A Server Action: it runs on the server when the form
 * is submitted, so the email service's secret key never reaches the browser.
 *
 * The message is emailed to Itamar through Sender's transactional API
 * (https://api.sender.net/v2/message/send). The key lives in the
 * SENDER_API_TOKEN environment variable: .env.local on this computer,
 * Project Settings → Environment Variables on Vercel.
 */

export type ContactState = { status: "idle" | "success" | "invalid" | "failed" };

// From and to the one business address (it must be on the domain verified in Sender).
const SITE_ADDRESS = "itamar@itamareden.love";

export async function sendMessage(_previous: ContactState, formData: FormData): Promise<ContactState> {
  const [name, email, message] = ["name", "email", "message"].map((field) => {
    const value = formData.get(field);
    return typeof value === "string" ? value.trim() : "";
  });

  // The browser checks these too, but anything can be sent to a server.
  if (!name || !message || !/^\S+@\S+\.\S+$/.test(email) || name.length > 200 || message.length > 10000) {
    return { status: "invalid" };
  }

  const token = process.env.SENDER_API_TOKEN;
  if (!token) {
    console.error("Contact form: SENDER_API_TOKEN is not set");
    return { status: "failed" };
  }

  try {
    const response = await fetch("https://api.sender.net/v2/message/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        from: { email: SITE_ADDRESS, name: "Website contact form" },
        to: { email: SITE_ADDRESS, name: "Itamar Eden" },
        // So that pressing Reply answers the visitor, not the site.
        headers: { "Reply-To": `${name} <${email}>` },
        subject: `New message from ${name}`,
        text: `${name} (${email}) wrote:\n\n${message}`,
        html: `<p><strong>${escape(name)}</strong> (<a href="mailto:${escape(email)}">${escape(email)}</a>) wrote:</p>
<p style="white-space: pre-wrap">${escape(message)}</p>`,
      }),
    });

    if (!response.ok) {
      console.error("Contact form: Sender answered", response.status, await response.text());
      return { status: "failed" };
    }
    return { status: "success" };
  } catch (error) {
    console.error("Contact form: could not reach Sender", error);
    return { status: "failed" };
  }
}

// What the visitor typed goes into the email's HTML as text, never as markup.
function escape(value: string): string {
  return value.replace(/[&<>"']/g, (char) => `&#${char.charCodeAt(0)};`);
}
