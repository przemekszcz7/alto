import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useHashRoute } from '../hooks/useHashRoute';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const { navigate } = useHashRoute();

  useEffect(() => {
    const consent = localStorage.getItem('alto-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('alto-cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 w-full z-[100] p-6 lg:p-10 pointer-events-none"
        >
          <div className="max-w-screen-xl mx-auto pointer-events-auto">
             <div className="bg-navy-light/95 backdrop-blur-xl border border-white/10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl rounded-sm">
                <p className="text-text-muted text-sm md:text-base max-w-2xl text-center md:text-left">
                  Używamy plików cookie, aby zapewnić najlepsze doświadczenia na naszej stronie. 
                  Korzystając ze strony, zgadzasz się na naszą politykę prywatności.
                </p>
                <div className="flex items-center gap-4 w-full md:w-auto">
                   <button 
                    onClick={handleAccept}
                    className="flex-1 md:flex-none btn-primary py-3 px-8 text-sm"
                    aria-label="Akceptuję wszystkie pliki cookie"
                   >
                     Akceptuję
                   </button>
                   <button 
                    onClick={() => navigate('/polityka-cookies')}
                    className="flex-1 md:flex-none btn-outline py-3 px-8 text-sm border-white/20 text-white hover:bg-white hover:text-navy-dark"
                    aria-label="Dowiedz się więcej o polityce plików cookie"
                   >
                     Więcej info
                   </button>
                </div>
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
