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
    name: "Oren",
    text: "The instructor’s presence and energy are warm and calming, creating a space that’s easy to connect with. The content is deep and inspiring, and I found myself fully engaged, absorbing every part of it with genuine interest.",
  },
  {
    name: "Nofar",
    text: "Great course! Clear explanations, practical and theoretical together. It helped me practice daily and stay consistent after I finished the course. Highly recommended!",
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
        title: "כלים פרקטיים",
        emphasis: "שנשארים איתכם",
        lead: "ללמוד איך להיעזר בנשימה כדי לחוות יותר שלווה ונוכחות בחיי היומיום.",
        items: [
          {
            image: "/images/courses/gain-calm.png", // a leaf on flowing breath lines
            title: "רוגע בהישג יד",
            text: "טכניקות נשימה פשוטות שיכולות לעזור לכם להאט, להרפות ולמצוא שלווה גם באמצע יום עמוס.",
          },
          {
            image: "/images/courses/gain-balance.png", // open hands holding a heart
            title: "איזון רגשי",
            text: "שגרת נשימה יומית שמחזקת את היציבות הרגשית ואת תחושת הרווחה שלכם.",
          },
          {
            image: "/images/courses/gain-presence.png", // a hand resting on the heart
            title: "נוכחות וחיבור",
            text: "להרגיש יותר נוכחים בגוף ובחיים, ולהעמיק את החיבור לעצמכם דרך הנשימה.",
          },
          {
            image: "/images/courses/gain-rest-shoulders.png", // a person lying at rest, head and shoulders
            title: "מנוחה עמוקה",
            text: "מסעות נשימה ומדיטציות מונחות שמובילים להרפיה עמוקה ולשלווה פנימית.",
          },
        ],
      },
      reviews: {
        kicker: "מה אומרים",
        title: "כמה מילים",
        emphasis: "ממי שכבר התנסו",
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
            text: "להביא את הנשימה אל החיים ולבנות שגרה קצרה שתומכת בכם.",
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
        note: "הקורס נועד ללמידה ולתרגול אישי, ואינו תחליף לייעוץ או לטיפול רפואי או פסיכולוגי.",
        items: [
          {
            question: "צריך ניסיון קודם בנשימה או במדיטציה?",
            answer: [
              "אין צורך בניסיון קודם. נתחיל מהבסיס ונכיר את הטכניקות צעד אחר צעד, עם הסברים ותרגול מודרך. גם אם כבר התנסיתם, זו הזדמנות להעמיק ולהכיר דרכים נוספות לעבוד עם הנשימה.",
            ],
          },
          {
            question: "הקורס באנגלית. איך אדע אם אצליח לעקוב?",
            answer: [
              "בעמוד הקורס ב־Udemy מחכים לכם שלושה סרטונים לצפייה בחינם. תוכלו להתרשם מהאנגלית, מההסברים ומסגנון ההנחיה שלי, ולראות אם אתם מרגישים בנוח לפני ההרשמה.",
            ],
          },
          {
            question: "איך זה עובד?",
            answer: [
              "ההרשמה, התשלום והצפייה בקורס נעשים ב-Udemy, באתר או באפליקציה. אחרי ההרשמה הקורס שלכם **לכל החיים**: צופים מהמחשב, מהטלפון או מהטלוויזיה, בקצב שלכם, וחוזרים לשיעורים כמה שרוצים.",
            ],
          },
          {
            question: "כמה זמן צריך לפנות לתרגול?",
            answer: [
              "הקורס כולל כ־2.5 שעות וידאו, ואפשר לפרוס אותו בהתאם לזמן שלכם. התרגולים המודרכים נמשכים כ־5–10 דקות, כך שאפשר לשלב אותם גם ביום עמוס. מומלץ להתקדם בהדרגה ולחזור על התרגולים, כדי שהטכניקות יהפכו למוכרות וטבעיות וישתלבו בחיי היומיום.",
            ],
          },
          {
            question: "האם כל תרגילי הנשימה מתאימים לכולם?",
            answer: [
              "התרגולים בקורס מתאימים לרוב הגדול של האנשים, גם ללא ניסיון קודם. עם זאת, יש מצבים רפואיים שבהם תרגולים מסוימים אינם מומלצים. בסרטון שזמין לצפייה בחינם בעמוד הקורס אני מסביר על המצבים האלה. מומלץ לצפות בו לפני ההרשמה, ובמידת הצורך להתייעץ עם איש מקצוע רפואי.",
            ],
          },
          {
            question: "ואם הקורס לא מתאים לי?",
            answer: [
              "לפני ההרשמה אפשר לצפות בשלושה סרטונים בחינם בעמוד הקורס ולהתרשם מהגישה ומסגנון ההנחיה. ואחרי ההרשמה, Udemy מציעה אחריות להחזר כספי בתוך 30 יום, כך שאפשר להתחיל בביטחון.",
            ],
          },
        ],
      },
      closing: {
        title: "לגלות מה הנשימה",
        emphasis: "יכולה לעשות בשבילכם",
        text: "טכניקות פשוטות ותרגולים מודרכים שיעזרו לכם להיעזר בנשימה להפחתת מתח ולחוות יותר שלווה ונוכחות בחיי היומיום.",
        note: "שלושה סרטונים לצפייה בחינם בעמוד הקורס",
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
        title: "Practical tools",
        emphasis: "that stay with you",
        lead: "Learn how to use your breath to experience more peace and presence in everyday life.",
        items: [
          {
            image: "/images/courses/gain-calm.png", // a leaf on flowing breath lines
            title: "Calm within reach",
            text: "Simple breathing techniques that can help you slow down, let go and find peace, even in the middle of a busy day.",
          },
          {
            image: "/images/courses/gain-balance.png", // open hands holding a heart
            title: "Emotional balance",
            text: "A daily breathing routine that strengthens your emotional steadiness and well-being.",
          },
          {
            image: "/images/courses/gain-presence.png", // a hand resting on the heart
            title: "Presence and connection",
            text: "Feel more present in your body and your life, and deepen your connection with yourself through the breath.",
          },
          {
            image: "/images/courses/gain-rest-shoulders.png", // a person lying at rest, head and shoulders
            title: "Deep rest",
            text: "Guided breath journeys and meditations that lead into deep relaxation and inner peace.",
          },
        ],
      },
      reviews: {
        kicker: "What people say",
        title: "A few words",
        emphasis: "from those who’ve tried it",
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
            text: "Bring the breath into your days and build a short routine that supports you.",
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
        note: "The course is meant for personal learning and practice, and isn't a substitute for medical or psychological advice or care.",
        items: [
          {
            question: "Do I need experience with breathwork or meditation?",
            answer: [
              "No experience is needed. We start from the basics and learn the techniques step by step, with explanations and guided practice. If you have practised before, it's a chance to go deeper and discover new ways to work with your breath.",
            ],
          },
          {
            question: "How does it work?",
            answer: [
              "You enrol, pay and watch the course on Udemy, on the website or in the app. Once you enrol, the course is yours **for life**: watch on your computer, phone or TV, at your own pace, and come back to any lesson as often as you like.",
            ],
          },
          {
            question: "How much time do I need for practice?",
            answer: [
              "The course has about 2.5 hours of video, and you can spread it out to suit your time. The guided practices last about 5–10 minutes, so they fit even into a busy day. It's best to progress gradually and repeat the practices, so the techniques become familiar and natural and part of your everyday life.",
            ],
          },
          {
            question: "Are all the breathing exercises right for everyone?",
            answer: [
              "The practices in the course suit the great majority of people, even without any experience. Still, there are medical conditions in which some practices aren't recommended. In a video you can watch for free on the course page, I explain these conditions. It's best to watch it before you enrol and, if needed, consult a medical professional.",
            ],
          },
          {
            question: "What if it isn't right for me?",
            answer: ["Before you enrol, you can watch three free videos on the course page and get a feel for the approach and the guidance. And after you enrol, Udemy offers a 30-day money-back guarantee, so you can begin with confidence."],
          },
        ],
      },
      closing: {
        title: "Discover what your breath",
        emphasis: "can do for you",
        text: "Simple techniques and guided practices that help you use your breath to ease stress and experience more peace and presence in everyday life.",
        note: "Three free videos to watch on the course page",
      },
    },
  },
};
