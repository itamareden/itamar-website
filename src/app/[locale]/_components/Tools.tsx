import Link from "next/link";
import type { ToolsContent } from "@/content/tools";
import styles from "./Tools.module.css";

// The homepage tools: a short header, a light card per tool, a link to sessions.
export function Tools({ content, sessionsHref }: { content: ToolsContent; sessionsHref: string }) {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>{content.home.title}</h2>
        <p className={styles.intro}>{content.home.intro}</p>
      </header>

      <ul className={styles.cards}>
        {content.tools.map((tool) => (
          <li key={tool.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{tool.title}</h3>
            <p className={styles.cardText}>{tool.card}</p>
          </li>
        ))}
      </ul>

      <Link href={sessionsHref} className={styles.link}>
        {content.home.link} ←
      </Link>
    </section>
  );
}
