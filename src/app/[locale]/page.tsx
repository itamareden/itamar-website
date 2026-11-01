import { Hero } from "@/components/Hero/Hero";
import { getMeditations } from "@/content/home/meditations";
import { getTools } from "@/content/tools";
import { getDictionary } from "@/dictionaries";
import { getLocale } from "@/i18n/get-locale";
import { FreeMeditations } from "./_components/FreeMeditations";
import { Tools } from "./_components/Tools";

export default async function Home() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const meditations = getMeditations(locale);
  const tools = getTools(locale);

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
      {tools && <Tools content={tools} sessionsHref={`/${locale}/sessions`} />}
      {meditations && <FreeMeditations content={meditations} />}
    </>
  );
}
