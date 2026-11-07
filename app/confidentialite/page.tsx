import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité de TRENDS.",
};

export default function ConfidentialitePage() {
  return (
    <LegalLayout
      title="Confidentialité"
      intro="Comment vos données seront traitées lorsque les fonctionnalités de compte et de commande seront activées."
      sections={[
        "Données collectées",
        "Finalités du traitement",
        "Base légale",
        "Durée de conservation",
        "Vos droits",
        "Cookies",
      ]}
    />
  );
}
