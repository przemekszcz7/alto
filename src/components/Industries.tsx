import { Utensils, Wrench, Home, Flower2, Store, PawPrint, Dumbbell, GraduationCap } from 'lucide-react';

const industries = [
  { name: 'Gastronomia', icon: Utensils, detail: 'restauracje, kawiarnie, bary, smażalnie ryb, pierogarnie' },
  { name: 'Warsztaty i Serwisy', icon: Wrench, detail: 'serwisy samochodowe, autodetailing, naprawy maszyn' },
  { name: 'Usługi domowe i budowlane', icon: Home, detail: 'remonty, sprzątanie, hydraulika, usługi elektryczne' },
  { name: 'Salony urody i zdrowie', icon: Flower2, detail: 'gabinety kosmetyczne, fryzjerzy, kliniki fizjoterapii' },
  { name: 'Sklepy lokalne i e-commerce', icon: Store, detail: 'butiki odzieżowe, kwiaciarnie, lokalne manufaktury' },
  { name: 'Weterynaria i pet usługi', icon: PawPrint, detail: 'lecznice weterynaryjne, groomerzy, hotele dla psów' },
  { name: 'Fitness i sport', icon: Dumbbell, detail: 'siłownie, trenerzy personalni, studia jogi i pilatesu' },
  { name: 'Edukacja i usługi prywatne', icon: GraduationCap, detail: 'szkoły językowe, korepetycje, doradztwo lokalne' },
];

export default function Industries() {
  return (
    <section className="py-24 bg-navy-dark text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block split asymmetrically */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end mb-20">
          <div className="lg:col-span-7">
            <span className="text-[#C9A84C] font-mono text-xs uppercase tracking-widest font-semibold block mb-4">
              / Nasza specjalizacja branżowa
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white leading-tight">
              Obsługujemy wyłącznie małe i średnie firmy. <br />
              <span className="italic font-normal text-[#C9A84C]">Znamy specyfikę Twojej branży.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-text-muted text-base font-light font-body leading-relaxed md:max-w-md">
              Nie współpracujemy z wielkimi korporacjami ani skomplikowanymi startupami. Nasza energia idzie w 100% na wspieranie lokalnych przedsiębiorców, którzy chcą rosnąć.
            </p>
          </div>
        </div>

        {/* Minimalist Grid — Fine border hairline frame layout with no card background */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 border-t border-white/10 pt-16">
          {industries.map((ind, index) => (
            <div 
              key={index} 
              className="group flex gap-6 items-start py-6 border-b border-white/5 last:border-0 md:even:border-l md:even:pl-12 md:even:border-white/5"
            >
              <div className="w-12 h-12 rounded-sm bg-[#C9A84C]/5 text-[#C9A84C] flex items-center justify-center shrink-0 group-hover:bg-[#C9A84C] group-hover:text-white transition-colors duration-300">
                <ind.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-medium text-white mb-2 group-hover:text-[#C9A84C] transition-colors duration-300">
                  {ind.name}
                </h3>
                <p className="text-text-muted text-xs md:text-sm font-light leading-relaxed font-body">
                  {ind.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-2xl mx-auto">
          <div className="border border-[#C9A84C]/25 bg-navy-light/10 p-8 rounded-sm text-center">
            <p className="text-white text-base font-light font-body leading-relaxed">
              Nie widzisz swojej konkretnej branży na liście? <br className="hidden md:block"/>
              <a href="#kontakt" aria-label="Napisz do nas o swojej branży" className="text-[#C9A84C] hover:underline hover:text-white font-medium underline-offset-4 transition-colors">
                Skontaktuj się z nami
              </a> — z pełnym prawdopodobieństwem i tak potrafimy pomóc Twojemu biznesowi.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
