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

/**
 * スポンサー名から Sponsor を引くマップ。スポンサーセッション確定時に
 * talks.ts の speakers などから参照する想定の公開 API（現在はスポンサー募集中で未消費）。
 * ダミーを足すと top ページに出てしまうため、実データ確定までは @public で保持する。
 * @public
 */
export const SPONSORS_BY_NAME: Record<SponsorSlug, Sponsor> = SPONSORS.reduce(
  (acc, sponsor) => {
    acc[sponsor.name] = sponsor;
    return acc;
  },
  {} as Record<SponsorSlug, Sponsor>,
);
