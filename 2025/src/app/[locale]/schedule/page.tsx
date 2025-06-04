import { PageContainer } from "@/components/PageContainer";
import { TimeTable } from "@/components/TimeTable";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import { Locale } from "@/i18n/constants";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default function Page({ params }: Props) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations("navigation");

  return (
    <PageContainer title={t("schedule")}>
      <TimeTable />
    </PageContainer>
  );
}
