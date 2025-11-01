import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageContainer } from "@/components/PageContainer";
import { TimeTable } from "@/components/TimeTable";
import { Locale } from "@/i18n/constants";

type Params = { locale: Locale };

type Props = {
  params: Promise<Params>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: "navigation",
  });

  return (
    <PageContainer title={t("schedule")}>
      <TimeTable locale={locale} />
    </PageContainer>
  );
}
