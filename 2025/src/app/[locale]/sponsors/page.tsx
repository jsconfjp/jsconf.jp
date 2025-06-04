import { getTranslations, setRequestLocale } from "next-intl/server";
import { Locale } from "next-intl";
import { Metadata } from "next";
import { SponsorGrid } from "@/components/SponsorGrid";
import { SPONSORS } from "@/constants/sponsors";
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
    title: t("sponsors"),
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "navigation",
  });

  return (
    <PageContainer title={t("sponsors")}>
      <SponsorGrid sponsors={SPONSORS} showPrText={true} />
    </PageContainer>
  );
}
