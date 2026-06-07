import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useHashRoute, getRouteFromPath } from '../hooks/useHashRoute';

const links = [
  { name: 'Główna', href: '/' },
  { name: 'Audyt', href: '/audyt' },
  { name: 'Blog', href: '/blog' },
  { name: 'Realizacje', href: '#realizacje' },
  { name: 'Kontakt', href: '#kontakt' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentRoute, navigate } = useHashRoute();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const route = getRouteFromPath();
      if (route === '/') {
        const sections = ['uslugi', 'realizacje', 'o-nas', 'kontakt'];
        let matched = false;
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 120 && rect.bottom >= 120) {
              setActiveSection(section);
              matched = true;
              break;
            }
          }
        }
        if (!matched && window.scrollY < 200) {
          setActiveSection('');
        }
      } else {
        setActiveSection(route);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handleScroll);
    window.addEventListener('hashchange', handleScroll);
    // Call once on init
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handleScroll);
      window.removeEventListener('hashchange', handleScroll);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/')) {
      e.preventDefault();
      navigate(href as any);
      return;
    }
    
    // It's an anchor on the home page (starts with #, e.g. #realizacje)
    if (currentRoute !== '/') {
      e.preventDefault();
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 450);
    } else {
      const element = document.getElementById(href.substring(1));
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(href.substring(1));
      }
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-navy-dark/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a 
          href="/" 
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
          className="flex items-center"
        >
          <img 
            src="https://i.postimg.cc/wx0zC3F3/Minimalist-professional-logo-for-a-202605101222-Photoroom.png" 
            alt="Alto - Agencja marketingowa, pozycjonowanie, strony internetowe" 
            fetchPriority="high"
            className="h-32 md:h-36 w-auto object-contain brightness-[1.65] contrast-[1.2] drop-shadow-[0_0_18px_rgba(201,168,76,0.55)] saturate-[1.25] transition-all duration-300 hover:scale-105"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => {
            const isActive = link.href.startsWith('/') 
              ? currentRoute === link.href
              : activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-medium tracking-widest uppercase transition-colors hover:text-primary ${
                  isActive ? 'text-primary font-semibold' : 'text-white/70'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white hover:text-primary transition-colors cursor-pointer"
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
                className="absolute top-8 right-8 text-white hover:text-primary cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={32} />
              </button>

              <div className="flex flex-col gap-8">
                {links.map((link) => {
                  const isActive = link.href.startsWith('/') 
                    ? currentRoute === link.href
                    : activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        setIsMobileMenuOpen(false);
                        handleLinkClick(e, link.href);
                      }}
                      className={`font-heading text-3xl font-medium transition-colors ${
                        isActive ? 'text-primary' : 'text-white hover:text-primary'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
