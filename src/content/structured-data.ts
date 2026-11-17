import type { Locale } from "@/i18n/config";
import { getSeo, siteUrl } from "./seo";
import { socialLinks } from "./social";

/*
 * Structured data (JSON-LD): a machine-readable description of who Itamar
 * is and what he offers, read by Google and AI search tools. It must match
 * what the pages say. Shown with <JsonLd> (src/components/JsonLd).
 *
 * Everything points to one Person (personId), so search engines connect
 * the sessions, the course and the challenge to the same person, and to
 * his profiles elsewhere (sameAs).
 *
 * Check a page at validator.schema.org (Google's Rich Results Test only
 * lists the few types Google shows as special results).
 */
type Json = Record<string, unknown>;

const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;

// Where sessions are offered, as the Sessions page says.
const where = (locale: Locale) => [
  { "@type": "Place", name: locale === "he" ? "קופנגן, תאילנד" : "Koh Phangan, Thailand" },
  locale === "he" ? "אונליין" : "Online",
];

const languages = [
  { "@type": "Language", name: "Hebrew", alternateName: "he" },
  { "@type": "Language", name: "English", alternateName: "en" },
];

type FaqItem = { question: string; answer: string | string[] };

// A page's questions and answers, word for word as shown on it.
function faqPage(items: FaqItem[]): Json {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: [item.answer].flat().join("\n\n").replaceAll("**", ""),
      },
    })),
  };
}

// Home: the website and the person behind it.
export function homeData(locale: Locale): Json {
  const he = locale === "he";
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: he ? "איתמר אדן" : "Itamar Eden",
        inLanguage: ["he", "en"],
        publisher: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: he ? "איתמר אדן" : "Itamar Eden",
        alternateName: he ? "Itamar Eden" : "איתמר אדן",
        url: `${siteUrl}/${locale}`,
        image: `${siteUrl}/images/home/hero.jpg`,
        jobTitle: he ? "מנחה נשימה מעגלית, מדיטציה ותנועה" : "Breathwork, meditation and movement facilitator",
        description: getSeo("home", locale).description,
        knowsAbout: he
          ? ["נשימה מעגלית", "ריברסינג", "מדיטציה", "מיינדפולנס", "תנועה", "חיבור לגוף"]
          : ["Rebirthing breathwork", "Breathwork", "Meditation", "Mindfulness", "Movement", "Embodiment"],
        knowsLanguage: languages,
        // No workLocation on purpose (17 Nov): the person entry states no
        // place of work. Where sessions are offered is on the Service, as
        // on the page itself.
        sameAs: socialLinks.map((link) => link.url),
      },
    ],
  };
}

// Sessions: the service, and its questions and answers.
export function sessionsData(locale: Locale, faq: FaqItem[]): Json {
  const he = locale === "he";
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: he ? "מפגשי נשימה מעגלית (ריברסינג)" : "Rebirthing breathwork sessions",
        serviceType: he ? "נשימה מעגלית (ריברסינג)" : "Rebirthing breathwork",
        description: getSeo("sessions", locale).description,
        url: `${siteUrl}/${locale}/sessions`,
        provider: { "@id": personId },
        areaServed: where(locale),
        // Sessions are held in Hebrew or English.
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: `${siteUrl}/${locale}/sessions`,
          availableLanguage: languages,
        },
      },
      faqPage(faq),
    ],
  };
}

// The Breathing Life course (recorded, on Udemy, taught in English).
export function breathingLifeData(locale: Locale, enrolUrl: string, faq: FaqItem[]): Json {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        name: "Breathing Life",
        description: getSeo("breathingLife", locale).description,
        url: `${siteUrl}/${locale}/courses/breathing-life`,
        inLanguage: "en",
        provider: { "@id": personId },
        instructor: { "@id": personId },
        hasCourseInstance: { "@type": "CourseInstance", courseMode: "online", url: enrolUrl },
      },
      faqPage(faq),
    ],
  };
}

// The free five-day meditation challenge.
export function challengeData(locale: Locale, faq: FaqItem[]): Json {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        name: locale === "he" ? "אתגר מדיטציה חינמי · 5 ימים" : "Free 5-day meditation challenge",
        description: getSeo("challenge", locale).description,
        url: `${siteUrl}/${locale}/challenge`,
        inLanguage: locale,
        isAccessibleForFree: true,
        provider: { "@id": personId },
        instructor: { "@id": personId },
        offers: { "@type": "Offer", price: 0, priceCurrency: "ILS", category: "Free" },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "online",
          courseSchedule: { "@type": "Schedule", repeatFrequency: "P1D", repeatCount: 5 },
        },
      },
      faqPage(faq),
    ],
  };
}
