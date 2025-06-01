import createMDX from "@next/mdx";
import bundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  basePath: "/2025",
  pageExtensions: ["ts", "tsx", "md"],
  output: "export",
  images: {
    unoptimized: true,
  },
};

const withMDX = createMDX({
  extension: /\.(md)$/,
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter],
  },
});

const withNextIntl = createNextIntlPlugin();
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(withNextIntl(withMDX(nextConfig)));
