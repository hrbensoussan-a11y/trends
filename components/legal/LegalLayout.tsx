import { Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

interface LegalLayoutProps {
  title: string;
  intro?: string;
  /** Section headings to scaffold; bodies are filled in a later phase. */
  sections: string[];
}

/**
 * Shared layout for legal pages. Content is intentionally left "to complete" —
 * legal text must be written/validated and is not fabricated here.
 */
export function LegalLayout({ title, intro, sections }: LegalLayoutProps) {
  return (
    <>
      <PageHeader eyebrow="Informations" title={title} intro={intro} />
      <Container className="py-12 sm:py-16">
        <div className="mb-10 flex items-start gap-3 border border-line bg-cream-soft p-4 text-sm text-ink-soft">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-pink" strokeWidth={1.75} aria-hidden="true" />
          <p>
            Contenu en cours de rédaction. Les mentions définitives seront
            publiées prochainement.
          </p>
        </div>

        <div className="max-w-2xl space-y-8">
          {sections.map((heading, i) => (
            <section key={heading}>
              <h2 className="font-display text-xl text-ink">
                {i + 1}. {heading}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-faint">
                À compléter.
              </p>
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}
