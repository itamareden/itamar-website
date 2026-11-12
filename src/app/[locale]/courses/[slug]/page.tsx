import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Emphasis } from "@/components/Emphasis/Emphasis";
import { courses, getCourse, type Course, type GainIcon } from "@/content/courses";
import { getDictionary } from "@/dictionaries";
import { getLocale } from "@/i18n/get-locale";
import { Trailer } from "./Trailer";
import styles from "./page.module.css";

// One page per course, built ahead of time for each language.
export function generateStaticParams() {
  return courses.map(({ slug }) => ({ slug }));
}

// Any other address under /courses/ is a 404.
export const dynamicParams = false;

async function findCourse(params: PageProps<"/[locale]/courses/[slug]">["params"]) {
  const { slug } = await params;
  return getCourse(slug);
}

export async function generateMetadata(props: PageProps<"/[locale]/courses/[slug]">): Promise<Metadata> {
  const course = await findCourse(props.params);
  if (!course) return {};
  const c = course.content[await getLocale()];
  const dict = await getDictionary();
  return { title: `${c.hero.title} · ${dict.site.name}`, description: c.description };
}

// Opens the course on Udemy, in a new tab.
function EnrolButton({ course, label, className }: { course: Course; label: string; className: string }) {
  return (
    <a href={course.settings.enrolUrl} target="_blank" rel="noopener" className={className}>
      {label}
    </a>
  );
}

// The gain cards' line drawings: breath lines, balancing stones, a heart
// with a heartbeat, a moon with a star.
const gainPaths: Record<GainIcon, React.ReactNode> = {
  breath: (
    <>
      <path d="M3 8h10a3 3 0 1 0-3-3" />
      <path d="M3 12h15a3 3 0 1 1-3 3" />
      <path d="M3 16h7" />
    </>
  ),
  balance: (
    <>
      <ellipse cx="12" cy="18.5" rx="7" ry="2.5" />
      <ellipse cx="12" cy="13.3" rx="5" ry="2.2" />
      <ellipse cx="12" cy="8.6" rx="3.2" ry="1.9" />
    </>
  ),
  heart: (
    <>
      <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
      <path d="M9 11.5h1.5l1-2 1.5 4 1-2H15" />
    </>
  ),
  moon: (
    <>
      <path d="M19 14.5A7.5 7.5 0 1 1 9.5 5a6 6 0 0 0 9.5 9.5z" />
      <path d="M17 3.5v3M15.5 5h3" />
    </>
  ),
};

function GainIconSvg({ icon }: { icon: GainIcon }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {gainPaths[icon]}
    </svg>
  );
}

// A small gift box, line-drawn like the site's other icons.
function GiftIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M5 12v8h14v-8M12 8v12M12 8S10.5 3.5 8 4.5 9 8 12 8Zm0 0s1.5-4.5 4-3.5S15 8 12 8Z" />
    </svg>
  );
}

// The trailer, or a quiet placeholder until its YouTube id is set.
function TrailerOrSoon({ course, label, soon }: { course: Course; label: string; soon: string }) {
  const id = course.settings.trailerYoutubeId;
  if (id)
    return <Trailer id={id} label={label} title={course.settings.trailerTitle} channel={course.settings.trailerChannel} />;
  return (
    <div className={styles.trailer}>
      <p className={styles.trailerSoon}>{soon}</p>
    </div>
  );
}

