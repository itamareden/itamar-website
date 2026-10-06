import { getDictionary } from "@/dictionaries";

export default async function Home() {
  const dict = await getDictionary();

  return (
    <>
      <h1>{dict.site.name}</h1>
      <p>{dict.site.tagline}</p>
    </>
  );
}
