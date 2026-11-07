import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { routes } from "@/lib/nav";
import { getAllCategories } from "@/lib/catalog";

/**
 * Basic sitemap. Product/collection URLs will be appended automatically once
 * the catalog is populated (read from the same catalog helpers).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const now = new Date();

  const staticPaths = [
    routes.home,
    routes.shop,
    routes.nouveautes,
    routes.bestsellers,
    routes.collections,
    routes.categories,
    routes.aPropos,
    routes.contact,
    routes.mentionsLegales,
    routes.confidentialite,
    routes.cgv,
    routes.cookies,
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === routes.home ? 1 : 0.6,
  }));

  const categoryEntries: MetadataRoute.Sitemap = getAllCategories().map((c) => ({
    url: `${base}${routes.category(c.slug)}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  return [...staticEntries, ...categoryEntries];
}
