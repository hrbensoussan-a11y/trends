import { Container } from "@/components/ui/Container";

/**
 * Editorial brand statement. Brand copy only — no products. Communicates the
 * TRENDS positioning while the catalog is being prepared.
 */
export function BrandStatement() {
  return (
    <section className="py-20 sm:py-28" aria-label="La marque TRENDS">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pink">
            La marque
          </p>
          <div>
            <p className="font-display text-3xl leading-[1.05] text-ink sm:text-5xl">
              Une sélection qui attire l’attention, une marque qui assume son
              style. <span className="text-pink">Tech, mode &amp; lifestyle</span>{" "}
              pour une nouvelle génération.
            </p>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              TRENDS réunit les pièces et objets qui deviennent populaires — du
              streetwear aux squishies, des accessoires aux gadgets. Pas une
              boutique générique : une vraie marque, une direction artistique
              forte, une expérience soignée. Le catalogue arrive bientôt.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
