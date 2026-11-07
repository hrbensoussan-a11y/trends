import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SearchClient } from "@/components/search/SearchClient";

export const metadata: Metadata = {
  title: "Recherche",
  description: "Recherchez dans le catalogue TRENDS.",
  robots: { index: false, follow: true },
};

export default function RecherchePage() {
  return (
    <>
      <PageHeader eyebrow="Trouver" title="Recherche" />
      <Container className="py-12 sm:py-16">
        <Suspense fallback={null}>
          <SearchClient />
        </Suspense>
      </Container>
    </>
  );
}
