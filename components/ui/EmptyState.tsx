import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface EmptyStateProps {
  /** Small eyebrow label above the title. */
  eyebrow?: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  className?: string;
}

/**
 * On-brand empty state. Used wherever content (products, search results, cart)
 * does not exist yet, so pages read as intentional rather than broken.
 */
export function EmptyState({
  eyebrow,
  title,
  description,
  icon,
  action,
  secondaryAction,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center",
        "rounded-[3px] border border-dashed border-line bg-cream-soft/60",
        "px-6 py-16 sm:py-24",
        className,
      )}
    >
      {icon ? (
        <div
          className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-pink-tint text-pink"
          aria-hidden="true"
        >
          {icon}
        </div>
      ) : null}
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-pink">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-2xl text-ink sm:text-3xl">{title}</h2>
      {description ? (
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft sm:text-base">
          {description}
        </p>
      ) : null}
      {action || secondaryAction ? (
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {action ? (
            <Button href={action.href} size="md">
              {action.label}
            </Button>
          ) : null}
          {secondaryAction ? (
            <Button href={secondaryAction.href} variant="outline" size="md">
              {secondaryAction.label}
            </Button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
