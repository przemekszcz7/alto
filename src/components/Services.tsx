import { Globe, Settings, TrendingUp, MapPin, Facebook, Megaphone, Zap, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Tworzenie nowoczesnych stron WWW',
    desc: 'Strony wizytówkowe, dedykowane systemy rezerwacji oraz szybkie landing page zoptymalizowane pod konwersję i urządzenia mobilne. Bez gotowych szablonów.'
  },
  {
    icon: Settings,
    title: 'Stała opieka techniczna i utrzymanie',
    desc: 'Bieżące aktualizacje, kopie bezpieczeństwa, szybkie wdrażanie poprawek i dbanie o to, by strona Twojej firmy działała bez przerw 24 godziny na dobę.'
  },
  {
    icon: TrendingUp,
    title: 'Pozycjonowanie i widoczność w Google',
    desc: "Pozycjonowanie stron na frazy kluczowe przynoszące klientów. Działania na kodzie, pozyskiwanie wartościowych linków i lokalna optymalizacja SEO."
  },
  {
    icon: MapPin,
    title: 'Wizytówka Google Moja Firma',
    desc: 'W pełni profesjonalna konfiguracja profilu Google, optymalizacja lokalna, pomoc w pozyskiwaniu opinii i budowaniu wysokiego rankingu na mapach.'
  },
  {
    icon: Facebook,
    title: 'Prowadzenie profili Social Media',
    desc: 'Kompleksowe zarządzanie obecnością na Facebooku oraz Instagramie. Tworzymy grafiki zgodne z Twoją tożsamością i piszemy angażujące teksty.'
  },
  {
    icon: Megaphone,
    title: 'Precyzyjne kampanie Meta Ads i Google Ads',
    desc: 'Skoncentrowane reklamy płatne docierające wyłącznie do potencjalnych klientów w Twoim mieście lub regionie. Pełna analityka wydanego budżetu.'
  },
  {
    icon: Zap,
    title: 'Integracje i automatyzacje procesów',
    desc: 'Połączenie systemów CRM, formularzy kontaktowych, kalendarzy rezerwacji oraz prostych automatycznych autoresponderów odciążających sekretariat.'
  },
  {
    icon: BarChart3,
    title: 'Analityka konwersji i audytowanie',
    desc: 'Rzetelne badanie ścieżek zakupowych i tego, jak klienci korzystają ze strony. Stałe podsuwanie wniosków zwiększających efektywność sprzedaży.'
  }
];

export default function Services() {
  return (
    <section id="uslugi" className="py-24 bg-navy-dark text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column (Sticky Intro) */}
          <div className="lg:col-span-5 lg:sticky lg:top-36">
            <span className="text-[#C9A84C] font-mono text-xs uppercase tracking-widest font-semibold block mb-4">
              / Kompleksowe wykonawstwo
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white leading-tight">
              Współpracując z nami, <br />
              <span className="italic font-normal text-[#C9A84C]">oddajesz pod opiekę</span> <br />
              cały marketing cyfrowy.
            </h2>
            <p className="mt-8 text-text-muted text-lg font-light font-body leading-relaxed max-w-sm">
              Zamiast angażować wiele różnych podmiotów, zyskujesz spójne i kompleksowe wsparcie w każdym obszarze marketingu lokalnego. Współpraca przebiega płynnie, precyzyjnie i z pełną mierzalnością.
            </p>
            
            <div className="mt-12">
              <a href="#kontakt" className="btn-primary inline-block text-center ripple">
                Napisz ws. bezpłatnej konsultacji
              </a>
            </div>
          </div>

          {/* Right Column (Minimalist typographically-driven rows with zero bullet-grid look) */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-white/15">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="py-8 first:pt-0 last:pb-0 group flex gap-6 md:gap-8 items-start hover:bg-navy-light/10 transition-colors duration-300 rounded-sm -mx-4 px-4"
              >
                {/* Numeric index representation of step */}
                <span className="font-mono text-xs text-[#C9A84C] font-semibold mt-1">
                  0{index + 1}
                </span>

                <div className="flex-1">
                  <h3 className="font-heading text-xl font-medium text-white group-hover:text-[#C9A84C] transition-colors duration-300 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-muted text-sm md:text-base font-light leading-relaxed font-body">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
