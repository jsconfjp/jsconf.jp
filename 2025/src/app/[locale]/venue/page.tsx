import { Metadata } from "next";
import { Locale, useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { use } from "react";
import { Markdown } from "@/components/Markdown";
import { Venue } from "@/components/Venue";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
  });
  return {
    title: t("navigation.venue"),
    description: `${t("venue.placeName")} | ${t("venue.address")}`,
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
      <Venue locale={locale} />
      <div className="flex flex-col gap-2 max-w-screen-sm mx-auto">
        <h2 className="text-2xl font-bold text-center">{t("venue.access")}</h2>
        <h3 className="text-xl font-bold">{t("venue.accessByTrain")}</h3>
        <div>
          <Markdown>{t("venue.accessByTrainDescription")}</Markdown>
        </div>

        {/* TODO: 後で対応 */}
        {/* <h3 className="text-xl font-bold">{t("venue.accessFromAirport")}</h3>
        <div>
          <Markdown>{t("venue.accessFromAirportDescription")}</Markdown>
        </div> */}
      </div>
    </div>
  );
}
