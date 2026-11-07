import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProductGrid } from "@/components/commerce/ProductGrid";
import { getAllProducts } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Toute la boutique TRENDS : vêtements, squishies, accessoires et lifestyle. Le catalogue arrive bientôt.",
};

export default function ShopPage() {
  const products = getAllProducts();

  return (
    <>
      <PageHeader
        eyebrow="Boutique"
        title="Shop"
        intro="Toute la sélection TRENDS, au même endroit. Le catalogue est en cours de préparation — les premières pièces arrivent très bientôt."
      />
      <Container className="py-12 sm:py-16">
        <ProductGrid
          products={products}
          empty={{
            title: "Le shop ouvre bientôt",
            description:
              "Nous préparons une sélection qui vaut l’attente. Les produits seront ajoutés ici dès leur arrivée.",
          }}
        />
      </Container>
    </>
  );
}
