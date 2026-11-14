import type { NextConfig } from "next";

// Set only in the GitHub Pages workflow. Local `next dev` and `next build` stay at /.
const pagesBasePath = process.env.NEXT_PUBLIC_BASE_PATH;

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  ...(pagesBasePath
    ? {
        basePath: pagesBasePath,
        assetPrefix: pagesBasePath,
      }
    : {}),
};

export default nextConfig;
