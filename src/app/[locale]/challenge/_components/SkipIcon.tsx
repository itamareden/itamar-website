// A circular arrow with "10" inside: skip back or forward 10 seconds.
export function SkipIcon({ direction }: { direction: "back" | "forward" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d={
          direction === "back"
            ? "M4 12a8 8 0 1 0 2.3-5.7M4 4v3.5h3.5"
            : "M20 12a8 8 0 1 1-2.3-5.7M20 4v3.5h-3.5"
        }
      />
      <text x="12" y="15.2" textAnchor="middle">
        10
      </text>
    </svg>
  );
}
