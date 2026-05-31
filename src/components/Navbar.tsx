import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const links = [
  { name: 'Usługi', href: '#uslugi' },
  { name: 'Realizacje', href: '#realizacje' },
  { name: 'Jak działamy', href: '#o-nas' },
  { name: 'Kontakt', href: '#kontakt' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['uslugi', 'realizacje', 'o-nas', 'kontakt'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-navy-dark/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img 
            src="https://i.postimg.cc/wx0zC3F3/Minimalist-professional-logo-for-a-202605101222-Photoroom.png" 
            alt="Alto - Agencja marketingowa, pozycjonowanie, strony internetowe" 
            className="h-32 md:h-36 w-auto object-contain brightness-[1.65] contrast-[1.2] drop-shadow-[0_0_18px_rgba(201,168,76,0.55)] saturate-[1.25] transition-all duration-300 hover:scale-105"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-widest uppercase transition-colors hover:text-primary ${
                activeSection === link.href.substring(1) ? 'text-primary' : 'text-white/70'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-navy-dark/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-navy-light z-[70] p-10 flex flex-col justify-center"
            >
              <button 
                className="absolute top-8 right-8 text-white hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={32} />
              </button>

              <div className="flex flex-col gap-8">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-heading text-3xl font-medium text-white hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
