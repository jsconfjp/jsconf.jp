import bundleAnalyzer from "@next/bundle-analyzer";
import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";

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
    remarkPlugins: [remarkGfm, remarkFrontmatter],
  },
});

const withNextIntl = createNextIntlPlugin();
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(withNextIntl(withMDX(nextConfig)));
