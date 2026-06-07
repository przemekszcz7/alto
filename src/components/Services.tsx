import { motion } from 'motion/react';
import { Globe, Settings, TrendingUp, MapPin, Facebook, Megaphone, Zap, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Tworzenie stron',
    desc: 'Strony wizytówkowe, landing page\'y, sklepy internetowe, strony dla restauracji, gabinetów i firm usługowych.'
  },
  {
    icon: Settings,
    title: 'Utrzymanie i opieka',
    desc: 'Miesięczny abonament: aktualizacje, kopie zapasowe, bezpieczeństwo i drobne zmiany. Twoja strona zawsze działa.'
  },
  {
    icon: TrendingUp,
    title: 'Pozycjonowanie SEO',
    desc: "Optymalizacja techniczna, treściowa i lokalna. Pojawiasz się tam, gdzie klienci szukają - w Google."
  },
  {
    icon: MapPin,
    title: 'Wizytówka Google',
    desc: 'Założenie, optymalizacja, zdjęcia i posty. Większość firm jej nie ma zrobionej dobrze - my to zmieniamy.'
  },
  {
    icon: Facebook,
    title: 'Social Media',
    desc: 'Regularne prowadzenie Facebooka i Instagrama, profesjonalne grafiki i angażujące treści.'
  },
  {
    icon: Megaphone,
    title: 'Reklamy Google/Meta Ads',
    desc: 'Kampanie kierujące ruch na stronę. Efekty widoczne szybko, zarządzanie miesięczne.'
  },
  {
    icon: Zap,
    title: 'Automatyzacje',
    desc: 'Formularze, rezerwacje, płatności online oraz inteligentne chatboty AI. Strona pracuje za Ciebie - całą dobę.'
  },
  {
    icon: BarChart3,
    title: 'Analityka i audyt',
    desc: 'Monitorujemy ruch i zachowania użytkowników. Wyciągamy wnioski, które pozwalają sprzedawać więcej.'
  }
];

export default function Services() {
  return (
    <section id="uslugi" className="py-32 bg-navy-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-reveal mb-20 text-center max-w-3xl mx-auto">
          <h4 className="text-primary font-body font-semibold tracking-widest uppercase text-sm mb-4">Pełne wsparcie</h4>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">Współpracując z nami, masz z głowy:</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="section-reveal glass-card group flex flex-col"
            >
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-sm transition-transform duration-500 group-hover:rotate-[360deg] group-hover:bg-primary group-hover:text-navy-dark shrink-0">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-text-muted leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
