import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";

export const Route = createFileRoute("/producenci")({
  component: ProducenciPage,
});

const producers = [
  { name: "Gala Collezione", url: "https://www.galacollezione.com", desc: "Włoski design i ponadczasowa elegancja w każdym detalu." },
  { name: "Sweet Sit", url: "https://www.sweetsit.pl", desc: "Wygodne i stylowe zestawy wypoczynkowe dla wymagających." },
  { name: "Aris Concept", url: "https://www.arismeble.pl", desc: "Nowoczesne meble o wysokiej funkcjonalności i estetyce." },
  { name: "Unimebel", url: "https://www.unimebel.pl", desc: "Solidne meble tapicerowane z wieloletnią tradycją." },
  { name: "Skalik", url: "https://www.skalik.pl", desc: "Producent mebli drewnianych z dbałością o każdy szczegół." },
  { name: "Zakor", url: "https://www.zakor.pl", desc: "Meble do jadalni i salonu łączące styl z trwałością." },
  { name: "Krysiak Meble", url: "https://www.meblekrysiak.pl", desc: "Polskie meble tapicerowane szyte na miarę Twoich potrzeb." },
  { name: "Swarzędz Szymański", url: "https://www.meble-rs.pl", desc: "Tradycja stolarstwa łączona z nowoczesnym wzornictwem." },
  { name: "Manufaktura Jasienica", url: "https://www.manufakturajasienica.pl", desc: "Rzemieślnicza precyzja i naturalne materiały w każdym meblu." },
  { name: "Paged Meble", url: "https://www.paged.pl", desc: "Innowacyjne meble giętowiowe z polskich fabryk." },
  { name: "Fameg", url: "https://www.fameg.pl", desc: "Kultowe krzesła i meble z litego drewna bukowego." },
  { name: "Ortus Furniture", url: "https://www.ortusfurniture.eu", desc: "Ekskluzywne meble tapicerowane najwyższej klasy." },
];

function ProducenciPage() {
  useSEO({
    title: "Producenci — Prestige Meble Toruń",
    description: "Poznaj producentów mebli, z którymi współpracujemy: Gala Collezione, Sweet Sit, Fameg, Krysiak, Unimeble i wielu innych. Salon meblowy Toruń.",
  });

  return (
    <>
      <PageHero
        title="Nasi Producenci"
        subtitle="Współpracujemy z najlepszymi polskimi i europejskimi producentami mebli"
      >
        <Breadcrumb items={[{ label: "Strona główna", to: "/" }, { label: "Producenci" }]} />
      </PageHero>

      <section className="py-16 px-4 bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {producers.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.06}>
                <div className="group bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border-t-4 border-logo-yellow hover:border-gold h-full flex flex-col">
                  <h3 className="font-heading text-xl font-bold text-navy">{p.name}</h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed flex-1">{p.desc}</p>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-gold font-semibold text-sm hover:text-navy transition-colors"
                    aria-label={`Strona producenta ${p.name}`}
                  >
                    Odwiedź stronę →
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <p className="mt-10 text-center text-muted-foreground text-sm">
              Klikając przycisk, przejdziesz bezpośrednio do oficjalnej strony producenta.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-12 text-center bg-navy rounded-2xl p-10">
              <h3 className="font-heading text-2xl font-bold text-cream">
                Chcesz zobaczyć meble w salonie?
              </h3>
              <p className="mt-2 text-cream/60">Zapraszamy do odwiedzenia naszego showroomu w Toruniu!</p>
              <Button variant="gold" size="lg" className="mt-6" asChild>
                <Link to="/kontakt">Zapraszamy!</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
