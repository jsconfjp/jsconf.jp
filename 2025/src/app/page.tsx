import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Team } from "@/components/Team";
import { Button } from "@/components/Button";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: "en", namespace: "about" });
  return {
    title: t("title"),
  };
}

export default async function Home() {
  const tCta = await getTranslations("cta");

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="max-w-screen-md mx-auto mt-32">
        <Hero />

        <div className="mt-20 flex justify-center gap-8">
          <Button
            variant="primary"
            size="xl"
            href="https://example.com/"
            target="_blank"
          >
            {tCta("submitTalk")}
          </Button>
          <Button
            variant="primary"
            size="xl"
            href="https://example.com/"
            target="_blank"
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
