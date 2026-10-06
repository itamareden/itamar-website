import { getDictionary } from "@/dictionaries";

// Placeholder until the real page is built.
export default async function PracticesPage() {
  const dict = await getDictionary();
  return <h1>{dict.nav.practices}</h1>;
}
