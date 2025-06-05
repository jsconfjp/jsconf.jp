import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageContainer } from "@/components/PageContainer";
import { SpeakerGrid } from "@/components/SpeakerGrid";
import { Locale } from "@/i18n/constants";
import { flattenSpeakers } from "@/lib/flattenSpeakers";

type Params = { locale: Locale };

type Props = {
  params: Promise<Params>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "navigation",
  });
  return {
    title: t("speakers"),
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: "navigation",
  });
  const speakers = flattenSpeakers()
    // filter out sponsors
    .filter(({ speaker }) => speaker.type === "speaker");

  return (
    <PageContainer title={t("speakers")}>
      <div className="mt-4">
        <SpeakerGrid speakers={speakers} />
      </div>
    </PageContainer>
  );
}
