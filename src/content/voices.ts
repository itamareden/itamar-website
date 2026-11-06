import type { Locale } from "@/i18n/config";

/*
 * What people said after working with Itamar, shown on the Sessions page
 * and the homepage. The name as each person gave it, and one detail.
 * The headline repeats their strongest line, which also stays in the text.
 * The Sessions page shows all of them in a slider; the homepage shows the
 * ones in the page's own language.
 *
 * Their own words, with only small punctuation fixes, used with their OK.
 * Hebrew only for now; a language without content here shows no section.
 * **bold** marks emphasis, and a blank line starts a new paragraph.
 */
export type Voice = {
  name: string;
  detail: string;
  headline: string;
  text: string;
  lang?: "en"; // for a review kept in its original English on the Hebrew site
};

export type VoicesContent = {
  title: string;
  emphasis: string;
  more: string; // opens a full story in the slider
  less: string;
  previous: string; // the slider's arrows, for screen readers
  next: string;
  items: Voice[];
};

const he: VoicesContent = {
  title: "מה אומרים",
  emphasis: "אחרי מפגש",
  more: "לקריאה המלאה",
  less: "סגירה",
  previous: "הקודם",
  next: "הבא",
  items: [
    {
      name: "יאיר סוויסה",
      detail: "מפגש אישי",
      headline: "פשוט שחרר לי את כל מה שהיה תקוע, אפילו דברים מהעבר.",
      text: "הגעתי לאיתמר בימים הראשונים שלי בקופנגן, כשהכל היה לי מאיים ומפחיד. רציתי משהו שישחרר לי את הנשימה והנשמה, והרגשתי את הבדידות של מקום חדש. מיד בשלום הראשון שהוא ענה לי כבר היה לי נעים. קבענו פגישה וזה היה מעל ומעבר למצופה: פשוט שחרר לי את כל מה שהיה תקוע, אפילו דברים מהעבר. ממליץ בחום, וכשאחזור לקופנגן אחזור לסשן אצלו.",
    },
    {
      name: "Joey, 23",
      detail: "Germany",
      lang: "en",
      headline:
        "Before coming, I honestly thought, \"How much can breathing really change?\" But I was completely wrong.",
      text: "As an entrepreneur, I've always struggled with switching off and truly enjoying life outside of work.\n\nWhen I came to Koh Phangan for a private session with Itamar, I had an honestly life-changing experience.\n\nEven though I went through some intense moments, I felt incredibly comfortable and safe the entire time. The private session was especially valuable because I could really let go and be myself.\n\nBefore coming, I honestly thought, \"How much can breathing really change?\" But I was completely wrong. So much came up emotionally during the session, and the impact afterward was even more powerful.\n\nFor the next two days, I felt more present than I had in a very long time. For the first time, I truly understood what it means to just **be** instead of constantly doing.\n\nI realized that this kind of inner freedom is worth more than anything else. It's something you simply can't buy, no matter how much money you make. It's something you have to discover within yourself.\n\nI'm incredibly grateful for this experience, and I would absolutely love to continue this journey and come back for more sessions with Itamar!",
    },
    {
      name: "עוז",
      detail: "תהליך",
      headline: "מרגיש שפגשתי את האדם הנכון בדיוק בזמן.",
      text: "התהליך עם איתמר בקופנגן היה אחד הדברים הכי חזקים שחוויתי בטיול, והוא ממש שינה לי את החיים. הגעתי עם הרבה ידע בראש, אבל ברגע האמת הרגשתי שאני עדיין מגיב באותה צורה ונשאר תקוע. איתמר עזר לי להתחיל לצאת מהתקיעות הזאת, בעיקר דרך החיבור לגוף וההקשבה אליו. מעבר לנשימה, קיבלתי ממנו כלים שמלווים אותי עד היום בהמון סיטואציות ביומיום. למדתי לעצור, להרגיש מה קורה בגוף, לזוז ולרקוד, ולא לנסות לפתור הכול רק דרך הראש. מה שהכי נגע בי זה כמה הוא עובד מהלב, וכמה הוא נותן מעצמו גם מעבר למפגשים. מרגיש שפגשתי את האדם הנכון בדיוק בזמן.",
    },
    {
      name: "ירין גולמן",
      detail: "סשן ריברסינג",
      headline: "איתמר היה שם לצידי ובשבילי, וזה הרגיש ממש טוב ועוטף.",
      text: "מהרגע הראשון בשיחה שלי עם איתמר הרגשתי משהו מאוד קשוב, כנה ונוכח, שרק גרם לי לרצות יותר לעשות איתו את הסשן. לפני הסשן עצמו איתמר ישב והסביר לי בצורה ברורה מאוד מה אנחנו הולכים לעשות, מה יכול לעלות ואיך להתמודד עם זה, וזה נתן לי להרגיש יותר בטוח. את הסשן עצמו קשה לתאר במילים, אבל אוכל להגיד שהוא היה עוצמתי, והרשתי לעצמי להרגיש בעוצמתיות כל מה שעולה. איתמר היה שם לצידי ובשבילי, וזה הרגיש ממש טוב ועוטף. אני ממליץ בחום על איתמר כמטפל ומעביר סשנים של ריברסינג. הוא עושה את זה על המון לב, רגישות וחכמה.",
    },
  ],
};

const content: Partial<Record<Locale, VoicesContent>> = { he };

export function getVoices(locale: Locale): VoicesContent | undefined {
  return content[locale];
}
