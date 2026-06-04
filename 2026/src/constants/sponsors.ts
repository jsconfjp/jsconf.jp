import type { StaticImageData } from "next/image";

type Plan = "premium" | "sponsor";

export type Sponsor = {
  type: "sponsor";
  plan: Plan;
  name: string;
  url: string;
  prText: string;
  logoUrl: string | StaticImageData;
};

// スポンサーは募集中のため未確定。確定次第ここに追加する。
export const SPONSORS: Sponsor[] = [];

type SponsorSlug = (typeof SPONSORS)[number]["name"];

export const SPONSORS_BY_NAME: Record<SponsorSlug, Sponsor> = SPONSORS.reduce(
  (acc, sponsor) => {
    acc[sponsor.name] = sponsor;
    return acc;
  },
  {} as Record<SponsorSlug, Sponsor>,
);
