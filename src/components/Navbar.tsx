import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useHashRoute, getRouteFromPath } from '../hooks/useHashRoute';
import navbarLogo from '../assets/images/regenerated_image_1780829676018.png?width=256&format=webp';
import { createPortal } from 'react-dom';

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

  // Refs to avoid stale closures and enable throttling without re-renders
  const rafRef = useRef<number | null>(null);
  const lastScrollY = useRef(0);
  const isScrolledRef = useRef(false);

  const handleScroll = useCallback(() => {
    // Throttle via requestAnimationFrame – runs at most once per frame (~16ms)
    if (rafRef.current !== null) return;

    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const scrollY = window.scrollY;

      // Only setState when the threshold is actually crossed – avoids render spam
      const shouldBeScrolled = scrollY > 50;
      if (shouldBeScrolled !== isScrolledRef.current) {
        isScrolledRef.current = shouldBeScrolled;
        setIsScrolled(shouldBeScrolled);
      }

      const route = getRouteFromPath();
      if (route !== '/') {
        setActiveSection(route);
      } else if (scrollY < 200) {
        setActiveSection('');
      }

      lastScrollY.current = scrollY;
    });
  }, []);

  // Set body overflow hidden when menu is open to avoid scrolling issues
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('popstate', handleScroll);
    window.addEventListener('hashchange', handleScroll);
    // Call once on init
    handleScroll();

    let observer: IntersectionObserver | null = null;
    const route = getRouteFromPath();
    if (route === '/' && 'IntersectionObserver' in window) {
      const sections = ['uslugi', 'realizacje', 'o-nas', 'kontakt'];
      const observerOptions = {
        root: null,
        rootMargin: '-100px 0px -50% 0px',
        threshold: 0,
      };

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }, observerOptions);

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer?.observe(element);
      });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handleScroll);
      window.removeEventListener('hashchange', handleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      if (observer) observer.disconnect();
    };
  }, [currentRoute, handleScroll]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/')) {
      e.preventDefault();
      navigate(href as any);
      return;
    }

    if (currentRoute !== '/') {
      e.preventDefault();
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(href.substring(1));
        if (element) element.scrollIntoView({ behavior: 'smooth' });
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled && !isMobileMenuOpen ? 'bg-navy-dark/80 backdrop-blur-md py-2 md:py-4 shadow-lg' : 'bg-transparent py-3 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); navigate('/'); }}
          className="flex items-center"
          aria-label="Strona główna - Alto Agencja Marketingowa"
        >
          <img
            src={navbarLogo}
            alt="Alto - Agencja marketingowa, pozycjonowanie, strony internetowe"
            fetchPriority="high"
            width="144"
            height="144"
            className="h-14 sm:h-16 md:h-24 lg:h-28 w-auto object-contain brightness-[1.05] contrast-[1.2] drop-shadow-[0_0_12px_rgba(201,168,76,0.25)] saturate-[1.25] transition-all duration-300 hover:scale-105"
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
          aria-label="Otwórz menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Drawer via Portal to escape any containment context and z-indexing limits */}
      {typeof window !== 'undefined' && createPortal(
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 bg-navy-dark/60 backdrop-blur-sm z-[9990]"
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-navy-light z-[9991] p-10 flex flex-col justify-center"
              >
                <button
                  className="absolute top-8 right-8 text-white hover:text-primary cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Zamknij menu"
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
        </AnimatePresence>,
        document.body
      )}
    </nav>
  );
}