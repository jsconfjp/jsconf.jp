import { Metadata } from "next";
import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Markdown } from "@/components/Markdown";
import { PageContainer } from "@/components/PageContainer";
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

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const t = await getTranslations({
    locale: locale as Locale,
  });

  return (
    <PageContainer title={t("navigation.venue")}>
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
    </PageContainer>
  );
}
