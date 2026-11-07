import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tailwind CSS v4 is compiled through the Turbopack loader.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    // Future product/CDN image hosts will be added here when the catalog ships.
    remotePatterns: [],
  },
};

export default nextConfig;
