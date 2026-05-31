/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Industries from './components/Industries';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import WhyAlto from './components/WhyAlto';
import CTABanner from './components/CTABanner';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import CookieConsent from './components/CookieConsent';
import Loader from './components/Loader';
import { useSectionReveal } from './hooks/useSectionReveal';

export default function App() {
  // Initialize section reveal observer
  useSectionReveal();

  useEffect(() => {
    // Global Ripple Effect Logic
    const handleRipple = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const btn = target.closest('.ripple') as HTMLElement;
      
      if (btn) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        btn.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      }
    };

    window.addEventListener('mousedown', handleRipple);
    return () => window.removeEventListener('mousedown', handleRipple);
  }, []);

  return (
    <div className="relative bg-navy-dark min-h-screen text-white font-body selection:bg-primary selection:text-navy-dark">
      <Loader />
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <PainPoints />
        <WhyAlto />
        <Services />
        <Process />
        <Industries />
        <Portfolio />
        <CTABanner />
        <ContactForm />
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
}
