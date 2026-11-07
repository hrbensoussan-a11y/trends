import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/nav";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-pink" style={{ fontSize: "clamp(5rem, 18vw, 12rem)", lineHeight: 0.85 }}>
        404
      </p>
      <h1 className="mt-4 font-display text-2xl text-ink sm:text-3xl">
        Cette page n’existe pas
      </h1>
      <p className="mt-3 max-w-md text-ink-soft">
        Le lien est peut-être erroné, ou la page n’est pas encore en ligne.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href={routes.home}>Retour à l’accueil</Button>
        <Button href={routes.shop} variant="outline">
          Aller au shop
        </Button>
      </div>
    </Container>
  );
}
