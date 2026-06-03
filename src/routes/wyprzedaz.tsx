import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { Breadcrumb } from "@/components/Breadcrumb";
import { useSEO } from "@/hooks/useSEO";

export const Route = createFileRoute("/wyprzedaz")({
  component: WyprzedazPage,
});

function WyprzedazPage() {
  useSEO({
    title: "Wyprzedaż — Prestige Meble Toruń",
    description: "Aktualne promocje i wyprzedaże w salonie Prestige Meble Toruń.",
  });

  return (
    <>
      <PageHero
        title="Wyprzedaż"
        subtitle="Aktualne promocje w naszym salonie"
      >
        <Breadcrumb items={[{ label: "Strona główna", to: "/" }, { label: "Wyprzedaż" }]} />
      </PageHero>

      <section className="py-16 px-4 bg-cream">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/fameg-wyprzedaz.jpg"
                alt="Fameg -21% rabat na wszystko, promocja od 01.03 do 21.03"
                className="w-full h-auto object-cover"
                width={1024}
                height={642}
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
