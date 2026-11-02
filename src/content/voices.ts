import type { Locale } from "@/i18n/config";

/*
 * What people said after working with Itamar, shown on the Sessions page
 * and the homepage. The name as each person gave it, and one detail.
 * The headline repeats their strongest line, which also stays in the text.
 * Up to three sit in a row; with more, switch to a slider.
 *
 * Their own words, with only small punctuation fixes, used with their OK.
 * Hebrew only for now; a language without content here shows no section.
 */
export type Voice = {
  name: string;
  detail: string;
  headline: string;
  text: string;
};

export type VoicesContent = {
  title: string;
  emphasis: string;
  items: Voice[];
};

const he: VoicesContent = {
  title: "מה אומרים",
  emphasis: "אחרי מפגש",
  items: [
    {
      name: "יאיר סוויסה",
      detail: "מפגש אישי בקופנגן",
      headline: "פשוט שחרר לי את כל מה שהיה תקוע, אפילו דברים מהעבר.",
      text: "הגעתי לאיתמר בימים הראשונים שלי בקופנגן, כשהכל היה לי מאיים ומפחיד. רציתי משהו שישחרר לי את הנשימה והנשמה, והרגשתי את הבדידות של מקום חדש. מיד בשלום הראשון שהוא ענה לי כבר היה לי נעים. קבענו פגישה וזה היה מעל ומעבר למצופה: פשוט שחרר לי את כל מה שהיה תקוע, אפילו דברים מהעבר. ממליץ בחום, וכשאחזור לקופנגן אחזור לסשן אצלו.",
    },
    {
      name: "עוז",
      detail: "תהליך בקופנגן",
      headline: "מרגיש שפגשתי את האדם הנכון בדיוק בזמן.",
      text: "התהליך עם איתמר בקופנגן היה אחד הדברים הכי חזקים שחוויתי בטיול, והוא ממש שינה לי את החיים. הגעתי עם הרבה ידע בראש, אבל ברגע האמת הרגשתי שאני עדיין מגיב באותה צורה ונשאר תקוע. איתמר עזר לי להתחיל לצאת מהתקיעות הזאת, בעיקר דרך החיבור לגוף וההקשבה אליו. מעבר לנשימה, קיבלתי ממנו כלים שמלווים אותי עד היום בהמון סיטואציות ביומיום. למדתי לעצור, להרגיש מה קורה בגוף, לזוז ולרקוד, ולא לנסות לפתור הכול רק דרך הראש. מה שהכי נגע בי זה כמה הוא עובד מהלב, וכמה הוא נותן מעצמו גם מעבר למפגשים. מרגיש שפגשתי את האדם הנכון בדיוק בזמן.",
    },
    {
      name: "ירין גולמן",
      detail: "סשן ריברסינג בקופנגן",
      headline: "איתמר היה שם לצידי ובשבילי, וזה הרגיש ממש טוב ועוטף.",
      text: "מהרגע הראשון בשיחה שלי עם איתמר הרגשתי משהו מאוד קשוב, כנה ונוכח, שרק גרם לי לרצות יותר לעשות איתו את הסשן. לפני הסשן עצמו איתמר ישב והסביר לי בצורה ברורה מאוד מה אנחנו הולכים לעשות, מה יכול לעלות ואיך להתמודד עם זה, וזה נתן לי להרגיש יותר בטוח. את הסשן עצמו קשה לתאר במילים, אבל אוכל להגיד שהוא היה עוצמתי, והרשתי לעצמי להרגיש בעוצמתיות כל מה שעולה. איתמר היה שם לצידי ובשבילי, וזה הרגיש ממש טוב ועוטף. אני ממליץ בחום על איתמר כמטפל ומעביר סשנים של ריברסינג. הוא עושה את זה על המון לב, רגישות וחכמה.",
    },
  ],
};

const content: Partial<Record<Locale, VoicesContent>> = { he };

export function getVoices(locale: Locale): VoicesContent | undefined {
  return content[locale];
}
