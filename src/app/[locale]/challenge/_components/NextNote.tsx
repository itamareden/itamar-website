import styles from "../practice.module.css";

/*
 * The quiet close of the welcome page and days 1-4: a small sunrise
 * between two lines, "Until tomorrow", then when the next practice comes.
 */
export function NextNote({ heading, text }: { heading: string; text: string }) {
  return (
    <aside className={styles.next}>
      <div className={styles.nextMark} aria-hidden="true">
        <svg viewBox="0 0 32 20">
          <path d="M9 16a7 7 0 0 1 14 0M3 16h26M16 2.5v3M6.5 6.5l2.1 2.1M25.5 6.5l-2.1 2.1" />
        </svg>
      </div>
      <h2 className={styles.nextHeading}>{heading}</h2>
      <p className={styles.nextText}>{text}</p>
    </aside>
  );
}
