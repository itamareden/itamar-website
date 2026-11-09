"use client";

import { useState } from "react";
import styles from "./SiteFooter.module.css";

/*
 * The mailing-list sign-up. Not connected yet: once the MailerLite account
 * exists, submitting will send the name and email there. Until then it only
 * says that sign-up opens soon.
 */
type Labels = { firstName: string; email: string; join: string; joinSoon: string };

export function NewsletterForm({ labels }: { labels: Labels }) {
  const [sent, setSent] = useState(false);

  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault(); // TODO: send to MailerLite once the account exists
        setSent(true);
      }}
    >
      <input name="firstName" placeholder={labels.firstName} aria-label={labels.firstName} autoComplete="given-name" />
      <input
        name="email"
        type="email"
        required
        placeholder={labels.email}
        aria-label={labels.email}
        autoComplete="email"
      />
      <button type="submit">{labels.join}</button>
      {sent && (
        <p className={styles.formNote} role="status">
          {labels.joinSoon}
        </p>
      )}
    </form>
  );
}
