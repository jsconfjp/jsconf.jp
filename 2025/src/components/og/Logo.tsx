// OGPではimg要素しか使えないため警告を無視
/* eslint-disable @next/next/no-img-element */
import { makeDataUrl } from "@/lib/og/url";
import { join } from "node:path";

type Props = {
  size: number;
};

const LOGO_URL = join(process.cwd(), "public", "logo.svg");

export function Logo({ size }: Props) {
  return <img alt="" src={makeDataUrl(LOGO_URL)} width={size} height={size} />;
}
