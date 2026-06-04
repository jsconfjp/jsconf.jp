import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Button } from "@/components/Button";
import { Markdown } from "@/components/Markdown";
import { PageContainer } from "@/components/PageContainer";
import { Venue } from "@/components/Venue";
import { OFFICIAL_URL } from "@/constants/venue";
import { ensureLocale } from "@/i18n/ensureLocale";

type Params = { locale: string };

type Props = {
  params: Promise<Params>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = ensureLocale((await params).locale);
  const t = await getTranslations({ locale });

  return {
    title: t("navigation.venue"),
    description: `${t("venue.placeName")} | ${t("venue.address")}`,
  };
}

export default async function Page({ params }: Props) {
  const locale = ensureLocale((await params).locale);
  setRequestLocale(locale);

  const t = await getTranslations({ locale });

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

        <div className="flex items-center justify-center mt-4">
          <Button
            href={OFFICIAL_URL}
            target="_blank"
            variant="secondary"
            size="md"
            endIcon={<ArrowTopRightOnSquareIcon className="w-4 h-4" />}
          >
            {t("venue.officialSite")}
          </Button>
        </div>
      </div>
    </PageContainer>
  );
}
