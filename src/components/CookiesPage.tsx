import { motion } from 'motion/react';
import { Cookie, ArrowLeft, Mail } from 'lucide-react';
import { useHashRoute } from '../hooks/useHashRoute';

export default function CookiesPage() {
  const { navigate } = useHashRoute();

  return (
    <div className="pt-32 pb-24 bg-navy-dark text-white font-body">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Back Link */}
        <button 
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-text-muted hover:text-primary transition-colors mb-8 cursor-pointer bg-transparent border-none outline-none"
          aria-label="Powrót do strony głównej"
        >
          <ArrowLeft size={14} />
          Powrót do strony głównej
        </button>

        {/* Title */}
        <div className="border-b border-white/10 pb-8 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-xs font-mono uppercase mb-4">
            <Cookie size={13} />
            Polityka Cookies
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-medium tracking-tight mb-4">
            Polityka Cookies
          </h1>
          <p className="text-text-muted text-sm font-light">Wersja z dnia: 7 czerwca 2026 r.</p>
        </div>

        {/* Rich content */}
        <div className="prose prose-invert max-w-none text-text-muted text-sm md:text-base space-y-12 leading-relaxed">
          
          <div className="text-sm font-mono text-primary/75 tracking-widest uppercase mb-12 block">
            ALTO AGENCJA REKLAMOWA
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading text-white font-normal mb-4 border-b border-white/5 pb-2">1. Czym są pliki cookies?</h2>
            <p className="font-light">
              Pliki cookies (tzw. ciasteczka) to małe pliki tekstowe zapisywane na urządzeniu końcowym Użytkownika (komputerze, smartfonie, tablecie) podczas korzystania ze strony internetowej. Pliki te umożliwiają rozpoznanie urządzenia Użytkownika oraz dostosowanie i optymalizację strony internetowej do jego indywidualnych potrzeb.
            </p>
            <p className="font-light">
              Pliki cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny numer identyfikacyjny.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading text-white font-normal mb-4 border-b border-white/5 pb-2">2. Kto jest administratorem plików cookies?</h2>
            <p className="font-light mb-6">
              Administratorem plików cookies zamieszczanych w urządzeniu końcowym Użytkownika serwisu jest Alto Agencja Reklamowa (dalej: "Alto" lub "Administrator").
            </p>
            <div className="bg-navy-light/10 border border-white/10 p-6 rounded-sm font-light space-y-2 max-w-md">
              <p><strong className="text-white font-medium">Firma:</strong> Alto Agencja Reklamowa</p>
              <p><strong className="text-white font-medium">Adres:</strong> Zielna 13, Kutno 99-300</p>
              <p><strong className="text-white font-medium">E-mail:</strong> <a href="mailto:kontakt@altoagencja.pl" aria-label="Wyślij e-mail do administratora plików cookies na adres kontakt@altoagencja.pl" className="text-primary hover:underline">kontakt@altoagencja.pl</a></p>
              <p><strong className="text-white font-medium">Telefon:</strong> <a href="tel:+48661552316" aria-label="Zadzwoń do administratora plików cookies pod numer 661 552 316" className="text-primary hover:underline">661 552 316</a></p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-heading text-white font-normal mb-4 border-b border-white/5 pb-2">3. Do czego wykorzystujemy pliki cookies?</h2>
            <p className="font-light">
              Strona internetowa Alto Agencja Reklamowa wykorzystuje pliki cookies w następujących celach:
            </p>
            
            <div className="space-y-6 pt-2">
              <div>
                <h4 className="text-white font-medium text-lg mb-1">Cookies niezbędne</h4>
                <p className="font-light text-sm text-text-muted leading-relaxed mb-3">
                  Konieczne do prawidłowego funkcjonowania strony. Bez tych plików strona nie będzie działać poprawnie. Nie wymagają zgody Użytkownika.
                </p>
                <ul className="space-y-1.5 font-light list-none pl-0">
                  <li className="flex items-center gap-2 text-sm text-text-muted/90"><span className="w-1 h-1 rounded-full bg-primary" /> Utrzymanie sesji Użytkownika</li>
                  <li className="flex items-center gap-2 text-sm text-text-muted/90"><span className="w-1 h-1 rounded-full bg-primary" /> Zapamiętywanie ustawień formularzy</li>
                  <li className="flex items-center gap-2 text-sm text-text-muted/90"><span className="w-1 h-1 rounded-full bg-primary" /> Zapewnienie bezpieczeństwa serwisu</li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-medium text-lg mb-1">Cookies analityczne</h4>
                <p className="font-light text-sm text-text-muted leading-relaxed mb-3">
                  Umożliwiają nam analizę sposobu korzystania ze strony, co pozwala na jej ulepszanie i dostosowywanie do potrzeb Użytkowników.
                </p>
                <ul className="space-y-1.5 font-light list-none pl-0">
                  <li className="flex items-center gap-2 text-sm text-text-muted/90"><span className="w-1 h-1 rounded-full bg-primary" /> Google Analytics – analiza ruchu na stronie</li>
                  <li className="flex items-center gap-2 text-sm text-text-muted/90"><span className="w-1 h-1 rounded-full bg-primary" /> Zbieranie danych statystycznych o odwiedzinach</li>
                  <li className="flex items-center gap-2 text-sm text-text-muted/90"><span className="w-1 h-1 rounded-full bg-primary" /> Identyfikacja najpopularniejszych treści</li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-medium text-lg mb-1">Cookies marketingowe</h4>
                <p className="font-light text-sm text-text-muted leading-relaxed mb-3">
                  Służą do wyświetlania reklam dostosowanych do zainteresowań Użytkownika oraz mierzenia skuteczności kampanii reklamowych.
                </p>
                <ul className="space-y-1.5 font-light list-none pl-0">
                  <li className="flex items-center gap-2 text-sm text-text-muted/90"><span className="w-1 h-1 rounded-full bg-primary" /> Google Ads – remarketing i targetowanie reklam</li>
                  <li className="flex items-center gap-2 text-sm text-text-muted/90"><span className="w-1 h-1 rounded-full bg-primary" /> Facebook Pixel – śledzenie konwersji</li>
                  <li className="flex items-center gap-2 text-sm text-text-muted/90"><span className="w-1 h-1 rounded-full bg-primary" /> LinkedIn Insight Tag – kampanie B2B</li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-medium text-lg mb-1">Cookies funkcjonalne</h4>
                <p className="font-light text-sm text-text-muted leading-relaxed mb-3">
                  Zapamiętują preferencje i ustawienia Użytkownika, aby poprawić komfort korzystania ze strony.
                </p>
                <ul className="space-y-1.5 font-light list-none pl-0">
                  <li className="flex items-center gap-2 text-sm text-text-muted/90"><span className="w-1 h-1 rounded-full bg-primary" /> Zapamiętywanie wybranych preferencji językowych</li>
                  <li className="flex items-center gap-2 text-sm text-text-muted/90"><span className="w-1 h-1 rounded-full bg-primary" /> Personalizacja wyświetlanych treści</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading text-white font-normal mb-4 border-b border-white/5 pb-2">4. Rodzaje plików cookies ze względu na czas przechowywania</h2>
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-medium text-base mb-1">Cookies sesyjne</h4>
                <p className="font-light text-sm md:text-base">
                  Tymczasowe pliki przechowywane na urządzeniu Użytkownika do momentu opuszczenia strony lub zamknięcia przeglądarki. Nie są zapisywane trwale na urządzeniu.
                </p>
              </div>
              <div>
                <h4 className="text-white font-medium text-base mb-1">Cookies trwałe</h4>
                <p className="font-light text-sm md:text-base">
                  Pliki przechowywane przez określony czas lub do momentu ich usunięcia przez Użytkownika. Czas przechowywania zależy od rodzaju pliku i może wynosić od kilku dni do kilku lat.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading text-white font-normal mb-4 border-b border-white/5 pb-2">5. Cookies podmiotów trzecich</h2>
            <p className="font-light">
              Na naszej stronie mogą być zamieszczane pliki cookies pochodzące od następujących podmiotów zewnętrznych:
            </p>
            <ul className="space-y-2 font-light text-sm pl-0 list-none">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /><strong>Google LLC:</strong> Google Analytics, Google Ads, reCAPTCHA – Stany Zjednoczone</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /><strong>Meta Platforms Ireland Ltd.:</strong> Facebook Pixel, Meta Business Suite – Irlandia</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /><strong>LinkedIn Ireland Unlimited Company:</strong> LinkedIn Insight Tag – Irlandia</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /><strong>Hotjar Ltd.:</strong> Analiza zachowania Użytkowników – Malta</li>
            </ul>
            <p className="font-light pt-2 text-sm italic">
              Każdy z powyższych podmiotów stosuje własną politykę prywatności, z którą zachęcamy się zapoznać.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-heading text-white font-normal mb-4 border-b border-white/5 pb-2">6. Jak zarządzać plikami cookies?</h2>
            <p className="font-light">
              Użytkownik ma pełną kontrolę nad plikami cookies. Może je zaakceptować, odrzucić lub zmienić swoje preferencje w dowolnym momencie poprzez:
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="text-white font-medium text-base mb-1">Panel preferencji cookies na stronie</h4>
                <p className="font-light text-sm">
                  Przy pierwszej wizycie na stronie wyświetlamy baner cookies umożliwiający wybór kategorii plików, na które Użytkownik wyraża zgodę. Preferencje można zmienić w każdej chwili, klikając w ikonę ustawień cookies.
                </p>
              </div>

              <div>
                <h4 className="text-white font-medium text-base mb-1">Ustawienia przeglądarki</h4>
                <p className="font-light text-sm mb-3">
                  Użytkownik może samodzielnie zarządzać plikami cookies w ustawieniach swojej przeglądarki:
                </p>
                <ul className="space-y-1 font-light text-xs md:text-sm pl-4 list-disc">
                  <li><strong>Google Chrome:</strong> Ustawienia &gt; Prywatność i bezpieczeństwo &gt; Pliki cookie</li>
                  <li><strong>Mozilla Firefox:</strong> Opcje &gt; Prywatność i Bezpieczeństwo</li>
                  <li><strong>Safari:</strong> Preferencje &gt; Prywatność</li>
                  <li><strong>Microsoft Edge:</strong> Ustawienia &gt; Pliki cookie i uprawnienia witryn</li>
                </ul>
              </div>
            </div>

            <p className="font-light text-sm italic pt-2">
              Należy pamiętać, że wyłączenie lub ograniczenie plików cookies może wpłynąć na funkcjonalność strony internetowej i utrudnić korzystanie z niektórych jej funkcji.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading text-white font-normal mb-4 border-b border-white/5 pb-2">7. Podstawa prawna</h2>
            <p className="font-light">
              Niniejsza Polityka Cookies jest zgodna z:
            </p>
            <ul className="space-y-1.5 font-light text-sm pl-4 list-disc">
              <li>Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO)</li>
              <li>Ustawą z dnia 16 lipca 2004 r. Prawo telekomunikacyjne</li>
              <li>Dyrektywą 2002/58/WE (Dyrektywa ePrivacy)</li>
              <li>Ustawą z dnia 10 maja 2018 r. o ochronie danych osobowych</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading text-white font-normal mb-4 border-b border-white/5 pb-2">8. Zmiany w Polityce Cookies</h2>
            <p className="font-light">
              Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce Cookies. O wszelkich zmianach Użytkownicy będą informowani poprzez zamieszczenie zaktualizowanej wersji dokumentu na stronie internetowej. Zalecamy regularne sprawdzanie treści niniejszej Polityki.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading text-white font-normal mb-4 border-b border-white/5 pb-2">9. Kontakt</h2>
            <p className="font-light">
              W przypadku pytań dotyczących niniejszej Polityki Cookies prosimy o kontakt:
            </p>
            <div className="bg-navy-light/10 border border-white/10 p-6 rounded-sm font-light space-y-2 max-w-md">
              <p><strong className="text-white font-medium">E-mail:</strong> <a href="mailto:kontakt@altoagencja.pl" aria-label="Napisz do nas na adres kontakt@altoagencja.pl" className="text-primary hover:underline">kontakt@altoagencja.pl</a></p>
              <p><strong className="text-white font-medium">Adres:</strong> Zielna 13, Kutno 99-300</p>
              <p><strong className="text-white font-medium">Telefon:</strong> <a href="tel:+48661552316" aria-label="Zadzwoń do nas pod numer 661 552 316" className="text-primary hover:underline">661 552 316</a></p>
            </div>
          </section>

        </div>

        {/* Action Panel */}
        <section className="border border-white/10 bg-navy-light/10 p-8 md:p-12 rounded-sm relative mt-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-heading text-white font-medium mb-1">Potrzebujesz więcej informacji?</h3>
            <p className="text-xs md:text-sm text-text-muted font-light">Skontaktuj się bezpośrednio w sprawach związanych z ochroną danych.</p>
          </div>
          <a 
            href="mailto:kontakt@altoagencja.pl" 
            className="ripple bg-primary hover:bg-[#B3933B] text-navy-dark px-6 py-3 rounded-sm font-medium text-sm flex items-center gap-2 cursor-pointer whitespace-nowrap transition-colors"
            aria-label="Skontaktuj się w sprawach polityki cookies"
          >
            <Mail size={16} />
            Napisz do nas
          </a>
        </section>

      </div>
    </div>
  );
}
