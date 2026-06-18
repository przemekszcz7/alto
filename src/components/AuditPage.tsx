import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Users, Sparkles, Send, CheckCircle, BarChart3, Mail, RefreshCw } from 'lucide-react';

export default function AuditPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    businessType: 'Lokalne usługi',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const pillars = [
    {
      title: "1. Audyt Strony WWW & SEO",
      icon: <Search className="text-primary" size={24} />,
      desc: "Analizujemy widoczność witryny w wyszukiwarce Google, błędy techniczne, szybkość ładowania (Core Web Vitals) oraz optymalizację pod kątem urządzeń mobilnych.",
      checks: ["Czas ładowania i wydajność", "Wydajność mobilna", "Struktura nagłówków i słów kluczowych", "Weryfikacja profilu linków zewnętrznych"]
    },
    {
      title: "2. Audyt Social Media",
      icon: <Users className="text-primary" size={24} />,
      desc: "Oceniamy dotychczasowe działania na Facebooku, Instagramie czy TikToku. Sprawdzamy jakość grafik, copywriting, regularność publikacji i zaangażowanie fanów.",
      checks: ["Spójność brandingu profilu", "Analiza zaangażowania (ER)", "Poprawność ustawień wizytówki Google", "Jakość i język korzyści w postach"]
    },
    {
      title: "3. Audyt Reklam & Konwersji",
      icon: <BarChart3 className="text-primary" size={24} />,
      desc: "Jeśli prowadzisz płatne kampanie Meta Ads lub Google Ads, analizujemy właściwy dobór grup docelowych, efektywność kreacji reklamowych oraz efekty wydatkowanego budżetu.",
      checks: ["Rentowność kampanii ROAS/CPA", "Konfiguracja zdarzeń w pikselu śledzącym", "Wykluczanie nietrafionych odbiorców", "Jasność komunikatów na stronach docelowych"]
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mojzydlk', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          website: formData.website,
          businessType: formData.businessType,
          message: formData.message,
          _subject: `Nowe zgłoszenie audytowe: ${formData.website}`
        })
      });

      if (response.ok) {
        setSubmitSuccess(true);
      } else {
        alert('Podczas wysyłania formularza wystąpił błąd. Spróbuj ponownie lub skontaktuj się z nami bezpośrednio.');
      }
    } catch (error) {
      alert('Podczas wysyłania formularza wystąpił błąd sieci. Spróbuj ponownie lub skontaktuj się z nami bezpośrednio.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 overflow-hidden bg-navy-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-medium tracking-tight mb-8 text-white"
          >
            Audyt Marketingowy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-muted text-lg leading-relaxed font-body font-light"
          >
            Dowiedz się, dlaczego Twoje obecne działania w sieci nie przynoszą tylu klientów, ile powinny. Zamów szczegółową, bezpłatną diagnozę swojej obecności online.
          </motion.p>
        </div>

        {/* Typographically Elegant Audit Columns (NO CARDS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-28 border-t border-white/10 pt-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-heading font-light text-primary text-5xl select-none leading-none">
                    0{index + 1}
                  </span>
                  <div className="text-primary/60">
                    {pillar.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-heading font-medium text-white mb-4 leading-snug">
                  {pillar.title.replace(/^\d+\.\s*/, '')}
                </h3>
                
                <p className="text-text-muted text-sm md:text-base leading-relaxed mb-8 font-light">
                  {pillar.desc}
                </p>
              </div>

              <div className="border-t border-white/10 pt-6 mt-auto">
                <span className="text-[10px] uppercase font-mono tracking-widest text-primary/80 block mb-4">
                  Weryfikowane obszary
                </span>
                <ul className="space-y-3">
                  {pillar.checks.map((check, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-text-muted/90 font-light">
                      <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span>{check}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Direct Action Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start pt-16 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-light text-white mb-6 leading-tight">
              Zyskaj unikalny plan działania dla swojego biznesu
            </h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-12 font-light">
              Dostarczany audyt nie jest kolejnym automatycznym raportem wypluwanym przez gotowy program. To w pełni manualna, rzetelna analiza, podczas której weryfikowany jest każdy aspekt Twojej witryny, profili i lejka sprzedażowego.
            </p>

            <div className="space-y-8 pl-1">
              {[
                { title: "Zupełnie Bezpłatnie", desc: "Wstępna analiza jest w 100% darmowa i nie zobowiązuje Cię do dalszej współpracy." },
                { title: "Brak Lania Wody", desc: "Zamiast skomplikowanych teorii marketingowych, otrzymujesz konkretną listę wskazówek do wdrożenia." },
                { title: "Oszczędność Budżetu", desc: "Wskażemy miejsca, w których przepalasz budżet na nieskuteczne reklamy i słaby UX." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <span className="flex-shrink-0 text-xl font-heading font-light italic text-primary/80 mt-0.5">
                    /{idx + 1}
                  </span>
                  <div>
                    <h4 className="text-white font-medium text-base mb-1.5">{item.title}</h4>
                    <p className="text-text-muted text-xs md:text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="border border-white/10 bg-navy-light/10 p-8 md:p-12 rounded-sm relative">
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="audit-form"
                    onSubmit={handleSubmit}
                    className="space-y-8"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div>
                      <h3 className="text-2xl font-heading font-medium text-white mb-2">
                        Zamów bezpłatną analizę wstępną
                      </h3>
                      <p className="text-text-muted text-xs md:text-sm font-light">
                        Uzupełnij poniższy formularz i pozwól nam prześwietlić Twoją obecność w sieci.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                      <div>
                        <label className="block text-[10px] font-mono text-primary/80 uppercase tracking-widest mb-2 font-medium">Imię i Nazwisko</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-navy-dark/40 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary/80 text-sm font-light placeholder-white/25"
                          placeholder="Jan Kowalski"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono text-primary/80 uppercase tracking-widest mb-2 font-medium">Adres E-mail</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-navy-dark/40 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary/80 text-sm font-light placeholder-white/25"
                          placeholder="kontakt@twojafirma.pl"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                      <div>
                        <label className="block text-[10px] font-mono text-primary/80 uppercase tracking-widest mb-2 font-medium">Telefon</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full bg-navy-dark/40 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary/80 text-sm font-light placeholder-white/25"
                          placeholder="+48 500 000 000"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono text-primary/80 uppercase tracking-widest mb-2 font-medium">Strona (oraz profil FB)</label>
                        <input
                          type="url"
                          required
                          value={formData.website}
                          onChange={(e) => setFormData({...formData, website: e.target.value})}
                          className="w-full bg-navy-dark/40 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary/80 text-sm font-light placeholder-white/25"
                          placeholder="https://twojafirma.pl"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-primary/80 uppercase tracking-widest mb-2 font-medium">Branża / Rodzaj Działalności</label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                        className="w-full bg-navy-dark/60 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary/80 text-sm font-light cursor-pointer"
                      >
                        <option value="Lokalne usługi">Lokalne usługi (Hydraulik, Gabinet kosmetyczny, Warsztat)</option>
                        <option value="E-commerce">E-commerce / Sklep internetowy</option>
                        <option value="SaaS / B2B">Usługi B2B / Doradztwo</option>
                        <option value="Gastronomia">Gastronomia / Restauracja</option>
                        <option value="Inna">Inna branża</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-primary/80 uppercase tracking-widest mb-2 font-medium">Największe wyzwanie marketingowe</label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-navy-dark/40 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary/80 text-sm font-light resize-none placeholder-white/25"
                        placeholder="Np. Chcę pozyskiwać więcej klientów lokalnie z Google..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="ripple w-full bg-primary hover:bg-[#B3933B] text-navy-dark font-medium py-4 rounded-sm flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50 text-base"
                      aria-label={isSubmitting ? "Trwa wysyłanie zgłoszenia" : "Wyślij zgłoszenie o bezpłatny audyt marketingowy"}
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="animate-spin" size={18} />
                          Trwa wysyłanie zgłoszenia...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Wyślij zgłoszenie audytowe
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mx-auto mb-6">
                      <Sparkles size={32} />
                    </div>
                    <h3 className="text-2xl font-heading font-medium text-white mb-2">
                      Zgłoszenie przyjęte!
                    </h3>
                    <p className="text-text-muted text-sm max-w-sm mx-auto mb-8 font-light leading-relaxed">
                      Dziękujemy za zaufanie, {formData.name}. Rozpoczynamy analizę Twojej witryny: {formData.website}. Skontaktujemy się z Tobą w ciągu 48 godzin roboczych z gotowymi wnioskami.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="text-primary hover:text-white transition-colors text-xs font-mono uppercase tracking-wider underline cursor-pointer"
                      aria-label="Wyślij kolejne zgłoszenie audytowe"
                    >
                      Wyślij kolejne zgłoszenie
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
