import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import col1 from "@/assets/meble-krysiak-cantiero-orzech-kolekcja.jpg";
import col2 from "@/assets/meble-krysiak-granada-antracyt-kolekcja.jpg";
import col3 from "@/assets/meble-krysiak-granada-szarosc-pustyni-kolekcja.jpg";
import col4 from "@/assets/meble-krysiak-monaco-kolekcja.jpg";
import col5 from "@/assets/meble-krysiak-provance-kolekcja.jpg";
import col6 from "@/assets/meble-krysiak-verano-kolekcja.jpg";
import col7 from "@/assets/unimeble-boni-kolekcja.jpg";
import col8 from "@/assets/unimeble-boretto-kolekcja1.jpg";
import col9 from "@/assets/unimeble-boretto-kolekcja1.webp";
import col10 from "@/assets/unimeble-boretto-kolekcja2.jpg";
import col11 from "@/assets/unimeble-lagossa-kolekcja.jpg";
import col12 from "@/assets/unimeble-marino-kolekcje.jpg";
import col13 from "@/assets/unimeble-max-XIX-kolekcja.jpg";
import col14 from "@/assets/unimeble-mobilo-kolekcja.jpg";
import col15 from "@/assets/unimeble-oliwia-e-kolekcja.jpg";
import col16 from "@/assets/unimeble-verdi-kolekcja.webp";
import col17 from "@/assets/zakor-limera-kolekcja.jpg";
import col18 from "@/assets/zakor-malaren-kolekcja.jpg";
import col19 from "@/assets/zakor-ora-kolekcja.jpg";
import fameg1 from "@/assets/fameg-nord-kolekcja.jpg";
import fameg2 from "@/assets/fameg-riso-kolekcja.jpg";
import fameg3 from "@/assets/fameg-finn-kolekcja.jpg";
import gala1 from "@/assets/gala-karato-kolekcja.jpg";
import gala2 from "@/assets/gala-loggia-kolekcja.jpg";
import gala3 from "@/assets/gala-lorens-kolekcja.jpg";
import gala4 from "@/assets/gala-look-kolekcja.jpg";
import sweet1 from "@/assets/sweetsit-ema-kolekcja.jpg";
import sweet2 from "@/assets/sweetsit-cloud-kolekcja.jpg";
import sweet3 from "@/assets/sweetsit-comfy-kolekcja.jpg";
import sweet4 from "@/assets/sweetsit-bergen-kolekcja.jpg";

export const Route = createFileRoute("/kolekcje")({
  component: KolekcjePage,
});

const categories = ["Wszystkie", "Krysiak", "Unimeble", "Zakor", "Fameg", "Gala Collezione", "Sweet Sit"];

const krysiakGallery = [col1, col2, col3, col4, col5, col6];
const unimebleGallery = [col7, col8, col9, col10, col11, col12, col13, col14, col15, col16];
const zakorGallery = [col17, col18, col19];
const famegGallery = [fameg1, fameg2, fameg3];
const galaGallery = [gala1, gala2, gala3, gala4];
const sweetGallery = [sweet1, sweet2, sweet3, sweet4];

const collections = [
  {
    name: "Krysiak",
    brand: "Krysiak",
    desc: "Polskie meble tapicerowane szyte na miarę twoich potrzeb.",
    image: col1,
    gallery: krysiakGallery,
  },
  {
    name: "Unimeble",
    brand: "Unimeble",
    desc: "Solidne meble tapicerowane z wieloletnią tradycją.",
    image: col7,
    gallery: unimebleGallery,
  },
  {
    name: "Zakor",
    brand: "Zakor",
    desc: "Meble do jadalni i salonu łączące styl z trwałością.",
    image: col17,
    gallery: zakorGallery,
  },
  {
    name: "Fameg",
    brand: "Fameg",
    desc: "Krzesła i stoły jadalniane z polskiego drewna — ponadczasowy design i najwyższa jakość wykonania.",
    image: fameg1,
    gallery: famegGallery,
  },
  {
    name: "Gala Collezione",
    brand: "Gala Collezione",
    desc: "Systemy modułowe i sofy najwyższej klasy — swoboda aranżacji i włoski styl.",
    image: gala1,
    gallery: galaGallery,
  },
  {
    name: "Sweet Sit",
    brand: "Sweet Sit",
    desc: "Narożniki i sofy z charakterem — komfort i styl dopasowane do każdego wnętrza.",
    image: sweet1,
    gallery: sweetGallery,
  },
];

function KolekcjePage() {
  useSEO({
    title: "Kolekcje — Prestige Meble Toruń",
    description: "Odkryj nasze kolekcje mebli premium: Krysiak, Unimeble, Zakor, Fameg, Gala Collezione, Sweet Sit. Salon meblowy Toruń.",
  });

  const [activeCategory, setActiveCategory] = useState("Wszystkie");
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);

  const selected = selectedCollection
    ? collections.find((c) => c.name === selectedCollection) ?? null
    : null;

  const filtered =
    activeCategory === "Wszystkie"
      ? collections
      : collections.filter((c) => c.brand === activeCategory);

  if (selected) {
    return (
      <>
        <PageHero
          title={selected.name}
          subtitle={`Galeria kolekcji ${selected.name}`}
        >
          <Breadcrumb
            items={[
              { label: "Strona główna", to: "/" },
              { label: "Kolekcje", to: "/kolekcje" },
              { label: selected.name },
            ]}
          />
        </PageHero>

        <section className="py-16 px-4 bg-cream">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
              <Button
                variant="secondary"
                size="default"
                onClick={() => setSelectedCollection(null)}
              >
                ← Powrót do kolekcji
              </Button>
              <div className="text-muted-foreground text-sm">
                {selected.brand} · {selected.desc}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {selected.gallery.map((src, index) => (
                <FadeIn key={index} delay={index * 0.05}>
                  <div className="group overflow-hidden rounded-3xl bg-card shadow-md transition-all duration-500 hover:shadow-xl">
                    <img
                      src={src}
                      alt={`${selected.name} — kolekcja mebli ${index + 1}`}
                      className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                  </div>
                </FadeIn>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button variant="gold" size="lg" asChild>
                <Link to="/kontakt">Zapytaj o kolekcję {selected.name}</Link>
              </Button>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        title="Nasze Kolekcje"
        subtitle="Odkryj wyjątkowe zestawy wypoczynkowe najlepszych producentów"
      >
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
                <div
                  className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
                  onClick={() => setSelectedCollection(c.name)}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={c.image}
                      alt={`Kolekcja ${c.name} — meble ${c.brand}`}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      width={800}
                      height={450}
                    />
                  </div>
                  <div className="p-6">
                    <span className="bg-gold/15 text-gold text-xs font-semibold px-3 py-1 rounded-full">
                      {c.brand}
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-navy mt-3">{c.name}</h3>
                    <p className="mt-2 text-muted-foreground text-sm">{c.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Button
                        variant="secondary"
                        size="default"
                        onClick={(e) => { e.stopPropagation(); setSelectedCollection(c.name); }}
                      >
                        Zobacz kolekcję
                      </Button>
                      <Button variant="gold" size="default" asChild onClick={(e) => e.stopPropagation()}>
                        <Link to="/kontakt">Zapytaj o produkt</Link>
                      </Button>
                    </div>
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
              <p className="mt-2 text-cream/60">
                Skontaktuj się z nami — pomożemy Ci znaleźć idealne meble!
              </p>
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
