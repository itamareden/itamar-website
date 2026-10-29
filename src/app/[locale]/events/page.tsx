import type { Metadata } from "next";
import Link from "next/link";
import { getEvents } from "@/content/events";
import { getDictionary } from "@/dictionaries";
import { getLocale } from "@/i18n/get-locale";
import styles from "./page.module.css";

export async function generateMetadata(): Promise<Metadata> {
  const events = getEvents(await getLocale());
  const dict = await getDictionary();
  return { title: `${events.title} · ${dict.site.name}`, description: events.intro };
}

// The events list: a card per event, each leading to the event's own page.
export default async function EventsPage() {
  const locale = await getLocale();
  const e = getEvents(locale);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>{e.title}</h1>
        <p className={styles.intro}>{e.intro}</p>
      </header>

      {e.events.length === 0 ? (
        <p className={styles.empty}>{e.empty}</p>
      ) : (
        <ul className={styles.cards}>
          {e.events.map((event) => (
            <li key={event.slug} className={styles.card}>
              <p className={styles.label}>{event.label}</p>
              <h2 className={styles.cardTitle}>{event.title}</h2>
              <p className={styles.when}>{event.when}</p>
              <p className={styles.summary}>{event.summary}</p>
              <Link href={`/${locale}/events/${event.slug}`} className={styles.more}>
                {e.more}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
