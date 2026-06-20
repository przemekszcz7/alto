import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

const WORDS = [
  'cały Twój marketing w sieci.',
  'projektowanie nowoczesnych stron WWW.',
  'skuteczne kampanie Google i Meta Ads.',
  'lokalne pozycjonowanie SEO i wizytówki.',
  'stałe pozyskiwanie nowych klientów.'
];

export default function Hero() {
  const [displayText, setDisplayText] = useState('');

  // All mutable typewriter state in refs – zero extra re-renders
  const wordIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const tick = () => {
      const word = WORDS[wordIndexRef.current];
      const deleting = isDeletingRef.current;

      if (!deleting) {
        charIndexRef.current += 1;
        setDisplayText(word.substring(0, charIndexRef.current));

        if (charIndexRef.current === word.length) {
          // Fully typed – pause before deleting
          isDeletingRef.current = true;
          timerRef.current = setTimeout(tick, 2200);
          return;
        }
      } else {
        charIndexRef.current -= 1;
        setDisplayText(word.substring(0, charIndexRef.current));

        if (charIndexRef.current === 0) {
          // Fully deleted – move to next word
          isDeletingRef.current = false;
          wordIndexRef.current = (wordIndexRef.current + 1) % WORDS.length;
          timerRef.current = setTimeout(tick, 400);
          return;
        }
      }

      timerRef.current = setTimeout(tick, deleting ? 30 : 60);
    };

    timerRef.current = setTimeout(tick, 60);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []); // ← runs once, no dependency churn

  return (
    <section className="relative min-h-screen md:h-screen md:min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-navy-dark border-b border-white/10 pt-28 pb-16 md:py-0">
      {/* Absolute background accent */}
      <div className="absolute inset-0 bg-radial-gradient from-navy-light/10 via-transparent to-transparent opacity-60 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center relative z-10">

        {/* Main Header Title with high-contrast typewriter effect */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-7xl font-semibold mb-8 text-white leading-tight tracking-tight font-heading max-w-4xl min-h-[160px] md:min-h-[290px]"
        >
          Ty prowadzisz biznes. <br />
          <span className="italic font-normal text-[#C9A84C]">My bierzemy na siebie</span> <br />
          <span className="text-[#C9A84C] relative inline-block text-3xl md:text-6xl min-h-[1.2em] pt-2">
            {displayText}
            <span className="typewriter-cursor ml-1 inline-block h-[0.9em] align-middle w-[2px]"></span>
          </span>
        </motion.h1>

        {/* Descriptive intro paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#5C6B84] text-lg md:text-xl font-body max-w-2xl mb-8 md:mb-12 leading-relaxed font-light"
        >
          Kompleksowa obsługa marketingu dla lokalnych liderów i ambitnych firm. Bez drogich pośredników, bez lania wody i rozproszonych agencji. Tworzymy strony, budujemy widoczność i dostarczamy realnych klientów.
        </motion.p>

        {/* Interactive CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <a href="#uslugi" aria-label="Zobacz zakres oferowanych usług" className="btn-primary text-center ripple min-w-[200px]">
            Zobacz zakres usług
          </a>
          <a href="#kontakt" aria-label="Skonsultuj działania marketingowe" className="btn-outline text-center ripple min-w-[200px]">
            Porozmawiaj o współpracy
          </a>
        </motion.div>
      </div>

      {/* Decorative vertical divider lines */}
      <div className="absolute right-12 top-0 bottom-0 w-[1px] bg-white/[0.03] hidden xl:block pointer-events-none" />
      <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-white/[0.03] hidden xl:block pointer-events-none" />

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[#C9A84C] opacity-60 hover:opacity-100 transition-opacity hidden md:flex items-center gap-3 text-xs uppercase tracking-widest font-mono cursor-pointer"
      >
        <a href="#uslugi" className="flex items-center gap-2">
          <span>Przewiń, aby poznać ofertę</span>
          <ArrowDown size={14} />
        </a>
      </motion.div>
    </section>
  );
}