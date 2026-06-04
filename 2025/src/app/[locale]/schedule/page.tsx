import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageContainer } from "@/components/PageContainer";
import { TimeTable } from "@/components/TimeTable";
import { ensureLocale } from "@/i18n/ensureLocale";

type Params = { locale: string };

type Props = {
  params: Promise<Params>;
};

export default async function Page({ params }: Props) {
  const locale = ensureLocale((await params).locale);
  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: "navigation",
  });

  return (
    <PageContainer title={t("schedule")}>
      <TimeTable />
    </PageContainer>
  );
}
