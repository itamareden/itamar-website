import Link from "next/link";
import { Flourish } from "@/app/[locale]/challenge/_components/Flourish";
import { ToolIcon } from "@/components/ToolIcon/ToolIcon";
import type { ToolsContent } from "@/content/tools";
import styles from "./Tools.module.css";

// The homepage tools: a short header, one strip of cards with their icons,
// and a link to where the tools are told in full (the About page).
export function Tools({ content, href }: { content: ToolsContent; href: string }) {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <Flourish />
        <h2 className={styles.title}>{content.home.title}</h2>
        <p className={styles.intro}>{content.home.intro}</p>
      </header>

      <ul className={styles.cards}>
        {content.tools.map((tool) => (
          <li key={tool.title} className={styles.card}>
            <span className={styles.icon}>
              <ToolIcon name={tool.icon} />
            </span>
            <h3 className={styles.cardTitle}>{tool.title}</h3>
            <p className={styles.cardText}>{tool.card}</p>
          </li>
        ))}
      </ul>

      <Link href={href} className={styles.link}>
        {content.home.link} ←
      </Link>
    </section>
  );
}
