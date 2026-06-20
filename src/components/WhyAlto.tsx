import { motion } from 'motion/react';
import { ShieldCheck, Receipt, Eye } from 'lucide-react';

export default function WhyAlto() {
  const comparison = {
    pain: [
      { text: "Rozmowy z osobnym programistą, grafikiem i copywriterem" },
      { text: "Pilnowanie oraz płacenie 5 różnych faktur co miesiąc" },
      { text: "Brak spójności — każdy realizuje własną wizję" },
      { text: "Zrzucanie winy: 'strona wolna, bo reklamy są źle ustawione'" },
    ],
    alto: [
      { text: "Jeden stały opiekun koordynujący wszystkie działania" },
      { text: "Pojedyncza przejrzysta faktura abonamentowa" },
      { text: "Pełna spójność wizualna i strategiczna całej marki" },
      { text: "Pełna, bezdyskusyjna odpowiedzialność za wyniki w sieci" },
    ]
  };

  return (
    <section className="py-24 bg-navy-dark relative border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Column */}
        <div className="mb-20 max-w-3xl">
          <span className="text-[#C9A84C] font-mono text-xs uppercase tracking-widest font-semibold block mb-4">
            / Dlaczego konsolidacja ma sens
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-semibold text-white leading-tight">
            Jeden partner. <br />
            Cały marketing. <span className="italic font-normal text-[#C9A84C]">Zero chaosu.</span>
          </h2>
        </div>

        {/* Dynamic, non-equal comparison grids (Asymmetrical layout break) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-24">
          
          {/* Fragmented approach side (Slightly smaller, muted) */}
          <div className="lg:col-span-5 p-8 border border-white/5 bg-navy-light/20 flex flex-col justify-between">
            <div>
              <h3 className="font-heading text-lg font-medium text-text-muted/80 uppercase tracking-wider mb-6 pb-4 border-b border-white/10">
                Podejście rozproszone
              </h3>
              <ul className="space-y-5">
                {comparison.pain.map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start text-sm text-text-muted/70 font-light font-body leading-relaxed">
                    <span className="text-red-500 font-mono mt-0.5 font-bold">✕</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <p className="mt-8 text-xs text-text-muted/50 font-mono italic">
              * Powoduje frustrację, stratę budżetu i marnowanie Twojego czasu.
            </p>
          </div>

          {/* Alto approach side (Larger, accented, high contrast) */}
          <div className="lg:col-span-7 p-10 border-2 border-[#C9A84C] bg-navy-light/50 flex flex-col justify-between shadow-[0_15px_40px_rgba(201,168,76,0.06)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A84C]/5 rounded-full blur-2xl"></div>
            
            <div>
              <h3 className="font-heading text-xl font-medium text-[#C9A84C] uppercase tracking-wider mb-6 pb-4 border-b border-[#C9A84C]/25">
                Model współpracy Alto
              </h3>
              <ul className="space-y-6">
                {comparison.alto.map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start text-base text-white font-light font-body leading-relaxed">
                    <span className="text-[#C9A84C] font-mono mt-1 font-bold">✓</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-10 text-xs text-[#C9A84C]/80 font-mono uppercase tracking-widest font-semibold">
              * Skoncentrowane uderzenie w rynek — spójnie i bez taryfy ulgowej.
            </p>
          </div>
          
        </div>

        {/* Benefits Cards but with completely different look, asymmetric spacing, zero emojis */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
          
          <div className="flex flex-col items-start p-6">
            <div className="w-12 h-12 rounded-sm bg-navy-light/30 flex items-center justify-center text-[#C9A84C] mb-6">
              <ShieldCheck size={22} />
            </div>
            <h3 className="font-heading text-lg font-medium text-white mb-3">
              Jeden opiekun projektu
            </h3>
            <p className="text-[#5C6B84] text-sm font-light leading-relaxed font-body">
              Masz bezpośredni telefon do lidera projektu, który zna Twój biznes od podszewki. Żadnych infolinii, żadnych automatycznych botów, zero przekazywania spraw do dziesięciu innych osób.
            </p>
          </div>

          <div className="flex flex-col items-start p-6 md:border-l border-white/10">
            <div className="w-12 h-12 rounded-sm bg-navy-light/30 flex items-center justify-center text-[#C9A84C] mb-6">
              <Receipt size={22} />
            </div>
            <h3 className="font-heading text-lg font-medium text-white mb-3">
              Jeden przejrzysty rachunek
            </h3>
            <p className="text-[#5C6B84] text-sm font-light leading-relaxed font-body">
              Płacisz jedną stałą, wcześniej uzgodnioną kwotę abonamentu miesięcznego. Łatwo planujesz budżet swojej firmy, a księgowość rozlicza tylko jedną, prostą fakturę zamiast sterty drobnych rachunków.
            </p>
          </div>

          <div className="flex flex-col items-start p-6 md:border-l border-white/10">
            <div className="w-12 h-12 rounded-sm bg-navy-light/30 flex items-center justify-center text-[#C9A84C] mb-6">
              <Eye size={22} />
            </div>
            <h3 className="font-heading text-lg font-medium text-white mb-3">
              Absolutna przejrzystość
            </h3>
            <p className="text-[#5C6B84] text-sm font-light leading-relaxed font-body">
              Dostarczamy comiesięczne, rzetelne podsumowania w formie ludzkiej rozmowy i jasnych wniosków. Rozmawiamy o telefonach od klientów i sprzedaży, a nie o skomplikowanych wskaźnikach technicznych.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
