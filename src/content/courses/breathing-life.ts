import type { Course } from "./index";

/*
 * Breathing Life: Itamar's recorded breathwork and meditation course on
 * Udemy, taught in English. The site introduces it; enrolling happens on
 * Udemy. The course name, the reviews and the techniques stay in English
 * on both pages.
 *
 * Draft copy, to be refined. **bold** marks emphasis.
 */
// Reviews from the course's Udemy page, in the students' own words.
// The same on both pages.
const reviews = [
  {
    name: "Yaki",
    text: "A well-structured and truly calming course. The guidance is clear, practical, and easy to apply in daily life. Highly recommended for anyone looking to build a simple, consistent meditation habit – it really worked for me!",
  },
  {
    name: "Tom",
    text: "This was a great experience. This course genuinely changed my life; it shifted how I think, work, and approach my goals. Highly recommend!",
  },
  {
    name: "Hofit",
    // Cut off on the screenshot: to complete from Udemy.
    text: "I really enjoyed this short meditation course. It's clear, practical, and easy to follow, even on busy days. I loved that it includes different types of meditations and simple tools I can actually use in my daily routine.",
  },
  {
    name: "Saar",
    text: "The content is explained very nicely and I can understand everything. I enjoy listening and learning in this course.",
  },
];
export const breathingLife: Course = {
  id: "breathing-life",
  slug: "breathing-life",
  settings: {
    // The instructor referral link, so sales from the site count as Itamar's own.
    enrolUrl: "https://www.udemy.com/course/breathing-life/?referralCode=1C84FF5FBB7C8D7AAA06",
    trailerYoutubeId: "3feKl1YIqr8",
    // Photo by Iva Rajović on Unsplash (iva-rajovic-ZgO-eem8w0w-unsplash),
    // free to use under the Unsplash license; no credit required.
    heroImage: "/images/courses/breathing-life-hero.jpg",
    trailerTitle: "Breathing Life – A Breathwork & Meditation Course",
    trailerChannel: "Itamar Eden",
  },
  content: {
    he: {
      description:
        "Breathing Life: קורס אונליין של איתמר אדן לנשימה מודעת ומדיטציה, לרוגע, איזון ונוכחות בחיי היום-יום. באנגלית, בקצב שלכם.",
      hero: {
        eyebrow: "קורס אונליין · באנגלית",
        title: "Breathing Life",
        emphasis: "להתחבר לחיים דרך הנשימה",
        lead: "קורס מוקלט לנשימה מודעת ומדיטציה: כלים פשוטים שמביאים רוגע, איזון ונוכחות לחיים שלכם, בקצב שלכם ומכל מקום.",
        button: "להצטרפות לקורס ב-Udemy",
        facts: ["2.5 שעות וידאו", "19 שיעורים", "גישה לכל החיים", "בקצב שלכם"],
        trailerLabel: "הטריילר של הקורס Breathing Life",
        trailerSoon: "הטריילר יעלה כאן בקרוב",
      },
      // The live mindfulness course (Hebrew only) includes this course as a gift.
      gift: {
        text: "מצטרפים לקורס המיינדפולנס? Breathing Life מגיע אליכם במתנה.",
        link: "לקורס המיינדפולנס",
        path: "/events/mindfulness",
      },
      gains: {
        kicker: "מה הקורס נותן לכם",
        title: "כלים שנשארים",
        emphasis: "איתכם לתמיד",
        lead: "הנשימה תמיד איתכם. בקורס תלמדו להשתמש בה כדי לחזור לעצמכם, בכל מקום ובכל רגע.",
        items: [
          {
            title: "רוגע בהישג יד",
            text: "נשימות פשוטות שמרגיעות את הגוף ומביאות שלווה לראש בתוך דקות, גם באמצע יום עמוס.",
          },
          {
            title: "גוף משוחרר",
            text: "לשחרר מתח ועומס שהצטברו בגוף, ולהרגיש יותר קלילות ומרחב.",
          },
          {
            title: "איזון רגשי",
            text: "שגרת נשימה יומית שמחזקת את היציבות הרגשית ואת תחושת הרווחה שלכם.",
          },
          {
            title: "נוכחות וחיבור",
            text: "להרגיש יותר נוכחים בגוף ובחיים, ולהעמיק את החיבור לעצמכם דרך הנשימה.",
          },
          {
            title: "מנוחה עמוקה",
            text: "מסעות נשימה ומדיטציות מונחות שמובילים להרפיה עמוקה ולשלווה פנימית.",
          },
        ],
      },
      reviews: {
        kicker: "מה אומרים",
        title: "מי שכבר",
        emphasis: "נושמים איתי",
        rating: "5.0 ב-Udemy",
        items: reviews,
      },
      inside: {
        kicker: "מה בקורס",
        title: "ארבעה שלבים,",
        emphasis: "נשימה אחר נשימה",
        sections: [
          {
            title: "היכרות ויסודות",
            length: "16 דק׳",
            lessons: "3 שיעורים",
            text: "איך הנשימה משפיעה על הגוף, הראש והרגש, ואיך לתרגל בבטחה.",
          },
          {
            title: "הטכניקות",
            length: "שעתיים",
            lessons: "11 שיעורים",
            text: "לב הקורס: טכניקות נשימה ומסעות מונחים, צעד אחר צעד.",
          },
          {
            title: "הנשימה ביום-יום",
            length: "22 דק׳",
            lessons: "4 שיעורים",
            text: "להביא את הנשימה אל החיים ולבנות שגרה קצרה שמחזיקה אתכם.",
          },
          {
            title: "סיום והוקרה",
            length: "3 דק׳",
            lessons: "שיעור אחד",
            text: "סגירה של המסע, ומבט אל הדרך שתמשיכו בה.",
          },
        ],
        techniques:
          "בין הטכניקות: Sigh Breathing, Coherent Breathing, Belly & Complete Breathing, Box Breathing, Nadi Shodhana ומדיטציות מונחות.",
      },
      faq: {
        title: "שאלות נפוצות",
        note: "הקורס הוא מרחב של צמיחה וחיבור, ואינו תחליף לטיפול רפואי או פסיכולוגי.",
        items: [
          {
            question: "צריך ניסיון קודם?",
            answer: [
              "ממש לא. הקורס מתאים גם למי שמעולם לא תרגל נשימה או מדיטציה. כל מה שצריך זה סקרנות, ומקום נוח לשבת או לשכב בו.",
            ],
          },
          {
            question: "הקורס באנגלית. זה יתאים לי?",
            answer: [
              "הקורס מועבר באנגלית פשוטה וברורה, בקצב רגוע. אם אתם מבינים אנגלית בסיסית, תוכלו לעקוב בקלות ולהתמסר לתרגול.",
            ],
          },
          {
            question: "איך זה עובד?",
            answer: [
              "הקורס נמצא ב-Udemy. אחרי ההרשמה הוא שלכם **לכל החיים**: צופים מהמחשב, מהטלפון או מהטלוויזיה, בקצב שלכם, וחוזרים לשיעורים כמה שרוצים. בסיום מקבלים תעודת סיום.",
            ],
          },
          {
            question: "ואם הקורס לא מתאים לי?",
            answer: [
              "Udemy נותנת 30 יום להחזר כספי מלא, כך שאפשר להתחיל בביטחון.",
            ],
          },
          {
            question: "הנשימות מתאימות לכולם?",
            answer: [
              "הטכניקות בקורס מתאימות לרוב האנשים, ובתחילת הקורס יש שיעור על תרגול בטוח. אם יש לכם מצב רפואי, היריון או כל דבר שחשוב לקחת בחשבון, כדאי להתייעץ עם רופא לפני שמתחילים.",
            ],
          },
        ],
      },
      closing: {
        title: "הנשימה כבר איתכם,",
        emphasis: "בואו נתחיל",
        text: "שעתיים וחצי של תרגול שילווה אתכם הרבה אחרי השיעור האחרון.",
      },
    },
    en: {
      description:
        "Breathing Life: an online breathwork and meditation course by Itamar Eden, for calm, balance and presence in everyday life. At your own pace, from anywhere.",
      hero: {
        eyebrow: "Online course",
        title: "Breathing Life",
        emphasis: "Connect with life through the breath",
        lead: "A recorded course in conscious breathing and meditation: simple tools that bring calm, balance and presence into your life, at your own pace, from anywhere.",
        button: "Join the course on Udemy",
        facts: ["2.5 hours of video", "19 lessons", "Lifetime access", "At your own pace"],
        trailerLabel: "The Breathing Life course trailer",
        trailerSoon: "The trailer will be here soon",
      },
      gains: {
        kicker: "What the course gives you",
        title: "Tools that stay",
        emphasis: "with you for good",
        lead: "Your breath is always with you. In this course you'll learn to use it to come back to yourself, anywhere and at any moment.",
        items: [
          {
            title: "Calm within reach",
            text: "Simple breaths that settle the body and bring peace to the mind within minutes, even in the middle of a busy day.",
          },
          {
            title: "A freer body",
            text: "Release the tension and load the body has gathered, and feel more lightness and space.",
          },
          {
            title: "Emotional balance",
            text: "A daily breathing routine that strengthens your emotional steadiness and well-being.",
          },
          {
            title: "Presence and connection",
            text: "Feel more present in your body and your life, and deepen your connection with yourself through the breath.",
          },
          {
            title: "Deep rest",
            text: "Guided breath journeys and meditations that lead into deep relaxation and inner peace.",
          },
        ],
      },
      reviews: {
        kicker: "What people say",
        title: "Already",
        emphasis: "breathing with me",
        rating: "5.0 on Udemy",
        items: reviews,
      },
      inside: {
        kicker: "Inside the course",
        title: "Four stages,",
        emphasis: "one breath at a time",
        sections: [
          {
            title: "Welcome & Foundations",
            length: "16 min",
            lessons: "3 lessons",
            text: "How the breath shapes your body, mind and emotions, and how to practise safely.",
          },
          {
            title: "Core Techniques",
            length: "2 hours",
            lessons: "11 lessons",
            text: "The heart of the course: breathing techniques and guided journeys, step by step.",
          },
          {
            title: "Integrating the Breath in Daily Life",
            length: "22 min",
            lessons: "4 lessons",
            text: "Bring the breath into your days and build a short routine that holds you.",
          },
          {
            title: "Completion & Gratitude",
            length: "3 min",
            lessons: "1 lesson",
            text: "Closing the journey, and a look at the path ahead.",
          },
        ],
        techniques:
          "Techniques include sigh breathing, coherent breathing, belly and complete breathing, box breathing, Nadi Shodhana and guided meditations.",
      },
      faq: {
        title: "Questions",
        note: "The course is a space for growth and connection, and isn't a substitute for medical or psychological care.",
        items: [
          {
            question: "Do I need any experience?",
            answer: [
              "Not at all. The course suits people who have never practised breathwork or meditation. All you need is curiosity, and a comfortable place to sit or lie down.",
            ],
          },
          {
            question: "How does it work?",
            answer: [
              "The course lives on Udemy. Once you enrol it's yours **for life**: watch on your computer, phone or TV, at your own pace, and come back to any lesson as often as you like. You'll receive a certificate when you complete it.",
            ],
          },
          {
            question: "What if it isn't right for me?",
            answer: ["Udemy offers a full refund within 30 days, so you can begin with confidence."],
          },
          {
            question: "Is the breathwork right for everyone?",
            answer: [
              "The techniques suit most people, and the course opens with a lesson on practising safely. If you have a medical condition, are pregnant or have anything else worth considering, check with your doctor before you begin.",
            ],
          },
        ],
      },
      closing: {
        title: "Your breath is already here.",
        emphasis: "Let's begin",
        text: "Two and a half hours of practice that stays with you long after the last lesson.",
      },
    },
  },
};
