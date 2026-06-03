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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-gold mb-4">Kontakt i godziny</h3>
            <address className="not-italic text-cream/70 text-sm leading-relaxed">
              Galeria Wnętrz AMC, I piętro<br />
              ul. Lelewela 33<br />
              87-100 Toruń
            </address>
            <div className="mt-4 text-cream/70 text-sm leading-relaxed">
              <p>Pon – Sob: 10:00 – 20:00</p>
              <p>Niedziela: 10:00 – 18:00</p>
            </div>
            <div className="mt-4 flex flex-col gap-1">
              <a
                href="tel:+48697705729"
                className="text-gold font-semibold text-sm hover:text-gold-light transition-colors"
              >
                +48 697 705 729
              </a>
              <a
                href="tel:+48603180025"
                className="text-gold font-semibold text-sm hover:text-gold-light transition-colors"
              >
                +48 603 180 025
              </a>
              <a
                href="mailto:torun.prestigemeble@wp.pl"
                className="text-gold/80 text-xs hover:text-gold transition-colors mt-1 break-all"
              >
                torun.prestigemeble@wp.pl
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-gold mb-4">Nawigacja</h3>
            <nav className="flex flex-col gap-2" aria-label="Nawigacja stopki">
              <Link to="/" className="text-cream/70 text-sm hover:text-gold transition-colors">Strona główna</Link>
              <Link to="/kolekcje" className="text-cream/70 text-sm hover:text-gold transition-colors">Kolekcje</Link>
              <Link to="/o-nas" className="text-cream/70 text-sm hover:text-gold transition-colors">O nas</Link>
              <Link to="/producenci" className="text-cream/70 text-sm hover:text-gold transition-colors">Producenci</Link>
              <Link to="/kontakt" className="text-cream/70 text-sm hover:text-gold transition-colors">Kontakt</Link>
              <Link to="/polityka-prywatnosci" className="text-cream/50 text-xs hover:text-gold transition-colors mt-1">Polityka prywatności</Link>
            </nav>
          </div>

          {/* Producers */}
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

          {/* Social */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-gold mb-4">Obserwuj nas</h3>
            <div className="flex gap-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-navy-light text-cream hover:bg-gold hover:text-navy transition-all"
                aria-label="Facebook Prestige Meble Toruń"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-navy-light text-cream hover:bg-gold hover:text-navy transition-all"
                aria-label="Instagram Prestige Meble Toruń"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
            <p className="mt-6 text-cream/50 text-xs leading-relaxed">
              Prestige Meble Toruń<br />
              Galeria Wnętrz AMC<br />
              ul. Lelewela 33, 87-100 Toruń
            </p>
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
