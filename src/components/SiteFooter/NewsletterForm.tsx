"use client";

import { useActionState } from "react";
import { joinNewsletter, type NewsletterState } from "./actions";
import styles from "./SiteFooter.module.css";

/*
 * The mailing-list sign-up: first name (optional) and email, added to the
 * "Newsletter" group in Sender. A client component because it shows the
 * result (useActionState keeps the action's last answer, and `pending` is
 * true while it runs). Once joined, the form gives way to a thank-you.
 */
type Labels = { firstName: string; email: string; join: string; joined: string; joinFailed: string };

const initialState: NewsletterState = { status: "idle" };

export function NewsletterForm({ labels }: { labels: Labels }) {
  const [state, formAction, pending] = useActionState(joinNewsletter, initialState);

  if (state.status === "success") {
    return (
      <p className={styles.formNote} role="status">
        {labels.joined}
      </p>
    );
  }

  return (
    <form className={styles.form} action={formAction}>
      <input name="firstName" placeholder={labels.firstName} aria-label={labels.firstName} autoComplete="given-name" />
      <input
        name="email"
        type="email"
        required
        placeholder={labels.email}
        aria-label={labels.email}
        autoComplete="email"
      />
      <button type="submit" disabled={pending}>
        {labels.join}
      </button>
      {(state.status === "failed" || state.status === "invalid") && (
        <p className={styles.formNote} role="status">
          {labels.joinFailed}
        </p>
      )}
    </form>
  );
}
