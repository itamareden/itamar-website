import { SocialLinks } from "@/components/SocialLinks/SocialLinks";
import { photoCredit } from "@/content/credits";
import { getDictionary } from "@/dictionaries";
import { getLocale } from "@/i18n/get-locale";
import styles from "./SiteFooter.module.css";

export async function SiteFooter() {
  const dict = await getDictionary();
  const locale = await getLocale();
  // Pages are pre-built, so this is the year of the last build.
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>
          © {year} {dict.site.name}
        </p>
        <SocialLinks />
        <p>
          {photoCredit.label[locale]}:{" "}
          <a href={photoCredit.url} target="_blank" rel="noopener noreferrer" dir="ltr" className={styles.credit}>
            {photoCredit.handle}
          </a>
        </p>
      </div>
    </footer>
  );
}
