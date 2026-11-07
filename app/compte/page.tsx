import type { Metadata } from "next";
import { UserRound } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { EmptyState } from "@/components/ui/EmptyState";
import { routes } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Compte",
  description: "Votre espace compte TRENDS.",
  robots: { index: false, follow: false },
};

export default function ComptePage() {
  // No authentication / data collection in this phase, by design.
  return (
    <>
      <PageHeader eyebrow="Espace personnel" title="Compte" />
      <Container className="py-12 sm:py-16">
        <EmptyState
          icon={<UserRound className="h-6 w-6" strokeWidth={1.75} />}
          eyebrow="Bientôt"
          title="Les comptes arrivent bientôt"
          description="La création de compte, le suivi de commandes et les favoris seront disponibles au lancement de la boutique. Aucune donnée n’est collectée pour le moment."
          action={{ label: "Retour à l’accueil", href: routes.home }}
        />
      </Container>
    </>
  );
}
