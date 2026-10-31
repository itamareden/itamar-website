import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Emphasis } from "@/components/Emphasis/Emphasis";
import { Flourish } from "@/app/[locale]/challenge/_components/Flourish";
import { about as a } from "@/content/about/he";
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
  if ((await getLocale()) !== "he") return <h1>{dict.nav.about}</h1>;

  return (
    <>
      {/* Hello and my journey: one text column beside the warm portrait,
          which stays in view while the text scrolls past. */}
      <section className={`${styles.hello} ${styles.split}`}>
        <div className={styles.story}>
          <div className={styles.helloText}>
            <h1 className={styles.title}>{a.hello.title}</h1>
            {a.hello.text.map((paragraph) => (
              <p key={paragraph}>
                <Emphasis text={paragraph} />
              </p>
            ))}
          </div>

          <header className={styles.storyHeader}>
            <Flourish />
            <h2 className={styles.sectionTitle}>{a.journey.title}</h2>
          </header>
          {a.journey.text.map((paragraph) => (
            <p key={paragraph}>
              <Emphasis text={paragraph} />
            </p>
          ))}
          <p className={styles.storyClosing}>
            <Emphasis text={a.journey.closing} />
          </p>
        </div>
        <Image
          src="/images/about/hello.jpg"
          alt={a.hello.imageAlt}
          width={1100}
          height={1622}
          sizes="(max-width: 44rem) 90vw, 40vw"
          loading="eager"
          className={styles.helloImage}
        />
      </section>

      {/* Why and for whom: the black-and-white portrait beside the text, on the wash. */}
      <section className={styles.wash} data-full-bleed>
        <div className={`${styles.inner} ${styles.split} ${styles.why}`}>
          <Image
            src="/images/about/joy.jpg"
            alt={a.why.imageAlt}
            width={1100}
            height={1375}
            sizes="(max-width: 44rem) 90vw, 40vw"
            className={styles.whyImage}
          />
          <div className={styles.whyText}>
            <h2 className={styles.sectionTitle}>{a.why.title}</h2>
            {a.why.text.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className={styles.belief}>{a.why.belief}</p>
            {a.why.passion.map((paragraph) => (
              <p key={paragraph}>
                <Emphasis text={paragraph} />
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Where to go next: the dark band with two ways in. */}
      <section className={styles.dark} data-full-bleed>
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
