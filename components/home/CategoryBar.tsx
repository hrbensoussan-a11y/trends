import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { categoryNav } from "@/lib/nav";

/**
 * Category strip under the hero. Four brand categories with hairline
 * separators and heavy black type. Links are live and lead to each category's
 * (currently empty-state) landing page.
 */
export function CategoryBar() {
  return (
    <section aria-label="Catégories" className="border-y border-line-strong bg-cream">
      <Container bleed className="px-0 sm:px-0 lg:px-0">
        <ul className="grid grid-cols-2 lg:grid-cols-4">
          {categoryNav.map((cat, i) => (
            <li
              key={cat.href}
              className={[
                "border-line",
                // vertical + horizontal hairlines between cells
                i % 2 === 0 ? "border-r" : "",
                i < 2 ? "border-b lg:border-b-0" : "",
                "lg:[&:not(:last-child)]:border-r",
              ].join(" ")}
            >
              <Link
                href={cat.href}
                className="group flex items-center justify-center gap-1.5 px-4 py-6 sm:py-7 lg:py-8"
              >
                <span className="font-display text-xl text-ink transition-colors group-hover:text-pink sm:text-2xl lg:text-[1.65rem]">
                  {cat.label}
                </span>
                <ArrowUpRight
                  className="h-4 w-4 -translate-y-0.5 text-ink-faint opacity-0 transition-all duration-200 ease-[var(--ease-brand)] group-hover:translate-x-0.5 group-hover:text-pink group-hover:opacity-100"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
