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
    events: "Workshops & events",
    courses: "Courses",
    practices: "Practices",
    challenge: "5-Day Challenge",
    contact: "Contact",
  },
};

export type Dictionary = typeof en;
