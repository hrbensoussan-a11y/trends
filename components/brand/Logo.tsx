import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { routes } from "@/lib/nav";

/**
 * TRENDS wordmark.
 *
 * ▸ This is a faithful TYPOGRAPHIC rendering of the logo (heavy Archivo, brand
 *   fuchsia). It is crisp at every size and fully responsive.
 *
 * ▸ TO USE THE OFFICIAL LOGO FILE: drop `logo.svg` (preferred) or a transparent
 *   `logo.png` into `public/brand/`, then replace the <span> block below with:
 *
 *     import Image from "next/image";
 *     <Image src="/brand/logo.svg" alt="TRENDS" width={120} height={34} priority />
 *
 *   Nothing else in the app needs to change — every usage goes through <Logo />.
 */

type LogoTone = "pink" | "ink" | "cream";

const toneClass: Record<LogoTone, string> = {
  pink: "text-pink",
  ink: "text-ink",
  cream: "text-cream",
};

interface LogoProps {
  /** Color treatment. */
  tone?: LogoTone;
  /** Render as a link to the homepage (default true). */
  asLink?: boolean;
  className?: string;
  /** Tailwind font-size utility, e.g. "text-3xl". */
  sizeClassName?: string;
}

export function Logo({
  tone = "pink",
  asLink = true,
  className,
  sizeClassName = "text-[1.75rem]",
}: LogoProps) {
  const mark = (
    <span
      className={cn(
        "font-display inline-flex items-start italic leading-none tracking-[-0.02em] select-none",
        sizeClassName,
        toneClass[tone],
        className,
      )}
      aria-hidden="true"
    >
      TRENDS
      <span className="ml-[0.1em] text-[0.42em] not-italic font-bold leading-none">
        ®
      </span>
    </span>
  );

  if (!asLink) {
    return (
      <span role="img" aria-label={site.name}>
        {mark}
      </span>
    );
  }

  return (
    <Link
      href={routes.home}
      aria-label={`${site.name} — accueil`}
      className="inline-flex shrink-0 transition-opacity hover:opacity-80"
    >
      {mark}
    </Link>
  );
}
