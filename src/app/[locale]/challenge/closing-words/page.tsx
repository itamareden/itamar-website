import type { Metadata } from "next";
import { challengeDays, getChallenge } from "@/content/challenge";
import { getDictionary } from "@/dictionaries";
import { getLocale } from "@/i18n/get-locale";
import { ContinueBand } from "../_components/ContinueBand";
import { DayProgress } from "../_components/DayProgress";
import { Emphasis } from "@/components/Emphasis/Emphasis";
import { Flourish } from "../_components/Flourish";
import { SocialLinks } from "@/components/SocialLinks/SocialLinks";
import { Heading } from "../_components/Heading";
import { ShareForm } from "../_components/ShareForm";
import { VideoPlayer } from "../_components/VideoPlayer";
import styles from "../practice.module.css";

export async function generateMetadata(): Promise<Metadata> {
  const c = getChallenge(await getLocale());
  const dict = await getDictionary();
  return {
    title: `${c.finale.video.title} · ${dict.site.name}`,
    // Shared by link only: keep it out of search results.
    robots: { index: false, follow: false },
  };
}

// After day 5: the closing words video and where to go from here.
export default async function ClosingPage() {
  const locale = await getLocale();
  const c = getChallenge(locale);
  const total = challengeDays.length;

  return (
    <article className={styles.page}>
      <header className={styles.top}>
        <p className={styles.kicker}>{c.practice.kicker}</p>
        <DayProgress
          day={0}
          total={total}
          label={c.finale.progressLabel}
          barLabel={c.practice.progressLabel}
          completeLabel={c.practice.dayComplete}
          dayNames={challengeDays.map((d) => `${c.practice.day} ${d.number}`)}
          doneLabel={c.practice.dayDone}
          notDoneLabel={c.practice.dayNotDone}
        />
        <h1 className={styles.title}>
          <Heading heading={c.finale.heading} />
        </h1>
        <div className={styles.intro}>
          {c.finale.text.map((paragraph) => (
            <p key={paragraph}>
              <Emphasis text={paragraph} />
            </p>
          ))}
        </div>
        <Flourish />
      </header>

      <VideoPlayer {...c.finale.video} labels={c.practice.player} />

      <ContinueBand
        text={c.finale.continue}
        primaryHref={`/${locale}/sessions`}
        secondaryHref={`/${locale}/events`}
      />

      <ShareForm text={c.finale.share} days={challengeDays.map((d) => c.days[d.slug].title)} />

      <section className={`${styles.block} ${styles.social}`}>
        <h2 className={styles.blockTitle}>{c.finale.socialHeading}</h2>
        <SocialLinks />
      </section>
    </article>
  );
}
