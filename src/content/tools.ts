import type { ToolIconName } from "@/components/ToolIcon/ToolIcon";
import type { Locale } from "@/i18n/config";

/*
 * The tools Itamar works with, written once for two places: a short line
 * for the homepage cards, and a longer paragraph for the About page.
 * What each practice can open in a person, not how a session runs.
 *
 * A language without content here shows no section.
 * Final text from Itamar.
 */
export type Tool = {
  title: string;
  icon: ToolIconName;
  drawing?: string; // a line drawing under /public, shown in place of the icon
  card: string; // a few lines, for the homepage (final text from Itamar)
  text: string[]; // one or more paragraphs, for the About page
};

export type ToolsContent = {
  home: { title: string; intro: string; link: string };
  about: { title: string; intro: string };
  tools: Tool[];
};

const he: ToolsContent = {
  home: {
    title: "הכלים שאני עובד איתם",
    intro: "דרכים שונות לאותו מקום: לחזור לעצמכם, לגוף ולחיים.",
    link: "עוד על הדרך שבה אני עובד ←",
  },
  about: {
    title: "הכלים שלי",
    intro: "כל אחד מהם פתח בי משהו אחר. יחד הם הדרך שבה אני מלווה אנשים היום.",
  },
  tools: [
    {
      title: "מדיטציה",
      icon: "meditation",
      drawing: "/images/tools/meditation-line.png",
      card: "לעצור, לפגוש את מה שקורה בתוכנו, ולפתוח דלת למערכת יחסים עמוקה ואינטימית יותר עם עצמנו. משם דברים מתחילים לזוז.",
      text: [
        "מדיטציה היא לא עוד משימה שצריך להצליח בה, ולא ניסיון לרוקן את הראש ממחשבות. היא הזמנה לעצור, להקדיש לעצמנו זמן, ולפגוש בסקרנות את מה שקורה בתוכנו, בדיוק כפי שהוא.",
        "אנחנו לא צריכים להגיע לשום מקום, לשנות שום דבר או לגרום למשהו מסוים לקרות. אפשר פשוט להיות. להתבונן במחשבות, להרגיש את הגוף, לשים לב לנשימה, ולתת לדברים להיות כפי שהם. ודווקא כשאנחנו מרפים מהצורך לשלוט בחוויה, משהו חדש יכול להיפתח. המחשבות כבר לא מנהלות אותנו באותה מידה, מתפנה מקום לשקט, לרגעים של שמחה פשוטה, ולתחושה עמוקה יותר של קרבה ואינטימיות עם עצמנו.",
        "עבורי, מדיטציה הפכה מעשר דקות ביום לדרך חיים. היא לימדה אותי לעצור, להקשיב פנימה, לסמוך על מה שעולה, ולמצוא מקום של שקט גם בתוך התנועה של החיים. עם הזמן היא הפכה למעין בית פנימי, מקום שאני תמיד יכול לחזור אליו.",
      ],
    },
    {
      title: "נשימה וריברסינג",
      icon: "breath",
      drawing: "/images/tools/breath-line.png",
      card: "הנשימה מאפשרת לנו להגיע למקומות שהמילים והמחשבות לא תמיד מצליחות להגיע אליהם. היא פותחת מרחב לחיבור רגשי, לשחרור של מה שתקוע ולשינוי עמוק.",
      text: [
        "הנשימה היא גשר בין הגוף, הנפש והנשמה, והיא תמיד איתנו. היא הרבה יותר מפעולה שאנחנו עושים כדי להישאר בחיים. האופן שבו אנחנו נושמים משפיע על איך שאנחנו מרגישים, על מידת הנוכחות שלנו ועל הדרך שבה אנחנו פוגשים את החיים. כשאנחנו לומדים להקשיב לנשימה ולעבוד איתה, אנחנו מגלים כלי פשוט ונגיש שיכול לעזור לנו להירגע, להתעורר, להתחבר לעצמנו ולמצוא איזון בתוך היומיום.",
        "בריברסינג אנחנו לוקחים את העבודה עם הנשימה צעד נוסף פנימה. באמצעות נשימה מעגלית ומחוברת, ללא הפסקה בין השאיפה לנשיפה, אנחנו מאפשרים לעצמנו להיכנס לחוויה עמוקה יותר. הנשימה יכולה להציף רגשות, לשחרר מתחים ודפוסים שהגוף מחזיק, לפתוח את הלב ולאפשר לתובנות חדשות להגיע. כל מפגש הוא קצת אחר, ואין צורך לדעת מראש מה יעלה או לאן הוא ייקח אותנו.",
        "עבורי, הנשימה הפכה לאחד הכלים המשמעותיים ביותר בדרך שלי. היא עזרה לי להתחבר מחדש לגוף ולרגשות שלי, להשתחרר מפחדים וחרדות שניהלו אותי, ולפגוש צדדים רכים יותר בתוכי שלא תמיד נתתי להם מקום.",
      ],
    },
    {
      title: "חקירה סומטית",
      icon: "body",
      drawing: "/images/tools/somatic-line-v2.png",
      card: "הגוף הוא המצפן שלנו. כשאנחנו לומדים להקשיב לו, אנחנו מגלים עולם שלם של תחושות, רגשות ותובנות, ומפתחים מערכת יחסים חדשה עם עצמנו.",
      text: [
        "לגוף יש הרבה תשובות. הוא מרגיש דברים הרבה לפני שהראש מספיק לתת להם שם, ומחזיק תחושות ורגשות שעוד לא הספקנו לפגוש באופן מודע. לא פעם אנחנו מוצאים את עצמנו נסחפים במחשבות, בסיפורים שאנחנו מספרים לעצמנו ובדאגות לגבי מה שהיה או מה שעוד יהיה. ההקשבה לגוף מאפשרת לנו לצאת לרגע מכל אלה ולחזור אל מה שקורה כאן ועכשיו.",
        "ככל שאנחנו לומדים להקשיב לו, אנחנו מגלים שהוא יכול להיות מצפן בחיים שלנו. הוא עוזר לנו לזהות מה נכון לנו, למה אנחנו נמשכים, ומתי הגיע הזמן לעצור או להתקדם. דרך ההקשבה לתחושות הגוף אנחנו לומדים לסמוך על עצמנו ולפעול מתוך חיבור למה שאנחנו מרגישים.",
        "במשך שנים חייתי בעיקר בראש. למדתי לחשוב, לנתח ולנסות להבין הכול, אבל לא תמיד ידעתי לעצור ולהרגיש. החזרה לגוף הייתה עבורי דרך להתחבר מחדש לעצמי, ולחיים עצמם.",
      ],
    },
    {
      title: "הילד הפנימי",
      icon: "child",
      drawing: "/images/tools/inner-child-line.png",
      card: "לפגוש את הילד שבתוכנו, להיות שם עבורו, ולטפח איתו קשר קרוב ומיטיב מתוך הבגרות, האהבה והמודעות שיש לנו היום.",
      text: [
        "בתוך כל אחד מאיתנו חי הילד שהיינו: הסקרן, השמח, זה שאוהב לשחק, וגם זה שנפגע ולמד להסתתר. חלק גדול מהתגובות והדפוסים שלנו היום, הפחד לבטא את עצמנו, הצורך לרצות, הביקורת הפנימית, נוצרו שם. והילד הזה עדיין חי בתוכנו.",
        "כשאנחנו פוגשים את הילד הזה, מקשיבים לו ומעניקים לו היום את תשומת הלב והאהבה שהיה זקוק להן אז, משהו בפנים יכול להירגע. ומתוך המקום הזה מתפנה יותר מקום לשמחה, למשחקיות ולסקרנות שתמיד היו חלק מאיתנו.",
        "אני הייתי הילד הרגיש, ואני יודע כמה הוא מחכה שמישהו יראה אותו.",
      ],
    },
    {
      title: "יצירת מציאות",
      icon: "manifestation",
      drawing: "/images/tools/manifestation-line-v3.png",
      card: "לדעת מה אנחנו באמת רוצים, להאמין שזה אפשרי עבורנו, לשחרר את האחיזה ולאפשר לחיים להביא את זה אלינו.",
      text: [
        "מה שקורה בפנים משפיע על מה שאנחנו פוגשים ויוצרים בחוץ. המחשבות שלנו, האמונות שאנחנו מחזיקים, הרגשות שאנחנו מטפחים והאופן שבו אנחנו תופסים את עצמנו ואת העולם, כולם משפיעים על המציאות שאנחנו חווים ועל האפשרויות שאנחנו מזהים בתוכה.",
        "תהליך יצירת המציאות מתחיל בלהבין מה אנחנו באמת רוצים, לא מתוך מה שמצופה מאיתנו או ממה שנדמה לנו שאנחנו צריכים לרצות, אלא מתוך הקשבה עמוקה לעצמנו. משם אנחנו לומדים לדמיין את המציאות שאנחנו מבקשים ליצור, להרגיש אותה בגוף כאילו היא כבר כאן, ולהתחבר לתחושות שהיינו רוצים לחוות בחיים שלנו. לצד זה, אנחנו מטפחים הכרת תודה על מה שכבר יש, ומפנים מקום לקבל עוד.",
        "אבל יצירת מציאות היא לא רק לבקש מהיקום ולהמתין. היא גם להסכים להאמין שזה אפשרי עבורנו, לשחרר פחדים ואמונות שמגבילים אותנו, ולפתח רגישות וקשב להזדמנויות שהחיים מזמנים לנו. לפעמים הן מגיעות בדרכים שלא ציפינו להן, דרך מפגש, רעיון, הזמנה או תחושה פנימית שמכוונת אותנו לצעד הבא. אנחנו לומדים לזהות את הרגעים האלה, ולהעז לפעול כשהם מגיעים. אנחנו עושים את החלק שלנו, ובו בזמן לומדים להרפות מהצורך לשלוט בדרך ובתוצאה, ולתת לחיים להפתיע אותנו.",
      ],
    },
  ],
};

