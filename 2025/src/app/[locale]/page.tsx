import ArrowTopRightOnSquareIcon from "@heroicons/react/24/outline/ArrowTopRightOnSquareIcon";
import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Team } from "@/components/Team";
import { Button } from "@/components/Button";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { use } from "react";
import { Locale } from "@/i18n/constants";
import { useTranslations } from "next-intl";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: "en", namespace: "about" });
  return {
    title: t("title"),
  };
}

export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);

  setRequestLocale(locale as Locale);

  const tCta = useTranslations("cta");

  return (
    <div className="max-w-screen-lg mx-auto px-4 lg:px-0">
      <div className="max-w-screen-md mx-auto mt-16 md:mt-32">
        <Hero />

        <div className="mt-20 flex flex-col md:flex-row justify-center gap-4 md:gap-8">
          <Button
            full
            variant="primary"
            size="lg"
            href="https://example.com/"
            target="_blank"
            endIcon={<ArrowTopRightOnSquareIcon className="w-4 h-4" />}
          >
            {tCta("submitTalk")}
          </Button>
          <Button
            full
            variant="primary"
            size="lg"
            href="https://example.com/"
            target="_blank"
            endIcon={<ArrowTopRightOnSquareIcon className="w-4 h-4" />}
          >
            {tCta("becomeSponsor")}
          </Button>
        </div>

        <div className="mt-20">
          <Team />
        </div>
      </div>
    </div>
  );
}
