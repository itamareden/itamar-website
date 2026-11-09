import type { Metadata } from "next";
import Image from "next/image";
import { Emphasis } from "@/components/Emphasis/Emphasis";
import { VoicesSlider } from "@/components/VoicesSlider/VoicesSlider";
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
      {/* The opening: a session in progress fills the screen, the text on it.
          data-hero lets the header sit on top of it in light text. */}
      <section className={styles.hero} data-full-bleed data-hero>
        <Image
          src="/images/sessions/session-hero-v2.jpg"
          alt={s.hero.imageAlt}
          fill
          // On phones the photo fills the screen's height, so it shows about
          // 1.78 times that height wide (16:9), far wider than the screen.
          sizes="(max-width: 44rem) 178vh, 100vw"
          quality={90}
          loading="eager"
          fetchPriority="high"
          className={styles.heroImage}
        />
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>{s.hero.eyebrow}</p>
            <h1 className={styles.title}>
              {s.hero.title} <em>{s.hero.emphasis}</em>
            </h1>
            <p className={styles.lead}>
              {s.hero.lead.map((part) => (
                <span key={part}>{part} </span>
              ))}
            </p>
            <WhatsAppButton className={`${styles.button} ${styles.heroButton}`} />
          </div>
        </div>
      </section>

      {/* A personal note from Itamar, in a white card. */}
      <section className={styles.note}>
        <div className={styles.noteColumn}>
          {s.note.map((beat) => (
            <div key={beat.paragraphs[0]} className={styles.beat}>
              {beat.lead && (
                <p className={styles.beatLead}>
                  <Emphasis text={beat.lead} />
                </p>
              )}
              {beat.paragraphs.map((paragraph) => (
                <p key={paragraph}>
                  <Emphasis text={paragraph} />
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* What can open up: five qualities on the wash, under a leaf shadow. */}
      <section className={`${styles.wash} ${styles.gainsBand}`} data-full-bleed>
        <div className={`${styles.inner} ${styles.center}`}>
          <p className={`${styles.kicker} ${styles.kickerLarge}`}>{s.gains.kicker}</p>
          <h2 className={styles.sectionTitle}>
            {s.gains.title} <em>{s.gains.emphasis}</em>
          </h2>
          <p className={styles.gainsLead}>{s.gains.lead}</p>
          <ul className={styles.gains}>
            {s.gains.items.map((item) => (
              <li key={item.title} className={styles.gain}>
                <Image src={item.image} alt="" width={512} height={512} className={styles.gainImage} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What people say, shared with the homepage. */}
      {voices && <VoicesSlider content={voices} />}

      {/* Two ways to meet: open rows on the wash, the length set large. */}
      <section className={`${styles.wash} ${styles.formatsBand}`} data-full-bleed>
        <div className={styles.inner}>
          <header className={styles.center}>
            <p className={`${styles.kicker} ${styles.kickerLarge}`}>{s.formats.kicker}</p>
            <h2 className={styles.sectionTitle}>
              {s.formats.title} <em>{s.formats.emphasis}</em>
            </h2>
            <p className={styles.formatsPlace}>{s.formats.place}</p>
          </header>
          <ul className={styles.formats}>
            {s.formats.items.map((format) => (
              <li key={format.title} className={styles.format}>
                <p className={styles.length}>
                  <bdi dir="ltr">{format.length}</bdi>
                  <span>{format.unit}</span>
                </p>
                <div className={styles.formatBody}>
                  <h3>{format.title}</h3>
                  {format.subtitle && (
                    <p className={styles.formatSubtitle}>{format.subtitle}</p>
                  )}
                  <p>{format.text}</p>
                  <p className={styles.formatWho}>{format.format}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* A breathwork session: five steps along its curve, which rises to the
          breath, drops to the rest and comes back. */}
      <section className={styles.flow}>
        <header className={styles.center}>
          <p className={styles.kicker}>{s.flow.kicker}</p>
          <h2 className={styles.sectionTitle}>
            {s.flow.title} {s.flow.emphasis}
          </h2>
        </header>
        <div className={styles.stepsTrack}>
          <svg
            className={styles.curve}
            viewBox="0 0 1000 300"
            preserveAspectRatio="none"
            fill="none"
            stroke="currentColor"
            strokeOpacity={0.4}
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path
              vectorEffect="non-scaling-stroke"
              d="M1000 185C960 183 930 180 900 175C830 163 770 155 700 135C630 115 570 14 500 14C400 14 400 230 300 230C230 230 180 130 100 120C65 116 30 115 0 115"
            />
          </svg>
          <ol className={styles.steps}>
            {s.flow.steps.map((step) => (
              <li key={step.title} className={styles.step}>
                <h3>{step.title}</h3>
                {step.length && <p className={styles.stepLength}>{step.length}</p>}
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Questions. */}
      <section className={styles.faq}>
        <h2 className={styles.sectionTitle}>{s.faq.title}</h2>
        {s.faq.items.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            {item.answer.map((paragraph) => (
              <p key={paragraph}>
                <Emphasis text={paragraph} />
              </p>
            ))}
          </details>
        ))}
        <p className={styles.faqNote}>{s.faq.note}</p>
      </section>

      {/* The closing band: a quiet room behind one line and the WhatsApp button. */}
      <section className={`${styles.dark} ${styles.closing}`} data-full-bleed>
        <Image
          src="/images/sessions/closing-room.jpg"
          alt=""
          fill
          sizes="100vw"
          quality={85}
          className={styles.closingImage}
        />
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
