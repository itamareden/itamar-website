import styles from "../practice.module.css";

/*
 * A hand-drawn-style ornament between a day's intro text and its video:
 * a long S-shaped wave curling into a spiral at each end, with a finer
 * companion stroke along its middle. Symmetric, so it reads the same in
 * Hebrew and English.
 */
export function Flourish() {
  return (
    <div className={styles.flourish} aria-hidden="true">
      <svg viewBox="0 0 160 32">
        <path
          className={styles.flourishMain}
          d="M30 17C46 6 62 6 80 16S114 26 130 15M30 17c-6 4-14 2-15-4-1-5 4-8 8-6 3 2 2 6-1 6M130 15c6-4 14-2 15 4 1 5-4 8-8 6-3-2-2-6 1-6"
        />
        <path className={styles.flourishFine} d="M46 15.5C56 10.5 65 10.5 80 19.5S105 28.5 115 22.5" />
      </svg>
    </div>
  );
}
