import { getDictionary } from "@/dictionaries";

// Placeholder until the real page is built.
export default async function ContactPage() {
  const dict = await getDictionary();
  return <h1>{dict.nav.contact}</h1>;
}
