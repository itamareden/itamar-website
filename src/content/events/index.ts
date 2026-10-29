import type { Locale } from "@/i18n/config";

/*
 * The events list (/events): its text and one card per event, per language.
 *
 * Only the list is shared. Each event's own page is designed on its own,
 * under app/[locale]/events/<slug>/, with its own content file.
 * An event shows on a language's list only if it has a card there.
 */
export type EventCard = {
  slug: string; // the event page's address: /events/<slug>
  label: string; // what kind of event, e.g. "Live online course"
  title: string;
  when: string;
  summary: string;
};

export type EventsContent = {
  title: string;
  intro: string;
  more: string; // the link to an event's page
  empty: string; // shown while there are no events
  events: EventCard[];
};

const he: EventsContent = {
  title: "אירועים",
  intro: "קורסים, סדנאות ומפגשים שבהם אפשר לתרגל יחד איתי.",
  more: "לכל הפרטים",
  empty: "כרגע אין אירועים קרובים. בקרוב יהיו כאן חדשים.",
  events: [
    {
      slug: "mindfulness",
      label: "קורס אונליין לייב",
      title: "מיינדפולנס",
      when: "מתחילים באמצע דצמבר · ראשון ורביעי, 19:30",
      summary:
        "עשרה מפגשי לייב בזום, צעד אחר צעד אל חיים מודעים. בכל מפגש נושא חדש ומדיטציה מודרכת.",
    },
  ],
};

const en: EventsContent = {
  title: "Events",
  intro: "Courses, workshops and gatherings where we can practise together.",
  more: "Full details",
  empty: "There are no upcoming events in English yet. New ones are on the way.",
  events: [],
};

const content: Record<Locale, EventsContent> = { en, he };

export function getEvents(locale: Locale): EventsContent {
  return content[locale];
}
