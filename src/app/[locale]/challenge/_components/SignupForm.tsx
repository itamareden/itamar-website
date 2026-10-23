"use client";

import { useActionState } from "react";
import { subscribe, type SignupState } from "../actions";
import styles from "../page.module.css";

type SignupFormProps = {
  text: {
    emailLabel: string;
    emailPlaceholder: string;
    consent: string;
    button: string;
    success: string;
    notReady: string;
  };
};

const initialState: SignupState = { status: "idle" };

/*
 * A client component because it shows the result of the submission
 * (useActionState keeps the action's last answer, and `pending` is true
 * while it runs).
 */
export function SignupForm({ text }: SignupFormProps) {
  const [state, formAction, pending] = useActionState(subscribe, initialState);

  if (state.status === "success") {
    return (
      <p className={styles.message} role="status">
        {text.success}
      </p>
    );
  }

  return (
    <form action={formAction} className={styles.form}>
      <label htmlFor="signup-email">{text.emailLabel}</label>
      <input
        id="signup-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder={text.emailPlaceholder}
        className={styles.input}
      />
      <label className={styles.consent}>
        <input type="checkbox" name="consent" required />
        <span>{text.consent}</span>
      </label>
      <button type="submit" className={styles.button} disabled={pending}>
        {text.button}
      </button>
      {state.status === "not-ready" && (
        <p className={styles.message} role="status">
          {text.notReady}
        </p>
      )}
    </form>
  );
}
