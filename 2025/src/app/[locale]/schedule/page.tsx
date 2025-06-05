import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageContainer } from "@/components/PageContainer";
import { TimeTable } from "@/components/TimeTable";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "navigation",
  });

  return (
    <PageContainer title={t("schedule")}>
      <TimeTable />
    </PageContainer>
  );
}
