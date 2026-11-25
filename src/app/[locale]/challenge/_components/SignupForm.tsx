"use client";

import { useActionState, useEffect, useState } from "react";
import { subscribe, type SignupState } from "../actions";
import styles from "../page.module.css";

type SignupFormProps = {
  text: {
    emailLabel: string;
    emailPlaceholder: string;
    consent: string;
    button: string;
    success: string;
    failed: string;
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

  // The visitor's time zone (e.g. "Asia/Jerusalem"), so day 1 arrives at
  // 6:00 their time. Read after the first render: the server can't know it.
  const [timeZone, setTimeZone] = useState("");
  useEffect(() => {
    setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }, []);

  if (state.status === "success") {
    return (
      <p className={styles.message} role="status">
        {text.success}
      </p>
    );
  }

  return (
    <form action={formAction} className={styles.form}>
      <input type="hidden" name="timeZone" value={timeZone} />
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
      {state.status === "failed" && (
        <p className={styles.message} role="status">
          {text.failed}
        </p>
      )}
    </form>
  );
}
