import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageContainer } from "@/components/PageContainer";
import { SponsorGrid } from "@/components/SponsorGrid";
import { SPONSORS } from "@/constants/sponsors";
import { Locale } from "@/i18n/constants";

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

  return { title: t("sponsors") };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: "navigation",
  });

  return (
    <PageContainer title={t("sponsors")}>
      <SponsorGrid sponsors={SPONSORS} showPrText={true} />
    </PageContainer>
  );
}
