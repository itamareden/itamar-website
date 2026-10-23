import type { Metadata } from "next";
import Image from "next/image";
import { getChallenge } from "@/content/challenge";
import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/i18n/config";
import { getLocale } from "@/i18n/get-locale";
import { Heading } from "./_components/Heading";
import { SignupForm } from "./_components/SignupForm";
import { WhatsAppIcon } from "./_components/WhatsAppIcon";
import styles from "./page.module.css";

export async function generateMetadata(): Promise<Metadata> {
  const challenge = getChallenge(await getLocale());
  const dict = await getDictionary();
  return {
    title: `${challenge.hero.eyebrow} · ${dict.site.name}`,
    description: challenge.hero.text,
  };
}

// "2026-11-08" → "Sunday, 8 November" / "יום ראשון, 8 בנובמבר".
// The date is read as UTC so it can't shift a day with the server's time zone.
function formatDate(isoDate: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`));
}


function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.lock}>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

export default async function ChallengePage() {
  const locale = await getLocale();
  const c = getChallenge(locale);
  const { mode, startDate, whatsappUrl } = c.settings;
  const steps = mode === "group" ? c.group.steps : c.email.steps;

  // The WhatsApp button. While the invite link isn't set, it renders without
  // an href: it still shows, but isn't a working link.
  const joinButton = (className: string) => (
    <a
      href={whatsappUrl || undefined}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <WhatsAppIcon className={styles.buttonIcon} />
      {c.group.button}
    </a>
  );

  return (
    <>
      {/* Photo with the headline, and the action card overlapping its bottom edge. */}
      <section data-full-bleed data-hero>
        <div className={styles.photo}>
          <Image
            src="/images/challenge/hero.jpg"
            alt={c.hero.imageAlt}
            fill
            sizes="100vw"
            loading="eager"
            fetchPriority="high"
            className={styles.photoImage}
          />
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>{c.hero.eyebrow}</p>
            <h1 className={styles.heroTitle}>
              <Heading heading={c.hero.heading} />
            </h1>
            <p className={styles.heroLead}>{c.hero.text}</p>
          </div>
        </div>

        <div className={styles.cardRow}>
          <div className={styles.card} id="join">
            {mode === "group" ? (
              <>
                <p className={styles.cardTitle}>
                  {startDate ? (
                    <>
                      {c.group.starts} <b>{formatDate(startDate, locale)}</b>
                    </>
                  ) : (
                    c.group.startsSoon
                  )}
                </p>
                <p className={styles.cardMeta}>{c.group.meta}</p>
                {joinButton(styles.button)}
              </>
            ) : (
              <>
                <p className={styles.cardTitle}>{c.email.title}</p>
                <p className={styles.cardMeta}>{c.email.meta}</p>
                <SignupForm text={c.email} />
              </>
            )}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.kicker}>{c.how.kicker}</p>
        <h2 className={styles.sectionTitle}>
          <Heading heading={c.how.heading} />
        </h2>
        <ol className={styles.steps}>
          {steps.map((step) => (
            <li key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.journey} data-full-bleed>
        <div className={styles.inner}>
          <p className={styles.kicker}>{c.journey.kicker}</p>
          <h2 className={styles.sectionTitle}>
            <Heading heading={c.journey.heading} />
          </h2>
          <p className={styles.lead}>{c.journey.text}</p>
          <ol className={styles.days}>
            <li className={`${styles.day} ${styles.dayOpen}`}>
              <span className={styles.dayName}>{c.journey.welcome.title}</span>
              <span className={styles.dayText}>{c.journey.welcome.text}</span>
            </li>
            {[1, 2, 3, 4, 5].map((n) => (
              <li key={n} className={styles.day}>
                <span className={styles.dayName}>
                  {c.journey.day} {n}
                </span>
                <span className={styles.dayText}>{c.journey.hidden}</span>
                <LockIcon />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`${styles.section} ${styles.guide}`}>
        <Image
          src="/images/challenge/guide.jpg"
          alt={c.guide.imageAlt}
          width={1100}
          height={1706}
          sizes="(max-width: 45rem) 90vw, 40vw"
          className={styles.guideImage}
        />
        <div>
          <p className={styles.kicker}>{c.guide.kicker}</p>
          <h2 className={styles.sectionTitle}>
            <Heading heading={c.guide.heading} />
          </h2>
          <p className={styles.lead}>{c.guide.text}</p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.faq}`}>
        <h2 className={styles.sectionTitle}>{c.faq.title}</h2>
        {c.faq.items.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </section>

      <section className={styles.closing} data-full-bleed>
        <div className={styles.inner}>
          <h2 className={styles.sectionTitle}>
            <Heading heading={c.closing.heading} />
          </h2>
          <p className={styles.closingText}>{c.closing.text}</p>
          {mode === "group" ? (
            joinButton(`${styles.button} ${styles.buttonLight}`)
          ) : (
            <a href="#join" className={`${styles.button} ${styles.buttonLight}`}>
              {c.email.button}
            </a>
          )}
        </div>
      </section>
    </>
  );
}
