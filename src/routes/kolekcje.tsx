import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import col1 from "@/assets/collection-1.jpg";
import col2 from "@/assets/collection-2.jpg";
import col3 from "@/assets/collection-3.jpg";
import col4 from "@/assets/collection-4.jpg";
import col5 from "@/assets/collection-5.jpg";
import col6 from "@/assets/collection-6.jpg";
import col7 from "@/assets/collection-7.jpg";
import col8 from "@/assets/collection-8.jpg";

export const Route = createFileRoute("/kolekcje")({
  head: () => ({
    meta: [
      { title: "Kolekcje — Prestige Meble Toruń" },
      { name: "description", content: "Odkryj nasze kolekcje mebli premium. Zestawy wypoczynkowe, narożniki, fotele od najlepszych producentów." },
      { property: "og:title", content: "Kolekcje — Prestige Meble Toruń" },
    ],
  }),
  component: KolekcjePage,
});

const categories = ["Wszystkie", "Zestawy wypoczynkowe", "Narożniki", "Fotele", "Stoły i krzesła"];

const collections = [
  { name: "Verdi", producer: "Gala Collezione", category: "Zestawy wypoczynkowe", desc: "Klasyczna elegancja w nowoczesnym wydaniu. Dostępna w wielu tkaninach.", image: col1 },
  { name: "Elio", producer: "Sweet Sit", category: "Zestawy wypoczynkowe", desc: "Komfort i styl w jednym — idealna do każdego salonu.", image: col2 },
  { name: "Belluno", producer: "Gala Collezione", category: "Narożniki", desc: "Ponadczasowy design inspirowany włoską architekturą.", image: col3 },
  { name: "Loggia", producer: "Gala Collezione", category: "Narożniki", desc: "Przestronny narożnik z funkcją spania i pojemnikiem.", image: col4 },
  { name: "Vigo", producer: "Aris Concept", category: "Fotele", desc: "Nowoczesny fotel relaksacyjny z mechanizmem odchylania.", image: col5 },
  { name: "Modena", producer: "Unimebel", category: "Narożniki", desc: "Minimalistyczny narożnik w skandynawskim stylu.", image: col6 },
  { name: "Toscana", producer: "Skalik", category: "Stoły i krzesła", desc: "Elegancki stół z litego drewna dębowego z kompletem krzeseł.", image: col7 },
  { name: "Palazzo", producer: "Krysiak Meble", category: "Zestawy wypoczynkowe", desc: "Luksusowy zestaw wypoczynkowy ze skóry naturalnej.", image: col8 },
];

function KolekcjePage() {
  const [activeCategory, setActiveCategory] = useState("Wszystkie");

  const filtered = activeCategory === "Wszystkie"
    ? collections
    : collections.filter((c) => c.category === activeCategory);

  return (
    <>
      <PageHero title="Nasze Kolekcje" subtitle="Odkryj wyjątkowe zestawy wypoczynkowe najlepszych producentów">
        <Breadcrumb items={[{ label: "Strona główna", to: "/" }, { label: "Kolekcje" }]} />
      </PageHero>

      <section className="py-16 px-4 bg-cream">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="flex flex-wrap gap-3 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                    activeCategory === cat
                      ? "bg-gold text-navy"
                      : "bg-card text-muted-foreground hover:bg-gold/20 hover:text-navy"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((c, i) => (
              <FadeIn key={c.name} delay={i * 0.08}>
                <div className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-gold/15 text-gold text-xs font-semibold px-3 py-1 rounded-full">
                        {c.producer}
                      </span>
                      <span className="bg-navy/5 text-navy/60 text-xs px-3 py-1 rounded-full">
                        {c.category}
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-navy">{c.name}</h3>
                    <p className="mt-2 text-muted-foreground text-sm">{c.desc}</p>
                    <Button variant="gold" size="default" className="mt-4" asChild>
                      <Link to="/kontakt">Zapytaj o produkt</Link>
                    </Button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-16 text-center bg-navy rounded-2xl p-10">
              <h3 className="font-heading text-2xl font-bold text-cream">
                Nie znalazłeś czegoś dla siebie?
              </h3>
              <p className="mt-2 text-cream/60">Skontaktuj się z nami — pomożemy Ci znaleźć idealne meble!</p>
              <Button variant="gold" size="lg" className="mt-6" asChild>
                <Link to="/kontakt">Skontaktuj się z nami</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
