import { Hero } from "@/components/home/Hero";
import { CategoryBar } from "@/components/home/CategoryBar";
import { BrandStatement } from "@/components/home/BrandStatement";
import { CatalogComingSoon } from "@/components/home/CatalogComingSoon";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryBar />
      <BrandStatement />
      <CatalogComingSoon />
    </>
  );
}
