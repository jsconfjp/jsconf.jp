import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageContainer } from "@/components/PageContainer";
import { SponsorGrid } from "@/components/SponsorGrid";
import { SPONSORS } from "@/constants/sponsors";
import { ensureLocale } from "@/i18n/ensureLocale";

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

  return { title: t("sponsors") };
}

export default async function Page({ params }: Props) {
  const locale = ensureLocale((await params).locale);
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
