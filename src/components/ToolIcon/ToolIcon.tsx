/*
 * Line drawings, one per tool, in the current text colour.
 * Drawn on a 24×24 grid with round strokes, so they sit well together;
 * a page can thin the stroke with CSS when it shows them large.
 */
export type ToolIconName = "meditation" | "breath" | "body" | "child" | "manifestation";

const paths: Record<ToolIconName, React.ReactNode> = {
  // A figure sitting cross-legged, hands on the knees, a glow above the head.
  meditation: (
    <>
      <path d="M9.2 1.8c1.8-.8 3.8-.8 5.6 0" />
      <circle cx="12" cy="5.4" r="2.1" />
      <path d="M8.6 10.4c1-1 2.1-1.5 3.4-1.5s2.4.5 3.4 1.5" />
      <path d="M9.3 10.6c-.3 1.6-.2 3.2.4 4.6M14.7 10.6c.3 1.6.2 3.2-.4 4.6" />
      <path d="M8.6 10.4c-1.4 1.2-2.2 3-2.4 5.2M15.4 10.4c1.4 1.2 2.2 3 2.4 5.2" />
      <circle cx="6.2" cy="16" r=".5" />
      <circle cx="17.8" cy="16" r=".5" />
      <path d="M4 18.4c2.4-1.9 5.2-2.6 8-2.6s5.6.7 8 2.6c-2.4 1.3-5.2 1.8-8 1.8s-5.6-.5-8-1.8z" />
    </>
  ),
  // Three lines of breath, each curling at its end.
  breath: (
    <>
      <path d="M3 8.6h10.6a3 3 0 1 0-3-3" />
      <path d="M3 12.8h15.4a2.7 2.7 0 1 1-2.7 2.7" />
      <path d="M3 17h6.8a2 2 0 1 1-2 2" />
      <path d="M17.5 7.2c1.1-.6 2.3-.6 3.5 0" />
    </>
  ),
  // A heart with a pulse, and a gentle vibration on either side.
  body: (
    <>
      <path d="M12 20s-7.2-4.4-7.2-9.8A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7.2 2.2C19.2 15.6 12 20 12 20z" />
      <path d="M7.6 12.6h2.2l1.2-2.2 1.8 4.2 1.2-2h2.4" />
      <path d="M2.6 9c-.8 1.4-.8 3.2 0 4.6M21.4 9c.8 1.4.8 3.2 0 4.6" />
    </>
  ),
  // A child on the ground, holding up a balloon.
  child: (
    <>
      <circle cx="8.6" cy="9.2" r="2" />
      <path d="M8.6 11.4v4.4M8.6 15.8l-1.8 4M8.6 15.8l1.8 4" />
      <path d="M8.6 12.8l-2.2 1.8M8.6 12.8l3.6-2.4" />
      <path d="M16.6 2.4c1.8 0 3.2 1.5 3.2 3.4 0 2.1-1.6 3.8-3.2 3.8s-3.2-1.7-3.2-3.8c0-1.9 1.4-3.4 3.2-3.4z" />
      <path d="M15.2 4.8c.2-.7.7-1.2 1.3-1.4" />
      <path d="M16.6 9.6c-.3 1-2.2 1.2-4.4.8" />
      <path d="M4.4 20.6h8.6" />
    </>
  ),
  // A seedling rising from the soil, with sparks of light around it.
  manifestation: (
    <>
      <path d="M12 19.4v-8" />
      <path d="M12 14.2c-.2-2.8-2.6-4.3-5.6-4 .3 2.9 2.6 4.3 5.6 4z" />
      <path d="M12 11.8c.1-3.1 2.5-5 5.8-4.6-.4 3.2-2.7 4.9-5.8 4.6z" />
      <path d="M5.4 19.6c2-1.2 4.3-1.8 6.6-1.8s4.6.6 6.6 1.8" />
      <path d="M19.4 12.6v2.6M18.1 13.9h2.6" />
      <path d="M5.4 4.6v2M4.4 5.6h2" />
      <path d="M14.6 2.6v1.4M13.9 3.3h1.4" />
    </>
  ),
};

export function ToolIcon({ name, className }: { name: ToolIconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