export default async function CoursePage(props: PageProps<"/[locale]/courses/[slug]">) {
  const course = await findCourse(props.params);
  if (!course) notFound();
  const locale = await getLocale();
  const c = course.content[locale];

  return (
    <>
      {/* The opening: what the course gives, the enrol button and the trailer. */}
      {/* data-hero="light": the header lies on the pale photo in dark text. */}
      <section className={styles.hero} data-full-bleed data-hero="light">
        <Image
          src={course.settings.heroImage}
          alt=""
          fill
          sizes="100vw"
          quality={90}
          loading="eager"
          fetchPriority="high"
          className={styles.heroImage}
        />
        <div className={`${styles.inner} ${styles.heroContent}`}>
        <div className={styles.heroGrid}>
          <div className={styles.heroText}>
            <p className={styles.kicker}>{c.hero.eyebrow}</p>
            <h1 className={styles.title}>
              <span lang="en" dir="ltr">
                {c.hero.title}
              </span>
              <em>{c.hero.emphasis}</em>
            </h1>
            <p className={styles.lead}>{c.hero.lead}</p>
            <EnrolButton course={course} label={c.hero.button} className={styles.button} />
            <ul className={styles.facts}>
              {c.hero.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>
          <TrailerOrSoon course={course} label={c.hero.trailerLabel} soon={c.hero.trailerSoon} />
        </div>

        {/* The gift note, centred under the text and the trailer. */}
        {c.gift && (
          <p className={styles.gift}>
            <GiftIcon />
            <span>
              {c.gift.text} <Link href={`/${locale}${c.gift.path}`}>{c.gift.link}</Link>
            </span>
          </p>
        )}
        </div>
      </section>

      {/* What it gives: four outcomes, each with its line drawing. */}
      <section className={styles.gains}>
        <header className={styles.center}>
          <p className={styles.kicker}>{c.gains.kicker}</p>
          <h2 className={styles.sectionTitle}>
            {c.gains.title} <em>{c.gains.emphasis}</em>
          </h2>
          <p className={styles.sectionLead}>{c.gains.lead}</p>
        </header>
        <ul className={styles.gainList}>
          {c.gains.items.map((item) => (
            <li key={item.title} className={styles.gain}>
              <span className={styles.gainIcon}>
                <GainIconSvg icon={item.icon} />
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Inside: the four stages in one compact block. */}
      <section className={styles.inside}>
        <header className={styles.center}>
          <p className={styles.kicker}>{c.inside.kicker}</p>
          <h2 className={styles.sectionTitle}>
            {c.inside.title} <em>{c.inside.emphasis}</em>
          </h2>
        </header>
        <ol className={styles.stages}>
          {c.inside.sections.map((section) => (
            <li key={section.title} className={styles.stage}>
              <div>
                <h3>{section.title}</h3>
                <p>{section.text}</p>
              </div>
              <p className={styles.stageMeta}>
                <span>{section.lessons}</span>
                <span>{section.length}</span>
              </p>
            </li>
          ))}
        </ol>
        <p className={styles.techniques}>{c.inside.techniques}</p>
      </section>

      {/* Udemy reviews, in English on both pages. */}
      <section className={`${styles.wash} ${styles.reviewsBand}`} data-full-bleed>
        <div className={styles.inner}>
          <header className={styles.center}>
            <p className={styles.kicker}>{c.reviews.kicker}</p>
            <h2 className={styles.sectionTitle}>
              {c.reviews.title} <em>{c.reviews.emphasis}</em>
            </h2>
          </header>
          <ul className={styles.reviews}>
            {c.reviews.items.map((review) => (
              // The whole card in English, so the name lines up with the text.
              <li key={review.name} className={styles.review} lang="en" dir="ltr">
                <span className={styles.quoteMark} aria-hidden="true">
                  “
                </span>
                <blockquote>
                  <p>{review.text}</p>
                </blockquote>
                <p className={styles.reviewName}>{review.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Questions. */}
      <section className={styles.faq}>
        <h2 className={styles.sectionTitle}>{c.faq.title}</h2>
        {c.faq.items.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            {item.answer.map((paragraph) => (
              <p key={paragraph}>
                <Emphasis text={paragraph} />
              </p>
            ))}
          </details>
        ))}
        <p className={styles.faqNote}>{c.faq.note}</p>
      </section>

      {/* The closing band: one line and the button again. */}
      <section className={`${styles.dark} ${styles.closing}`} data-full-bleed>
        <div className={`${styles.inner} ${styles.center}`}>
          <h2 className={styles.sectionTitle}>
            {c.closing.title} <em>{c.closing.emphasis}</em>
          </h2>
          <p className={styles.closingText}>{c.closing.text}</p>
          <EnrolButton course={course} label={c.hero.button} className={styles.buttonLight} />
        </div>
      </section>
    </>
  );
}
