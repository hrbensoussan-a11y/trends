import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de TRENDS.",
};

export default function MentionsLegalesPage() {
  return (
    <LegalLayout
      title="Mentions légales"
      intro="Informations légales relatives à l’éditeur et à l’hébergement du site."
      sections={[
        "Éditeur du site",
        "Hébergement",
        "Propriété intellectuelle",
        "Responsabilité",
        "Contact",
      ]}
    />
  );
}
