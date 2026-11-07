import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProductGrid } from "@/components/commerce/ProductGrid";
import {
  getAllCategories,
  getCategoryBySlug,
  getProductsByCategory,
} from "@/lib/catalog";

type Params = Promise<{ slug: string }>;

/** Pre-render a page for each known category. */
export function generateStaticParams() {
  return getAllCategories().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Catégorie introuvable" };
  return {
    title: category.name,
    description: category.description ?? category.tagline,
  };
}

export default async function CategoryPage({ params }: { params: Params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const products = getProductsByCategory(category.slug);

  return (
    <>
      <PageHeader
        eyebrow="Catégorie"
        title={category.name}
        intro={category.description ?? category.tagline}
      />
      <Container className="py-12 sm:py-16">
        <ProductGrid
          products={products}
          empty={{
            title: `${category.name} — bientôt disponible`,
            description:
              "Les produits de cette catégorie seront ajoutés prochainement. L’univers est prêt, les pièces arrivent.",
          }}
        />
      </Container>
    </>
  );
}
