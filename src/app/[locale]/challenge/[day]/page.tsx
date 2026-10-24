import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { challengeDays, getChallenge } from "@/content/challenge";
import { getDictionary } from "@/dictionaries";
import { getLocale } from "@/i18n/get-locale";
import { AudioPlayer } from "../_components/AudioPlayer";
import { DayProgress } from "../_components/DayProgress";
import { Heading } from "../_components/Heading";
import { NextNote } from "../_components/NextNote";
import { VideoPlayer } from "../_components/VideoPlayer";
import styles from "../practice.module.css";

// One page per day, built ahead of time for each language.
export function generateStaticParams() {
  return challengeDays.map(({ slug }) => ({ day: slug }));
}

// Any other address under /challenge/ is a 404, not a new page.
export const dynamicParams = false;

async function findDay(params: PageProps<"/[locale]/challenge/[day]">["params"]) {
  const { day: slug } = await params;
  return challengeDays.find((day) => day.slug === slug);
}

export async function generateMetadata(props: PageProps<"/[locale]/challenge/[day]">): Promise<Metadata> {
  const entry = await findDay(props.params);
  if (!entry) return {};
  const c = getChallenge(await getLocale());
  const dict = await getDictionary();
  return {
    title: `${c.practice.dayOfTotal(entry.number, challengeDays.length)}: ${c.days[entry.slug].title} · ${dict.site.name}`,
    // Shared by link only, and must stay a surprise: keep it out of search results.
    robots: { index: false, follow: false },
  };
}

export default async function DayPage(props: PageProps<"/[locale]/challenge/[day]">) {
  const entry = await findDay(props.params);
  if (!entry) notFound();

  const locale = await getLocale();
  const c = getChallenge(locale);
  const dict = await getDictionary();
  const day = c.days[entry.slug];
  const total = challengeDays.length;
  const isLast = entry.number === total;

  return (
    <article className={styles.page}>
      <header className={styles.top}>
        <p className={styles.kicker}>{c.practice.kicker}</p>
        <DayProgress
          day={entry.number}
          total={total}
          label={c.practice.dayOfTotal(entry.number, total)}
          barLabel={c.practice.progressLabel}
          completeLabel={c.practice.dayComplete}
          dayNames={challengeDays.map((d) => `${c.journey.day} ${d.number}`)}
          doneLabel={c.practice.dayDone}
          notDoneLabel={c.practice.dayNotDone}
        />
        <h1 className={styles.title}>{day.title}</h1>
        <p className={styles.text}>{day.text}</p>
      </header>

      <VideoPlayer playbackId={day.video.playbackId} title={day.video.title} labels={c.practice.player} />

      <section className={styles.block}>
        <h2 className={styles.blockTitle}>{c.practice.meditationHeading}</h2>
        <AudioPlayer
          src={day.meditation.src}
          title={day.meditation.title}
          artist={dict.site.name}
          day={entry.number}
          labels={c.practice.player}
        />
      </section>

      <section className={`${styles.block} ${styles.listBlock}`}>
        <h2 className={styles.blockTitle}>{c.practice.forTheDayHeading}</h2>
        <ul className={styles.ringList}>
          {day.forTheDay.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {isLast ? (
        <section className={styles.finale}>
          <h2 className={styles.title}>
            <Heading heading={c.finale.heading} />
          </h2>
          <p className={styles.text}>{c.finale.text}</p>
          <VideoPlayer playbackId={c.finale.video.playbackId} title={c.finale.video.title} labels={c.practice.player} />

          <h3 className={styles.blockTitle}>{c.finale.nextHeading}</h3>
          <ul className={styles.nextLinks}>
            <li>
              <Link href={`/${locale}/sessions`}>{dict.nav.sessions}</Link>
            </li>
            <li>
              <Link href={`/${locale}/events`}>{dict.nav.events}</Link>
            </li>
            <li>
              <Link href={`/${locale}`}>{dict.nav.home}</Link>
            </li>
          </ul>
        </section>
      ) : (
        <NextNote heading={c.practice.untilTomorrow} text={c.practice.nextNote} />
      )}
    </article>
  );
}
