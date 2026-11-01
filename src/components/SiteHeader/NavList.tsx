"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./SiteHeader.module.css";

/*
 * The desktop nav links. A client component only to read the current path,
 * so the link to the page you're on (or a page inside it, like an event
 * under /events) gets aria-current and its underline.
 */
export function NavList({ links }: { links: { href: string; label: string }[] }) {
  const pathname = usePathname();

  return (
    <ul className={styles.navList}>
      {links.map(({ href, label }) => {
        const current = pathname === href || pathname.startsWith(`${href}/`);
        return (
          <li key={href}>
            <Link href={href} className={styles.navLink} aria-current={current ? "page" : undefined}>
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
