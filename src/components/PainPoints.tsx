import { motion } from 'motion/react';

const pains = [
  {
    title: "Nie masz czasu?",
    desc: "Zamiast budować biznes, walczysz z niedziałającą stroną, postami w social media i brakiem czasu na cokolwiek?"
  },
  {
    title: "Budżet znika, efektów brak?",
    desc: "Płacisz za reklamy, które nic nie przynoszą? Nie wiesz co działa, a co tylko niepotrzebnie pochłania Twoje pieniądze?"
  },
  {
    title: "Pięciu wykonawców, nikt nie wie całości?",
    desc: "Informatyk od strony, grafik od logo, chłopak od reklam. Każdy mówi innym językiem, nikt nie bierze pełnej odpowiedzialności?"
  }
];

export default function PainPoints() {
  return (
    <section className="py-32 bg-navy-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-reveal mb-20 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Prowadzenie firmy jest wystarczająco trudne.</h2>
          <p className="text-xl text-text-muted">
            Pozwól, że odciążymy Cię tam, gdzie czujemy się najlepiej.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pains.map((pain, index) => (
            <div key={index} className="section-reveal p-10 border border-white/5 bg-navy-dark/30 rounded-sm hover:border-primary/30 transition-colors group">
              <div className="text-primary mb-6 flex items-center gap-2">
                 <span className="w-8 h-[2px] bg-primary"></span>
                 <span className="font-bold uppercase tracking-widest text-xs">Problem #{index + 1}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{pain.title}</h3>
              <p className="text-text-muted leading-relaxed">
                {pain.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="section-reveal mt-20 text-center italic text-text-muted/60 text-lg">
          "Rozumiemy mały biznes, bo sami nim jesteśmy. Twój czas jest zbyt cenny na naukę marketingu od zera."
        </div>
      </div>
    </section>
  );
}
