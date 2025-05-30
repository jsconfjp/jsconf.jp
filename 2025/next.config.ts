import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import remarkGfm from "remark-gfm";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md"],
};

const withMDX = createMDX({
  extension: /\.(md)$/,
  options: {
    remarkPlugins: [remarkGfm],
  },
});

export default withMDX(nextConfig);
