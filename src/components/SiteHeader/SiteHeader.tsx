import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher";
import { MobileMenu } from "@/components/MobileMenu/MobileMenu";
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

  // Ready-made links, used by both the desktop nav and the mobile menu.
  const links = navItems.map(({ key, path }) => ({
    href: `/${locale}${path}`,
    label: dict.nav[key],
  }));

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href={`/${locale}`} className={styles.name}>
          {dict.site.name}
        </Link>

        {/* Wide screens: the full nav and the language switcher. */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={styles.navLink}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <LanguageSwitcher className={styles.desktopOnly} />

        {/* Small screens: a menu button instead. */}
        <MobileMenu items={links} openLabel={dict.menu.open} closeLabel={dict.menu.close} />
      </div>
    </header>
  );
}
