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

/*
 * The five day pages, in order. The slug is the page address
 * (/he/challenge/day-1-breath) and is the same in every language.
 * Unguessable on purpose: no page may mention a later day's theme.
 */
export const challengeDays = [
  { number: 1, slug: "day-1-breath" },
  { number: 2, slug: "day-2-body-sensations" },
  { number: 3, slug: "day-3-observing-thoughts" },
  { number: 4, slug: "day-4-movement-meditation" },
  { number: 5, slug: "day-5-letting-go" },
] as const;

export type ChallengeDaySlug = (typeof challengeDays)[number]["slug"];

// The closing words, after day 5: /he/challenge/closing-words.
export const closingSlug = "closing-words";

// thumbnailTime: the second of the video whose frame is its cover picture
// (leave it out to let Mux choose).
type Video = { title: string; playbackId: string; thumbnailTime?: number };

// One item of a ringed list: a plain line, or a short title with paragraphs below.
export type ListItem = string | { title: string; text: string[] };

export type ChallengeDay = {
  title: string;
  text: string[]; // one entry per paragraph
  video: Video;
  meditation: { title: string; src: string };
  // Under the meditation: a list of things to carry into the rest of the day.
  forTheDay: ListItem[];
};

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

  // Text shared by the welcome page and the day pages.
  practice: {
    kicker: string; // "5-Day Challenge"
    dayOfTotal: (day: number, total: number) => string; // "Day 3 of 5"
    progressLabel: string; // screen-reader name of the progress bar
    dayDone: string; // "completed", read out for each day's dot
    dayNotDone: string;
    dayComplete: string;
    meditationHeading: string;
    forTheDayHeading: string;
    untilTomorrow: string; // small heading above nextNote
    nextNote: string; // under each day except the last
    player: { play: string; pause: string; back: string; forward: string; seek: string };
  };
  welcome: {
    heading: Heading;
    text: string[]; // one entry per paragraph
    videos: Video[];
    // Under the last video: each item a short title with a paragraph or two below.
    prepare: { heading: string; items: ListItem[] };
    nextNote: string;
  };
  days: Record<ChallengeDaySlug, ChallengeDay>;
  // After the last meditation, on the day 5 page.
  finale: {
    // The card at the bottom of day 5 that leads to the closing page
    // (its title is the video's title, its picture a still from the video).
    teaser: { kicker: string; text: string; button: string };
    progressLabel: string; // beside the progress bar on the closing page
    heading: Heading;
    text: string[]; // one entry per paragraph
    video: Video;
    // "How was the journey?" form; the day choices are the day titles.
    share: {
      heading: string; // closed: the card's title
      invite: string; // closed: the line under it
      toggle: string; // closed: the button that opens the form
      text: string; // open: above the questions
      dayQuestion: string;
      takeAway: string;
      improve: string;
      contact: string;
      button: string;
      close: string; // closes the form without sending
      success: string; // after sending: the card's title
      successText: string; // after sending: the line under it
      notReady: string; // shown until an email service is connected
    };
    // The dark "the journey continues" band: a short note from Itamar
    // and two buttons (a first conversation, then events).
    continue: {
      heading: Heading;
      name: string;
      role: string;
      imageAlt: string;
      note: string[]; // one entry per paragraph
      primary: string;
      secondary: string;
    };
    socialHeading: string;
  };
};

const content: Record<Locale, ChallengeContent> = { en, he };

export function getChallenge(locale: Locale): ChallengeContent {
  return content[locale];
}
