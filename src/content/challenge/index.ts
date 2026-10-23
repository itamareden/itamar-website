import type { Locale } from "@/i18n/config";
import { en } from "./en";
import { he } from "./he";

/*
 * The 5-day challenge: settings and page text, one file per language.
 *
 * mode decides what /challenge offers:
 * - "group": a group round run in a WhatsApp group (start date + join link)
 * - "email": the self-guided version (email sign-up)
 */
export type ChallengeMode = "group" | "email";

type Step = { title: string; text: string };

// A heading whose second part is set apart (italic in English, colour in Hebrew).
type Heading = { title: string; emphasis: string };

export type ChallengeContent = {
  settings: {
    mode: ChallengeMode;
    startDate: string | null; // "YYYY-MM-DD", or null while the date isn't set
    whatsappUrl: string; // the group's invite link
  };
  hero: { eyebrow: string; heading: Heading; text: string; imageAlt: string };
  group: {
    starts: string; // followed by the formatted start date
    startsSoon: string; // shown while startDate is null
    meta: string;
    button: string;
    steps: Step[];
  };
  email: {
    title: string;
    meta: string;
    emailLabel: string;
    emailPlaceholder: string;
    consent: string;
    button: string;
    success: string;
    notReady: string; // shown until an email service is connected
    steps: Step[];
  };
  how: { kicker: string; heading: Heading };
  journey: {
    kicker: string;
    heading: Heading;
    text: string;
    welcome: Step;
    day: string; // "Day", followed by the number
    hidden: string;
  };
  guide: { kicker: string; heading: Heading; text: string; imageAlt: string };
  faq: { title: string; items: { question: string; answer: string }[] };
  closing: { heading: Heading; text: string };
};

const content: Record<Locale, ChallengeContent> = { en, he };

export function getChallenge(locale: Locale): ChallengeContent {
  return content[locale];
}
