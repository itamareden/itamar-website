"use client";

import { useActionState, useRef, useState, type FormEvent } from "react";
import type { ChallengeContent } from "@/content/challenge";
import { shareExperience, type ShareState } from "../actions";
import styles from "../practice.module.css";

type ShareFormProps = {
  text: ChallengeContent["finale"]["share"];
  days: string[]; // the day titles, offered as choices
};

const initialState: ShareState = { status: "idle" };

/*
 * The closing page's invitation to share: closed, a short card with a
 * button; open (a native <details>), the form. "Not now" folds it back.
 * Once sent, the same card shows only a thank-you.
 * The day choices are radio buttons dressed as chips. Send stays disabled
 * until at least one question is answered.
 */
export function ShareForm({ text, days }: ShareFormProps) {
  const [state, formAction, pending] = useActionState(shareExperience, initialState);
  const detailsRef = useRef<HTMLDetailsElement>(null);
  // Send is enabled once any question has an answer (the name/email field
  // alone doesn't count).
  const [answered, setAnswered] = useState(false);

  function checkAnswers(event: FormEvent<HTMLFormElement>) {
    const data = new FormData(event.currentTarget);
    setAnswered(["day", "takeAway", "improve"].some((name) => String(data.get(name) ?? "").trim() !== ""));
  }

  if (state.status === "success") {
    return (
      <div className={`${styles.share} ${styles.shareThanks}`} role="status">
        <p className={styles.blockTitle}>{text.success}</p>
        <p className={styles.shareInvite}>{text.successText}</p>
      </div>
    );
  }

  function close() {
    const details = detailsRef.current;
    if (!details) return;
    details.open = false;
    // Back to where the card starts, in case the open form had scrolled it away.
    details.scrollIntoView({ block: "nearest", behavior: "smooth" });
    details.querySelector("summary")?.focus({ preventScroll: true });
  }

  return (
    <details ref={detailsRef} className={styles.share}>
      <summary className={styles.shareSummary}>
        <span className={styles.blockTitle}>{text.heading}</span>
        <span className={styles.shareInvite}>{text.invite}</span>
        <span className={styles.shareToggle}>{text.toggle}</span>
      </summary>

      <form action={formAction} onInput={checkAnswers} className={styles.shareForm}>
        <p className={styles.shareIntro}>{text.text}</p>

        <fieldset className={styles.shareField}>
          <legend>{text.dayQuestion}</legend>
          <div className={styles.chips}>
            {days.map((day) => (
              <label key={day} className={styles.chip}>
                <input type="radio" name="day" value={day} />
                {day}
              </label>
            ))}
          </div>
        </fieldset>

        <div className={styles.shareField}>
          <label htmlFor="share-take-away">{text.takeAway}</label>
          <textarea id="share-take-away" name="takeAway" rows={3} />
        </div>

        <div className={styles.shareField}>
          <label htmlFor="share-improve">{text.improve}</label>
          <textarea id="share-improve" name="improve" rows={3} />
        </div>

        <div className={styles.shareField}>
          <label htmlFor="share-contact">{text.contact}</label>
          <input id="share-contact" name="contact" type="text" autoComplete="name email" />
        </div>

        <div className={styles.shareActions}>
          <button type="submit" className={styles.shareButton} disabled={!answered || pending}>
            {text.button}
          </button>
          <button type="button" className={styles.shareClose} onClick={close}>
            {text.close}
          </button>
        </div>

        {/* A blank form ("empty") is quietly ignored: nothing is sent, nothing shown. */}
        {state.status === "not-ready" && (
          <p className={styles.shareMessage} role="status">
            {text.notReady}
          </p>
        )}
      </form>
    </details>
  );
}
