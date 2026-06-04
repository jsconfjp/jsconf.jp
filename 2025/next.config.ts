import bundleAnalyzer from "@next/bundle-analyzer";
import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  basePath: "/2025",
  pageExtensions: ["ts", "tsx", "md"],
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {
    viewTransition: true,
  },
};

const withMDX = createMDX({
  extension: /\.(md)$/,
  options: {
    // Turbopack 対応のためプラグインは文字列名で指定する（関数参照は直列化不可）
    remarkPlugins: ["remark-gfm", "remark-frontmatter"],
  },
});

const withNextIntl = createNextIntlPlugin();
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(withNextIntl(withMDX(nextConfig)));
