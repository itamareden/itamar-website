import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { challengeDays, closingSlug, getChallenge } from "@/content/challenge";
import { getDictionary } from "@/dictionaries";
import { getLocale } from "@/i18n/get-locale";
import { AudioPlayer } from "../_components/AudioPlayer";
import { ClosingTeaser } from "../_components/ClosingTeaser";
import { DayProgress } from "../_components/DayProgress";
import { Emphasis } from "../_components/Emphasis";
import { Flourish } from "../_components/Flourish";
import { NextNote } from "../_components/NextNote";
import { RingList } from "../_components/RingList";
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
        <div className={styles.intro}>
          {day.text.map((paragraph) => (
            <p key={paragraph}>
              <Emphasis text={paragraph} />
            </p>
          ))}
        </div>
        <Flourish />
      </header>

      <VideoPlayer {...day.video} labels={c.practice.player} />

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
        <RingList items={day.forTheDay} />
      </section>

      {isLast ? (
        <ClosingTeaser
          href={`/${locale}/challenge/${closingSlug}`}
          video={c.finale.video}
          {...c.finale.teaser}
        />
      ) : (
        <NextNote heading={c.practice.untilTomorrow} text={c.practice.nextNote} />
      )}
    </article>
  );
}
