/**
 * Catalog domain types.
 *
 * These describe the shape of future commercial data. No product data exists
 * yet — the catalog is intentionally empty for this first phase. Defining the
 * types now means products, variants and suppliers can be added later WITHOUT
 * restructuring the site.
 */

/** Publication lifecycle for a product. */
export type ProductStatus = "draft" | "published" | "archived";

/** Top-level brand category (taxonomy only — contains no products yet). */
export interface Category {
  /** URL-safe identifier, e.g. "vetements". */
  slug: string;
  /** Display name, e.g. "Vêtements". */
  name: string;
  /** Short editorial line shown on category/landing pages. */
  tagline?: string;
  /** Optional longer description for SEO + category hero. */
  description?: string;
}

/** A curated grouping of products (e.g. a seasonal drop). Empty for now. */
export interface Collection {
  slug: string;
  name: string;
  tagline?: string;
  description?: string;
  /** Product slugs belonging to this collection. */
  productSlugs: string[];
}

/** A single purchasable variant (size / color combination). */
export interface ProductVariant {
  /** Stable id, unique within the product. */
  id: string;
  /** Human label, e.g. "Noir / M". */
  label: string;
  color?: string;
  size?: string;
  /** Price in cents (avoids floating point rounding issues). */
  priceInCents: number;
  /** Optional sale price in cents. */
  salePriceInCents?: number;
  /** Units available. */
  stock: number;
  /** Supplier SKU / reference for fulfillment. */
  supplierRef?: string;
}

/** Sourcing metadata — kept separate from the storefront view. */
export interface Supplier {
  id: string;
  name: string;
  /** Internal notes; never surfaced to shoppers. */
  notes?: string;
}

/** A product as modeled for the storefront. */
export interface Product {
  /** URL-safe identifier, e.g. "squishy-nuage". */
  slug: string;
  name: string;
  description: string;
  /** Category slug this product belongs to. */
  category: string;
  /** Collection slugs this product appears in. */
  collections?: string[];
  /** Default price in cents (fallback when no variant is selected). */
  priceInCents: number;
  /** Optional sale price in cents. */
  salePriceInCents?: number;
  /** Ordered image paths (first is the primary). */
  images: ProductImage[];
  /** Available variants. Empty means a single, non-variant product. */
  variants: ProductVariant[];
  /** Supplier reference for this product. */
  supplierId?: string;
  supplierRef?: string;
  status: ProductStatus;
  /** Marketing flags surfaced on the storefront. */
  isNew?: boolean;
  isBestseller?: boolean;
  /** ISO date the product was created — used for "Nouveautés" ordering. */
  createdAt?: string;
}

export interface ProductImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}
