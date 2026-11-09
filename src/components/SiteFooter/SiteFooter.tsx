import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks/SocialLinks";
import { photoCredit } from "@/content/credits";
import { getDictionary } from "@/dictionaries";
import { getLocale } from "@/i18n/get-locale";
import { NewsletterForm } from "./NewsletterForm";
import styles from "./SiteFooter.module.css";

/*
 * The footer on every page, on sand like the header, in three short rows:
 * the mailing list, the offerings with the social icons, and a thin line for
 * the copyright and the photo credit.
 */
export async function SiteFooter() {
  const dict = await getDictionary();
  const locale = await getLocale();
  const f = dict.footer;
  // Pages are pre-built, so this is the year of the last build.
  const year = new Date().getFullYear();

  const links = [
    { href: `/${locale}/challenge`, label: f.challenge },
    { href: `/${locale}/sessions`, label: dict.nav.sessions },
    { href: `/${locale}/events`, label: dict.nav.events },
    { href: `/${locale}/courses`, label: dict.nav.courses },
    { href: `/${locale}/practices`, label: f.freeMeditations },
    { href: `/${locale}/about`, label: dict.nav.about },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.list}>
          <div>
            <h2 className={styles.listTitle}>{f.listTitle}</h2>
            <p className={styles.listText}>{f.listText}</p>
          </div>
          <NewsletterForm labels={f} />
        </div>

        <div className={styles.row}>
          <nav aria-label={f.linksLabel}>
            <ul className={styles.links}>
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <SocialLinks variant="bare" />
        </div>

        <div className={styles.bar}>
          <p>
            © {year} {dict.site.name}
          </p>
          <p>
            {photoCredit.label[locale]}:{" "}
            <a href={photoCredit.url} target="_blank" rel="noopener noreferrer" dir="ltr" className={styles.credit}>
              {photoCredit.handle}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
