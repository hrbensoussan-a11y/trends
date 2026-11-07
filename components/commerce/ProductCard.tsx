import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/catalog";
import { routes } from "@/lib/nav";
import { formatPrice } from "@/lib/utils";

/**
 * Product card — ready for when the catalog ships. Not rendered yet (the
 * catalog is empty), but defining it now keeps future grids a one-liner.
 */
export function ProductCard({ product }: { product: Product }) {
  const primary = product.images[0];
  const onSale =
    typeof product.salePriceInCents === "number" &&
    product.salePriceInCents < product.priceInCents;

  return (
    <Link href={routes.product(product.slug)} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-cream-deep">
        {primary ? (
          <Image
            src={primary.src}
            alt={primary.alt}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 ease-[var(--ease-brand)] group-hover:scale-[1.03]"
          />
        ) : null}
        {product.isNew ? (
          <span className="absolute left-3 top-3 bg-ink px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-cream">
            Nouveau
          </span>
        ) : null}
        {onSale ? (
          <span className="absolute right-3 top-3 bg-pink px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-white">
            Promo
          </span>
        ) : null}
      </div>
      <div className="mt-3">
        <h3 className="text-sm font-semibold text-ink group-hover:text-pink">
          {product.name}
        </h3>
        <div className="mt-1 flex items-center gap-2 text-sm">
          <span className={onSale ? "text-pink" : "text-ink-soft"}>
            {formatPrice(product.salePriceInCents ?? product.priceInCents)}
          </span>
          {onSale ? (
            <span className="text-ink-faint line-through">
              {formatPrice(product.priceInCents)}
            </span>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
