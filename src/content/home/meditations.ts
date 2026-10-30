import type { Locale } from "@/i18n/config";

/*
 * The homepage's free meditations section: a few of Itamar's guided
 * meditations on Insight Timer, as a first taste of his practice.
 *
 * Hebrew only for now. The meditations are in English, so the English
 * site will get its own page for them instead; a language without
 * content here shows no section.
 */
export type MeditationCard = {
  label: string; // e.g. the language it's in
  title: string;
  summary: string;
  url: string; // the meditation on Insight Timer
  image: string; // path under /public; free Unsplash photos, source linked beside each
  imagePosition?: string; // CSS object-position, to keep the subject in the crop
};

export type MeditationsContent = {
  title: string;
  intro: string;
  listen: string; // the link to a meditation
  meditations: MeditationCard[];
};

const he: MeditationsContent = {
  title: "לטעום מהתרגול",
  intro: "מדיטציות מודרכות חינמיות שהקלטתי. הן באנגלית, ואפשר להתחיל מהן כבר עכשיו.",
  listen: "לתרגול",
  meditations: [
    {
      label: "מדיטציה מודרכת · באנגלית",
      title: "לקבל את היום",
      summary: "להתחיל את הבוקר מתוך שלווה ונוכחות.",
      url: "https://insighttimer.com/itamar_eden/video-guided-meditations/the-pai-sessions-welcoming-the-day",
      image: "/images/home/meditations/sunrise-meadow.jpg", // Dawid Zawiła, https://unsplash.com/photos/-G3rw6Y02D0
    },
    {
      label: "מדיטציה מודרכת · באנגלית",
      title: "אני אוהב את עצמי",
      summary: "לפתוח את הלב אל עצמך ולהרגיש בבית בתוך עצמך.",
      url: "https://insighttimer.com/itamar_eden/video-guided-meditations/i-love-myself",
      image: "/images/home/meditations/rose.jpg", // Tirza van Dijk, https://unsplash.com/photos/cNGUw-CEsp0
      imagePosition: "50% 22%", // an upright photo: keep the flower in the wide crop
    },
  ],
};

const content: Partial<Record<Locale, MeditationsContent>> = { he };

export function getMeditations(locale: Locale): MeditationsContent | undefined {
  return content[locale];
}
