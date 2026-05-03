import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-home.jpg";
import col1 from "@/assets/collection-1.jpg";
import col2 from "@/assets/collection-2.jpg";
import col3 from "@/assets/collection-3.jpg";
import col4 from "@/assets/collection-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prestige Meble — Salon Meblowy Premium w Toruniu" },
      { name: "description", content: "Meble premium w Toruniu. Odkryj kolekcje najlepszych producentów w Galerii Wnętrz AMC. Prestige Meble — elegancja i komfort." },
    ],
  }),
  component: Index,
});

const collections = [
  { name: "Verdi", producer: "Gala Collezione", image: col1 },
  { name: "Elio", producer: "Sweet Sit", image: col2 },
  { name: "Belluno", producer: "Gala Collezione", image: col3 },
  { name: "Loggia", producer: "Gala Collezione", image: col4 },
];

const producers = [
  "Gala Collezione", "Sweet Sit", "Aris Concept", "Unimebel",
  "Skalik", "Zakor", "Krysiak Meble", "Swarzędz Szymański",
  "Manufaktura Jasienica", "Paged Meble", "Fameg", "Ortus Furniture",
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Salon meblowy Prestige Meble" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-navy/70" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <FadeIn>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-cream leading-tight">
              Meble, które opowiadają<br />
              <span className="text-gold">Twoją historię</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-cream/70 text-lg md:text-xl">
              Salon Premium w sercu Torunia
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild>
                <Link to="/kolekcje">Odkryj kolekcje</Link>
              </Button>
              <Button variant="gold-outline" size="xl" asChild>
                <Link to="/kontakt">Skontaktuj się</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mini Collections */}
      <section className="py-20 px-4 bg-cream">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy text-center">
              Nasze kolekcje
            </h2>
            <p className="mt-3 text-muted-foreground text-center max-w-xl mx-auto">
              Odkryj wyjątkowe zestawy wypoczynkowe najlepszych producentów
            </p>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((c, i) => (
              <FadeIn key={c.name} delay={i * 0.1}>
                <div className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.name}
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-gold font-medium uppercase tracking-wider">{c.producer}</span>
                    <h3 className="font-heading text-xl font-semibold text-navy mt-1">{c.name}</h3>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-10 text-center">
              <Button variant="gold" size="lg" asChild>
                <Link to="/kolekcje">Zobacz wszystkie kolekcje →</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mini O nas */}
      <section className="py-20 px-4 bg-cream-dark">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <img
                  src={col3}
                  alt="Salon Prestige Meble Toruń"
                  className="rounded-xl shadow-lg w-full aspect-[4/3] object-cover"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="font-heading text-3xl font-bold text-navy">O nas</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Prestige Meble to salon meblowy premium w Galerii Wnętrz AMC w Toruniu. Od lat pomagamy
                  klientom tworzyć wyjątkowe wnętrza, oferując meble najlepszych producentów.
                </p>
                <Button variant="gold" size="lg" className="mt-6" asChild>
                  <Link to="/o-nas">Dowiedz się więcej →</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mini Producenci */}
      <section className="py-16 px-4 bg-cream overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <h2 className="font-heading text-2xl font-bold text-navy text-center mb-8">Nasi Producenci</h2>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {producers.map((p) => (
              <span key={p} className="text-muted-foreground text-sm font-medium whitespace-nowrap">
                {p}
              </span>
            ))}
          </div>
          <FadeIn delay={0.2}>
            <div className="mt-8 text-center">
              <Button variant="gold-outline" size="default" asChild>
                <Link to="/producenci">Wszyscy producenci →</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-navy">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream">
              Zapraszamy do salonu w Toruniu
            </h2>
            <p className="mt-4 text-cream/60">
              Galeria Wnętrz AMC, ul. Joachima Lelewela 33
            </p>
            <Button variant="gold" size="xl" className="mt-8" asChild>
              <Link to="/kontakt">Skontaktuj się</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
