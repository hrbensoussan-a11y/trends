import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Wider bound for hero / editorial full-width sections. */
  bleed?: boolean;
}

/** Centered content wrapper with responsive side gutters. */
export function Container({
  children,
  className,
  as: Tag = "div",
  bleed = false,
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-12",
        bleed ? "max-w-[1760px]" : "max-w-[1440px]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
