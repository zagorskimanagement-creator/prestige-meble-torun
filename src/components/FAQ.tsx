import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";

const faqs = [
  {
    question: "Czy mogę zamówić meble w innym kolorze niż na ekspozycji?",
    answer:
      "Tak, zdecydowanie! Większość naszych kolekcji dostępna jest w szerokiej gamie kolorów, tkanin i wykończeń. Dysponujemy próbnikami materiałów wszystkich producentów, dzięki czemu możesz dokładnie dobrać kolor i fakturę do swojego wnętrza. Nasi doradcy z przyjemnością pomogą Ci wybrać najlepsze rozwiązanie — zapraszamy do salonu.",
  },
  {
    question: "Jak długo trwa realizacja zamówienia indywidualnego?",
    answer:
      "Czas realizacji zależy od producenta i specyfikacji zamówienia. Standardowo meble szyte na indywidualne zamówienie dostarczamy w ciągu 8–14 tygodni. Przy popularnych modelach termin bywa krótszy. O szacowanym czasie realizacji informujemy przy składaniu zamówienia i na bieżąco przekazujemy status produkcji.",
  },
  {
    question: "Czy salon zapewnia dostawę i montaż?",
    answer:
      "Tak, oferujemy kompleksową usługę dostawy i montażu mebli na terenie Torunia i okolic. Nasz zespół zadba o bezpieczny transport oraz profesjonalny montaż bezpośrednio w Twoim domu. Szczegóły dotyczące kosztów i terminów ustalamy indywidualnie przy zakupie.",
  },
  {
    question: "Jakie marki mebli są dostępne w salonie?",
    answer:
      "W Prestige Meble Toruń znajdziesz kolekcje renomowanych polskich i europejskich producentów: Krysiak Meble, Unimeble, Zakor, Fameg, Gala Collezione, Sweet Sit oraz Alwes. Każda marka wyróżnia się wyjątkową jakością wykonania i oryginalnym wzornictwem — mamy coś dla każdego stylu wnętrza.",
  },
  {
    question: "Czy można obejrzeć meble przed zakupem?",
    answer:
      "Oczywiście! Nasz salon wyposażony jest w bogatą ekspozycję, gdzie można bezpośrednio przetestować komfort siedzenia i leżenia. Zapraszamy do Galerii Wnętrz AMC, ul. Lelewela 33 w Toruniu (I piętro). Jesteśmy czynni pon–sob 10:00–20:00 oraz w niedzielę 10:00–18:00.",
  },
  {
    question: "Jaka jest polityka reklamacyjna i gwarancyjna?",
    answer:
      "Wszystkie meble objęte są gwarancją producenta, zazwyczaj wynoszącą 2–5 lat w zależności od marki. W przypadku reklamacji prosimy o kontakt telefoniczny lub e-mailowy — nasz dział obsługi klienta przeprowadzi Cię przez cały proces. Dążymy do szybkiego i bezproblemowego rozwiązania każdej sprawy.",
  },
  {
    question: "Czy wystawiacie faktury VAT?",
    answer:
      "Tak, wystawiamy faktury VAT zarówno dla osób prywatnych, jak i firm. Jeśli potrzebujesz faktury, poinformuj nas o tym podczas zakupu lub przy składaniu zamówienia. Dokumenty wystawiane są zgodnie z obowiązującymi przepisami podatkowymi.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-20 px-4 bg-cream" id="faq" aria-label="Często zadawane pytania">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy text-center">
            Często zadawane pytania
          </h2>
          <p className="mt-3 text-muted-foreground text-center max-w-xl mx-auto">
            Znajdź odpowiedzi na najczęściej zadawane pytania o nasz salon i ofertę
          </p>
        </FadeIn>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="bg-card rounded-xl shadow-sm overflow-hidden border border-border">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-cream-dark transition-colors"
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="font-semibold text-navy text-sm sm:text-base leading-snug">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === i && (
                  <div
                    id={`faq-answer-${i}`}
                    className="px-6 pb-6 pt-4 text-muted-foreground text-sm leading-relaxed border-t border-border"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
