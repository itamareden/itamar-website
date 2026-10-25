import type { ListItem } from "@/content/challenge";
import styles from "../practice.module.css";
import { Emphasis } from "./Emphasis";

/*
 * A list with a small berry ring before each item. Items are either a
 * plain line or a bold title with paragraphs below it; once any item has
 * a title, the list gets the roomier titled spacing.
 */
export function RingList({ items }: { items: ListItem[] }) {
  const titled = items.some((item) => typeof item !== "string");

  return (
    <ul className={titled ? `${styles.ringList} ${styles.titledList}` : styles.ringList}>
      {items.map((item) =>
        typeof item === "string" ? (
          <li key={item}>
            <Emphasis text={item} />
          </li>
        ) : (
          <li key={item.title}>
            <h3 className={styles.itemTitle}>{item.title}</h3>
            {item.text.map((paragraph) => (
              <p key={paragraph}>
                <Emphasis text={paragraph} />
              </p>
            ))}
          </li>
        ),
      )}
    </ul>
  );
}
