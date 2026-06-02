import { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookie-consent');
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-navy border-t-2 border-gold shadow-2xl">
      <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-cream/80 text-sm flex-1 leading-relaxed">
          Ta strona używa plików cookies (m.in. Google Maps) w celu zapewnienia prawidłowego działania.{' '}
          <Link to="/polityka-prywatnosci" className="text-gold underline hover:text-gold-light">
            Polityka prywatności
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm text-cream/60 hover:text-cream border border-cream/20 rounded-lg transition-colors"
          >
            Odrzuć
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-sm font-semibold bg-gold text-navy rounded-lg hover:bg-gold-light transition-colors"
          >
            Akceptuję
          </button>
        </div>
      </div>
    </div>
  );
}
