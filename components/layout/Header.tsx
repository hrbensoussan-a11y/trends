"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Search, User, ShoppingBag, Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { primaryNav, categoryNav, routes } from "@/lib/nav";
import { cn } from "@/lib/utils";

/**
 * Site header: logo, primary navigation, utility icons (search / account /
 * cart), a search overlay and an accessible mobile menu.
 *
 * The cart count is 0 for this phase (no cart system yet). When a cart provider
 * is added later, read the count from it in place of the constant below.
 */
const CART_COUNT = 0;

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close everything on route change.
  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  // Esc closes overlays; lock body scroll while the mobile menu is open.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Focus the search field when the overlay opens.
  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = new FormData(e.currentTarget).get("q");
    const q = typeof value === "string" ? value.trim() : "";
    router.push(q ? `${routes.recherche}?q=${encodeURIComponent(q)}` : routes.recherche);
    setSearchOpen(false);
  }

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/80">
      <Container bleed>
        <div className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
          {/* Left: logo + desktop nav */}
          <div className="flex items-center gap-8 xl:gap-12">
            <Logo sizeClassName="text-2xl sm:text-[1.7rem]" />
            <nav aria-label="Navigation principale" className="hidden lg:block">
              <ul className="flex items-center gap-7 xl:gap-9">
                {primaryNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "text-[0.95rem] font-semibold tracking-tight text-ink transition-colors hover:text-pink",
                        isActive(item.href) && "text-pink",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right: utility icons */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="Rechercher"
              aria-expanded={searchOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 hover:text-pink"
            >
              <Search className="h-[1.3rem] w-[1.3rem]" strokeWidth={1.75} />
            </button>

            <Link
              href={routes.compte}
              aria-label="Compte"
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 hover:text-pink"
            >
              <User className="h-[1.3rem] w-[1.3rem]" strokeWidth={1.75} />
            </Link>

            <Link
              href={routes.panier}
              aria-label={`Panier, ${CART_COUNT} article${CART_COUNT > 1 ? "s" : ""}`}
              className="flex items-center gap-1.5 rounded-full px-2 py-2 text-ink transition-colors hover:bg-ink/5 hover:text-pink"
            >
              <ShoppingBag className="h-[1.3rem] w-[1.3rem]" strokeWidth={1.75} />
              <span className="text-sm font-semibold tabular-nums">
                ({CART_COUNT})
              </span>
            </Link>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 hover:text-pink lg:hidden"
            >
              {menuOpen ? (
                <X className="h-6 w-6" strokeWidth={1.75} />
              ) : (
                <Menu className="h-6 w-6" strokeWidth={1.75} />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Search overlay */}
      {searchOpen ? (
        <div className="border-t border-line bg-cream">
          <Container bleed>
            <form onSubmit={handleSearch} className="flex items-center gap-3 py-4" role="search">
              <Search className="h-5 w-5 shrink-0 text-ink-faint" strokeWidth={1.75} aria-hidden="true" />
              <input
                ref={searchInputRef}
                name="q"
                type="search"
                placeholder="Rechercher un produit, une catégorie…"
                className="h-11 w-full bg-transparent text-base text-ink placeholder:text-ink-faint focus:outline-none"
                aria-label="Rechercher"
              />
              <button
                type="submit"
                className="flex h-10 items-center gap-1.5 rounded-[var(--radius-btn)] bg-pink px-4 text-sm font-semibold text-white transition-colors hover:bg-pink-dark"
              >
                Rechercher
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </button>
            </form>
          </Container>
        </div>
      ) : null}

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden",
          menuOpen ? "block" : "hidden",
        )}
      >
        <nav
          aria-label="Navigation mobile"
          className="border-t border-line bg-cream"
        >
          <Container>
            <ul className="flex flex-col py-2">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between border-b border-line/60 py-4 font-display text-2xl text-ink",
                      isActive(item.href) && "text-pink",
                    )}
                  >
                    {item.label}
                    <ArrowRight className="h-5 w-5 text-ink-faint" strokeWidth={1.75} />
                  </Link>
                </li>
              ))}
            </ul>

            <p className="pt-5 pb-2 text-xs font-semibold uppercase tracking-[0.22em] text-pink">
              Catégories
            </p>
            <ul className="flex flex-wrap gap-2 pb-6">
              {categoryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex rounded-full border border-line bg-cream-soft px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex gap-2 pb-8">
              <Link
                href={routes.compte}
                className="flex flex-1 items-center justify-center gap-2 rounded-[var(--radius-btn)] border border-ink py-3 text-sm font-semibold text-ink"
              >
                <User className="h-4 w-4" strokeWidth={1.75} /> Compte
              </Link>
              <Link
                href={routes.panier}
                className="flex flex-1 items-center justify-center gap-2 rounded-[var(--radius-btn)] bg-ink py-3 text-sm font-semibold text-cream"
              >
                <ShoppingBag className="h-4 w-4" strokeWidth={1.75} /> Panier ({CART_COUNT})
              </Link>
            </div>
          </Container>
        </nav>
      </div>
    </header>
  );
}
