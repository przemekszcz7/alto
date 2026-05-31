import { motion } from 'motion/react';

const projects = [
  {
    title: 'Lodziarnia Pniewscy',
    tag: 'Restauracja',
    desc: 'Firmowa strona wizytówkowa zoptymalizowana pod kątem SEO oraz konfiguracja profilu biznesowego Google',
    image: 'https://i.postimg.cc/hGFr589W/685659213-2103592466874585-1761474633290333477-n-(1).jpg'
  },
  {
    title: 'Livia Smażalnia i Wędzarnia Ryb',
    tag: 'Gastronomia',
    desc: 'Realizacja profesjonalnej strony internetowej oraz pełna optymalizacja pod pozycjonowanie',
    image: 'https://i.postimg.cc/ncG9J4bv/508156858-122117670044871736-1851839567212551033-n-(1).jpg'
  },
  {
    title: 'Pierogarnia na Kaszczorku',
    tag: 'Restauracja',
    desc: 'Zoptymalizowana strona internetowa z funkcjonalnym systemem zamówień',
    image: 'https://i.postimg.cc/YqRVmPKn/634590953-1372913424633570-4713326395411747181-n.jpg'
  }
];

export default function Portfolio() {
  return (
    <section id="realizacje" className="py-32 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h4 className="text-primary font-body font-semibold tracking-widest uppercase text-sm mb-4 section-reveal">Nasze portfolio</h4>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight section-reveal">Projekty, które <span className="text-primary italic">robią wrażenie</span></h2>
          <p className="text-text-muted mt-6 text-lg section-reveal">
            Każda branża ma swoją specyfikę. My wiemy, jak sprawić, by Twoja firma wyróżniła się na tle konkurencji.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="section-reveal flex flex-col">
              <div className="relative aspect-video overflow-hidden rounded-sm group bg-navy-light shadow-2xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <div className="w-16 h-16 rounded-full bg-primary text-navy-dark flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                      <i className="fa-solid fa-eye text-2xl"></i>
                   </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col items-start">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-sm mb-4">
                  {project.tag}
                </span>
                <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                <p className="text-text-muted text-lg leading-relaxed">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
