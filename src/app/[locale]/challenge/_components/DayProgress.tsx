"use client";

import { useCompletedDays } from "../_lib/progress";
import styles from "../practice.module.css";

type DayProgressProps = {
  day: number; // the day this page belongs to (0 on the closing page: none outlined)
  total: number;
  label: string; // "Day 3 of 5"
  barLabel: string; // name of the bar for screen readers
  completeLabel: string; // shown once this day is done
  dayNames: string[]; // "Day 1" … "Day 5", read out by screen readers
  doneLabel: string;
  notDoneLabel: string;
};

/*
 * Counts only meditations actually completed (see AudioPlayer): each
 * completed day adds 20%, on whichever day's page you are.
 * One bar in five segments, one per day: filled = done, empty = not yet
 * (so a skipped day shows), outlined = this page's day.
 */
export function DayProgress({
  day,
  total,
  label,
  barLabel,
  completeLabel,
  dayNames,
  doneLabel,
  notDoneLabel,
}: DayProgressProps) {
  const completed = useCompletedDays();
  const days = Array.from({ length: total }, (_, i) => i + 1);
  const doneCount = days.filter((d) => completed.includes(d)).length;
  const percent = Math.round((doneCount / total) * 100);

  return (
    <div className={styles.progress}>
      <div className={styles.progressRow}>
        <span>{label}</span>
        <span className={styles.progressPercent}>{percent}%</span>
      </div>
      <div
        className={styles.segments}
        role="progressbar"
        aria-label={barLabel}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
        aria-valuetext={`${percent}%. ${days
          .map((d) => `${dayNames[d - 1]}: ${completed.includes(d) ? doneLabel : notDoneLabel}`)
          .join(", ")}`}
      >
        {days.map((d) => (
          <span
            key={d}
            className={styles.segment}
            data-done={completed.includes(d)}
            data-current={d === day}
          >
            <span className={styles.segmentNumber}>{d}</span>
          </span>
        ))}
      </div>

      {completed.includes(day) && (
        <p className={styles.progressDone} role="status">
          {completeLabel}
        </p>
      )}
    </div>
  );
}
