import { motion, useScroll, useSpring } from 'motion/react';
import { Calendar, Clock } from 'lucide-react';

export default function BlogPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const upcomingPosts = [
    {
      title: "Jak bez budżetu reklamowego zwiększyć zasięg lokalnej firmy na Facebooku w 2026 roku?",
      category: "Social Media",
      readTime: "6 min czytania",
      date: "Czerwiec 2026",
      desc: "Przewodnik po organicznych metodach budowania społeczności, algorytmach Meta i strategiach angażowania lokalnych odbiorców.",
      tag: "Darmowy Zasięg"
    },
    {
      title: "Czy Twoja strona internetowa odstrasza klientów? 5 krytycznych błędów UX i konwersji",
      category: "Strony WWW",
      readTime: "8 min czytania",
      date: "Czerwiec 2026",
      desc: "Jak nieintuicyjna nawigacja, powolne ładowanie i słabe Call to Action potajemnie niszczą Twoje wyniki sprzedażowe.",
      tag: "Optymalizacja"
    },
    {
      title: "Automatyzacja procesów w mikro i małej firmie: jak zaoszczędzić 10 godzin tygodniowo?",
      category: "Automatyzacje",
      readTime: "7 min czytania",
      date: "Czerwiec 2026",
      desc: "Praktyczne wdrożenie prostych skryptów, autoresponderów i asystentów AI, które wykonają powtarzalną pracę za Ciebie.",
      tag: "Efektywność"
    }
  ];

  return (
    <div className="pt-32 pb-24 overflow-hidden bg-navy-dark">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[100] shadow-[0_0_8px_rgba(201,168,76,0.5)]"
        style={{ scaleX }}
      />
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-medium tracking-tight mb-8 text-white"
          >
            Nasz Blog Marketingowy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-muted text-lg leading-relaxed font-body font-light"
          >
            Baza praktycznych wskazówek, przewodników biznesowych i trendów technologicznych skrojonych specjalnie dla małych i średnich firm. Sprawdź, co dla Ciebie przygotowujemy.
          </motion.p>
        </div>

        {/* Typographically Elegant Blog Grid (NO CARDS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-20 border-t border-white/10 pt-16">
          {upcomingPosts.map((post, index) => (
            <motion.div
              key={post.title}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="flex flex-col justify-between group"
            >
              <div>
                {/* Meta details header info */}
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-heading font-light text-primary text-5xl select-none leading-none">
                    0{index + 1}
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] text-primary font-mono tracking-widest uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/70 animate-pulse" />
                    W redakcji
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-primary border border-primary/30 px-2 py-0.5 rounded-sm">
                    {post.category}
                  </span>
                  <span className="text-[10px] text-text-muted/60 font-mono tracking-wider">{post.tag}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-heading font-medium text-white group-hover:text-primary transition-colors duration-300 mb-4 leading-snug">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-text-muted text-sm md:text-base leading-relaxed mb-8 font-light">
                  {post.desc}
                </p>
              </div>

              {/* Footer Meta */}
              <div className="border-t border-white/10 pt-6 mt-auto">
                <div className="flex items-center justify-between text-xs text-text-muted/70 font-light font-mono">
                  <div className="flex items-center gap-2">
                    <Calendar size={13} className="text-primary/75" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={13} className="text-primary/75" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
