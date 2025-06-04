import { SpeakerGrid } from "@/components/SpeakerGrid";
import { TALKS } from "@/constants/talks";
import { Metadata } from "next";
import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageContainer } from "@/components/PageContainer";

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
    title: t("speakers"),
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "navigation",
  });
  const speakers = TALKS.flatMap((talk) =>
    talk.speakers.map((speaker) => ({
      talk,
      speaker,
    }))
  )
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
