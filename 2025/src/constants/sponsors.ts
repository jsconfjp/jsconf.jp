type Plan = "premium" | "sponsor";

export type Sponsor = {
  plan: Plan;
  name: string;
  url: string;
  prText: string;
  logoUrl: string;
};

export const SPONSORS: Sponsor[] = [
  {
    plan: "premium",
    name: "Sample premium 1",
    url: "https://example.com",
    logoUrl: "https://placehold.jp/1280x259.png",
    prText: "",
  },
  {
    plan: "sponsor",
    name: "Sample sponsor 1",
    url: "https://example.com",
    logoUrl: "https://placehold.jp/1176x433.png",
    prText: "",
  },
];
