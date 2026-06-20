import { motion } from 'motion/react';

export default function PainPoints() {
  const points = [
    {
      num: "01",
      title: "Praca ponad siły, a marketing leży odłogiem",
      desc: "Zajmujesz się dostarczaniem usług dla swoich klientów i bieżącym zarządzaniem biznesem. Na planowanie kampanii, pisanie tekstów i wrzucanie postów zostają Ci tylko późne wieczory. Efekt? Przypadkowy i niespójny przekaz."
    },
    {
      num: "02",
      title: "Budżet na reklamy znika, brak mierzalnych efektów",
      desc: "Płacenie agencji za 'same zasięgi' lub samodzielne promowanie losowych postów na Facebooku najczęściej kończy się pustym portfelem i brakiem zapytań ofertowych. Potrzebujesz konwersji i telefonów od gotowych na zakup klientów."
    },
    {
      num: "03",
      title: "Chaos w koordynacji pięciu różnych wykonawców",
      desc: "Zatrudniasz freelancera do strony, kogoś innego do reklam, a posty pisze student. Każdy z nich mówi innym językiem, zrzuca winę na drugiego, a Ty tracisz godziny na bycie tłumaczem i mediatorem. Czas z tym skończyć."
    }
  ];

  return (
    <section className="py-24 bg-navy-light text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Asymmetrical layout: grid splits into 5 columns visual and 7 columns list */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">
          
          {/* Left Column: Big Statement heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-36">
            <span className="text-[#C9A84C] font-mono text-xs uppercase tracking-widest font-semibold block mb-6">
              / Najbardziej palące problemy małych firm
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white leading-tight">
              Marketing lokalny <br />
              potrafi wykończyć. <br />
              <span className="italic font-normal text-[#C9A84C]">Wyrwij się z pętli chaosu.</span>
            </h2>
            <p className="mt-8 text-text-muted text-base font-light font-body leading-relaxed max-w-sm">
              Zamiast rozbijać uwagę na dziesiątki drobnych zadań, oddaj pełną odpowiedzialność zaufanemu partnerowi. Skoncentruj się na tym, na czym zarabiasz najwięcej.
            </p>
          </div>

          {/* Right Column: Linear Problem Wall */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-white/10">
            {points.map((point) => (
              <div 
                key={point.num}
                className="py-12 first:pt-0 last:pb-0 group"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                  {/* Big dramatic clean index number */}
                  <span className="font-heading font-light text-[#C9A84C] text-5xl leading-none select-none md:pt-1">
                    {point.num}
                  </span>
                  
                  {/* Text Details */}
                  <div className="flex-1">
                    <h3 className="font-heading text-xl md:text-2xl font-medium text-white mb-4 group-hover:text-[#C9A84C] transition-colors duration-300">
                      {point.title}
                    </h3>
                    <p className="text-text-muted text-base md:text-md font-light leading-relaxed font-body">
                      {point.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
