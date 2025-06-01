import { getTranslations, setRequestLocale } from "next-intl/server";
import { Locale, useTranslations } from "next-intl";
import { Metadata } from "next";
import { SponsorGrid } from "@/components/SponsorGrid";
import { SPONSORS } from "@/constants/sponsors";
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
    title: t("sponsors"),
  };
}

export default function Page({ params }: Props) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);

  const t = useTranslations("navigation");

  return (
    <div className="max-w-screen-lg mx-auto px-4 lg:px-0 pt-16 md:pt-32">
      <h2 className="text-3xl font-bold my-4 text-center">{t("sponsors")}</h2>
      <SponsorGrid sponsors={SPONSORS} showPrText={true} />
    </div>
  );
}
