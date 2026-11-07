import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/catalog";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getCategoryBySlug } from "@/lib/catalog";
import { routes } from "@/lib/nav";
import { formatPrice } from "@/lib/utils";

/**
 * Product detail template — the layout used for every product once the catalog
 * ships. It is complete and typed; interactive commerce (variant selection,
 * add-to-cart, checkout) is intentionally left as a clearly-marked next step so
 * no fake purchase flow is shipped in this phase.
 */
export function ProductTemplate({ product }: { product: Product }) {
  const category = getCategoryBySlug(product.category);
  const primary = product.images[0];
  const onSale =
    typeof product.salePriceInCents === "number" &&
    product.salePriceInCents < product.priceInCents;

  return (
    <Container className="py-10 sm:py-14">
      {/* Breadcrumb */}
      <nav aria-label="Fil d’Ariane" className="mb-8 text-sm text-ink-faint">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href={routes.shop} className="hover:text-pink">
              Shop
            </Link>
          </li>
          {category ? (
            <>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href={routes.category(category.slug)}
                  className="hover:text-pink"
                >
                  {category.name}
                </Link>
              </li>
            </>
          ) : null}
          <li aria-hidden="true">/</li>
          <li className="text-ink">{product.name}</li>
        </ol>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Gallery */}
        <div className="grid gap-3">
          <div className="relative aspect-[4/5] overflow-hidden bg-cream-deep">
            {primary ? (
              <Image
                src={primary.src}
                alt={primary.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            ) : null}
          </div>
          {product.images.length > 1 ? (
            <div className="grid grid-cols-4 gap-3">
              {product.images.slice(1, 5).map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-square overflow-hidden bg-cream-deep"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="20vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {/* Info */}
        <div className="lg:pt-4">
          {category ? (
            <Link
              href={routes.category(category.slug)}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-pink"
            >
              {category.name}
            </Link>
          ) : null}
          <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            {product.name}
          </h1>

          <div className="mt-4 flex items-center gap-3 text-lg">
            <span className={onSale ? "font-semibold text-pink" : "text-ink"}>
              {formatPrice(product.salePriceInCents ?? product.priceInCents)}
            </span>
            {onSale ? (
              <span className="text-ink-faint line-through">
                {formatPrice(product.priceInCents)}
              </span>
            ) : null}
          </div>

          <p className="mt-6 max-w-prose leading-relaxed text-ink-soft">
            {product.description}
          </p>

          {product.variants.length > 0 ? (
            <div className="mt-8">
              <h2 className="text-sm font-semibold text-ink">Options</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <li
                    key={v.id}
                    className="rounded-[var(--radius-btn)] border border-line px-3 py-2 text-sm text-ink"
                  >
                    {v.label}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-10">
            <Button className="w-full sm:w-auto" disabled>
              Ajouter au panier
            </Button>
            <p className="mt-3 text-xs text-ink-faint">
              Le paiement et le panier seront activés dans une prochaine phase.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
