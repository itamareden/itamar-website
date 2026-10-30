import { Hero } from "@/components/Hero/Hero";
import { getMeditations } from "@/content/home/meditations";
import { getDictionary } from "@/dictionaries";
import { getLocale } from "@/i18n/get-locale";
import { FreeMeditations } from "./_components/FreeMeditations";

export default async function Home() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const meditations = getMeditations(locale);

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
      {meditations && <FreeMeditations content={meditations} />}
    </>
  );
}
