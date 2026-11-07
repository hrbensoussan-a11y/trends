import type { Metadata } from "next";
import { Mail, AtSign, Music2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez l’équipe TRENDS.",
};

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: site.contactEmail || "Bientôt disponible",
    href: site.contactEmail ? `mailto:${site.contactEmail}` : undefined,
  },
  {
    icon: AtSign,
    label: "Instagram",
    value: site.social.instagram || "Bientôt disponible",
    href: site.social.instagram || undefined,
  },
  {
    icon: Music2,
    label: "TikTok",
    value: site.social.tiktok || "Bientôt disponible",
    href: site.social.tiktok || undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Parlons-en"
        title="Contact"
        intro="Une question, une idée, une collaboration ? Nos canaux de contact seront ouverts très prochainement. Aucune donnée n’est collectée pour le moment."
      />
      <Container className="py-12 sm:py-16">
        <ul className="grid gap-px border border-line sm:grid-cols-3">
          {channels.map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <>
                <Icon className="h-6 w-6 text-pink" strokeWidth={1.75} aria-hidden="true" />
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
                    {label}
                  </p>
                  <p className="mt-1 text-base text-ink">{value}</p>
                </div>
              </>
            );
            return (
              <li key={label} className="bg-cream">
                {href ? (
                  <a
                    href={href}
                    className="flex h-full flex-col justify-between p-7 transition-colors hover:bg-cream-soft sm:p-9"
                    {...(href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="flex h-full flex-col justify-between p-7 sm:p-9">
                    {inner}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </>
  );
}
