import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes safely (handles conditional + conflicting classes).
 * Usage: cn("px-4", condition && "px-6") -> "px-6"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a price (in cents) to a localized EUR string. Used once the catalog ships. */
export function formatPrice(
  amountInCents: number,
  locale = "fr-FR",
  currency = "EUR",
) {
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(
    amountInCents / 100,
  );
}
