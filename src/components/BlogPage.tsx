import { motion, useScroll, useSpring } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useHashRoute } from '../hooks/useHashRoute';
import { BLOG_POSTS } from '../data/blogPosts';

export default function BlogPage() {
  const { scrollYProgress } = useScroll();
  const { navigate } = useHashRoute();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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
            Baza praktycznych wskazówek, przewodników biznesowych i trendów technologicznych skrojonych specjalnie dla małych i średnich firm. Sprawdź naszą aktualną bazę wiedzy.
          </motion.p>
        </div>

        {/* Typographically Elegant Blog Grid (NO CARDS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-20 border-t border-white/10 pt-16">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.title}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              onClick={() => navigate(post.slug as any)}
              className="flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Meta details header info */}
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-heading font-light text-primary text-5xl select-none leading-none">
                    0{index + 1}
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] text-primary/80 font-mono tracking-widest uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
                    Opublikowano
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
                <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 font-light">
                  {post.desc}
                </p>

                {/* Read Link */}
                <div className="inline-flex items-center gap-2 text-xs text-primary font-mono tracking-wider uppercase group-hover:translate-x-1.5 transition-transform duration-300 mb-8">
                  Czytaj artykuł <ArrowRight size={12} />
                </div>
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
