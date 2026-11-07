import type { Metadata } from "next";
import { Layers } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { EmptyState } from "@/components/ui/EmptyState";
import { getAllCollections } from "@/lib/catalog";
import { routes } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Les collections éditoriales TRENDS. Des sélections thématiques à découvrir prochainement.",
};

export default function CollectionsPage() {
  const collections = getAllCollections();

  return (
    <>
      <PageHeader
        eyebrow="Éditions"
        title="Collections"
        intro="Des sélections éditoriales et des drops thématiques. Les premières collections seront dévoilées avec le lancement du catalogue."
      />
      <Container className="py-12 sm:py-16">
        {collections.length === 0 ? (
          <EmptyState
            icon={<Layers className="h-6 w-6" strokeWidth={1.75} />}
            eyebrow="À venir"
            title="Aucune collection pour l’instant"
            description="Nos collections seront construites autour de vrais produits. Elles apparaîtront ici dès qu’elles seront prêtes."
            action={{ label: "Voir les catégories", href: routes.categories }}
            secondaryAction={{ label: "Aller au shop", href: routes.shop }}
          />
        ) : null}
      </Container>
    </>
  );
}
