import { GoogleMaps } from "@/components/GoogleMaps";
import { PLACE_ID } from "@/constants/venue";
import { Metadata } from "next";
import { Locale, useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { use } from "react";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "navigation",
  });
  return {
    title: t("venue"),
  };
}

export default function Page({ params }: Props) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);

  const t = useTranslations();

  return (
    <div className="max-w-screen-lg mx-auto px-4 lg:px-0 pt-16 md:pt-32 flex flex-col gap-4">
      <h1 className="text-3xl font-bold my-4 text-center">
        {t("navigation.venue")}
      </h1>
      <div className="h-96 flex flex-col gap-2">
        <h2 className="text-xl font-bold text-center">
          {t("venue.placeName")}
        </h2>
        <p className="text-sm text-center">{t("venue.address")}</p>
        <GoogleMaps
          mapMode="place"
          params={{ q: `place_id:${PLACE_ID}`, language: locale }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold text-center">
          {t("venue.accessByTrain")}
        </h2>
        <p className="text-sm text-center">
          {t("venue.accessByTrainDescription")}
        </p>

        <h2 className="text-xl font-bold text-center">
          {t("venue.accessFromAirport")}
        </h2>
        <p className="text-sm text-center">
          {t("venue.accessFromAirportDescription")}
        </p>
      </div>
    </div>
  );
}
