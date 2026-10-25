/*
 * Content text with optional bold parts marked like **this**:
 * "**An intention has power.** It can remind us..." → the first
 * sentence in <strong>. Text without ** comes out unchanged.
 */
export function Emphasis({ text }: { text: string }) {
  return text.split("**").map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part));
}
