import { motion } from 'motion/react';
import { Eye } from 'lucide-react';
import image1 from '../assets/images/regenerated_image_1780824762703.jpg';
import image2 from '../assets/images/regenerated_image_1780824763985.jpg';
import image3 from '../assets/images/regenerated_image_1780824764645.jpg';

const projects = [
  {
    title: 'Lodziarnia Pniewscy',
    tag: 'Restauracja',
    desc: 'Firmowa strona wizytówkowa zoptymalizowana pod kątem SEO oraz konfiguracja profilu biznesowego Google',
    image: image1
  },
  {
    title: 'Livia Smażalnia i Wędzarnia Ryb',
    tag: 'Gastronomia',
    desc: 'Realizacja profesjonalnej strony internetowej oraz pełna optymalizacja pod pozycjonowanie',
    image: image2
  },
  {
    title: 'Pierogarnia na Kaszczorku',
    tag: 'Restauracja',
    desc: 'Zoptymalizowana strona internetowa z funkcjonalnym systemem zamówień',
    image: image3
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
                  alt={`Realizacja Alto: ${project.title} - ${project.desc} (${project.tag})`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <div className="w-16 h-16 rounded-full bg-primary text-navy-dark flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                      <Eye className="w-6 h-6" />
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
