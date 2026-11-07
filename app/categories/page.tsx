import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { getAllCategories } from "@/lib/catalog";
import { routes } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Catégories",
  description:
    "Explorez les catégories TRENDS : vêtements, squishies, accessoires et lifestyle.",
};

export default function CategoriesPage() {
  const categories = getAllCategories();

  return (
    <>
      <PageHeader
        eyebrow="Explorer"
        title="Catégories"
        intro="Quatre univers pour une même énergie. Choisis une catégorie pour découvrir ce qui arrive bientôt."
      />
      <Container className="py-12 sm:py-16">
        <ul className="grid gap-px border border-line sm:grid-cols-2">
          {categories.map((cat) => (
            <li key={cat.slug}>
              <Link
                href={routes.category(cat.slug)}
                className="group flex min-h-[180px] flex-col justify-between gap-6 border-line bg-cream p-7 transition-colors hover:bg-cream-soft sm:p-9"
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-3xl text-ink transition-colors group-hover:text-pink sm:text-4xl">
                    {cat.name}
                  </span>
                  <ArrowUpRight
                    className="h-6 w-6 text-ink-faint transition-all duration-200 ease-[var(--ease-brand)] group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-pink"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </div>
                {cat.tagline ? (
                  <span className="text-sm text-ink-soft">{cat.tagline}</span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
