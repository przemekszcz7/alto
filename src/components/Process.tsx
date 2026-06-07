import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { MessageSquare, Compass, Rocket, LineChart } from 'lucide-react';

const steps = [
  {
    title: 'Krótka rozmowa',
    desc: 'Poznajemy Twoje cele i bolączki. My pytamy, Ty odpowiadasz - bez zbędnego żargonu i skomplikowanych kwestionariuszy.',
    icon: MessageSquare
  },
  {
    title: 'Nasz plan działania',
    desc: 'Przygotowujemy strategię, która zadziała dla Twojej specyficznej branży. Ty ją akceptujesz, my zajmujemy się resztą.',
    icon: Compass
  },
  {
    title: 'Kompleksowe wdrożenie',
    desc: 'Budujemy stronę, ustawiamy reklamy i optymalizujemy wizytówki. Wszystko dzieje się w tle, abyś Ty mógł prowadzić biznes.',
    icon: Rocket
  },
  {
    title: 'Regularny raport i zysk',
    desc: 'Dostajesz proste podsumowanie efektów. Widzisz realnych klientów i wzrost zainteresowania Twoją firmą. Bez owijania w bawełnę.',
    icon: LineChart
  }
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="o-nas" className="py-32 bg-navy-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-reveal mb-24 text-center">
          <h2 className="text-4xl md:text-6xl font-bold">Jak odciążymy Twój biznes</h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto text-xl italic">
            "Ty prowadzisz biznes. My zajmujemy się resztą." - to nie tylko hasło, to nasz model współpracy.
          </p>
        </div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary z-0"
          />

          <div className="flex flex-col gap-16 md:gap-32">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative flex items-center gap-8 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Number Circle */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-12 h-12 bg-navy-dark border-2 border-primary rounded-full z-10 flex items-center justify-center text-primary font-bold">
                  {index + 1}
                </div>

                {/* Content Card */}
                <div className={`section-reveal flex-1 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-16 md:text-right ml-16 md:ml-0' : 'md:pl-16 md:text-left ml-16 md:ml-0'
                }`}>
                  <div className="inline-flex mb-4 p-3 bg-primary/10 text-primary rounded-sm">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-text-muted text-lg leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
