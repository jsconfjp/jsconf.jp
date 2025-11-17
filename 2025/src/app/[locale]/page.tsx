import { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import { SponsorGrid } from "@/components/SponsorGrid";
import { Team } from "@/components/Team";
import { Venue } from "@/components/Venue";
import { SPONSORS } from "@/constants/sponsors";
import { Locale } from "@/i18n/constants";
import FloorMap from "../../../public/misc/floor-map.png";

type Params = { locale: Locale };

type Props = {
  params: Promise<Params>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
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
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale });

  return (
    <div className="pt-8 md:pt-32">
      <div className="max-w-screen-md mx-auto px-4 lg:px-0">
        <Hero />
      </div>

      <div className="max-w-screen-md mx-auto mt-8 md:mt-32 flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-center">
          {t("navigation.floorMap")}
        </h2>
        <div className="w-full">
          <Image
            alt={t("navigation.floorMap")}
            src={FloorMap}
            width={1192}
            height={843}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="max-w-screen-md mx-auto mt-8 md:mt-32 flex flex-col gap-4">
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
