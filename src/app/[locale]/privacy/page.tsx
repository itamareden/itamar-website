import type { Metadata } from "next";
import { privacy } from "@/content/privacy";
import { getSeo } from "@/content/seo";
import { getLocale } from "@/i18n/get-locale";
import styles from "./page.module.css";

export async function generateMetadata(): Promise<Metadata> {
  return getSeo("privacy", await getLocale());
}

// A plain reading page: title and date, then one short section per topic.
export default async function PrivacyPage() {
  const p = privacy[await getLocale()];

  return (
    <article className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>{p.title}</h1>
        <p className={styles.updated}>{p.updated}</p>
      </header>
      {p.intro.map((line) => (
        <p key={line}>{line}</p>
      ))}
      {p.sections.map((section) => (
        <section key={section.heading} className={styles.section}>
          <h2 className={styles.heading}>{section.heading}</h2>
          {section.text.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </section>
      ))}
    </article>
  );
}
