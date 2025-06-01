import { SpeakerGrid } from "@/components/SpeakerGrid";
import { TALKS } from "@/constants/talks";
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
    title: t("speakers"),
  };
}

export default function Page({ params }: Props) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);

  const t = useTranslations("navigation");
  const speakers = TALKS.flatMap((talk) =>
    talk.speakers.map((speaker) => ({
      talk,
      speaker,
    }))
  )
    // filter out sponsors
    .filter(({ speaker }) => speaker.type === "speaker");

  return (
    <div className="max-w-screen-lg mx-auto px-4 lg:px-0 pt-16 md:pt-32">
      <h1 className="text-3xl font-bold my-4 text-center">{t("speakers")}</h1>
      <SpeakerGrid speakers={speakers} />
    </div>
  );
}
