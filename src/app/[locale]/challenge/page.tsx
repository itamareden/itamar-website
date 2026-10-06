import { getDictionary } from "@/dictionaries";

// Placeholder until the real page is built.
export default async function ChallengePage() {
  const dict = await getDictionary();
  return <h1>{dict.nav.challenge}</h1>;
}
