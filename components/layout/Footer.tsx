import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/brand/Logo";
import { footerNav, routes } from "@/lib/nav";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-line bg-cream-soft">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-[1.4fr_repeat(4,1fr)] md:gap-10">
          {/* Brand block */}
          <div className="col-span-2 md:col-span-1">
            <Logo sizeClassName="text-3xl" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              {site.tagline} La sélection qui fait la tendance, pensée pour une
              nouvelle génération.
            </p>
          </div>

          {/* Link columns */}
          {footerNav.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink transition-colors hover:text-pink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-faint">
            © {year} {site.name}. Tous droits réservés.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-ink-faint">
            <Link href={routes.mentionsLegales} className="hover:text-pink">
              Mentions légales
            </Link>
            <Link href={routes.confidentialite} className="hover:text-pink">
              Confidentialité
            </Link>
            <Link href={routes.cgv} className="hover:text-pink">
              CGV
            </Link>
            <Link href={routes.cookies} className="hover:text-pink">
              Cookies
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
