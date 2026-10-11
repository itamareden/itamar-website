import { Hero } from "@/components/Hero/Hero";
import { getDictionary } from "@/dictionaries";
import { getLocale } from "@/i18n/get-locale";

export default async function Home() {
  const locale = await getLocale();
  const dict = await getDictionary();

  return (
    <>
      <Hero
        image="/images/home/hero.jpg"
        imageAlt={dict.home.heroImageAlt}
        title={dict.home.heroTitle}
        titleEmphasis={dict.home.heroTitleEmphasis}
        lines={dict.home.heroLines}
        cta={{ href: `/${locale}/challenge`, label: dict.home.heroCta }}
      />
      <p>{dict.site.tagline}</p>
    </>
  );
}
