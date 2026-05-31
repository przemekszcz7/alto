import { Facebook, ArrowUpRight } from 'lucide-react';

const footerLinks = [
  {
    title: 'Usługi',
    links: [
      { name: 'Strony WWW', href: '#uslugi' },
      { name: 'Pozycjonowanie', href: '#uslugi' },
      { name: 'Google Ads', href: '#uslugi' },
      { name: 'Wizytówki Google', href: '#uslugi' },
    ]
  },
  {
    title: 'Firma',
    links: [
      { name: 'O nas', href: '#o-nas' },
      { name: 'Realizacje', href: '#realizacje' },
      { name: 'Kariera', href: '#' },
      { name: 'Blog', href: '#' },
    ]
  },
  {
    title: 'Kontakt',
    links: [
      { name: 'Formularz', href: '#kontakt' },
      { name: 'hello@altoagency.pl', href: 'mailto:hello@altoagency.pl' },
      { name: '+48 555 000 555', href: 'tel:+48555000555' },
      { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61589679144799' },
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-primary/20 pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center mb-8">
              <img 
                src="https://i.postimg.cc/wx0zC3F3/Minimalist-professional-logo-for-a-202605101222-Photoroom.png" 
                alt="Alto Logo" 
                className="h-28 w-auto object-contain"
              />
            </a>
            <p className="text-text-muted text-lg max-w-sm mb-10 leading-relaxed">
              Profesjonalny marketing dla lokalnego biznesu. Pomagamy przedsiębiorcom rosnąć w sieci.
            </p>
            <div className="flex gap-6">
              <a href="https://www.facebook.com/profile.php?id=61589679144799" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary transition-all">
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
                    <a href={link.href} className="text-text-muted hover:text-primary transition-colors flex items-center group">
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
            <a href="#" className="hover:text-white transition-colors">Polityka prywatności</a>
            <a href="#" className="hover:text-white transition-colors">Regulamin</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
