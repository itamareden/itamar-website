import type { Locale } from "@/i18n/config";
import { en } from "./en";
import { he } from "./he";

/*
 * The About page (/about): the hello on the photo, the story, what lights
 * Itamar up, and two ways in. The tools come from content/tools.ts.
 * One file per language. **bold** marks emphasis.
 */
type Link = { label: string; href: string };

export type AboutContent = {
  description: string;
  hello: {
    // On the photo: the greeting (second part set apart) and one line under it.
    title: string;
    emphasis: string;
    lead: string;
    intro: string[];
    question: string;
    // One line under each card that jumps to a part of the page.
    teasers: { journey: string; tools: string; lights: string };
    imageAlt: string;
  };
  journey: {
    title: string;
    portraitAlt: string;
    opening: string[]; // beside the portrait
    text: string[]; // under it
    closing: string;
  };
  // text sits beside the photo; more (optional) continues below it, centred,
  // when the text runs longer than the photo.
  why: { title: string; text: string[]; more?: string[]; imageAlt: string };
  // The closing band: a first conversation, then a second way in.
  next: { title: string; emphasis: string; text: string; primary: Link; secondary: Link };
};

const content: Record<Locale, AboutContent> = { en, he };

export function getAbout(locale: Locale): AboutContent {
  return content[locale];
}
