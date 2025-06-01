type Plan = "premium" | "sponsor";

export type Sponsor = {
  type: "sponsor";
  plan: Plan;
  name: string;
  url: string;
  prText: string;
  logoUrl: string;
};

export const SPONSORS: Sponsor[] = [
  {
    type: "sponsor",
    plan: "premium",
    name: "Sample premium 1",
    url: "https://example.com",
    logoUrl: "https://placehold.jp/1280x259.png",
    prText: "",
  },
  {
    type: "sponsor",
    plan: "sponsor",
    name: "Sample sponsor 1",
    url: "https://example.com",
    logoUrl: "https://placehold.jp/1176x433.png",
    prText: "",
  },
];
