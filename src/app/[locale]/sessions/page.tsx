import { getDictionary } from "@/dictionaries";

// Placeholder until the real page is built.
export default async function SessionsPage() {
  const dict = await getDictionary();
  return <h1>{dict.nav.sessions}</h1>;
}
