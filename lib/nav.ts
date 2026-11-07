import { categories } from "@/data/categories";

/**
 * Centralized route + navigation configuration.
 * Keeping routes here means links stay consistent across header, footer and
 * pages, and are trivial to rename later.
 */
export const routes = {
  home: "/",
  shop: "/shop",
  nouveautes: "/nouveautes",
  bestsellers: "/bestsellers",
  collections: "/collections",
  categories: "/categories",
  category: (slug: string) => `/categories/${slug}`,
  product: (slug: string) => `/produits/${slug}`,
  recherche: "/recherche",
  panier: "/panier",
  compte: "/compte",
  aPropos: "/a-propos",
  contact: "/contact",
  mentionsLegales: "/mentions-legales",
  confidentialite: "/confidentialite",
  cgv: "/cgv",
  cookies: "/cookies",
} as const;

export interface NavLink {
  label: string;
  href: string;
}

/** Primary navigation shown in the header (matches the homepage artwork). */
export const primaryNav: NavLink[] = [
  { label: "Shop", href: routes.shop },
  { label: "Nouveautés", href: routes.nouveautes },
  { label: "Bestsellers", href: routes.bestsellers },
  { label: "Collections", href: routes.collections },
];

/** Category links derived from the brand taxonomy (used by the category bar). */
export const categoryNav: NavLink[] = categories.map((c) => ({
  label: c.name,
  href: routes.category(c.slug),
}));

/** Footer navigation, grouped into columns. */
export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Boutique",
    links: [
      { label: "Shop", href: routes.shop },
      { label: "Nouveautés", href: routes.nouveautes },
      { label: "Bestsellers", href: routes.bestsellers },
      { label: "Collections", href: routes.collections },
    ],
  },
  {
    title: "Catégories",
    links: categoryNav,
  },
  {
    title: "Maison TRENDS",
    links: [
      { label: "À propos", href: routes.aPropos },
      { label: "Contact", href: routes.contact },
      { label: "Compte", href: routes.compte },
    ],
  },
  {
    title: "Infos",
    links: [
      { label: "Mentions légales", href: routes.mentionsLegales },
      { label: "Confidentialité", href: routes.confidentialite },
      { label: "CGV", href: routes.cgv },
      { label: "Cookies", href: routes.cookies },
    ],
  },
];
