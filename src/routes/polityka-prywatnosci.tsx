import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Breadcrumb } from "@/components/Breadcrumb";
import { useSEO } from "@/hooks/useSEO";

export const Route = createFileRoute("/polityka-prywatnosci")({
  component: PolitykaPrywatnosciPage,
});

function PolitykaPrywatnosciPage() {
  useSEO({
    title: "Polityka Prywatności — Prestige Meble Toruń",
    description: "Polityka prywatności salonu Prestige Meble Toruń. Informacje o przetwarzaniu danych osobowych zgodnie z RODO.",
  });

  return (
    <>
      <PageHero title="Polityka Prywatności">
        <Breadcrumb items={[{ label: "Strona główna", to: "/" }, { label: "Polityka Prywatności" }]} />
      </PageHero>

      <section className="py-16 px-4 bg-cream">
        <div className="mx-auto max-w-3xl">
          <div className="bg-card rounded-xl p-8 shadow-md prose prose-sm max-w-none text-muted-foreground">

            <p className="text-xs text-muted-foreground mb-8">Ostatnia aktualizacja: 1 czerwca 2026 r.</p>

            <h2 className="font-heading text-xl font-bold text-navy mt-0">1. Administrator danych osobowych</h2>
            <p>
              Administratorem Twoich danych osobowych jest <strong className="text-navy">Prestige Meble</strong>,
              Galeria Wnętrz AMC, ul. Joachima Lelewela 33, 87-100 Toruń,
              tel. <a href="tel:+48697705729" className="text-gold hover:text-navy">697 705 729</a>.
            </p>

            <h2 className="font-heading text-xl font-bold text-navy mt-8">2. Cel i podstawa przetwarzania danych</h2>
            <p>Twoje dane osobowe przetwarzamy w następujących celach:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-navy">Obsługa zapytań</strong> — dane z formularza kontaktowego (imię, email, telefon, treść wiadomości) przetwarzamy w celu udzielenia odpowiedzi na Twoje pytanie (podstawa: art. 6 ust. 1 lit. b RODO — wykonanie umowy/podjęcie działań na żądanie).</li>
              <li><strong className="text-navy">Kontakt telefoniczny</strong> — jeśli kontaktujesz się z nami telefonicznie, przetwarzamy podany numer w celu obsługi rozmowy (art. 6 ust. 1 lit. b RODO).</li>
              <li><strong className="text-navy">Marketing bezpośredni</strong> — wyłącznie za Twoją zgodą (art. 6 ust. 1 lit. a RODO).</li>
            </ul>

            <h2 className="font-heading text-xl font-bold text-navy mt-8">3. Cookies i pliki lokalne</h2>
            <p>Strona używa następujących plików cookies:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-navy">cookie-consent</strong> (localStorage) — zapamiętuje Twój wybór dotyczący zgody na cookies. Przechowywany lokalnie w przeglądarce.</li>
              <li><strong className="text-navy">Google Maps</strong> — osadzamy mapę Google Maps. Google może ustawiać własne pliki cookies w celu zapewnienia działania mapy. Szczegóły: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-navy">Polityka prywatności Google</a>.</li>
            </ul>
            <p>Możesz odrzucić cookies, klikając "Odrzuć" w banerze zgody. Odrzucenie cookies niezbędnych (np. Google Maps) może wpłynąć na działanie mapy na stronie.</p>

            <h2 className="font-heading text-xl font-bold text-navy mt-8">4. Odbiorcy danych</h2>
            <p>Twoje dane mogą być przekazywane:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-navy">Formspree Inc.</strong> — dostawca usługi obsługi formularzy kontaktowych (USA), jeśli wyślesz wiadomość przez formularz. Formspree przetwarza dane zgodnie ze swoją polityką prywatności dostępną na formspree.io.</li>
              <li><strong className="text-navy">Google LLC</strong> — dostawca usługi Google Maps (USA).</li>
              <li><strong className="text-navy">Vercel Inc.</strong> — dostawca hostingu strony (USA).</li>
            </ul>
            <p>Przekazanie danych do USA odbywa się na podstawie standardowych klauzul umownych (SCC) zatwierdzonych przez Komisję Europejską.</p>

            <h2 className="font-heading text-xl font-bold text-navy mt-8">5. Okres przechowywania danych</h2>
            <p>Dane z formularza kontaktowego przechowujemy przez okres niezbędny do obsługi Twojego zapytania, nie dłużej niż 2 lata od ostatniego kontaktu.</p>

            <h2 className="font-heading text-xl font-bold text-navy mt-8">6. Twoje prawa</h2>
            <p>Przysługują Ci następujące prawa:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Prawo dostępu do danych (art. 15 RODO)</li>
              <li>Prawo do sprostowania danych (art. 16 RODO)</li>
              <li>Prawo do usunięcia danych ("prawo do bycia zapomnianym", art. 17 RODO)</li>
              <li>Prawo do ograniczenia przetwarzania (art. 18 RODO)</li>
              <li>Prawo do przenoszenia danych (art. 20 RODO)</li>
              <li>Prawo do sprzeciwu (art. 21 RODO)</li>
              <li>Prawo do cofnięcia zgody w dowolnym momencie (jeśli przetwarzanie odbywa się na podstawie zgody)</li>
            </ul>
            <p>Aby skorzystać z praw, skontaktuj się z nami pod adresem lub telefonem wskazanym w pkt. 1.</p>
            <p>Masz również prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (UODO), ul. Stawki 2, 00-193 Warszawa.</p>

            <h2 className="font-heading text-xl font-bold text-navy mt-8">7. Dobrowolność podania danych</h2>
            <p>Podanie danych osobowych w formularzu kontaktowym jest dobrowolne, jednak niezbędne do udzielenia odpowiedzi na Twoje zapytanie.</p>

            <h2 className="font-heading text-xl font-bold text-navy mt-8">8. Zmiany polityki prywatności</h2>
            <p>Zastrzegamy sobie prawo do zmiany niniejszej polityki prywatności. O wszelkich zmianach poinformujemy poprzez aktualizację daty na początku dokumentu.</p>

          </div>
        </div>
      </section>
    </>
  );
}
