import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductTemplate } from "@/components/commerce/ProductTemplate";
import { getAllProducts, getProductBySlug } from "@/lib/catalog";

type Params = Promise<{ slug: string }>;

/** No products yet → nothing to pre-render. Populated automatically later. */
export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Produit introuvable" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  // The catalog is empty for now, so every product URL resolves to the
  // branded 404. Once products exist, the full template renders here.
  if (!product) notFound();

  return <ProductTemplate product={product} />;
}
