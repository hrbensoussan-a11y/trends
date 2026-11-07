import { PackageOpen } from "lucide-react";
import type { Product } from "@/types/catalog";
import { ProductCard } from "@/components/commerce/ProductCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { routes } from "@/lib/nav";

interface ProductGridProps {
  products: Product[];
  /** Empty-state copy shown while there are no products. */
  empty?: {
    eyebrow?: string;
    title: string;
    description?: string;
  };
}

/**
 * Renders a responsive product grid, or an on-brand empty state when there are
 * no products. Every catalog page funnels through this component, so the day
 * products exist, they appear everywhere automatically.
 */
export function ProductGrid({ products, empty }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <EmptyState
        icon={<PackageOpen className="h-6 w-6" strokeWidth={1.75} />}
        eyebrow={empty?.eyebrow ?? "Catalogue en préparation"}
        title={empty?.title ?? "Bientôt disponible"}
        description={
          empty?.description ??
          "Nos produits arrivent très prochainement. Reviens vite pour découvrir la sélection."
        }
        action={{ label: "Explorer les catégories", href: routes.categories }}
      />
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-12">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
