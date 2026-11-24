import styles from "../practice.module.css";

/*
 * A quiet divider: a small dot with a thin line running out to each side.
 * Used between a day's intro text and its video, and on the closing band.
 */
export function Flourish() {
  return (
    <div className={styles.flourish} aria-hidden="true">
      <span className={styles.flourishDot} />
    </div>
  );
}
