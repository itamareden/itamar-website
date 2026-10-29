import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Emphasis } from "@/components/Emphasis/Emphasis";
import { Flourish } from "@/app/[locale]/challenge/_components/Flourish";
import { mindfulness as m } from "@/content/events/mindfulness";
import { getDictionary } from "@/dictionaries";
import { getLocale } from "@/i18n/get-locale";
import styles from "./page.module.css";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return { title: `${m.hero.title} · ${dict.site.name}`, description: m.hero.lead };
}

// The live online course. Hebrew only for now.
export default async function MindfulnessPage() {
  if ((await getLocale()) !== "he") notFound();

  return (
    <>
      {/* A full photo with the title, facts and price on the start side.
          data-hero lets the header sit on top of it in light text. */}
      <section className={styles.hero} data-full-bleed data-hero>
        <Image
          src="/images/challenge/hero.jpg"
          alt={m.hero.imageAlt}
          fill
          sizes="100vw"
          quality={90}
          loading="eager"
          fetchPriority="high"
          className={styles.heroImage}
        />
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>{m.hero.eyebrow}</p>
            <h1 className={styles.title}>
              {m.hero.title} <em>{m.hero.emphasis}</em>
            </h1>
            <p className={styles.lead}>{m.hero.lead}</p>

            <ul className={styles.facts}>
              {m.hero.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>

            <div className={styles.offer}>
              {/* No link yet: the payment page isn't set up. */}
              <a href={m.settings.registerUrl || undefined} className={styles.button}>
                {m.hero.button}
              </a>
              <p className={styles.price}>
                <s>{m.hero.price.regular}</s>
                <span className={styles.launch}>{m.hero.price.launch}</span>
                <span className={styles.priceNote}>{m.hero.price.note}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for: the text beside a photo, on the warm wash. */}
      <section className={styles.wash} data-full-bleed>
        <div className={`${styles.inner} ${styles.split}`}>
          <div className={styles.who}>
            <p className={styles.kicker}>{m.who.kicker}</p>
            <h2 className={styles.sectionTitle}>
              {m.who.title} <em>{m.who.emphasis}</em>
            </h2>
            <p className={styles.whoIntro}>{m.who.intro}</p>
            <ul className={styles.dots}>
              {m.who.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={styles.whoOutro}>
              <Emphasis text={m.who.outro} />
            </p>
          </div>
          <Image
            src="/images/events/mindfulness/who.jpg"
            alt={m.who.imageAlt}
            width={1100}
            height={1650}
            sizes="(max-width: 44rem) 90vw, 40vw"
            className={styles.whoImage}
          />
        </div>
      </section>

      {/* A personal note: everyday moments of what can change. */}
      <section className={styles.note}>
        <header className={styles.noteHeader}>
          <Flourish />
          <p className={styles.noteOpening}>{m.note.opening}</p>
          <p className={styles.noteIntro}>{m.note.intro}</p>
        </header>
        <ul className={styles.moments}>
          {m.note.moments.map((moment) => (
            <li key={moment}>{moment}</li>
          ))}
        </ul>
        <p className={styles.noteClosing}>
          <Emphasis text={m.note.closing} />
        </p>
      </section>

      {/* What you'll take with you: the dark band, one glass card per gain. */}
      <section className={styles.dark} data-full-bleed>
        <div className={styles.inner}>
          <div className={styles.center}>
            <p className={styles.darkKicker}>{m.gains.kicker}</p>
            <h2 className={styles.sectionTitle}>
              {m.gains.title} <em>{m.gains.emphasis}</em>
            </h2>
          </div>
          <ul className={styles.gains}>
            {m.gains.items.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works: three numbered pillars on the plain ivory page. */}
      <section className={styles.how}>
        <p className={styles.kicker}>{m.how.kicker}</p>
        <h2 className={styles.sectionTitle}>
          {m.how.title} <em>{m.how.emphasis}</em>
        </h2>
        <ol className={styles.pillars}>
          {m.how.pillars.map((pillar) => (
            <li key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* The ten themes: tall tiles, a photo (or a placeholder gradient)
          with the theme's name and line over its lower part. */}
      <section className={styles.wash} data-full-bleed>
        <div className={styles.inner}>
          <div className={styles.center}>
            <p className={styles.kicker}>{m.themes.kicker}</p>
            <h2 className={styles.sectionTitle}>
              {m.themes.title} <em>{m.themes.emphasis}</em>
            </h2>
          </div>
          <ul className={styles.themes}>
            {m.themes.items.map((theme) => (
              <li
                key={theme.title}
                className={styles.theme}
                style={{ background: `linear-gradient(160deg, ${theme.tone[0]}, ${theme.tone[1]})` }}
              >
                {theme.image && (
                  <Image
                    src={theme.image}
                    alt=""
                    fill
                    sizes="(max-width: 60rem) 50vw, 20vw"
                    className={styles.themeImage}
                  />
                )}
                <h3>{theme.title}</h3>
                <p>{theme.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* A line of Itamar's over a full-width photo of him. */}
      <section className={styles.quote} data-full-bleed>
        <Image
          src="/images/events/mindfulness/quote.jpg"
          alt={m.quote.imageAlt}
          fill
          sizes="100vw"
          className={styles.quoteImage}
        />
        <div className={`${styles.inner} ${styles.quoteInner}`}>
          <p className={styles.quoteText}>{m.quote.text}</p>
        </div>
      </section>

      {/* The offer: one standout card on the wash. */}
      <section className={styles.wash} id="offer" data-full-bleed>
        <div className={`${styles.inner} ${styles.offerWrap}`}>
          <div className={styles.center}>
            <p className={styles.kicker}>{m.offer.kicker}</p>
            <h2 className={styles.sectionTitle}>
              {m.offer.title} <em>{m.offer.emphasis}</em>
            </h2>
          </div>
          <div className={styles.offerCard}>
            <div className={styles.offerTop}>
              <p className={styles.offerPrice}>
                <s>{m.hero.price.regular}</s>
                <span>{m.hero.price.launch}</span>
              </p>
              <p className={styles.offerNote}>{m.hero.price.note}</p>
            </div>
            <div className={styles.offerBody}>
              <ul className={styles.ticks}>
                {m.offer.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className={styles.bonus}>
                <p className={styles.bonusTitle}>{m.offer.bonus.title}</p>
                <p>{m.offer.bonus.text}</p>
              </div>
              {/* No link yet: the payment page isn't set up. */}
              <a href={m.settings.registerUrl || undefined} className={styles.offerButton}>
                {m.hero.button}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who am I: a short text beside a portrait, linking to the About page. */}
      <section className={`${styles.about} ${styles.split}`}>
        <div className={styles.aboutText}>
          <p className={styles.kicker}>{m.about.kicker}</p>
          <h2 className={styles.sectionTitle}>
            {m.about.title} <em>{m.about.emphasis}</em>
          </h2>
          {m.about.text.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Link href="/he/about" className={styles.aboutLink}>
            {m.about.link} ←
          </Link>
        </div>
        <Image
          src="/images/events/mindfulness/about.jpg"
          alt={m.about.imageAlt}
          width={1100}
          height={1542}
          sizes="(max-width: 44rem) 90vw, 40vw"
          className={styles.aboutImage}
        />
      </section>

      {/* Questions, on the wash. */}
      <section className={styles.wash} data-full-bleed>
        <div className={`${styles.inner} ${styles.faq}`}>
          <h2 className={styles.sectionTitle}>{m.faq.title}</h2>
          {m.faq.items.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* The closing band: when it starts, one line, the button. */}
      <section className={`${styles.dark} ${styles.closing}`} data-full-bleed>
        <div className={`${styles.inner} ${styles.center}`}>
          <p className={styles.darkKicker}>{m.closing.kicker}</p>
          <h2 className={styles.sectionTitle}>
            {m.closing.title} <em>{m.closing.emphasis}</em>
          </h2>
          <p className={styles.closingText}>{m.closing.text}</p>
          {/* No link yet: the payment page isn't set up. */}
          <a href={m.settings.registerUrl || undefined} className={styles.button}>
            {m.hero.button}
          </a>
        </div>
      </section>    </>
  );
}