// English, translated from Itamar's Hebrew. Icons and drawings are shared.
const en: ToolsContent = {
  home: {
    title: "The tools I work with",
    intro: "Different paths to the same place: coming back to yourself, to your body and to life.",
    link: "More about how I work →",
  },
  about: {
    title: "My tools",
    intro: "Each one opened something different in me. Together they are how I guide people today.",
  },
  tools: [
    {
      ...he.tools[0],
      title: "Meditation",
      card: "Meeting ourselves with curiosity, and opening the door to a deeper, more intimate relationship with ourselves. From there, things begin to move.",
      text: [
        "Meditation isn't another task to succeed at, or an attempt to empty the mind of thoughts. It's an invitation to pause, to give ourselves time, and to meet what's happening inside us with curiosity, exactly as it is.",
        "We don't need to get anywhere, change anything or make anything happen. We can simply be. Watch the thoughts, feel the body, notice the breath, and let things be as they are. And precisely when we let go of the need to control the experience, something new can open up. Our thoughts no longer run us in the same way, and room opens up for stillness, for moments of simple joy, and for a deeper sense of closeness and intimacy with ourselves.",
        "For me, meditation went from ten minutes a day to a way of life. It taught me to pause, to listen inward, to trust what comes up, and to find a place of stillness even within the movement of life. Over time it became a kind of inner home, a place I can always come back to.",
      ],
    },
    {
      ...he.tools[1],
      title: "Breathwork",
      card: "The breath takes us to places that words and thoughts can't always reach. It opens a space for emotional connection, for releasing what's stuck, and for deep change.",
      text: [
        "The breath is a bridge between body, mind and soul, and it is always with us. It is much more than something we do to stay alive. The way we breathe shapes how we feel, how present we are and how we meet life. When we learn to listen to the breath and work with it, we discover a simple, accessible tool that can help us calm down, wake up, connect to ourselves and find balance in everyday life.",
        "In rebirthing we take breathwork one step further inward. Through circular, connected breathing, with no pause between the inhale and the exhale, we allow ourselves to enter a deeper experience. The breath can bring emotions to the surface, release tension and patterns the body holds, open the heart and let new insights arrive. Every session is a little different, and there's no need to know in advance what will come up or where it will take us.",
        "For me, the breath has become one of the most meaningful tools on my path. It helped me reconnect with my body and my emotions, free myself from fears and anxieties that used to run me, and meet softer sides of myself that I didn't always give room to.",
      ],
    },
    {
      ...he.tools[2],
      title: "Somatic inquiry",
      card: "The body is our compass. When we learn to listen to it, we discover a whole world of sensations, emotions and insights, and build a new relationship with ourselves.",
      text: [
        "The body holds many answers. It feels things long before the mind has a name for them, and it carries sensations and emotions we haven't yet met consciously. Again and again we find ourselves swept up in thoughts, in the stories we tell ourselves, in worries about what was or what's to come. Listening to the body lets us step out of all that for a moment and come back to what's happening here and now.",
        "The more we learn to listen to it, the more we discover that it can be a compass in our lives. It helps us recognise what's right for us, what we're drawn to, and when it's time to pause or to move forward. By listening to the body's sensations we learn to trust ourselves and to act from a connection to what we feel.",
        "For years I lived mostly in my head. I learned to think, to analyse and to try to understand everything, but I didn't always know how to stop and feel. Coming back to the body was my way of reconnecting with myself, and with life itself.",
      ],
    },
    {
      ...he.tools[3],
      title: "Inner child",
      card: "Meeting the child within us, being there for him, and nurturing a close, caring bond with him from the maturity, love and awareness we have today.",
      text: [
        "Inside each of us lives the child we once were: the curious one, the joyful one, the one who loves to play, and also the one who got hurt and learned to hide. Many of our reactions and patterns today, the fear of expressing ourselves, the need to please, the inner critic, were formed there. And that child still lives inside us.",
        "When we meet this child, listen to him and give him today the attention and love he needed back then, something inside can settle. And from that place, more room opens up for the joy, playfulness and curiosity that were always part of us.",
        "I was the sensitive child, and I know how much he's waiting for someone to see him.",
      ],
    },
    {
      ...he.tools[4],
      title: "Manifestation",
      card: "Knowing what we truly want, believing it's possible for us, letting go and allowing it to appear in our lives.",
      text: [
        "What happens inside shapes what we meet and create outside. Our thoughts, the beliefs we hold, the emotions we nurture and the way we see ourselves and the world all influence the reality we experience and the possibilities we notice within it.",
        "Manifestation begins with understanding what we truly want, not from what's expected of us or what we think we should want, but from deep listening to ourselves. From there we learn to imagine the reality we wish to create, to feel it in the body as if it's already here, and to connect with the feelings we'd love to experience in our lives. Alongside this, we cultivate gratitude for what we already have, and make room to receive more.",
        "But manifestation isn't only about asking the universe and waiting. It's also about agreeing to believe it's possible for us, letting go of fears and limiting beliefs, and becoming sensitive and attentive to the opportunities life brings us. Sometimes they come in ways we didn't expect: through a meeting, an idea, an invitation or an inner sense that points us to the next step. We learn to recognise these moments, and to dare to act when they come. We do our part, and at the same time learn to let go of the need to control the path and the outcome, and let life surprise us.",
      ],
    },
  ],
};

const content: Partial<Record<Locale, ToolsContent>> = { en, he };

export function getTools(locale: Locale): ToolsContent | undefined {
  return content[locale];
}
