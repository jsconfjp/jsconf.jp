import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md"],
};

const withMDX = createMDX({
  extension: /\.(md)$/,
});

export default withMDX(nextConfig);
