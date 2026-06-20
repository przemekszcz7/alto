import { MessageSquare, Compass, Rocket, LineChart } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Krótka, konkretna rozmowa',
    desc: 'Poznajemy Twoje cele, klientów oraz dotychczasowe bolączki. My zadajemy precyzyjne pytania, Ty odpowiadasz — po ludzku, bez korporacyjnego żargonu, ankiet i marnowania czasu.',
    icon: MessageSquare
  },
  {
    num: '02',
    title: 'Autorski, elastyczny plan',
    desc: 'Opracowujemy zestaw narzędzi i kanałów idealnie dopasowanych do Twojego budżetu i regionu działania. Bez lania wody — dostajesz jasne, namacalne rekomendacje z widocznym celem.',
    icon: Compass
  },
  {
    num: '03',
    title: 'Rzetelne i ciche wdrożenie',
    desc: 'Strona jest kodowana, wizytówka Google odpowiednio optymalizowana, a kampanie reklamowe wdrażane pod kątem maksymalnej konwersji. Wszystko dzieje się płynnie w tle, tak abyś Ty mógł skupić się wyłącznie na obsłudze klientów.',
    icon: Rocket
  },
  {
    num: '04',
    title: 'Liczby, wnioski i wzrost przychodów',
    desc: 'Co miesiąc spotykamy się na krótkie, zrozumiałe podsumowanie wyników. Sprawdzamy liczbę telefonów, wysłanych formularzy i koszt pozyskania zapytania. Wiemy, co działa, i stale to ulepszamy.',
    icon: LineChart
  }
];

export default function Process() {
  return (
    <section id="o-nas" className="py-24 bg-navy-light text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="mb-20 max-w-3xl">
          <span className="text-[#C9A84C] font-mono text-xs uppercase tracking-widest font-semibold block mb-4">
            / Nasz model działania krok po kroku
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white leading-tight">
            Odciągamy Twoją uwagę <br />
            <span className="italic font-normal text-[#C9A84C]">od marketingu.</span> Profesjonalnie.
          </h2>
          <p className="mt-6 text-text-muted text-base font-light font-body">
            Nie oczekujemy od Ciebie znajomości pojęć technicznych. My bierzemy pełną odpowiedzialność za cały proces, dbając o Twój spokój i wyniki.
          </p>
        </div>

        {/* Process Stack (Clean asymmetrical vertical layout of row bands) */}
        <div className="flex flex-col border-t border-white/10">
          {steps.map((step) => (
            <div 
              key={step.num}
              className="py-12 border-b border-white/10 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start hover:bg-navy-dark/10 transition-colors duration-300 -mx-6 px-6 rounded-sm"
            >
              {/* Massive classy outlined number */}
              <div className="lg:w-36 shrink-0 flex items-baseline gap-4">
                <span className="font-heading font-light text-5xl md:text-6xl text-[#C9A84C]/25 select-none leading-none">
                  {step.num}
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#C9A84C] font-medium">
                  Etap
                </span>
              </div>

              {/* Title & icon */}
              <div className="lg:w-1/3 shrink-0 flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-navy-dark flex items-center justify-center text-[#C9A84C] shrink-0">
                  <step.icon className="w-4 h-4" />
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-medium text-white leading-tight">
                  {step.title}
                </h3>
              </div>

              {/* Description body */}
              <div className="flex-1">
                <p className="text-text-muted text-sm md:text-base leading-relaxed font-light font-body">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
