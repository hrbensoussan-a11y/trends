import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Gestion des cookies",
  description: "Politique de gestion des cookies de TRENDS.",
};

export default function CookiesPage() {
  return (
    <LegalLayout
      title="Cookies"
      intro="Le site n’utilise pas de cookies de suivi pour le moment. Cette page détaillera leur usage dès que nécessaire."
      sections={[
        "Qu’est-ce qu’un cookie",
        "Cookies utilisés",
        "Gestion du consentement",
        "Durée de vie",
      ]}
    />
  );
}
