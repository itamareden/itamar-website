import Image from "next/image";
import Link from "next/link";
import { Emphasis } from "@/components/Emphasis/Emphasis";
import { Hero } from "@/components/Hero/Hero";
import { VoicesCarousel } from "@/components/VoicesCarousel/VoicesCarousel";
import { getHomeSections } from "@/content/home/sections";
import { getMeditations } from "@/content/home/meditations";
import { getTools } from "@/content/tools";
import { getVoices } from "@/content/voices";
import { getDictionary } from "@/dictionaries";
import { getLocale } from "@/i18n/get-locale";
import { FreeMeditations } from "./_components/FreeMeditations";
import { Tools } from "./_components/Tools";
import styles from "./page.module.css";

export default async function Home() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const sections = getHomeSections(locale);
  const tools = getTools(locale);
  const voices = getVoices(locale);
  const meditations = getMeditations(locale);

  return (
    <>
      <Hero
        image="/images/home/hero.jpg"
        imageAlt={dict.home.heroImageAlt}
        title={dict.home.heroTitle}
        titleEmphasis={dict.home.heroTitleEmphasis}
        lines={dict.home.heroLines}
        cta={{ href: `/${locale}/challenge`, label: dict.home.heroCta }}
      />

      {/* An invitation: the title across the top, then the question and the story side by side,
          starting on the same line. No buttons here. */}
      {sections && (
        <section className={styles.invite}>
          <h2 className={styles.inviteOpening}>{sections.invite.opening}</h2>
          <div className={styles.inviteLead}>
            {sections.invite.imagine.map((line) => (
              <p key={line} className={styles.inviteImagine}>
                {line}
              </p>
            ))}
            <p className={styles.inviteQuestion}>{sections.invite.question}</p>
          </div>
          <div className={styles.inviteBody}>
            {sections.invite.body.map((paragraph) => (
              <p key={paragraph}>
                <Emphasis text={paragraph} />
              </p>
            ))}
          </div>
        </section>
      )}

      {/* Hello: a few warm lines beside the smiling portrait, and a way to the About page. */}
      {sections && (
        <section className={styles.hello}>
          <div className={styles.helloText}>
            <h2 className={styles.sectionTitle}>
              {sections.hello.title} <em>{sections.hello.emphasis}</em>
            </h2>
            {sections.hello.text.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <Link href={sections.hello.link.href} className={styles.textLink}>
              {sections.hello.link.label} ←
            </Link>
          </div>
          <Image
            src="/images/challenge/guide.jpg"
            alt={sections.hello.imageAlt}
            width={1100}
            height={1706}
            sizes="(max-width: 44rem) 90vw, 40vw"
            className={styles.helloImage}
          />
        </section>
      )}

      {tools && <Tools content={tools} href={`/${locale}/about`} />}

      {/* The ways to practise together: a card per offering, on the wash. */}
      {sections && (
        <section className={styles.wash} data-full-bleed>
          <div className={styles.inner}>
            <header className={styles.center}>
              <p className={styles.kicker}>{sections.ways.kicker}</p>
              <h2 className={styles.sectionTitle}>
                {sections.ways.title} <em>{sections.ways.emphasis}</em>
              </h2>
            </header>
            <ul className={styles.ways}>
              {sections.ways.items.map((way) => (
                <li key={way.href} className={styles.way}>
                  <div className={styles.wayMedia}>
                    <Image
                      src={way.image}
                      alt={way.imageAlt}
                      fill
                      sizes="(max-width: 60rem) 90vw, 30vw"
                      className={styles.wayImage}
                      style={{ objectPosition: way.imagePosition }}
                    />
                  </div>
                  <div className={styles.wayBody}>
                    <p className={styles.wayLabel}>{way.label}</p>
                    <h3>{way.title}</h3>
                    <p className={styles.wayText}>{way.text}</p>
                    <Link href={way.href} className={styles.wayButton}>
                      {way.cta}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {voices && (
        <VoicesCarousel content={voices} href={`/${locale}/sessions`} className={styles.voices} />
      )}

      {meditations && <FreeMeditations content={meditations} />}
    </>
  );
}
