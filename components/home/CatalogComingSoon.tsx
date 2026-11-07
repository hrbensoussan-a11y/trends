import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { routes } from "@/lib/nav";

/**
 * Discreet placeholders for the future storefront sections. No fake products —
 * each block simply reserves its spot and links to the section's empty state.
 */
const upcoming = [
  {
    label: "Nouveautés",
    href: routes.nouveautes,
    note: "Les derniers arrivages, chaque semaine.",
  },
  {
    label: "Bestsellers",
    href: routes.bestsellers,
    note: "Les pièces les plus populaires.",
  },
  {
    label: "Collections",
    href: routes.collections,
    note: "Des sélections éditoriales à venir.",
  },
];

export function CatalogComingSoon() {
  return (
    <section className="pb-8" aria-label="Bientôt disponible">
      <Container>
        <div className="flex items-end justify-between border-b border-line pb-5">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">
            Bientôt en ligne
          </h2>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">
            Catalogue en préparation
          </span>
        </div>
        <ul className="grid gap-px border-line sm:grid-cols-3">
          {upcoming.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex h-full flex-col justify-between gap-10 border-b border-line py-8 transition-colors hover:bg-cream-soft sm:border-b-0 sm:[&:not(:last-child)]:border-r sm:px-6 sm:[&:first-child]:pl-0"
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-xl text-ink transition-colors group-hover:text-pink sm:text-2xl">
                    {item.label}
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 text-ink-faint transition-all duration-200 ease-[var(--ease-brand)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-pink"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </div>
                <span className="text-sm text-ink-soft">{item.note}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
