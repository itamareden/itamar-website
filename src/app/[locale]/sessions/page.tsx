import type { Metadata } from "next";
import Image from "next/image";
import { ToolIcon } from "@/components/ToolIcon/ToolIcon";
import { Voices } from "@/components/Voices/Voices";
import { Flourish } from "@/app/[locale]/challenge/_components/Flourish";
import { WhatsAppIcon } from "@/app/[locale]/challenge/_components/WhatsAppIcon";
import { sessions as s } from "@/content/sessions/he";
import { getVoices } from "@/content/voices";
import { getDictionary } from "@/dictionaries";
import { getLocale } from "@/i18n/get-locale";
import styles from "./page.module.css";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  const he = (await getLocale()) === "he";
  return {
    title: `${dict.nav.sessions} · ${dict.site.name}`,
    description: he ? s.description : undefined,
  };
}

// The WhatsApp button, used in the opening and the closing band.
// No link until the number is set in the content settings.
function WhatsAppButton({ className }: { className: string }) {
  const href = s.settings.whatsappUrl || undefined;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      <WhatsAppIcon className={styles.buttonIcon} />
      {s.hero.button}
    </a>
  );
}

// Hebrew only for now; the English page keeps its placeholder.
export default async function SessionsPage() {
  const dict = await getDictionary();
  const locale = await getLocale();
  if (locale !== "he") return <h1>{dict.nav.sessions}</h1>;
  const voices = getVoices(locale);

  return (
    <>
      {/* The opening: title, lead and the WhatsApp button beside a session in progress. */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.kicker}>{s.hero.eyebrow}</p>
          <h1 className={styles.title}>
            {s.hero.title} <em>{s.hero.emphasis}</em>
          </h1>
          <p className={styles.lead}>{s.hero.lead}</p>
          <div className={styles.heroActions}>
            <WhatsAppButton className={styles.button} />
            <span className={styles.heroNote}>{s.hero.note}</span>
          </div>
        </div>
        <Image
          src="/images/sessions/session.jpg"
          alt={s.hero.imageAlt}
          width={2400}
          height={1350}
          sizes="(max-width: 44rem) 100vw, 45vw"
          quality={90}
          loading="eager"
          fetchPriority="high"
          className={styles.heroImage}
        />
      </section>

      {/* What you might take with you: the dark band, a rose tick per line. */}
      <section className={styles.dark} data-full-bleed>
        <div className={`${styles.inner} ${styles.center}`}>
          <p className={styles.darkKicker}>{s.gains.kicker}</p>
          <h2 className={styles.sectionTitle}>
            {s.gains.title} <em>{s.gains.emphasis}</em>
          </h2>
          <ul className={styles.gains}>
            {s.gains.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* What a session looks like: four steps, each with its tool's icon. */}
      <section className={styles.flow}>
        <header className={styles.center}>
          <Flourish />
          <p className={styles.kicker}>{s.flow.kicker}</p>
          <h2 className={styles.sectionTitle}>
            {s.flow.title} <em>{s.flow.emphasis}</em>
          </h2>
        </header>
        <ol className={styles.steps}>
          {s.flow.steps.map((step) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.stepIcon}>
                <ToolIcon name={step.icon} />
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Three ways to meet: soft gradient cards on the wash. */}
      <section className={styles.wash} data-full-bleed>
        <div className={styles.inner}>
          <header className={styles.center}>
            <p className={styles.kicker}>{s.formats.kicker}</p>
            <h2 className={styles.sectionTitle}>
              {s.formats.title} <em>{s.formats.emphasis}</em>
            </h2>
          </header>
          <ul className={styles.formats}>
            {s.formats.items.map((format) => (
              <li key={format.title} className={styles.format}>
                <h3>{format.title}</h3>
                <p className={styles.length}>{format.length}</p>
                <p>{format.text}</p>
              </li>
            ))}
          </ul>
          <p className={styles.formatsNote}>{s.formats.note}</p>
        </div>
      </section>

      {/* What people say, shared with the homepage. */}
      {voices && <Voices content={voices} />}

      {/* Before we breathe: the health note, in a quiet bordered card. */}
      <section className={styles.care}>
        <h2>{s.care.title}</h2>
        {s.care.text.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      {/* Questions. */}
      <section className={styles.faq}>
        <h2 className={styles.sectionTitle}>{s.faq.title}</h2>
        {s.faq.items.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </section>

      {/* The closing band: one line and the WhatsApp button. */}
      <section className={`${styles.dark} ${styles.closing}`} data-full-bleed>
        <div className={`${styles.inner} ${styles.center}`}>
          <h2 className={styles.sectionTitle}>
            {s.closing.title} <em>{s.closing.emphasis}</em>
          </h2>
          <p className={styles.closingText}>{s.closing.text}</p>
          <WhatsAppButton className={styles.buttonLight} />
        </div>
      </section>
    </>
  );
}
