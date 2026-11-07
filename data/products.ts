import type { Product } from "@/types/catalog";

/**
 * PRODUCT CATALOG — intentionally EMPTY for phase 1.
 *
 * ⚠️ Do not add placeholder / fake products. Real products will be added here
 * (or sourced from a CMS/database) in a later phase. The storefront is built to
 * render correct empty states while this array is empty.
 *
 * To add a product later, push a fully-typed `Product` object into this array
 * (see `types/catalog.ts`), reference an existing category slug, set
 * `status: "published"`, and drop its images into `public/products/<slug>/`.
 */
export const products: Product[] = [];
