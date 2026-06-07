import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = ["Ty prowadzisz biznes.", "My zajmujemy się resztą."];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setDisplayText(isDeleting 
        ? fullText.substring(0, displayText.length - 1) 
        : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-navy-dark">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, 50, 100, 0],
            scale: [1, 1.2, 1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 50, 0],
            y: [0, -50, -100, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -right-1/4 w-[700px] h-[700px] bg-navy-light/40 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-8xl font-black mb-8 leading-[1.1]">
          <span className="block h-[2.2em] md:h-auto">{displayText}<span className="typewriter-cursor"></span></span>
        </h1>
        
        <p className="text-text-muted text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-medium tracking-wide">
          Cały marketing w jednym miejscu - <span className="text-white">dla małych firm, które myślą poważnie.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#uslugi" aria-label="Dowiedz się więcej o naszych usługach marketingowych" className="btn-primary w-full sm:w-auto ripple">
            Sprawdź jak pomożemy
          </a>
          <a href="#kontakt" aria-label="Skontaktuj się z nami w celu zamówienia darmowej konsultacji" className="btn-outline w-full sm:w-auto ripple">
            Darmowa konsultacja
          </a>
        </div>
      </div>

      {/* Floating particles (simplified CSS version) */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              opacity: Math.random()
            }}
            animate={{ 
              y: [null, '-20%', '120%'],
              opacity: [null, 0.5, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
            className="absolute w-1 h-1 bg-primary rounded-full"
          />
        ))}
      </div>

      {/* Scroll Down Arrow */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary opacity-50 transition-opacity hover:opacity-100"
      >
        <a href="#uslugi" aria-label="Przewiń stronę w dół do sekcji o oferowanych usługach marketingowych">
          <ArrowDown size={32} />
        </a>
      </motion.div>
    </section>
  );
}
