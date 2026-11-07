import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  className?: string;
  /** Center the header (used on editorial / about pages). */
  align?: "left" | "center";
}

/** Consistent editorial header for interior pages. */
export function PageHeader({
  eyebrow,
  title,
  intro,
  className,
  align = "left",
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        "border-b border-line py-10 sm:py-14",
        className,
      )}
    >
      <Container>
        <div
          className={cn(
            "max-w-3xl",
            align === "center" && "mx-auto text-center",
          )}
        >
          {eyebrow ? (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-pink">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="font-display text-4xl text-ink sm:text-6xl">
            {title}
          </h1>
          {intro ? (
            <p
              className={cn(
                "mt-5 text-base leading-relaxed text-ink-soft sm:text-lg",
                align === "center" && "mx-auto",
              )}
            >
              {intro}
            </p>
          ) : null}
        </div>
      </Container>
    </header>
  );
}
