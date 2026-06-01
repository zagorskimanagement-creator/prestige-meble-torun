import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

const producers = [
  { name: "Krysiak Meble", url: "https://www.meblekrysiak.pl" },
  { name: "Zakor", url: "https://www.zakor.pl" },
  { name: "Unimebel", url: "https://www.unimebel.pl" },
  { name: "Fameg", url: "https://www.fameg.pl" },
  { name: "Manufaktura Jasienica", url: "https://www.manufakturajasienica.pl" },
  { name: "Paged Meble", url: "https://www.paged.pl" },
  { name: "Sweet Sit", url: "https://www.sweetsit.pl" },
  { name: "Gala Collezione", url: "https://www.galacollezione.com" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center py-10 border-b border-cream/10">
          <img src={logo} alt="Prestige Meble Toruń — logo" className="h-20 w-20 rounded-lg" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12">
          <div>
            <h3 className="font-heading text-lg font-semibold text-gold mb-4">Adres i godziny</h3>
            <address className="not-italic text-cream/70 text-sm leading-relaxed">
              Galeria Wnętrz AMC<br />
              ul. Joachima Lelewela 33<br />
              87-100 Toruń
            </address>
            <div className="mt-4 text-cream/70 text-sm leading-relaxed">
              <p>Pon – Pt: 10:00 – 20:00</p>
              <p>Sobota: 10:00 – 20:00</p>
              <p>Niedziela: 10:00 – 16:00</p>
            </div>
            <a href="tel:+48697705729" className="inline-block mt-4 text-gold font-semibold text-sm hover:text-gold-light transition-colors">
              697 705 729
            </a>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-gold mb-4">Nawigacja</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-cream/70 text-sm hover:text-gold transition-colors">Strona główna</Link>
              <Link to="/kolekcje" className="text-cream/70 text-sm hover:text-gold transition-colors">Kolekcje</Link>
              <Link to="/o-nas" className="text-cream/70 text-sm hover:text-gold transition-colors">O nas</Link>
              <Link to="/producenci" className="text-cream/70 text-sm hover:text-gold transition-colors">Producenci</Link>
              <Link to="/kontakt" className="text-cream/70 text-sm hover:text-gold transition-colors">Kontakt</Link>
              <Link to="/polityka-prywatnosci" className="text-cream/50 text-xs hover:text-gold transition-colors mt-1">Polityka prywatności</Link>
            </nav>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-gold mb-4">Producenci</h3>
            <div className="flex flex-col gap-1.5">
              {producers.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold/60 text-xs hover:text-gold transition-colors"
                >
                  {p.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 py-6 text-center">
          <p className="text-cream/40 text-xs">
            © {new Date().getFullYear()} Prestige Meble Toruń | Wszystkie prawa zastrzeżone
          </p>
        </div>
      </div>
    </footer>
  );
}
