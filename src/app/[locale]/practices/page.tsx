import Link from "next/link";
import { getPractices } from "@/content/practices";
import { getDictionary } from "@/dictionaries";
import { getLocale } from "@/i18n/get-locale";
import { Chooser } from "./Chooser";
import styles from "./page.module.css";

// Free guided meditations, chosen by what the visitor needs right now.
// Hebrew and English; a language without content keeps the placeholder title.
export default async function PracticesPage() {
  const locale = await getLocale();
  const content = getPractices(locale);

  if (!content) {
    const dict = await getDictionary();
    return <h1>{dict.nav.practices}</h1>;
  }

  return (
    <div className={styles.page}>
      <Chooser content={content} />

      <section className={styles.closing}>
        <h2 className={styles.closingTitle}>{content.closing.title}</h2>
        <p className={styles.closingText}>{content.closing.text}</p>
        <Link href={`/${locale}${content.closing.href}`} className={styles.closingButton}>
          {content.closing.cta}
        </Link>
      </section>
    </div>
  );
}
