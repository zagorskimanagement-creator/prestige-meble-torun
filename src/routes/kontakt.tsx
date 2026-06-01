import { createFileRoute } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { MapPin, Phone, Clock } from 'lucide-react';

export const Route = createFileRoute("/kontakt")({
  component: KontaktPage,
});

// ⚠️ FORMSPREE: Zarejestruj się na formspree.io, stwórz formularz
// i podmień YOUR_FORM_ID na swój identyfikator (np. xpwzkndr)
const FORMSPREE_ID = "YOUR_FORM_ID";

const contactInfo = [
  { icon: <MapPin className="w-5 h-5 text-black" />, title: "Adres", desc: "Galeria Wnętrz AMC\nul. Joachima Lelewela 33\n87-100 Toruń" },
  { icon: <Phone className="w-5 h-5 text-black" />, title: "Telefon", desc: "697 705 729" },
  { icon: <Clock className="w-5 h-5 text-black" />, title: "Godziny otwarcia", desc: "Poniedziałek – Piątek: 10:00 – 20:00\nSobota: 10:00 – 20:00\nNiedziela: 10:00 – 16:00" },
];

function KontaktPage() {
  useSEO({
    title: "Kontakt — Prestige Meble Toruń",
    description: "Skontaktuj się z Prestige Meble w Toruniu. Galeria Wnętrz AMC, ul. Lelewela 33. Tel: 697 705 729. Pon–Pt 10–20, Sob 10–15.",
  });

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero
        title="Kontakt"
        subtitle="Zapraszamy do odwiedzenia naszego salonu lub kontaktu telefonicznego"
      >
        <Breadcrumb items={[{ label: "Strona główna", to: "/" }, { label: "Kontakt" }]} />
      </PageHero>

      <section className="py-16 px-4 bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <FadeIn>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="bg-card rounded-xl p-6 shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">{item.icon}</div>
                      <div>
                        <h3 className="font-heading font-semibold text-navy">{item.title}</h3>
                        {item.title === "Telefon" ? (
                          <a href="tel:+48697705729" className="text-gold font-semibold text-sm mt-1 block hover:text-navy transition-colors">
                            {item.desc}
                          </a>
                        ) : (
                          <p className="text-muted-foreground text-sm mt-1 whitespace-pre-line">
                            {item.desc}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Map */}
            <FadeIn delay={0.2}>
              <div className="rounded-xl overflow-hidden shadow-md h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9599.05292300931!2d18.6068876778101!3d53.02461913029623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4703349a6c377f8f%3A0x2205f45c4068d696!2sSalon%20Premium%20Prestige%20Meble!5e0!3m2!1spl!2spl!4v1780157494398!5m2!1spl!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokalizacja Prestige Meble Toruń — Galeria AMC"
                />
              </div>
            </FadeIn>
          </div>

          {/* Contact Form */}
          <FadeIn delay={0.3}>
            <div className="mt-16 bg-card rounded-xl p-8 md:p-10 shadow-md max-w-3xl mx-auto">
              <h2 className="font-heading text-2xl font-bold text-navy text-center">Napisz do nas</h2>
              <p className="text-muted-foreground text-sm text-center mt-2">Odpowiemy w ciągu 24 godzin</p>

              {submitted ? (
                <div className="mt-8 text-center py-10">
                  <span className="text-5xl">✉️</span>
                  <h3 className="font-heading text-xl font-bold text-navy mt-4">Dziękujemy za wiadomość!</h3>
                  <p className="text-muted-foreground text-sm mt-2">Odpowiemy najszybciej jak to możliwe.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">Imię i nazwisko *</label>
                      <input
                        type="text"
                        required
                        maxLength={100}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">Email *</label>
                      <input
                        type="email"
                        required
                        maxLength={255}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">Telefon</label>
                      <input
                        type="tel"
                        maxLength={20}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">Temat *</label>
                      <input
                        type="text"
                        required
                        maxLength={200}
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">Wiadomość *</label>
                    <textarea
                      required
                      maxLength={2000}
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold transition-all resize-none"
                    />
                  </div>
                  {error && (
                    <p className="text-center text-sm text-red-500">
                      Błąd wysyłki. Zadzwoń do nas: <a href="tel:+48697705729" className="font-semibold">697 705 729</a>
                    </p>
                  )}
                  <div className="text-center">
                    <Button variant="gold" size="lg" type="submit" disabled={loading}>
                      {loading ? "Wysyłanie..." : "Wyślij wiadomość"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </FadeIn>

          {/* Social */}
          <FadeIn delay={0.4}>
            <div className="mt-12 text-center">
              <p className="text-muted-foreground text-sm font-medium mb-3">Obserwuj nas</p>
              <div className="flex justify-center gap-4">
                {/* ⚠️ Podmień href na prawdziwy link do profilu FB firmy */}
                <a href="https://www.facebook.com/profile.php?id=prestige.meble.torun" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-navy text-cream hover:bg-gold hover:text-navy transition-all" aria-label="Facebook Prestige Meble">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                {/* ⚠️ Podmień href na prawdziwy link do profilu IG firmy */}
                <a href="https://www.instagram.com/prestige.meble.torun" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-navy text-cream hover:bg-gold hover:text-navy transition-all" aria-label="Instagram Prestige Meble">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
