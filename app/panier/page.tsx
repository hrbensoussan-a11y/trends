import type { Metadata } from "next";
import { ShoppingBag } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { EmptyState } from "@/components/ui/EmptyState";
import { routes } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Panier",
  description: "Votre panier TRENDS.",
  robots: { index: false, follow: false },
};

export default function PanierPage() {
  // No cart system yet — the cart is always empty in this phase.
  return (
    <>
      <PageHeader eyebrow="Votre sélection" title="Panier" />
      <Container className="py-12 sm:py-16">
        <EmptyState
          icon={<ShoppingBag className="h-6 w-6" strokeWidth={1.75} />}
          title="Votre panier est vide"
          description="La boutique ouvrira bientôt. En attendant, découvre les univers TRENDS."
          action={{ label: "Découvrir le shop", href: routes.shop }}
          secondaryAction={{ label: "Voir les catégories", href: routes.categories }}
        />
      </Container>
    </>
  );
}
