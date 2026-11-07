/**
 * Global, non-sensitive site configuration.
 * Single source of truth for brand metadata used across pages & SEO.
 */
export const site = {
  name: "TRENDS",
  legalName: "TRENDS",
  tagline: "Tech, mode & lifestyle.",
  description:
    "TRENDS — la sélection tech, mode & lifestyle pensée pour une nouvelle génération. Vêtements, squishies, accessoires et objets qui font la tendance.",
  // Placeholder; update when the production domain is confirmed.
  url: "https://trends.example",
  locale: "fr_FR",
  // The top announcement bar message. Kept intentionally neutral until
  // commercial promises (shipping, returns, promos) are confirmed.
  announcement: "WELCOME TO TRENDS",
  // Social links are placeholders — fill in when accounts are live.
  social: {
    instagram: "",
    tiktok: "",
  },
  // Not wired to a mailbox yet; used only for display on the contact page.
  contactEmail: "",
} as const;

export type Site = typeof site;
