import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Emphasis } from "@/components/Emphasis/Emphasis";
import { ToolIcon } from "@/components/ToolIcon/ToolIcon";
import { about as a } from "@/content/about/he";
import { getTools } from "@/content/tools";
import { getDictionary } from "@/dictionaries";
import { getLocale } from "@/i18n/get-locale";
import styles from "./page.module.css";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  const he = (await getLocale()) === "he";
  return {
    title: `${dict.nav.about} · ${dict.site.name}`,
    description: he ? a.description : undefined,
  };
}

// Hebrew only for now; the English page keeps its placeholder.
export default async function AboutPage() {
  const dict = await getDictionary();
  const locale = await getLocale();
  if (locale !== "he") return <h1>{dict.nav.about}</h1>;
  const tools = getTools(locale);

  return (
    <>
      {/* The palo santo photo filling the first screen, with the greeting and
          one line on it, on the right as on the homepage. */}
      <section className={styles.top} data-full-bleed data-hero>
        <Image
          src="/images/about/palo-santo.jpg"
          alt={a.hello.imageAlt}
          fill
          sizes="100vw"
          quality={90}
          loading="eager"
          fetchPriority="high"
          className={styles.topImage}
        />
        <div className={styles.topInner}>
          <h1 className={styles.title}>
            {a.hello.title} <em>{a.hello.emphasis}</em>
          </h1>
          <p className={styles.lead}>{a.hello.lead}</p>
        </div>
      </section>

      {/* A short hello, then buttons that jump to each part of the page. */}
      <section className={styles.hello}>
        <div className={styles.intro}>
          {a.hello.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className={styles.question}>{a.hello.question}</p>
        {/* The lotus line drawing from the Sessions page, between two short lines. */}
        <div className={styles.lotus} aria-hidden="true">
          <Image src="/images/sessions/gain-lotus-line.png" alt="" width={44} height={44} />
        </div>
        <nav className={styles.jump}>
          <a href="#journey">
            <strong>{a.journey.title}</strong>
            <span>{a.hello.teasers.journey}</span>
          </a>
          {tools && (
            <a href="#tools">
              <strong>{tools.about.title}</strong>
              <span>{a.hello.teasers.tools}</span>
            </a>
          )}
          <a href="#lights">
            <strong>{a.why.title}</strong>
            <span>{a.hello.teasers.lights}</span>
          </a>
        </nav>
      </section>

      {/* My journey: one sand box, with the portrait and the story's opening
          side by side, and the rest of the story under them. The "what lights
          me up" part below is built the same way, in peach. */}
      <section id="journey" className={styles.storyBox}>
        <div className={styles.storyOpening}>
          <Image
            src="/images/about/forest-portrait.jpg"
            alt={a.journey.portraitAlt}
            width={1200}
            height={1800}
            sizes="(max-width: 44rem) 100vw, 36rem"
            className={styles.storyImage}
          />
          <div className={styles.storyPanel}>
            <h2 className={styles.sectionTitle}>{a.journey.title}</h2>
            {a.journey.opening.map((paragraph) => (
              <p key={paragraph}>
                <Emphasis text={paragraph} />
              </p>
            ))}
          </div>
        </div>
        <div className={styles.story}>
          {a.journey.text.map((paragraph) => (
            <p key={paragraph}>
              <Emphasis text={paragraph} />
            </p>
          ))}
          <p className={styles.storyClosing}>
            <Emphasis text={a.journey.closing} />
          </p>
        </div>
      </section>

      {/* My tools: one per row, a large icon beside each, alternating sides. */}
      {tools && (
        <section id="tools" className={styles.toolsSection}>
          <header className={styles.toolsHeader}>
            <h2 className={styles.sectionTitle}>{tools.about.title}</h2>
            <p className={styles.toolsIntro}>{tools.about.intro}</p>
          </header>
          <ul className={styles.tools}>
            {tools.tools.map((tool) => (
              <li key={tool.title} className={styles.tool}>
                {/* One colour for every circle here: the berry of meditation. */}
                <span className={styles.toolIcon}>
                  {tool.drawing ? (
                    <Image src={tool.drawing} alt="" width={600} height={600} sizes="11rem" className={styles.toolIconDrawing} />
                  ) : (
                    <ToolIcon name={tool.icon} />
                  )}
                </span>
                <div className={styles.toolText}>
                  <h3>{tool.title}</h3>
                  {tool.text.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* What lights me up: the black-and-white portrait beside the text, on the wash. */}
      <section id="lights" className={`${styles.storyBox} ${styles.lights}`}>
        <div className={styles.storyOpening}>
          <Image
            src="/images/about/joy.jpg"
            alt={a.why.imageAlt}
            width={1100}
            height={1375}
            sizes="(max-width: 44rem) 100vw, 36rem"
            className={styles.storyImage}
          />
          <div className={styles.storyPanel}>
            <h2 className={styles.sectionTitle}>{a.why.title}</h2>
            {a.why.text.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Where to go next: the dark band with two ways in. */}
      <section className={`${styles.dark} ${styles.closing}`} data-full-bleed>
        <div className={styles.next}>
          <h2 className={styles.sectionTitle}>
            {a.next.title} <em>{a.next.emphasis}</em>
          </h2>
          <p className={styles.nextText}>{a.next.text}</p>
          <div className={styles.buttons}>
            <Link href={a.next.sessions.href} className={styles.button}>
              {a.next.sessions.label}
            </Link>
            <Link href={a.next.challenge.href} className={styles.buttonSoft}>
              {a.next.challenge.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
