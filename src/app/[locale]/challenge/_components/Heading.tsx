import type { ChallengeContent } from "@/content/challenge";

type HeadingText = ChallengeContent["hero"]["heading"];

// "Five days" + "back to yourself." → the second part set apart in <em>
// (italic in English; colour only in Hebrew, see globals.css).
export function Heading({ heading }: { heading: HeadingText }) {
  return (
    <>
      {heading.title} <em>{heading.emphasis}</em>
    </>
  );
}
