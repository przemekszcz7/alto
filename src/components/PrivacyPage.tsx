import { motion } from 'motion/react';
import { ShieldCheck, ArrowLeft, Mail } from 'lucide-react';
import { useHashRoute } from '../hooks/useHashRoute';

export default function PrivacyPage() {
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
            <ShieldCheck size={13} />
            Bezpieczeństwo danych
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-medium tracking-tight mb-4">
            Polityka Prywatności
          </h1>
          <p className="text-text-muted text-sm font-light">Wersja z dnia: 7 czerwca 2026 r.</p>
        </div>

        {/* Rich content */}
        <div className="prose prose-invert max-w-none text-text-muted text-sm md:text-base space-y-12 leading-relaxed">
          
          <div className="text-sm font-mono text-primary/75 tracking-widest uppercase mb-12 block">
            ALTO AGENCJA REKLAMOWA
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading text-white font-normal mb-4 border-b border-white/5 pb-2">1. Informacje ogólne</h2>
            <p className="font-light">
              Niniejsza Polityka Prywatności określa zasady gromadzenia, przetwarzania i wykorzystywania danych osobowych Użytkowników strony internetowej prowadzonej przez Alto Agencja Reklamowa oraz klientów korzystających z oferowanych usług reklamowych i marketingowych.
            </p>
            <p className="font-light">
              Dokładamy wszelkich starań, aby Twoje dane osobowe były przetwarzane zgodnie z obowiązującymi przepisami prawa, w szczególności z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading text-white font-normal mb-4 border-b border-white/5 pb-2">2. Administrator danych osobowych</h2>
            <p className="font-light mb-6">
              Administratorem Twoich danych osobowych jest:
            </p>
            <div className="bg-navy-light/10 border border-white/10 p-6 rounded-sm font-light space-y-2 max-w-md">
              <p><strong className="text-white font-medium">Firma:</strong> Alto Agencja Reklamowa</p>
              <p><strong className="text-white font-medium">Adres siedziby:</strong> Zielna 13, Kutno 99-300</p>
              <p><strong className="text-white font-medium">E-mail:</strong> <a href="mailto:kontakt@altoagencja.pl" aria-label="Wyślij e-mail do Administratora Danych Alto na adres kontakt@altoagencja.pl" className="text-primary hover:underline">kontakt@altoagencja.pl</a></p>
              <p><strong className="text-white font-medium">Telefon:</strong> <a href="tel:+48661552316" aria-label="Zadzwoń do Administratora Danych Alto pod numer 661 552 316" className="text-primary hover:underline">661 552 316</a></p>
            </div>
            <p className="font-light pt-2">
              W sprawach związanych z ochroną danych osobowych można kontaktować się z nami pod powyższym adresem e-mail lub korespondencyjnie na adres siedziby.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading text-white font-normal mb-4 border-b border-white/5 pb-2">3. Jakie dane zbieramy?</h2>
            <p className="font-light">
              W zależności od sposobu kontaktu i korzystania z oferowanych usług można przetwarzać następujące kategorie danych:
            </p>
            
            <div className="space-y-6 pt-2">
              <div>
                <h4 className="text-white font-medium text-base mb-2">Dane kontaktowe</h4>
                <ul className="space-y-1.5 font-light list-none pl-0">
                  <li className="flex items-center gap-2 text-sm"><span className="w-1 h-1 rounded-full bg-primary" /> Imię i nazwisko</li>
                  <li className="flex items-center gap-2 text-sm"><span className="w-1 h-1 rounded-full bg-primary" /> Adres e-mail</li>
                  <li className="flex items-center gap-2 text-sm"><span className="w-1 h-1 rounded-full bg-primary" /> Numer telefonu</li>
                  <li className="flex items-center gap-2 text-sm"><span className="w-1 h-1 rounded-full bg-primary" /> Adres siedziby lub zamieszkania</li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-medium text-base mb-2">Dane firmowe (dla klientów B2B)</h4>
                <ul className="space-y-1.5 font-light list-none pl-0">
                  <li className="flex items-center gap-2 text-sm"><span className="w-1 h-1 rounded-full bg-primary" /> Nazwa firmy</li>
                  <li className="flex items-center gap-2 text-sm"><span className="w-1 h-1 rounded-full bg-primary" /> NIP, REGON, KRS</li>
                  <li className="flex items-center gap-2 text-sm"><span className="w-1 h-1 rounded-full bg-primary" /> Adres siedziby firmy</li>
                  <li className="flex items-center gap-2 text-sm"><span className="w-1 h-1 rounded-full bg-primary" /> Dane osób do kontaktu</li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-medium text-base mb-2">Dane techniczne</h4>
                <ul className="space-y-1.5 font-light list-none pl-0">
                  <li className="flex items-center gap-2 text-sm"><span className="w-1 h-1 rounded-full bg-primary" /> Adres IP</li>
                  <li className="flex items-center gap-2 text-sm"><span className="w-1 h-1 rounded-full bg-primary" /> Dane przeglądarki i urządzenia</li>
                  <li className="flex items-center gap-2 text-sm"><span className="w-1 h-1 rounded-full bg-primary" /> Dane o aktywności na stronie (za pośrednictwem cookies)</li>
                  <li className="flex items-center gap-2 text-sm"><span className="w-1 h-1 rounded-full bg-primary" /> Daty i godziny wizyt</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-heading text-white font-normal mb-4 border-b border-white/5 pb-2">4. Cele i podstawy prawne przetwarzania danych</h2>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-white font-medium text-base mb-1">Realizacja umowy i zlecenia</h4>
                <span className="text-[10px] font-mono text-primary uppercase tracking-wider block mb-2">Podstawa: art. 6 ust. 1 lit. b RODO – przetwarzanie jest niezbędne do wykonania umowy</span>
                <ul className="space-y-1 font-light pl-4 list-disc text-sm">
                  <li>Realizacja zleceń reklamowych i marketingowych</li>
                  <li>Obsługa klienta i komunikacja projektowa</li>
                  <li>Wystawianie faktur i rozliczenia finansowe</li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-medium text-base mb-1">Uzasadniony interes administratora</h4>
                <span className="text-[10px] font-mono text-primary uppercase tracking-wider block mb-2">Podstawa: art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes administratora</span>
                <ul className="space-y-1 font-light pl-4 list-disc text-sm">
                  <li>Marketing bezpośredni usług własnych</li>
                  <li>Dochodzenie i obrona roszczeń</li>
                  <li>Analiza i optymalizacja strony internetowej</li>
                  <li>Bezpieczeństwo serwisu</li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-medium text-base mb-1">Zgoda Użytkownika</h4>
                <span className="text-[10px] font-mono text-primary uppercase tracking-wider block mb-2">Podstawa: art. 6 ust. 1 lit. a RODO – zgoda osoby, której dane dotyczą</span>
                <ul className="space-y-1 font-light pl-4 list-disc text-sm">
                  <li>Wysyłanie newslettera i komunikatów marketingowych</li>
                  <li>Pliki cookies analityczne i marketingowe</li>
                  <li>Kontakt przez formularz zapytaniowy</li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-medium text-base mb-1">Obowiązek prawny</h4>
                <span className="text-[10px] font-mono text-primary uppercase tracking-wider block mb-2">Podstawa: art. 6 ust. 1 lit. c RODO – obowiązek prawny</span>
                <ul className="space-y-1 font-light pl-4 list-disc text-sm">
                  <li>Prowadzenie ksiąg rachunkowych</li>
                  <li>Wystawianie dokumentów księgowych</li>
                  <li>Wypełnianie obowiązków podatkowych</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading text-white font-normal mb-4 border-b border-white/5 pb-2">5. Jak długo przechowujemy dane?</h2>
            <p className="font-light">
              Dane osobowe przechowujemy przez okres niezbędny do realizacji celów, dla których zostały zebrane:
            </p>
            <ul className="space-y-2 font-light text-sm pl-0 list-none">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /><strong>Dane klientów (umowy):</strong> Przez czas trwania umowy + 6 lat (przedawnienie roszczeń)</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /><strong>Dane księgowe i faktury:</strong> 5 lat od końca roku podatkowego</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /><strong>Dane marketingowe:</strong> Do momentu cofnięcia zgody</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /><strong>Dane z formularza kontaktowego:</strong> 12 miesięcy od ostatniego kontaktu</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /><strong>Dane techniczne (logi):</strong> 12 miesięcy</li>
            </ul>
            <p className="font-light pt-2">
              Po upływie wskazanych okresów dane są trwale usuwane lub anonimizowane.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-heading text-white font-normal mb-4 border-b border-white/5 pb-2">6. Komu przekazujemy Twoje dane?</h2>
            <p className="font-light">
              Twoje dane osobowe mogą być przekazywane wyłącznie zaufanym podmiotom, z którymi współpracujemy:
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="text-white font-medium text-base mb-2">Podmioty przetwarzające</h4>
                <ul className="space-y-1 font-light pl-4 list-disc text-sm">
                  <li>Firmy hostingowe i cloudowe (serwery stron internetowych)</li>
                  <li>Systemy do obsługi poczty e-mail i komunikacji</li>
                  <li>Systemy CRM i zarządzania projektami</li>
                  <li>Narzędzia analityczne (Google Analytics)</li>
                  <li>Systemy do wystawiania faktur i księgowości</li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-medium text-base mb-2">Partnerzy mediowi</h4>
                <p className="font-light text-sm mb-2">
                  W ramach realizacji kampanii reklamowych możemy przekazywać dane (np. listy odbiorców) do platform reklamowych takich jak Google, Meta (Facebook/Instagram) czy LinkedIn. Każdy z tych podmiotów stosuje własne zasady ochrony danych.
                </p>
              </div>

              <div>
                <h4 className="text-white font-medium text-base mb-2">Organy państwowe</h4>
                <p className="font-light text-sm">
                  Dane mogą być udostępniane organom państwowym (np. urzędom skarbowym, organom ścigania) wyłącznie na podstawie wyraźnego obowiązku prawnego.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading text-white font-normal mb-4 border-b border-white/5 pb-2">7. Przekazywanie danych do państw trzecich</h2>
            <p className="font-light">
              Niektóre z narzędzi, których używamy (np. Google Analytics, Meta Pixel), mogą transferować dane do Stanów Zjednoczonych lub innych państw poza Europejskim Obszarem Gospodarczym. Transfer ten odbywa się na podstawie:
            </p>
            <ul className="space-y-1.5 font-light text-sm pl-4 list-disc">
              <li>Standardowych Klauzul Umownych zatwierdzonych przez Komisję Europejską</li>
              <li>Decyzji Komisji Europejskiej stwierdzającej odpowiedni poziom ochrony</li>
              <li>Certyfikacji w ramach EU-US Data Privacy Framework</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading text-white font-normal mb-4 border-b border-white/5 pb-2">8. Twoje prawa</h2>
            <p className="font-light">
              Asystując Twojej obecności w sieci, dbamy o to, byś zachował kontrolę nad swoimi informacjami. Przysługują Ci następujące prawa:
            </p>
            <ul className="space-y-2 font-light text-sm pl-0 list-none">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /><strong>Prawo dostępu:</strong> Możesz zażądać informacji o tym, jakie Twoje dane przetwarzamy</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /><strong>Prawo do sprostowania:</strong> Możesz zażądać poprawienia nieprawidłowych danych</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /><strong>Prawo do usunięcia:</strong> Możesz zażądać usunięcia danych (prawo do bycia zapomnianym)</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /><strong>Prawo do ograniczenia:</strong> Możesz zażądać ograniczenia przetwarzania danych</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /><strong>Prawo do przenoszenia:</strong> Możesz otrzymać swoje dane w ustrukturyzowanym formacie</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /><strong>Prawo sprzeciwu:</strong> Możesz sprzeciwić się przetwarzaniu opartemu na uzasadnionym interesie</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /><strong>Prawo cofnięcia zgody:</strong> Możesz cofnąć zgodę w dowolnym momencie</li>
            </ul>
            <p className="font-light pt-2">
              Aby skorzystać z powyższych praw, prosimy o kontakt na adres e-mail: <a href="mailto:kontakt@altoagencja.pl" aria-label="Napisz do nas na adres kontakt@altoagencja.pl w celu wykonania swoich praw wynikających z RODO" className="text-primary hover:underline">kontakt@altoagencja.pl</a>. Odpowiemy w terminie do 30 dni od otrzymania wniosku.
            </p>
            <p className="font-light">
              Masz również prawo wniesienia skargi do organu nadzorczego – Prezesa Urzędu Ochrony Danych Osobowych (UODO), ul. Stawki 2, 00-193 Warszawa, e-mail: <a href="mailto:kancelaria@uodo.gov.pl" aria-label="Napisz skargę do Urzędu Ochrony Danych Osobowych na adres kancelaria@uodo.gov.pl" className="text-primary hover:underline">kancelaria@uodo.gov.pl</a>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading text-white font-normal mb-4 border-b border-white/5 pb-2">9. Bezpieczeństwo danych</h2>
            <p className="font-light">
              Stosujemy odpowiednie techniczne i organizacyjne środki bezpieczeństwa w celu ochrony Twoich danych przed nieuprawnionym dostępem, utratą lub ujawnieniem:
            </p>
            <ul className="space-y-1.5 font-light text-sm pl-4 list-disc">
              <li>Szyfrowanie transmisji danych (protokół HTTPS/TLS)</li>
              <li>Kontrola dostępu i uwierzytelnianie wieloskładnikowe</li>
              <li>Regularne tworzenie kopii zapasowych</li>
              <li>Szkolenia pracowników z zakresu ochrony danych</li>
              <li>Procedury reagowania na incydenty bezpieczeństwa</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading text-white font-normal mb-4 border-b border-white/5 pb-2">10. Newsletter i komunikacja marketingowa</h2>
            <p className="font-light">
              W przypadku zapisania się na newsletter lub wyrażenia zgody na komunikację marketingową, przesyłane będą informacje o oferowanych usługach, promocjach i aktualnościach z branży reklamowej.
            </p>
            <p className="font-light">
              Można zrezygnować z newslettera w dowolnym momencie, klikając link rezygnacji w treści wiadomości lub wysyłając prośbę pod kontaktowy adres e-mail. Rezygnacja jest natychmiastowa i bezpłatna.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading text-white font-normal mb-4 border-b border-white/5 pb-2">11. Zmiany Polityki Prywatności</h2>
            <p className="font-light">
              Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. O istotnych zmianach poinformujemy Użytkowników poprzez umieszczenie zaktualizowanej wersji na stronie internetowej lub drogą e-mailową.
            </p>
            <p className="font-light">
              Zalecamy regularne zapoznawanie się z treścią Polityki Prywatności. Data ostatniej aktualizacji jest zawsze wskazana na początku dokumentu.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading text-white font-normal mb-4 border-b border-white/5 pb-2">12. Kontakt w sprawach prywatności</h2>
            <p className="font-light">
              W przypadku jakichkolwiek pytań, wątpliwości lub próśb dotyczących niniejszej Polityki Prywatności lub przetwarzania Twoich danych osobowych, prosimy o kontakt:
            </p>
            <div className="bg-navy-light/10 border border-white/10 p-6 rounded-sm font-light space-y-2 max-w-md">
              <p><strong className="text-white font-medium">Alto Agencja Reklamowa</strong></p>
              <p><strong className="text-white font-medium">E-mail:</strong> <a href="mailto:kontakt@altoagencja.pl" aria-label="Napisz maila do Alto Agencji Reklamowej na adres kontakt@altoagencja.pl" className="text-primary hover:underline">kontakt@altoagencja.pl</a></p>
              <p><strong className="text-white font-medium">Adres:</strong> Zielna 13, Kutno 99-300</p>
              <p><strong className="text-white font-medium">Telefon:</strong> <a href="tel:+48661552316" aria-label="Zadzwoń do Alto Agencji Reklamowej pod numer 661 552 316" className="text-primary hover:underline">661 552 316</a></p>
            </div>
            <p className="font-light pt-2">
              Dokładamy wszelkich starań, aby odpowiadać na wszystkie zapytania w terminie do 30 dni.
            </p>
          </section>

        </div>

        {/* Action Panel */}
        <section className="border border-white/10 bg-navy-light/10 p-8 md:p-12 rounded-sm relative mt-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-heading text-white font-medium mb-1">Masz pytania dotyczące prywatności?</h3>
            <p className="text-xs md:text-sm text-text-muted font-light">Nasza agencja z dbałością chroni Twoje dane na każdym etapie współpracy.</p>
          </div>
          <a 
            href="mailto:kontakt@altoagencja.pl" 
            className="ripple bg-primary hover:bg-[#B3933B] text-navy-dark px-6 py-3 rounded-sm font-medium text-sm flex items-center gap-2 cursor-pointer whitespace-nowrap transition-colors"
            aria-label="Wyślij zapytanie mailowe do agencji w sprawach ochrony danych osobowych"
          >
            <Mail size={16} />
            Napisz do nas
          </a>
        </section>

      </div>
    </div>
  );
}
