import { useTranslations } from "next-intl";
import React from "react";
import { Sponsor } from "@/constants/sponsors";
import { SponsorLogo } from "./SponsorLogo";

type Props = {
  sponsors: Sponsor[];
  showPrText?: boolean;
};

export function SponsorGrid({ sponsors, showPrText = false }: Props) {
  const t = useTranslations("sponsors");

  const premiumSponsors = sponsors.filter(
    (sponsor) => sponsor.plan === "premium"
  );
  const otherSponsors = sponsors.filter(
    (sponsor) => sponsor.plan === "sponsor"
  );

  return (
    <div>
      <h3 className="text-2xl font-bold my-2 text-center">{t("premium")}</h3>
      <div className="grid grid-cols-1 gap-8">
        {premiumSponsors.map((sponsor) => (
          <div key={sponsor.name} className="flex flex-col gap-2">
            <SponsorLogo sponsor={sponsor} />
            {showPrText && <p>{sponsor.prText}</p>}
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-bold mt-4 my-2 text-center">
        {t("sponsor")}
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {otherSponsors.map((sponsor) => (
          <div key={sponsor.name} className="flex flex-col gap-2">
            <SponsorLogo sponsor={sponsor} />
            {showPrText && <p>{sponsor.prText}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
