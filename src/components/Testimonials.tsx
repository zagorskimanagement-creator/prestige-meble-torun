import { FadeIn } from "@/components/FadeIn";

const testimonials = [
  {
    name: "Katarzyna Wiśniewska",
    text: "Zachwycona obsługą i jakością. Kupiłam komplet wypoczynkowy Krysiak — wygoda i styl na najwyższym poziomie. Doradca pomógł dobrać idealny kolor tkaniny, a realizacja przebiegła bez żadnych problemów.",
    date: "15 marca 2025",
  },
  {
    name: "Marek Kowalczyk",
    text: "Profesjonalne podejście od pierwszej chwili. Personel zna produkty na wylot. Zamówiłem sofę na wymiar — dostarczona w terminie, montaż bezproblemowy. Polecam każdemu, kto szuka mebli premium.",
    date: "22 listopada 2024",
  },
  {
    name: "Anna Zielińska",
    text: "Meble Fameg są absolutnie wyjątkowe. Stolik i krzesła w stylu skandynawskim idealnie pasują do naszego wnętrza. Bardzo miła i fachowa obsługa — czułam się zaopiekowana przez cały czas.",
    date: "8 stycznia 2025",
  },
  {
    name: "Tomasz Górski",
    text: "Prestiżowy salon z naprawdę prestiżową ofertą. Fotele Gala Collezione — elegancja i komfort w jednym. Cena adekwatna do jakości, a jakość jest rewelacyjna. Bardzo polecam!",
    date: "3 września 2024",
  },
  {
    name: "Monika Lewandowska",
    text: "Odwiedzam Galerię AMC od lat i to zdecydowanie najlepszy salon meblowy w Toruniu. Szeroki wybór, piękna ekspozycja i pracownicy, którzy naprawdę słuchają i doradzają — a nie tylko sprzedają.",
    date: "29 kwietnia 2025",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="Ocena 5 na 5 gwiazdek">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className="w-4 h-4 text-gold fill-current"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-cream-dark" id="opinie" aria-label="Opinie klientów">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy text-center">
            Opinie naszych klientów
          </h2>
          <p className="mt-3 text-muted-foreground text-center max-w-xl mx-auto">
            Tysiące zadowolonych klientów — przeczytaj, co mówią o naszym salonie
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <article className="bg-card rounded-xl p-6 shadow-md flex flex-col gap-4 h-full">
                <StarRating />
                <blockquote className="text-muted-foreground text-sm leading-relaxed flex-1">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <footer className="flex items-center justify-between pt-2 border-t border-border">
                  <span className="font-semibold text-navy text-sm">{t.name}</span>
                  <time className="text-xs text-muted-foreground">{t.date}</time>
                </footer>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-10 text-center">
            <a
              href="https://maps.google.com/?cid=2451634249227884182"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gold font-semibold hover:text-navy transition-colors"
              aria-label="Zobacz więcej opinii o Prestige Meble w Google Maps"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              Zobacz więcej opinii w Google →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
