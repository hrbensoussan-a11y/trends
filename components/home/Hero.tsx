import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/nav";
import { site } from "@/lib/site";
import heroModel from "@/public/brand/hero-model.webp";

/**
 * Homepage hero — recreates the official artwork:
 *  • oversized fuchsia "TRENDS®" wordmark (live text, fills the width)
 *  • the model cutout layered in front (her hair blends into the pink)
 *  • a right-aligned "Tech, mode & lifestyle." lockup with a pink CTA
 *
 * Desktop layers the three elements; mobile uses its own stacked composition.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream" aria-label="TRENDS — Tech, mode & lifestyle">
      <Container bleed>
        {/* STAGE: wordmark + model */}
        <div className="relative mx-auto h-[clamp(360px,52vw,660px)] w-full">
          {/* Oversized wordmark (behind the model) */}
          <h1 className="pointer-events-none absolute inset-x-0 top-[6%] z-0 m-0 flex justify-center">
            <span className="sr-only">TRENDS — {site.tagline}</span>
            <span
              aria-hidden="true"
              className="font-display whitespace-nowrap leading-[0.8] text-pink"
              style={{ fontSize: "clamp(4.25rem, 20vw, 21rem)", letterSpacing: "-0.035em" }}
            >
              TRENDS
              <span className="align-top text-[0.28em] font-bold">®</span>
            </span>
          </h1>

          {/* Model cutout (in front of the wordmark) */}
          <div className="absolute bottom-0 left-1/2 z-10 w-[86vw] max-w-[560px] -translate-x-1/2 sm:w-[66vw] lg:w-[48vw] lg:max-w-[740px]">
            <Image
              src={heroModel}
              alt="Mannequin TRENDS en tenue streetwear"
              priority
              sizes="(max-width: 640px) 86vw, (max-width: 1024px) 66vw, 48vw"
              className="h-auto w-full select-none object-contain"
            />
          </div>
        </div>

        {/* Lockup: tagline + CTA.
            Mobile: centered below the stage. Desktop: absolute, lower-right. */}
        <div className="relative z-20 mx-auto -mt-2 max-w-md pb-10 text-center lg:absolute lg:bottom-[18%] lg:right-[4%] lg:mt-0 lg:max-w-none lg:pb-0 lg:text-right">
          <span className="mx-auto mb-5 block h-px w-10 bg-ink lg:ml-auto lg:mr-0" aria-hidden="true" />
          <p className="font-display text-3xl leading-[0.98] text-ink sm:text-4xl lg:text-5xl">
            Tech, mode
            <br className="hidden sm:block" /> & lifestyle.
          </p>
          <div className="mt-6 flex justify-center lg:justify-end">
            <Button href={routes.shop} size="lg" className="group">
              Découvrir
              <ArrowRight
                className="h-5 w-5 transition-transform duration-200 ease-[var(--ease-brand)] group-hover:translate-x-1"
                strokeWidth={2}
              />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
