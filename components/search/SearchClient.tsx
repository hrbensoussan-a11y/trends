"use client";

import { useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, SearchX } from "lucide-react";
import { ProductGrid } from "@/components/commerce/ProductGrid";
import { EmptyState } from "@/components/ui/EmptyState";
import { searchProducts } from "@/lib/catalog";
import { routes } from "@/lib/nav";

export function SearchClient() {
  const router = useRouter();
  const params = useSearchParams();
  const query = params.get("q")?.trim() ?? "";
  const [value, setValue] = useState(query);

  const results = query ? searchProducts(query) : [];

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const q = value.trim();
    router.push(q ? `${routes.recherche}?q=${encodeURIComponent(q)}` : routes.recherche);
  }

  return (
    <div>
      <form onSubmit={onSubmit} role="search" className="mb-10">
        <div className="flex items-center gap-3 border-b-2 border-ink pb-3">
          <Search className="h-5 w-5 shrink-0 text-ink-faint" strokeWidth={1.75} aria-hidden="true" />
          <input
            type="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Rechercher un produit, une catégorie…"
            aria-label="Rechercher"
            className="h-10 w-full bg-transparent text-lg text-ink placeholder:text-ink-faint focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 rounded-[var(--radius-btn)] bg-pink px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-pink-dark"
          >
            Rechercher
          </button>
        </div>
      </form>

      {query ? (
        results.length > 0 ? (
          <>
            <p className="mb-6 text-sm text-ink-soft">
              {results.length} résultat{results.length > 1 ? "s" : ""} pour «{" "}
              <span className="font-semibold text-ink">{query}</span> »
            </p>
            <ProductGrid products={results} />
          </>
        ) : (
          <EmptyState
            icon={<SearchX className="h-6 w-6" strokeWidth={1.75} />}
            eyebrow="Aucun résultat"
            title={`Rien trouvé pour « ${query} »`}
            description="Le catalogue n’est pas encore en ligne. La recherche affichera des résultats dès que les produits seront ajoutés."
            action={{ label: "Explorer les catégories", href: routes.categories }}
          />
        )
      ) : (
        <EmptyState
          icon={<Search className="h-6 w-6" strokeWidth={1.75} />}
          eyebrow="Recherche"
          title="Que cherches-tu ?"
          description="Saisis un mot-clé ci-dessus. La recherche parcourt tout le catalogue — disponible dès le lancement de la boutique."
        />
      )}
    </div>
  );
}
