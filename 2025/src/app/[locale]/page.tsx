import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import { SponsorGrid } from "@/components/SponsorGrid";
import { Team } from "@/components/Team";
import { SPONSORS } from "@/constants/sponsors";
import { ensureLocale } from "@/i18n/ensureLocale";

type Params = { locale: string };

type Props = {
  params: Promise<Params>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = ensureLocale((await params).locale);
  const t = await getTranslations({
    locale,
    namespace: "about",
  });

  return {
    title: {
      absolute: t("title"),
    },
  };
}

export default async function Page({ params }: Props) {
  const locale = ensureLocale((await params).locale);
  setRequestLocale(locale);

  const t = await getTranslations({ locale });

  return (
    <div className="pt-8 md:pt-32">
      <div className="max-w-screen-md mx-auto px-4 lg:px-0">
        <Hero />
      </div>

      <div className="max-w-screen-md mx-auto mt-8 md:mt-16 flex flex-col gap-4 px-4 lg:px-0">
        <p className="text-lg md:text-xl font-bold text-center">
          {t("about.thankYou")}
        </p>
        <div className="w-full aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/me9KQ1SpKK4?si=byHOxwIpCcctOFyE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

      <div className="max-w-screen-md mx-auto mt-8 md:mt-32 flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-center">
          {t("navigation.sponsors")}
        </h2>
        <SponsorGrid sponsors={SPONSORS} showPrText={false} />
        <div className="flex items-center justify-center">
          <Button href="/sponsors" variant="secondary" size="md">
            {t("navigation.viewDetails")}
          </Button>
        </div>
      </div>

      <div className="bg-trinidad-100 pt-12 pb-24 px-4 lg:px-0 mt-8 md:mt-32">
        <div className="max-w-screen-md mx-auto">
          <h2 className="text-3xl font-bold my-4 text-center">
            {t("team.team")}
          </h2>
          <Team />
        </div>
      </div>
    </div>
  );
}
