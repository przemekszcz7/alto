import { motion } from 'motion/react';
import { ShieldCheck, ArrowLeft, Mail } from 'lucide-react';

export default function PrivacyPage() {
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
            <ShieldCheck size={13} />
            Bezpieczeństwo danych
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-medium tracking-tight mb-4">
            Polityka Prywatności i Cookies
          </h1>
          <p className="text-text-muted text-sm">Ostatnia aktualizacja: 31 maja 2026 r.</p>
        </div>

        {/* Rich content */}
        <div className="prose prose-invert max-w-none text-text-muted text-sm md:text-base space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-heading text-white font-semibold mb-4">1. Postanowienia ogólne</h2>
            <p>
              Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych osób korzystających z serwisu internetowego działającego pod adresem <span className="text-white">alto.pl</span> (zwanego dalej Serwisem). Administratorem Twoich danych osobowych jest Alto Agency, reprezentowane przez wyznaczonych inspektorów ochrony informacji. Dbamy o to, aby Twoje dane były zbierane, przetwarzane i zabezpieczane zgodnie z prawem polskim i unijnym, w szczególności z Rozporządzeniem Parlamentu Europejskiego (RODO).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading text-white font-semibold mb-4">2. Jakie dane zbieramy i w jakim celu?</h2>
            <p>
              Przetwarzamy wyłącznie dane, które zdecydujesz się nam przekazać dobrowolnie, lub które są niezbędne do prawidłowego funkcjonowania witryny:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <span className="text-white font-medium">Formularz kontaktowy oraz formularz zamówienia audytu:</span> Przetwarzamy Twoje imię, adres e-mail, numer telefonu oraz adres strony internetowej/profilu społecznościowego w celu przygotowania wyceny, odpowiedzi na zapytanie lub przygotowania manualnej analizy. Podstawą prawną jest art. 6 ust. 1 lit. b RODO (działania dążące do zawarcia umowy).
              </li>
              <li>
                <span className="text-white font-medium">Newsletter / Alerty blogowe:</span> Twój adres e-mail służy do powiadamiania o nowych treściach merytorycznych i darmowych poradnikach, na co wyrażasz osobną zgodę (art. 6 ust. 1 lit. a RODO).
              </li>
              <li>
                <span className="text-white font-medium">Statystyki i Cookies:</span> Serwis korzysta z Google Analytics w celu badania ruchu użytkowników, optymalizacji kampanii i wykrywania błędów technicznych. Informujemy, że dane te są zanonimizowane.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading text-white font-semibold mb-4">3. Pliki Cookies (Ciasteczka)</h2>
            <p>
              Nasza strona wykorzystuje małe pliki tekstowe zapisywane na dysku Twojego urządzenia w celu dostosowania witryny do indywidualnych preferencji oraz sprawnego ładowania komponentów visual-interfejsu. Możesz w każdej chwili zmienić ustawienia dotyczące cookies w swojej przeglądarce bądź za pomocą dedykowanego banera do zarządzania zgodami na naszej stronie. Zablokowanie części plików cookie może utrudnić korzystanie z niektórych funkcjonalności serwisu.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading text-white font-semibold mb-4">4. Twoje prawa</h2>
            <p>
              Zgodnie z wymogami prawnymi przysługuje Ci pełen zestaw praw powiązanych z Twoimi danymi osobowymi:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Prawo dostępu do treści swoich danych oraz uzyskania ich kopii,</li>
              <li>Prawo do sprostowania (poprawiania) swoich danych,</li>
              <li>Prawo do usunięcia danych (tzw. „prawo do bycia zapomnianym”),</li>
              <li>Prawo do ograniczenia lub sprzeciwu wobec przetwarzania,</li>
              <li>Prawo do wniesienia skargi do organu nadzorczego (Prezesa Urzędu Ochrony Danych Osobowych).</li>
            </ul>
          </section>

          <section className="bg-navy-light/40 border border-white/5 rounded-lg p-6 md:p-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-heading text-white font-semibold mb-1">Masz pytania dotyczące prywatności?</h3>
              <p className="text-xs md:text-sm text-text-muted">Nasi eksperci odpowiedzą na każde Twoje zapytanie dotyczące bezpieczeństwa plików.</p>
            </div>
            <a 
              href="mailto:hello@altoagency.pl" 
              className="ripple bg-primary hover:bg-[#B3933B] text-navy-dark px-6 py-3 rounded-lg font-semibold text-sm flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <Mail size={16} />
              Napisz do nas
            </a>
          </section>
        </div>

      </div>
    </div>
  );
}
