import Image from "next/image";
import Link from "next/link";
import { TOOL_TONES, ToolIcon } from "@/components/ToolIcon/ToolIcon";
import type { ToolsContent } from "@/content/tools";
import styles from "./Tools.module.css";

// The homepage tools: a short header, one strip of cards with their icons,
// and a link to where the tools are told in full (the About page).
export function Tools({ content, href }: { content: ToolsContent; href: string }) {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>{content.home.title}</h2>
        <p className={styles.intro}>{content.home.intro}</p>
      </header>

      <ul className={styles.cards}>
        {content.tools.map((tool) => (
          <li key={tool.title} className={styles.card}>
            {/* A drawing in a berry circle where there is one, else the icon in its tone. */}
            {tool.drawing ? (
              <span className={`${styles.icon} ${styles.withDrawing}`}>
                <Image src={tool.drawing} alt="" width={600} height={600} sizes="6rem" className={styles.drawing} />
              </span>
            ) : (
              <span className={styles.icon} style={{ "--tone": TOOL_TONES[tool.icon] } as React.CSSProperties}>
                <ToolIcon name={tool.icon} />
              </span>
            )}
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
