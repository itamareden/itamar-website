import { getDictionary } from "@/dictionaries";
import styles from "./SiteFooter.module.css";

export async function SiteFooter() {
  const dict = await getDictionary();
  // Pages are pre-built, so this is the year of the last build.
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>
          © {year} {dict.site.name}
        </p>
      </div>
    </footer>
  );
}
