import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

interface FormState {
  name: string;
  phone: string;
  message: string;
}

export function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Zapytanie ze strony — Prestige Meble Toruń");
    const body = encodeURIComponent(
      `Imię: ${form.name}\nTelefon: ${form.phone}\n\nWiadomość:\n${form.message}`
    );
    window.location.href = `mailto:torun.prestigemeble@wp.pl?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-border bg-cream text-navy placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold transition-all";

  return (
    <section className="py-20 px-4 bg-cream-dark" id="kontakt" aria-label="Kontakt">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy text-center">
            Skontaktuj się z nami
          </h2>
          <p className="mt-3 text-muted-foreground text-center max-w-xl mx-auto">
            Masz pytanie? Napisz do nas lub odwiedź salon w Galerii Wnętrz AMC
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <FadeIn>
            <div className="bg-card rounded-xl shadow-md p-8 h-full">
              <h3 className="font-heading text-xl font-semibold text-navy mb-6">
                Wyślij wiadomość
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-navy mb-1.5">
                    Imię i nazwisko
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jan Kowalski"
                    className={inputClass}
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-navy mb-1.5">
                    Telefon
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+48 000 000 000"
                    className={inputClass}
                    autoComplete="tel"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-navy mb-1.5">
                    Wiadomość
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="W czym możemy pomóc?"
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
                >
                  Wyślij wiadomość
                </button>
              </form>
            </div>
          </FadeIn>

          {/* Map + Contact Info */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col gap-6 h-full">
              <div className="rounded-xl overflow-hidden shadow-md flex-1 min-h-[280px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9599.05292300931!2d18.6068876778101!3d53.02461913029623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4703349a6c377f8f%3A0x2205f45c4068d696!2sSalon%20Premium%20Prestige%20Meble!5e0!3m2!1spl!2spl!4v1780157494398!5m2!1spl!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "280px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokalizacja Prestige Meble Toruń — Galeria Wnętrz AMC"
                />
              </div>

              <div className="bg-card rounded-xl shadow-md p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-navy">Galeria Wnętrz AMC, I piętro</p>
                    <p className="text-sm text-muted-foreground">ul. Lelewela 33, 87-100 Toruń</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="flex flex-col gap-0.5">
                    <a
                      href="tel:+48697705729"
                      className="text-sm font-medium text-gold hover:text-navy transition-colors"
                    >
                      +48 697 705 729
                    </a>
                    <a
                      href="tel:+48603180025"
                      className="text-sm font-medium text-gold hover:text-navy transition-colors"
                    >
                      +48 603 180 025
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <a
                    href="mailto:torun.prestigemeble@wp.pl"
                    className="text-sm font-medium text-gold hover:text-navy transition-colors break-all"
                  >
                    torun.prestigemeble@wp.pl
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="text-sm text-muted-foreground space-y-0.5">
                    <p>Pon – Sob: 10:00 – 20:00</p>
                    <p>Niedziela: 10:00 – 18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
