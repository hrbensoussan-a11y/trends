import { site } from "@/lib/site";

/**
 * Thin fuchsia announcement bar at the very top of the page.
 * Message is intentionally neutral — no shipping/returns/promo promises until
 * they are confirmed. Update `site.announcement` to change it.
 */
export function TopBar() {
  return (
    <div className="bg-pink text-white">
      <p className="mx-auto flex h-9 max-w-[1760px] items-center justify-center px-5 text-center text-[0.7rem] font-semibold uppercase tracking-[0.28em] sm:text-xs">
        {site.announcement}
      </p>
    </div>
  );
}
