import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/nav";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "TRENDS, c’est une marque tech, mode & lifestyle pensée pour une nouvelle génération. Découvrez notre histoire et notre vision.",
};

const values = [
  {
    title: "Une vraie marque",
    text: "Pas une boutique générique : une identité forte, une direction artistique assumée et une expérience soignée du premier au dernier clic.",
  },
  {
    title: "La tendance, choisie",
    text: "Nous sélectionnons les pièces et objets qui attirent l’attention et deviennent populaires — rien n’est laissé au hasard.",
  },
  {
    title: "Pour une génération",
    text: "Du streetwear aux squishies, des accessoires aux gadgets : des univers différents, une même énergie.",
  },
];

export default function AProposPage() {
  return (
    <>
      <PageHeader
        eyebrow="La marque"
        title="À propos"
        intro="TRENDS réunit tech, mode & lifestyle dans une sélection pensée pour une nouvelle génération. Une marque, une direction artistique, une promesse : la tendance, choisie avec exigence."
      />

      <Container className="py-14 sm:py-20">
        <div className="grid gap-10 border-t border-line pt-12 sm:grid-cols-3 sm:gap-8">
          {values.map((v) => (
            <div key={v.title}>
              <h2 className="font-display text-2xl text-ink">{v.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                {v.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start gap-6 border-t border-line pt-12">
          <p className="max-w-2xl font-display text-2xl leading-[1.15] text-ink sm:text-3xl">
            Le catalogue arrive bientôt. La base est posée — l’univers TRENDS se
            dévoilera pièce par pièce.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href={routes.categories}>Explorer les catégories</Button>
            <Button href={routes.contact} variant="outline">
              Nous contacter
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}
