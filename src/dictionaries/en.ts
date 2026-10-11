/*
 * Interface text in English: labels, buttons, navigation.
 * Page content (About text, event descriptions) lives in content/, not here.
 *
 * This file is the reference: its shape defines the Dictionary type,
 * so every key here must also exist in he.ts.
 */

export const en = {
  site: {
    name: "Itamar Eden",
    tagline: "Meditation, breath, movement and embodiment.",
    description: "Meditation, breath, movement and embodiment with Itamar Eden.",
  },
  nav: {
    home: "Home",
    about: "About",
    sessions: "Private sessions",
    events: "Events",
    courses: "Courses",
    practices: "Practices",
    challenge: "5-Day Challenge",
    contact: "Contact",
  },
  // Mobile menu button (read by screen readers; the button itself shows an icon).
  menu: {
    open: "Open menu",
    close: "Close menu",
  },
  // Homepage hero. Short enough to live here until the homepage gets
  // its own content file.
  home: {
    heroTitle: "Coming back",
    heroTitleEmphasis: "to life.",
    heroLines: [
      "Learning to listen to your inner voice and being your own guide.",
      "Letting go and trusting as a way of life.",
    ],
    heroCta: "Start the free challenge",
    heroImageAlt:
      "Itamar sitting cross-legged on a rock in a forest stream, arms wrapped around himself, eyes closed",
  },
  notFound: {
    title: "Page not found",
    text: "The page you're looking for doesn't exist or has moved.",
    home: "Back to the home page",
  },
};

export type Dictionary = typeof en;
