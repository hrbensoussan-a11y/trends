import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const base = site.url.replace(/\/$/, "");
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Utility pages that shouldn't be indexed.
      disallow: ["/panier", "/compte", "/recherche"],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
