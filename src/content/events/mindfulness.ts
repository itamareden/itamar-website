/*
 * The live online course page (/he/events/mindfulness). Hebrew only for
 * now: the English site has no page for it.
 *
 * Draft copy, to be refined. "Mindfulness" is a working title.
 */
export const mindfulness = {
  settings: {
    // The payment page's link. While it's empty, the button shows but isn't a link.
    registerUrl: "",
  },
  hero: {
    imageAlt: "איתמר מודט על סלע ליד נחל ביער",
    eyebrow: "קורס אונליין לייב",
    title: "מיינדפולנס",
    emphasis: "חיים במודעות, צעד אחר צעד",
    lead: "עשרה מפגשי לייב בזום, שבהם נחקור יחד את היסודות של חיים מודעים. בכל מפגש נושא חדש ומדיטציה מודרכת, כדי שהמודעות תפסיק להיות רעיון ותהפוך לדרך חיים.",
    facts: [
      "מתחילים באמצע דצמבר",
      "ראשון ורביעי · 19:30",
      "10 מפגשים בזום",
      "הקלטה של כל מפגש",
    ],
    price: {
      regular: "600 ₪",
      launch: "300 ₪",
      note: "מחיר השקה",
    },
    button: "להרשמה לקורס",
  },
  // Text beside a photo, on the wash. **bold** marks emphasis.
  who: {
    kicker: "למי הקורס מתאים",
    title: "אם יש בכם",
    emphasis: "סקרנות להעמיק",
    intro:
      "אם כבר טעמתם מדיטציה, אולי באתגר ואולי לבד, ואתם מרגישים שיש שם עוד, הקורס הזה בשבילכם.",
    items: [
      "מרגישים שיש במדיטציה הרבה יותר ממה שגיליתם עד עכשיו",
      "רוצים שהתרגול יהפוך לדרך חיים, ולא לעוד משימה ביומן",
      "סקרנים לחקור את עצמכם מזוויות חדשות: הגוף, הרגש, הלב, השחרור",
      "מחפשים מסגרת קבועה וליווי, כדי להתמיד",
    ],
    outro: "ואם אתם רק בתחילת הדרך? **מצוין.** נלך יחד, צעד אחר צעד.",
    imageAlt: "איתמר מודט בישיבה על כיסא ליד חלון",
  },
  // A personal note from Itamar: an opening, then everyday moments of what
  // can change (one card each), then a closing line. **bold** marks emphasis.
  note: {
    opening: "בואו נדבר רגע על החיים עצמם, ולא על מדיטציה.",
    intro:
      "כי בסוף, השאלה היא לא כמה זמן אתם מצליחים לשבת בשקט. השאלה היא מה קורה כשאתם קמים מהכרית.",
    moments: [
      "אולי זה ייראה ככה: אתם תקועים בפקק, ובמקום להתעצבן, אתם שמים לב לנשימה. והעצבים פשוט... פחות תופסים.",
      "אולי זה יקרה באמצע שיחה עם מישהו קרוב, כשמשהו מתחיל לבעור בפנים, ואתם עוצרים לשנייה לפני שאתם עונים. והשנייה הזאת משנה את כל השיחה.",
      "אולי תשימו לב שאתם נרדמים קצת יותר בקלות. שהקול הביקורתי בראש מדבר פחות חזק. שאתם נהנים יותר מארוחה, ממקלחת חמה, מהליכה קצרה בחוץ.",
      "ואולי, יום אחד, תתפסו את עצמכם מחייכים בלי שום סיבה מיוחדת.",
    ],
    closing: "אלה דברים קטנים. אבל מהם בדיוק בנויים החיים, **וזה מה שאני רוצה לתת לכם.**",
  },
  // The dark band: what changes by the end, one card each.
  gains: {
    kicker: "מה תיקחו איתכם",
    title: "מה ישתנה",
    emphasis: "אחרי חמישה שבועות",
    items: [
      { title: "תרגול שמחזיק", text: "מדיטציה שהופכת לחלק טבעי מהיום, ולא לעוד משימה." },
      { title: "שקט בתוך הרעש", text: "כלים לפגוש מחשבות ורגשות מאתגרים בלי להיסחף." },
      { title: "חיבור פנימה", text: "הקשבה עמוקה יותר לגוף, ללב ולאינטואיציה." },
      { title: "יותר קלות", text: "להרפות משליטה, ולסמוך קצת יותר על החיים." },
      { title: "אנשים לדרך", text: "קבוצה קטנה שהולכת יחד איתכם, מפגש אחר מפגש." },
    ],
  },
  // How it works: three pillars, numbered because each builds on the last.
  how: {
    kicker: "איך זה עובד",
    title: "לייב, אינטימי,",
    emphasis: "ובקצב שלכם",
    pillars: [
      {
        title: "מפגשי לייב בזום",
        text: "פעמיים בשבוע, בקבוצה קטנה. מקשיבים, שואלים, ומתרגלים יחד.",
      },
      {
        title: "מדיטציה בכל מפגש",
        text: "בכל מפגש אדריך אתכם במדיטציה שמביאה את הנושא אל הגוף והחוויה.",
      },
      {
        title: "הקלטות לכל מפגש",
        text: "פספסתם? רוצים לחזור? כל מפגש מוקלט ונשאר זמין לכם.",
      },
    ],
  },
  // The course's spirit in one line, over a full-width photo (a river, once chosen).
  quote: {
    text: "כשמשחררים שליטה, הופכים לחלק מהזרימה שנקראת חיים.",
    imageAlt: "איתמר ביער, מביט למעלה",
  },
  // The offer card: the price on a dark top, what's included, the bonus,
  // and the button. The prices themselves come from `hero.price`.
  offer: {
    kicker: "ההשקעה",
    title: "מקום",
    emphasis: "במסע",
    includes: [
      "10 מפגשי לייב בזום",
      "מדיטציה מודרכת בכל מפגש",
      "הקלטה של כל המפגשים",
      "קבוצת ווטסאפ לליווי בין המפגשים",
      "קבוצה קטנה ואינטימית",
    ],
    // To confirm: Udemy's limits on free coupons before promising this.
    bonus: {
      title: "בונוס: קורס הנשימה שלי במתנה",
      text: "קורס דיגיטלי מלא, בשווי 250 ₪",
    },
  },
  // A short "who am I" beside a portrait, linking to the full story.
  about: {
    kicker: "מי מלווה",
    title: "נעים",
    emphasis: "להכיר",
    text: [
      "אני איתמר. כבר יותר משמונה שנים שאני מתרגל מדיטציה כל יום, ובשנים האחרונות אני גם מנחה סדנאות נשימה, ליחידים ולקבוצות.",
      "הגעתי למדיטציה מתוך חרדה, ונשארתי בגלל מה שגיליתי בדרך: יותר שקט, יותר קלות, ויותר שמחה בדברים הפשוטים.",
      "בקורס הזה אני רוצה לחלוק איתכם את מה שהכי עזר לי. בגובה העיניים, צעד אחר צעד.",
    ],
    link: "הסיפור המלא שלי",
    imageAlt: "איתמר יושב על כיסא ליד חלון",
  },
  faq: {
    title: "שאלות נפוצות",
    items: [
      {
        question: "מה אם אני לא יכול להגיע לאחד המפגשים?",
        answer: "כל מפגש מוקלט, ואפשר לצפות בו מתי שנוח לכם.",
      },
      {
        question: "צריך ניסיון במדיטציה?",
        answer: "לא. הקורס מתאים גם למי שרק מתחיל, וגם למי שכבר מתרגל ורוצה להעמיק.",
      },
      {
        question: "עשיתי את האתגר. זה ההמשך?",
        answer: "בדיוק. באתגר טעמנו, ובקורס נעמיק: יותר נושאים, יותר זמן לכל אחד, ומסגרת שעוזרת להתמיד.",
      },
      {
        question: "איך מקבלים את הקישור לזום?",
        answer: "מיד אחרי ההרשמה תקבלו את כל הפרטים.",
      },
      {
        question: "צריך להדליק מצלמה?",
        answer: "לא חייבים. אפשר להשתתף בדרך שנוחה לכם.",
      },
      {
        question: "זה מתאים אם אני מתמודד עם חרדה או משבר?",
        answer:
          "מדיטציה יכולה לתמוך, אבל היא לא תחליף לטיפול. אם אתם בתקופה קשה, כדאי להתייעץ גם עם איש מקצוע.",
      },
    ],
  },
  // The dark band at the end, with the button.
  closing: {
    kicker: "מתחילים באמצע דצמבר",
    title: "מוכנים",
    emphasis: "להעמיק?",
    text: "עשרה מפגשים, מדיטציה בכל אחד, וקבוצה שהולכת יחד.",
  },
  // The ten themes, as tall tiles. Each tile shows its photo once `image`
  // is set (a path under /public); until then, a gradient between its two
  // `tone` colours stands in. `source` is the photo's page (e.g. on
  // Unsplash), kept as the licence record; it isn't shown on the page.
  themes: {
    kicker: "המסע",
    title: "עשרה נושאים,",
    emphasis: "עשר דלתות פנימה",
    items: [
      {
        title: "מודעות",
        text: "לפגוש את הרגע כמו שהוא",
        tone: ["#8a9a7b", "#4f5f45"],
        image: "/images/events/mindfulness/awareness.jpg", // cropped tall around the light rays
        source: "https://unsplash.com/photos/R9tPheZuGnA", // Ingmar
      },
      {
        title: "קשב",
        text: "לבחור במה להתמקד",
        tone: ["#c8a77d", "#8a6a45"],
        image: "/images/events/mindfulness/attention.jpg",
        source: "https://unsplash.com/photos/oDfeFV-Y2v0", // Sixteen Miles Out
      },
      {
        title: "להרפות",
        text: "לשחרר את מה שכבר לא משרת",
        tone: ["#9fb3c2", "#5d7486"],
        image: "/images/events/mindfulness/letting-go-v3.jpg", // calmer colours, light glow
        source: "https://unsplash.com/photos/-TYvt5pmKng", // Aaron Burden
      },
      {
        title: "מדיטציות דינמיות",
        text: "תנועה, נשימה וקול",
        tone: ["#d08a6a", "#8f4f38"],
        image: "/images/events/mindfulness/dynamic.jpg", // cropped tall, warmed
        source: "https://unsplash.com/photos/UYtEI-acsuY", // Ahmad Odeh
      },
      { title: "חושניות", text: "לחזור להרגיש את הגוף", tone: ["#c98aa3", "#8d4a66"] },
      {
        title: "הילד הפנימי",
        text: "לפגוש את מי שתמיד שם",
        tone: ["#e3b98f", "#a87552"],
        image: "/images/events/mindfulness/inner-child-v2.jpg", // cropped closer, sun softened
        source: "https://unsplash.com/photos/xro1l0c72VY", // Johnny Cohen
      },
      { title: "סליחה", text: "להניח משקל מהלב", tone: ["#a9a2c4", "#635b86"] },
      {
        title: "אהבה",
        text: "כלפי עצמנו וכלפי אחרים",
        tone: ["#d9828f", "#a5414f"],
        image: "/images/events/mindfulness/love.jpg",
        source: "https://unsplash.com/photos/ptgjRj9-lD8", // Tiffany Chan
      },
      {
        title: "הגשמה",
        text: "מכוונה אל המציאות",
        tone: ["#c9b46a", "#8a7633"],
        image: "/images/events/mindfulness/manifestation.jpg",
        source: "https://unsplash.com/photos/TBjNbj1sdAE", // Ksenia (pixelesse)
      },
      { title: "עונג", text: "המסלול המיקרוקוסמי", tone: ["#b77a9a", "#6f3d58"] },
    ] as {
      title: string;
      text: string;
      tone: [string, string];
      image?: string;
      source?: string;
    }[],
  },
};
