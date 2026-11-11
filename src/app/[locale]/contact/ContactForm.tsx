"use client";

import { useActionState } from "react";
import type { ContactContent } from "@/content/contact";
import { sendMessage, type ContactState } from "./actions";
import styles from "./page.module.css";

const initialState: ContactState = { status: "idle" };

// Name and email side by side, the message below, then Send.
// Once sent, the form gives way to a thank-you.
export function ContactForm({ text }: { text: ContactContent["form"] }) {
  const [state, formAction, pending] = useActionState(sendMessage, initialState);

  if (state.status === "success") {
    return (
      <p className={styles.formMessage} role="status">
        {text.success}
      </p>
    );
  }

  return (
    <form action={formAction} className={styles.form}>
      <div className={styles.formRow}>
        <div className={styles.field}>
          <label htmlFor="contact-name">{text.name}</label>
          <input id="contact-name" name="name" autoComplete="name" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="contact-email">{text.email}</label>
          <input id="contact-email" name="email" type="email" dir="ltr" autoComplete="email" required />
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor="contact-message">{text.message}</label>
        <textarea id="contact-message" name="message" rows={5} required />
      </div>
      <button type="submit" className={styles.send} disabled={pending}>
        {text.button}
      </button>
      {(state.status === "invalid" || state.status === "not-ready") && (
        <p className={styles.formMessage} role="status">
          {state.status === "invalid" ? text.invalid : text.notReady}
        </p>
      )}
    </form>
  );
}
