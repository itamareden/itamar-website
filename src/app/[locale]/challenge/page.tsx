import type { Metadata } from "next";
import Image from "next/image";
import { connection } from "next/server";
import { getChallenge } from "@/content/challenge";
import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/i18n/config";
import { getLocale } from "@/i18n/get-locale";
import { Emphasis } from "./_components/Emphasis";
import { Flourish } from "./_components/Flourish";
import { Heading } from "./_components/Heading";
import { RingList } from "./_components/RingList";
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

// Whole days from today in Israel to "2026-11-08": 0 on the day itself,
// negative once it has passed. ("en-CA" formats dates as YYYY-MM-DD.)
function daysUntil(isoDate: string) {
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Jerusalem" }).format(new Date());
  return Math.round((Date.parse(isoDate) - Date.parse(today)) / 86_400_000);
}

export default async function ChallengePage() {
  const locale = await getLocale();
  const c = getChallenge(locale);
  const { mode, startDate, whatsappUrl } = c.settings;
  const steps = mode === "group" ? c.group.steps : c.email.steps;
  const faqItems = c.faq.items.filter((item) => mode === "group" || !item.groupOnly);

  // The group's start date while it's still ahead (today counts); null when
  // there's no date or it has passed, so the page never shows an old date.
  // Counting days depends on today, so the page is then rendered per visit.
  let nextStart: { date: string; daysLeft: number } | null = null;
  if (mode === "group" && startDate) {
    await connection();
    const daysLeft = daysUntil(startDate);
    if (daysLeft >= 0) nextStart = { date: startDate, daysLeft };
  }

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

  // The light button on the dark bands: the WhatsApp link in group mode;
  // in email mode, a jump back to the sign-up card at the top.
  const joinOrSignup =
    mode === "group" ? (
      joinButton(`${styles.button} ${styles.buttonLight}`)
    ) : (
      <a href="#join" className={`${styles.button} ${styles.buttonLight}`}>
        {c.email.button}
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
            quality={90}
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
                  {nextStart ? (
                    <>
                      {c.group.starts} <b>{formatDate(nextStart.date, locale)}</b>
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

          <ul className={styles.facts}>
            {c.hero.facts.map((fact) => (
              <li key={fact.label}>
                <span className={styles.factValue}>{fact.value}</span>
                <span className={styles.factLabel}>{fact.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${styles.washBand} ${styles.isThisYouBand}`} data-full-bleed>
        <div className={styles.isThisYou}>
          <h2 className={styles.sectionTitle}>
            <Heading heading={c.isThisYou.heading} />
          </h2>
          <RingList items={c.isThisYou.items} />
          <p className={styles.isThisYouText}>
            <Emphasis text={c.isThisYou.text} />
          </p>
        </div>
      </section>

      <section className={styles.note}>
        <Flourish />
        <p className={styles.noteOpening}>{c.note.opening}</p>
        {c.note.text.map((paragraph) => (
          <p key={paragraph}>
            <Emphasis text={paragraph} />
          </p>
        ))}
        <p className={styles.noteClosing}>
          <Emphasis text={c.note.closing} />
        </p>
      </section>

      <section className={styles.takeaways} data-full-bleed>
        <div className={styles.takeawaysInner}>
          <Flourish />
          <p className={styles.takeawaysKicker}>{c.takeaways.kicker}</p>
          <h2 className={styles.sectionTitle}>
            <Heading heading={c.takeaways.heading} />
          </h2>
          <p className={styles.takeawaysText}>{c.takeaways.text}</p>
          <ul className={styles.tools}>
            {c.takeaways.items.map((item) => (
              <li key={item.label}>
                <h3>{item.label}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
          <div className={styles.takeawaysAction}>{joinOrSignup}</div>
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
          <div className={styles.guideText}>
            {c.guide.text.map((paragraph) => (
              <p key={paragraph}>
                <Emphasis text={paragraph} />
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.washBand} data-full-bleed>
        <div className={styles.inner}>
          <p className={styles.kicker}>{c.misconceptions.kicker}</p>
          <h2 className={styles.sectionTitle}>
            <Heading heading={c.misconceptions.heading} />
          </h2>
          <ul className={styles.myths}>
            {c.misconceptions.items.map((item) => (
              <li key={item.myth}>
                <h3>
                  <q>{item.myth}</q>
                </h3>
                <p>{item.truth}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${styles.section} ${styles.faq}`}>
        <h2 className={styles.sectionTitle}>{c.faq.title}</h2>
        {faqItems.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </section>

      <section className={styles.closing} data-full-bleed>
        <div className={styles.inner}>
          {mode === "group" && <p className={styles.kicker}>{c.group.nextKicker}</p>}
          <h2 className={styles.sectionTitle}>
            <Heading
              heading={
                mode === "email"
                  ? c.closing.heading
                  : nextStart
                    ? c.group.startsHeading(formatDate(nextStart.date, locale))
                    : c.group.soonHeading
              }
            />
          </h2>
          <p className={styles.closingText}>
            {nextStart ? `${c.group.countdown(nextStart.daysLeft)} · ${c.closing.text}` : c.closing.text}
          </p>
          {joinOrSignup}
        </div>
      </section>
    </>
  );
}
