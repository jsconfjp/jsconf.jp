import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageContainer } from "@/components/PageContainer";
import { SpeakerGrid } from "@/components/SpeakerGrid";
import { ensureLocale } from "@/i18n/ensureLocale";
import { flattenSpeakers } from "@/lib/flattenSpeakers";

type Params = { locale: string };

type Props = {
  params: Promise<Params>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = ensureLocale((await params).locale);
  const t = await getTranslations({
    locale,
    namespace: "navigation",
  });
  return {
    title: t("speakers"),
  };
}

export default async function Page({ params }: Props) {
  const locale = ensureLocale((await params).locale);
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
