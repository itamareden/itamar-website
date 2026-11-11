import type { Metadata } from "next";
import Image from "next/image";
import { SocialLinks } from "@/components/SocialLinks/SocialLinks";
import { WhatsAppIcon } from "@/app/[locale]/challenge/_components/WhatsAppIcon";
import { contact, contactSettings } from "@/content/contact";
import { getDictionary } from "@/dictionaries";
import { getLocale } from "@/i18n/get-locale";
import { ContactForm } from "./ContactForm";
import styles from "./page.module.css";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  const c = contact[await getLocale()];
  return { title: `${c.title} · ${dict.site.name}` };
}

// Small line icons for the details column, in the accent colour.
const icons = {
  mail: "M3 6h18v12H3zM3 6l9 7 9-7",
};

function LineIcon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
      <path d={d} />
    </svg>
  );
}

/*
 * The sea at sunset across the top third, softened and fading out at its
 * bottom; the framed panel (form + details) starts just above that edge.
 */
export default async function ContactPage() {
  const locale = await getLocale();
  const c = contact[locale];
  const d = c.details;

  // data-hero="light": the header lies on the photo, in its dark text.
  return (
    <section className={styles.page} data-full-bleed data-hero="light">
      <div className={styles.photo}>
        <Image src={contactSettings.image} alt={c.imageAlt} fill sizes="100vw" loading="eager" fetchPriority="high" className={styles.photoImage} />
      </div>

      <div className={styles.panel}>
        <div className={styles.main}>
          <header className={styles.heading}>
            <p className={styles.eyebrow}>{c.title}</p>
            <h1 className={styles.title}>{c.heading}</h1>
          </header>
          <div className={styles.lead}>
            {c.lead.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <ContactForm text={c.form} />
        </div>

        <aside className={styles.details}>
          <div className={styles.group}>
            <h2 className={styles.groupTitle}>{d.contactTitle}</h2>
            <ul className={styles.list}>
              <li>
                <LineIcon d={icons.mail} />
                <a href={`mailto:${contactSettings.email}`} className={styles.mail}>
                  <bdi>{contactSettings.email}</bdi>
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.group}>
            <h2 className={styles.groupTitle}>{d.whatsappTitle}</h2>
            <a href={d.whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.whatsapp}>
              <WhatsAppIcon className={styles.whatsappIcon} />
              {d.whatsappButton}
            </a>
          </div>

          <div className={`${styles.group} ${styles.social}`}>
            <h2 className={styles.groupTitle}>{d.socialTitle}</h2>
            <SocialLinks variant="bare" />
          </div>
        </aside>
      </div>
    </section>
  );
}
