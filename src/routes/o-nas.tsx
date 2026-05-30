import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Gem, Handshake, Briefcase } from 'lucide-react';
import showroomImg from "@/assets/meble krysiak provance - kolekcja.jpg";
import gallery1 from "@/assets/meble krysiak verano - kolekcja.jpg";
import gallery2 from "@/assets/unimeble boni kolekcja.jpg";
import col1 from "@/assets/unimeble boretto kolekcja1.jpg";
import col2 from "@/assets/unimeble boretto kolekcja2.jpg";
import col3 from "@/assets/unimeble verdi kolekcja.webp";
import col4 from "@/assets/zakor ora kolekcja.jpg";

export const Route = createFileRoute("/o-nas")({
  head: () => ({
    meta: [
      { title: "O nas — Prestige Meble Toruń" },
      { name: "description", content: "Poznaj Prestige Meble — salon meblowy premium w Galerii Wnętrz AMC w Toruniu. Jakość, doradztwo, profesjonalna obsługa." },
      { property: "og:title", content: "O nas — Prestige Meble Toruń" },
    ],
  }),
  component: ONasPage,
});

const producers = [
  "Gala Collezione", "Sweet Sit", "Aris Concept", "Unimebel",
  "Skalik", "Zakor", "Krysiak Meble", "Swarzędz Szymański",
  "Manufaktura Jasienica", "Paged Meble", "Fameg", "Ortus Furniture",
];

const features = [
  {
    icon: <Gem className="w-6 h-6 text-gold" />,
    title: "Jakość Premium",
    
  },
  {
    icon: <Handshake className="w-6 h-6 text-gold" />,
    title: "Indywidualne doradztwo",
    
  },
  {
    icon: <Briefcase className="w-6 h-6 text-gold" />,
    title: "Profesjonalna obsługa",
    
  },
];

const galleryImages = [gallery1, gallery2, col1, col2, col3, col4];

function ONasPage() {
  return (
    <>
      <PageHero title="O nas">
        <Breadcrumb items={[{ label: "Strona główna", to: "/" }, { label: "O nas" }]} />
      </PageHero>

      {/* Story */}
      <section className="py-20 px-4 bg-cream">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <img src={showroomImg} alt="Salon Prestige Meble" className="rounded-xl shadow-lg w-full aspect-[4/3] object-cover" loading="lazy" width={1280} height={960} />
              </div>
              <div className="lg:w-1/2">
                <h2 className="font-heading text-3xl font-bold text-navy">Prestige Meble — salon z pasją</h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Jesteśmy salonem meblowym premium zlokalizowanym w Galerii Wnętrz AMC w Toruniu. Od lat pomagamy naszym klientom tworzyć wyjątkowe wnętrza, oferując meble najlepszych polskich i europejskich producentów.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Nasz doświadczony zespół doradzi Ci w wyborze mebli idealnie dopasowanych do Twoich potrzeb i stylu życia.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-cream-dark">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 0.15}>
                <div className="bg-card rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-500 h-full">
                  <div className="mx-auto inline-flex items-center justify-center rounded-full bg-navy/5 p-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-navy mt-5">{feature.title}</h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4 bg-cream">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold text-navy text-center">Nasz salon</h2>
            <p className="mt-3 text-muted-foreground text-center">Zapraszamy do odwiedzenia naszego salonu w Toruniu</p>
          </FadeIn>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className={`overflow-hidden rounded-xl ${i === 1 ? "row-span-2" : ""}`}>
                  <img
                    src={img}
                    alt={`Salon Prestige Meble ${i + 1}`}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 px-4 bg-cream-dark">
        <div className="mx-auto max-w-7xl text-center">
          <FadeIn>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-4">Autoryzowany salon</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {producers.map((p) => (
                <span key={p} className="text-navy font-medium text-sm">{p}</span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-navy">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold text-cream">Odwiedź nas</h2>
            <p className="mt-3 text-cream/60">Galeria Wnętrz AMC, ul. Joachima Lelewela 33, Toruń</p>
            <Button variant="gold" size="xl" className="mt-8" asChild>
              <Link to="/kontakt">Skontaktuj się</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
