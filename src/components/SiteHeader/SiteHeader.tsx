import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher";
import { getDictionary, type Dictionary } from "@/dictionaries";
import { getLocale } from "@/i18n/get-locale";
import styles from "./SiteHeader.module.css";

// Order of the links in the nav. Labels come from the dictionary,
// so each entry is a key of dict.nav plus the path it links to.
const navItems: { key: keyof Dictionary["nav"]; path: string }[] = [
  { key: "about", path: "/about" },
  { key: "sessions", path: "/sessions" },
  { key: "events", path: "/events" },
  { key: "courses", path: "/courses" },
  { key: "practices", path: "/practices" },
  { key: "contact", path: "/contact" },
];

export async function SiteHeader() {
  const locale = await getLocale();
  const dict = await getDictionary();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href={`/${locale}`} className={styles.name}>
          {dict.site.name}
        </Link>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navItems.map(({ key, path }) => (
              <li key={key}>
                <Link href={`/${locale}${path}`} className={styles.navLink}>
                  {dict.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <LanguageSwitcher />
      </div>
    </header>
  );
}
