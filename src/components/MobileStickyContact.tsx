import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Calendar } from 'lucide-react';
import { useHashRoute } from '../hooks/useHashRoute';

export default function MobileStickyContact() {
  const [isVisible, setIsVisible] = useState(false);
  const { currentRoute, navigate } = useHashRoute();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleConsultationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentRoute !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('kontakt');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 450);
    } else {
      const element = document.getElementById('kontakt');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-navy-dark/95 backdrop-blur-md border-t border-[#C9A84C]/20 px-4 py-3 shadow-[0_-10px_30px_rgba(6,11,31,0.8)] pb-safe"
        >
          <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
            {/* Call button */}
            <a
              href="tel:+48661552316"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-sm border border-[#C9A84C]/30 text-[#C9A84C] bg-navy-light/40 font-heading font-medium text-sm hover:bg-[#C9A84C]/10 active:scale-[0.98] transition-all"
            >
              <Phone size={16} className="text-[#C9A84C]" />
              <span>Zadzwoń</span>
            </a>

            {/* Consultation button */}
            <a
              href="#kontakt"
              onClick={handleConsultationClick}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-sm bg-[#C9A84C] text-navy-dark font-heading font-bold text-sm hover:bg-[#e5c158] active:scale-[0.98] shadow-[0_4px_15px_rgba(201,168,76,0.15)] transition-all"
            >
              <Calendar size={16} />
              <span>Konsultacja</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
