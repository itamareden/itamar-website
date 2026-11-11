import type { Locale } from "@/i18n/config";
import { breathingLife } from "./breathing-life";

/*
 * The recorded online courses, each with its own page at /courses/<slug>.
 * While there is only one, /courses sends visitors straight to it; with a
 * second course, /courses becomes the list.
 *
 * `id` stays the same for good; `slug` is the address and may change.
 */
export type Course = {
  id: string;
  slug: string;
  settings: {
    enrolUrl: string; // where the enrol buttons lead (the Udemy page)
    trailerYoutubeId: string; // empty: a placeholder shows instead of the video
    heroImage: string; // the photo behind the opening
    trailerTitle: string; // on the cover's top bar, as on YouTube
    trailerChannel: string;
  };
  content: Record<Locale, CourseContent>;
};

// The page text in one language. **bold** marks emphasis.
export type CourseContent = {
  description: string; // for search results and link previews
  hero: {
    eyebrow: string;
    title: string; // the course's name, always in English
    emphasis: string;
    lead: string;
    button: string;
    facts: string[];
    trailerLabel: string; // the video's title, for screen readers
    trailerSoon: string; // shown while there's no video yet
  };
  // Another offering that includes this course for free. Optional.
  gift?: { text: string; link: string; path: string };
  gains: {
    kicker: string;
    title: string;
    emphasis: string;
    lead: string;
    items: { title: string; text: string }[];
  };
  reviews: {
    kicker: string;
    title: string;
    emphasis: string;
    rating: string; // the line under the stars
    items: { name: string; text: string }[]; // kept in the original English
  };
  inside: {
    kicker: string;
    title: string;
    emphasis: string;
    sections: { title: string; length: string; lessons: string; text: string }[];
    techniques: string;
  };
  faq: {
    title: string;
    note: string;
    items: { question: string; answer: string[] }[];
  };
  closing: {
    title: string;
    emphasis: string;
    text: string;
  };
};

export const courses: Course[] = [breathingLife];

export function getCourse(slug: string) {
  return courses.find((course) => course.slug === slug);
}
