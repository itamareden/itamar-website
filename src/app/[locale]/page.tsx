import { Hero } from "@/components/Hero/Hero";
import { getDictionary } from "@/dictionaries";

export default async function Home() {
  const dict = await getDictionary();

  return (
    <>
      <Hero
        image="/images/home/hero.jpg"
        imageAlt={dict.home.heroImageAlt}
        title={dict.home.heroTitle}
        titleEmphasis={dict.home.heroTitleEmphasis}
        lines={dict.home.heroLines}
      />
      <p>{dict.site.tagline}</p>
    </>
  );
}
