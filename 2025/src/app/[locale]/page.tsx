import ArrowTopRightOnSquareIcon from "@heroicons/react/24/outline/ArrowTopRightOnSquareIcon";
import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Team } from "@/components/Team";
import { Button } from "@/components/Button";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { use } from "react";
import { Locale } from "@/i18n/constants";
import { useTranslations } from "next-intl";
import { Venue } from "@/components/Venue";
import { CFP_FORM_URL, SPONSOR_FORM_URL } from "@/constants/external";
// import { SponsorGrid } from "@/components/SponsorGrid";
// import { SPONSORS } from "@/constants/sponsors";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "about",
  });
  return {
    title: {
      absolute: t("title"),
    },
  };
}

export default function Home({ params }: Props) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);

  const t = useTranslations();

  return (
    <div className="pt-16 md:pt-32">
      <div className="max-w-screen-md mx-auto px-4 lg:px-0">
        <Hero />

        <div className="mt-20 flex flex-col md:flex-row justify-center gap-4 md:gap-8">
          <Button
            full
            variant="primary"
            size="lg"
            href={CFP_FORM_URL}
            target="_blank"
            endIcon={<ArrowTopRightOnSquareIcon className="w-4 h-4" />}
          >
            {t("cta.submitTalk")}
          </Button>
          <Button
            full
            variant="primary"
            size="lg"
            href={SPONSOR_FORM_URL}
            target="_blank"
            endIcon={<ArrowTopRightOnSquareIcon className="w-4 h-4" />}
          >
            {t("cta.becomeSponsor")}
          </Button>
        </div>
      </div>

      <div className="max-w-screen-md mx-auto mt-16 md:mt-32 flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-center">
          {t("navigation.venue")}
        </h2>
        <Venue locale={locale} />
        <div className="flex items-center justify-center">
          <Button href="/venue" variant="secondary" size="md">
            {t("navigation.viewDetails")}
          </Button>
        </div>
      </div>

      {/* <div className="max-w-screen-md mx-auto mt-16 md:mt-32">
        <h2 className="text-3xl font-bold my-4 text-center">
          {t("navigation.sponsors")}
        </h2>
        <SponsorGrid sponsors={SPONSORS} showPrText />
      </div> */}

      <div className="bg-trinidad-100 pt-12 pb-24 px-4 lg:px-0 mt-16 md:mt-32">
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
