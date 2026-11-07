import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { collections } from "@/data/collections";
import type { Category, Collection, Product } from "@/types/catalog";

/**
 * Catalog data-access layer.
 *
 * The storefront reads the catalog ONLY through these functions. Today they
 * read from the local (empty) `data/*` arrays. Later, the same functions can be
 * swapped to fetch from a CMS, database or commerce API — without touching any
 * page or component. This indirection is what makes the catalog evolutive.
 */

/** Only products that are published are ever shown to shoppers. */
function publishedProducts(): Product[] {
  return products.filter((p) => p.status === "published");
}

export function getAllProducts(): Product[] {
  return publishedProducts();
}

export function getProductBySlug(slug: string): Product | undefined {
  return publishedProducts().find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return publishedProducts().filter((p) => p.category === categorySlug);
}

export function getNewArrivals(limit?: number): Product[] {
  const list = publishedProducts()
    .filter((p) => p.isNew)
    .sort((a, b) => (b.createdAt ?? "").localeCompare(a.createdAt ?? ""));
  return typeof limit === "number" ? list.slice(0, limit) : list;
}

export function getBestsellers(limit?: number): Product[] {
  const list = publishedProducts().filter((p) => p.isBestseller);
  return typeof limit === "number" ? list.slice(0, limit) : list;
}

/** Basic, accent-insensitive text search over published products. */
export function searchProducts(query: string): Product[] {
  const q = normalize(query);
  if (!q) return [];
  return publishedProducts().filter((p) => {
    const haystack = normalize(`${p.name} ${p.description} ${p.category}`);
    return haystack.includes(q);
  });
}

export function getAllCategories(): Category[] {
  return categories;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAllCollections(): Collection[] {
  return collections;
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

/** Lowercase + strip diacritics for forgiving comparisons. */
function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim();
}
