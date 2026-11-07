import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProductGrid } from "@/components/commerce/ProductGrid";
import { getBestsellers } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Bestsellers",
  description:
    "Les bestsellers TRENDS : les pièces les plus populaires de la boutique, bientôt disponibles.",
};

export default function BestsellersPage() {
  const products = getBestsellers();

  return (
    <>
      <PageHeader
        eyebrow="Les plus populaires"
        title="Bestsellers"
        intro="Les pièces qui font l’unanimité. Cette page mettra en avant les produits les plus appréciés dès que la boutique sera lancée."
      />
      <Container className="py-12 sm:py-16">
        <ProductGrid
          products={products}
          empty={{
            eyebrow: "À venir",
            title: "Les bestsellers arrivent",
            description:
              "Dès que les premiers produits seront en ligne, les favoris de la communauté apparaîtront ici.",
          }}
        />
      </Container>
    </>
  );
}
