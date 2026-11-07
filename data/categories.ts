import type { Category } from "@/types/catalog";

/**
 * Brand categories (taxonomy / site structure).
 *
 * These define how the shop is organized — they are NOT products. They match
 * the four categories shown on the homepage artwork. Products will later be
 * attached to a category via its `slug`.
 */
export const categories: Category[] = [
  {
    slug: "vetements",
    name: "Vêtements",
    tagline: "Streetwear & pièces mode.",
    description:
      "Hoodies, basiques et pièces statement pensés pour une allure streetwear contemporaine.",
  },
  {
    slug: "squishies",
    name: "Squishies",
    tagline: "Objets satisfaisants.",
    description:
      "La sélection de squishies et objets anti-stress les plus satisfaisants du moment.",
  },
  {
    slug: "accessoires",
    name: "Accessoires",
    tagline: "Les détails qui comptent.",
    description:
      "Lunettes, bijoux et accessoires pour compléter le look et marquer le style.",
  },
  {
    slug: "lifestyle",
    name: "Lifestyle",
    tagline: "Tech & objets du quotidien.",
    description:
      "Gadgets, tech et objets lifestyle qui deviennent vite indispensables.",
  },
];
