import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProductGrid } from "@/components/commerce/ProductGrid";
import { getNewArrivals } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Nouveautés",
  description:
    "Les dernières nouveautés TRENDS. De nouvelles pièces chaque semaine, très bientôt.",
};

export default function NouveautesPage() {
  const products = getNewArrivals();

  return (
    <>
      <PageHeader
        eyebrow="Fraîchement arrivé"
        title="Nouveautés"
        intro="Les derniers arrivages, mis en avant dès leur sortie. De nouvelles pièces rejoindront cette page chaque semaine."
      />
      <Container className="py-12 sm:py-16">
        <ProductGrid
          products={products}
          empty={{
            eyebrow: "À venir",
            title: "Aucune nouveauté pour l’instant",
            description:
              "Les premières nouveautés seront publiées ici très prochainement. Reviens vite.",
          }}
        />
      </Container>
    </>
  );
}
