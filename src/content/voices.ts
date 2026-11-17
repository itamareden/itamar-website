import type { Locale } from "@/i18n/config";

/*
 * What people said after working with Itamar, shown on the Sessions page
 * and the homepage. The name as each person gave it, and one detail.
 * The headline repeats their strongest line, which also stays in the text.
 * The Sessions page shows all of them in a slider with the full story; the
 * homepage shows only the headlines, one at a time.
 *
 * Their own words, with only small punctuation fixes, used with their OK.
 * A language without content here shows no section.
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
  readAll: string; // the homepage link to the full reviews
  more: string; // opens a full story in the slider
  less: string;
  previous: string; // the slider's arrows, for screen readers
  next: string;
  items: Voice[];
};

const he: VoicesContent = {
  title: "מה אומרים",
  emphasis: "אחרי מפגש",
  readAll: "לקריאת החוויות המלאות ←",
  more: "לקריאה המלאה",
  less: "סגירה",
  previous: "הקודם",
  next: "הבא",
  items: [
    {
      name: "יאיר סוויסה, 47",
      detail: "ישראל",
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
      name: "עוז, 36",
      detail: "ישראל",
      headline: "מעבר לנשימה, קיבלתי ממנו כלים שמלווים אותי עד היום בהמון סיטואציות ביומיום.",
      text: "התהליך עם איתמר בקופנגן היה אחד הדברים הכי חזקים שחוויתי בטיול, והוא ממש שינה לי את החיים. הגעתי עם הרבה ידע בראש, אבל ברגע האמת הרגשתי שאני עדיין מגיב באותה צורה ונשאר תקוע. איתמר עזר לי להתחיל לצאת מהתקיעות הזאת, בעיקר דרך החיבור לגוף וההקשבה אליו. מעבר לנשימה, קיבלתי ממנו כלים שמלווים אותי עד היום בהמון סיטואציות ביומיום. למדתי לעצור, להרגיש מה קורה בגוף, לזוז ולרקוד, ולא לנסות לפתור הכול רק דרך הראש. מה שהכי נגע בי זה כמה הוא עובד מהלב, וכמה הוא נותן מעצמו גם מעבר למפגשים. מרגיש שפגשתי את האדם הנכון בדיוק בזמן.",
    },
    {
      name: "ירין גולדמן, 35",
      detail: "ישראל",
      headline: "איתמר היה שם לצידי ובשבילי, וזה הרגיש ממש טוב ועוטף.",
      text: "מהרגע הראשון בשיחה שלי עם איתמר הרגשתי משהו מאוד קשוב, כנה ונוכח, שרק גרם לי לרצות יותר לעשות איתו את הסשן. לפני הסשן עצמו איתמר ישב והסביר לי בצורה ברורה מאוד מה אנחנו הולכים לעשות, מה יכול לעלות ואיך להתמודד עם זה, וזה נתן לי להרגיש יותר בטוח. את הסשן עצמו קשה לתאר במילים, אבל אוכל להגיד שהוא היה עוצמתי, והרשתי לעצמי להרגיש בעוצמתיות כל מה שעולה. איתמר היה שם לצידי ובשבילי, וזה הרגיש ממש טוב ועוטף. אני ממליץ בחום על איתמר כמטפל ומעביר סשנים של ריברסינג. הוא עושה את זה על המון לב, רגישות וחכמה.",
    },
    {
      name: "Juliane, 36",
      detail: "Germany",
      lang: "en",
      headline:
        "He really gave me the feeling of being seen and understood, as if we had known each other for a long time.",
      text: "My breathwork session with Itamar was a wonderful experience.\n\nIn the beginning he asked some questions to get to know me and the topics I wanted to process. I was in a situation in my life where I had to deal with a lot of heavy stuff.\n\nHe really gave me the feeling of being seen and understood, as if we had known each other for a long time. Because of his empathic and trustful being, it was possible for me to release so many stuck emotions, and I felt free to completely let go.\n\nHe also had some input for changing things in the future to make life easier.\n\nThank you so much, Itamar, for making this possible!",
    },
  ],
};

// The English site: the Hebrew reviews translated, the English ones as written.
const en: VoicesContent = {
  title: "What people say",
  emphasis: "after a session",
  readAll: "Read the full stories →",
  more: "Read more",
  less: "Close",
  previous: "Previous",
  next: "Next",
  items: [
    {
      name: "Yair Swissa, 47",
      detail: "Israel",
      headline: "It simply released everything that was stuck, even things from the past.",
      text: "I came to Itamar in my first days on Koh Phangan, when everything felt threatening and scary. I wanted something that would free my breath and my soul, and I could feel the loneliness of a new place. From his very first hello I already felt at ease. We set up a session and it was beyond anything I expected: it simply released everything that was stuck, even things from the past. I warmly recommend him, and when I'm back on Koh Phangan I'll come back for another session.",
    },
    { ...he.items[1], lang: undefined },
    {
      name: "Oz, 36",
      detail: "Israel",
      headline: "Beyond the breath, he gave me tools that still help me in so many everyday situations.",
      text: "The process with Itamar on Koh Phangan was one of the most powerful things I experienced on my trip, and it truly changed my life. I came with a lot of knowledge in my head, but when it really mattered I felt I was still reacting the same way and staying stuck. Itamar helped me start moving out of that stuckness, mainly through connecting to my body and listening to it. Beyond the breath, he gave me tools that still help me in so many everyday situations. I learned to pause, feel what's happening in my body, move and dance, and not try to solve everything through my head. What touched me most is how much he works from the heart, and how much he gives of himself, even beyond the sessions. It feels like I met exactly the right person at exactly the right time.",
    },
    {
      name: "Yarin Goldman, 35",
      detail: "Israel",
      headline: "Itamar was there beside me and for me, and it felt really good and held.",
      text: "From the first moment of my conversation with Itamar I felt something very attentive, honest and present, which only made me want to do the session with him even more. Before the session itself, Itamar sat with me and explained very clearly what we were going to do, what might come up and how to handle it, and that helped me feel safer. The session itself is hard to put into words, but I can say it was powerful, and I allowed myself to feel everything that came up, fully. Itamar was there beside me and for me, and it felt really good and held. I warmly recommend Itamar as a therapist and rebirthing facilitator. He does it with so much heart, sensitivity and wisdom.",
    },
    { ...he.items[4], lang: undefined },
  ],
};

const content: Partial<Record<Locale, VoicesContent>> = { en, he };

export function getVoices(locale: Locale): VoicesContent | undefined {
  return content[locale];
}

