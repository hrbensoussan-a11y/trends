import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description: "Conditions générales de vente de TRENDS.",
};

export default function CgvPage() {
  return (
    <LegalLayout
      title="CGV"
      intro="Les conditions générales de vente s’appliqueront dès l’ouverture de la boutique."
      sections={[
        "Objet",
        "Produits et prix",
        "Commande",
        "Paiement",
        "Livraison",
        "Droit de rétractation",
        "Retours et remboursements",
        "Service client",
      ]}
    />
  );
}
