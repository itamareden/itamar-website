import type { Locale } from "@/i18n/config";

/*
 * The homepage's free meditations section: a few of Itamar's guided
 * meditations on Insight Timer, as a first taste of his practice.
 *
 * A language without content here shows no section.
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
      label: "באנגלית",
      title: "לקבל את היום",
      summary: "להתחיל את הבוקר מתוך שלווה ונוכחות.",
      url: "https://insighttimer.com/itamar_eden/video-guided-meditations/the-pai-sessions-welcoming-the-day",
      image: "/images/home/meditations/sunrise-meadow.jpg", // Dawid Zawiła, https://unsplash.com/photos/-G3rw6Y02D0
    },
    {
      label: "באנגלית",
      title: "אני אוהב את עצמי",
      summary: "לפתוח את הלב אל עצמך ולהרגיש בבית בתוך עצמך.",
      url: "https://insighttimer.com/itamar_eden/video-guided-meditations/i-love-myself",
      image: "/images/home/meditations/rose.jpg", // Tirza van Dijk, https://unsplash.com/photos/cNGUw-CEsp0
      imagePosition: "50% 22%", // an upright photo: keep the flower in the wide crop
    },
  ],
};

const en: MeditationsContent = {
  title: "A taste of the practice",
  intro: "Free guided meditations I recorded, so you can begin right now.",
  listen: "Practise",
  meditations: [
    {
      label: "Guided meditation",
      title: "Welcoming the Day",
      summary: "Begin your morning in serenity and presence.",
      url: he.meditations[0].url,
      image: he.meditations[0].image,
    },
    {
      label: "Guided meditation",
      title: "I Love Myself",
      summary: "Open your heart to yourself and feel at home within.",
      url: he.meditations[1].url,
      image: he.meditations[1].image,
      imagePosition: he.meditations[1].imagePosition,
    },
  ],
};

const content: Partial<Record<Locale, MeditationsContent>> = { en, he };

export function getMeditations(locale: Locale): MeditationsContent | undefined {
  return content[locale];
}
