import { motion } from 'motion/react';
import { AlignLeft, ArrowLeft, Mail } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 bg-navy-dark text-white font-body">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Back Link */}
        <a 
          href="#" 
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-text-muted hover:text-primary transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft size={14} />
          Powrót do strony głównej
        </a>

        {/* Title */}
        <div className="border-b border-white/5 pb-8 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-xs font-mono uppercase mb-4">
            <AlignLeft size={13} />
            Wymogi regulaminowe
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-medium tracking-tight mb-4">
            Regulamin Serwisu
          </h1>
          <p className="text-text-muted text-sm">Ostatnia aktualizacja: 31 maja 2026 r.</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none text-text-muted text-sm md:text-base space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-heading text-white font-semibold mb-4">1. Zakres stosowania</h2>
            <p>
              Niniejszy regulamin określa zasady korzystania z witryny internetowej <span className="text-white">alto.pl</span> oraz prawa i obowiązki użytkowników serwisu. Serwis ma charakter informacyjny i ma na celu zaprezentowanie portfolio usług agencji marketingowej Alto, ułatwienie kontaktu oraz składania zapytań o darmowe audyty początkowe.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading text-white font-semibold mb-4">2. Korzystanie z formularzy</h2>
            <p>
              Użytkownik wysyłający zapytanie za pośrednictwem formularza kontaktowego lub zgłoszenia audytowego zobowiązany jest do podawania zgodnych z prawdą, aktualnych danych kontaktowych. Zabrania się przesyłania za pośrednictwem formularzy treści o charakterze bezprawnym, obraźliwym, reklamowym (spam) bądź naruszającym dobra osobiste osób trzecich.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading text-white font-semibold mb-4">3. Własność intelektualna</h2>
            <p>
              Wszelkie materiały zamieszczone w serwisie (teksty, opisy usług, elementy wizualne, logotypy, nazwy autorskie, grafiki oraz układy graficzne stron) stanowią wyłączną własność Alto Agency i są chronione prawem autorskim. Wykorzystywanie tych materiałów bez pisemnej zgody administratora jest zabronione.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading text-white font-semibold mb-4">4. Odpowiedzialność</h2>
            <p>
              Alto Agency dokłada wszelkich starań, aby treści publikowane na stronie były aktualne, dokładne i merytoryczne. Wyliczenia cenowe widoczne na podstronie Oferta nie stanowią oferty handlowej w rozumieniu kodeksu cywilnego i powinny być traktowane wyłącznie jako punkt wyjścia do indywidualnej kalkulacji projektowej.
            </p>
          </section>

          <section className="bg-navy-light/40 border border-white/5 rounded-lg p-6 md:p-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-heading text-white font-semibold mb-1">Masz dodatkowe zapytania prawne?</h3>
              <p className="text-xs md:text-sm text-text-muted">Chętnie wyjaśnimy wszelkie punkty regulaminowe przed podpisaniem oficjalnej umowy o współpracę.</p>
            </div>
            <a 
              href="mailto:hello@altoagency.pl" 
              className="ripple bg-primary hover:bg-[#B3933B] text-navy-dark px-6 py-3 rounded-lg font-semibold text-sm flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <Mail size={16} />
              Skontaktuj się
            </a>
          </section>
        </div>

      </div>
    </div>
  );
}
