import { Metadata } from "next";
import { CodeOfConduct } from "@/components/CodeOfConduct";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: "en", namespace: "navigation" });
  return {
    title: t("codeOfConduct"),
  };
}

export default async function Page() {
  return <CodeOfConduct />;
}
