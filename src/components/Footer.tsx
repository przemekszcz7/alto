import React from 'react';
import { Facebook, ArrowUpRight } from 'lucide-react';
import { useHashRoute } from '../hooks/useHashRoute';
import footerLogo from '../assets/images/regenerated_image_1780829676707.png?width=256&format=webp';

const footerLinks = [
  {
    title: 'Usługi',
    links: [
      { name: 'Strony WWW', href: '#uslugi' },
      { name: 'Pozycjonowanie', href: '#uslugi' },
      { name: 'Google Ads', href: '#uslugi' },
      { name: 'Social Media', href: '#uslugi' },
    ]
  },
  {
    title: 'Firma',
    links: [
      { name: 'O nas', href: '/' },
      { name: 'Realizacje', href: '#realizacje' },
      { name: 'Audyt', href: '/audyt' },
      { name: 'Blog', href: '/blog' },
    ]
  },
  {
    title: 'Kontakt',
    links: [
      { name: 'Formularz', href: '#kontakt' },
      { name: 'kontakt@altoagencja.pl', href: 'mailto:kontakt@altoagencja.pl' },
      { name: '661 552 316', href: 'tel:+48661552316' },
      { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61589679144799' },
    ]
  }
];

export default function Footer() {
  const { currentRoute, navigate } = useHashRoute();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')) {
      return;
    }

    e.preventDefault();
    if (href.startsWith('/')) {
      navigate(href as any);
      return;
    }

    // Anchor link (e.g. #realizacje)
    if (currentRoute !== '/') {
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
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-navy-dark border-t border-primary/20 pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
          <div className="lg:col-span-2">
            <a 
              href="/" 
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
              }}
              className="flex items-center mb-8"
              aria-label="Strona główna - Alto"
            >
              <img 
                src={footerLogo} 
                alt="Alto - Kompleksowy marketing dla małych i średnich firm" 
                loading="lazy"
                width="160"
                height="160"
                className="h-36 md:h-40 w-auto object-contain brightness-[1.05] contrast-[1.2] drop-shadow-[0_0_18px_rgba(201,168,76,0.3)] saturate-[1.25] transition-all duration-300 hover:scale-105"
              />
            </a>
            <p className="text-text-muted text-lg max-w-sm mb-10 leading-relaxed">
              Profesjonalny marketing dla lokalnego biznesu. Pomagamy przedsiębiorcom rosnąć w sieci.
            </p>
            <div className="flex gap-6">
              <a 
                href="https://www.facebook.com/profile.php?id=61589679144799" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary transition-all"
                aria-label="Profil agencji Alto w serwisie Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-text-muted hover:text-primary transition-colors flex items-center group cursor-pointer"
                    >
                      {link.name} 
                      {link.href.startsWith('http') || link.href.startsWith('mailto') ? (
                        <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-text-muted text-sm tracking-wide">
          <p>© 2026 Alto Agency. Wszystkie prawa zastrzeżone.</p>
          <div className="flex gap-8">
            <a 
              href="/polityka-prywatnosci" 
              onClick={(e) => {
                e.preventDefault();
                navigate('/polityka-prywatnosci');
              }}
              className="hover:text-white transition-colors cursor-pointer"
              aria-label="Zapoznaj się z Polityką Prywatności"
            >
              Polityka prywatności
            </a>
            <a 
              href="/polityka-cookies" 
              onClick={(e) => {
                e.preventDefault();
                navigate('/polityka-cookies');
              }}
              className="hover:text-white transition-colors cursor-pointer"
              aria-label="Zapoznaj się z Polityką Cookies"
            >
              Polityka cookies
            </a>
            <a 
              href="/regulamin" 
              onClick={(e) => {
                e.preventDefault();
                navigate('/regulamin');
              }}
              className="hover:text-white transition-colors cursor-pointer"
              aria-label="Zapoznaj się z Regulaminem Serwisu"
            >
              Regulamin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
