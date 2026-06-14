import { Eye } from 'lucide-react';
import image1 from '../assets/images/regenerated_image_1780824762703.jpg';
import image2 from '../assets/images/regenerated_image_1780824763985.jpg';
import image3 from '../assets/images/regenerated_image_1780824764645.jpg';

const projects = [
  {
    title: 'Lodziarnia Pniewscy',
    tag: 'Wizerunek marki & SEO',
    desc: 'Zaprojektowanie rzemieślniczej strony www, kompletna optymalizacja SEO oraz konfiguracja lokalnej widoczności w wyszukiwarkach skutkująca stałym napływem klientów.',
    image: image1,
    align: 'left'
  },
  {
    title: 'Livia Smażalnia Ryb',
    tag: 'Strona WWW & Lokalne Reklamy',
    desc: 'Wizerunkowa witryna restauracji połączona z precyzyjną kampanią lokalną Google Maps docierającą do turystów i mieszkańców w czasie rzeczywistym.',
    image: image2,
    align: 'right'
  },
  {
    title: 'Pierogarnia na Kaszczorku',
    tag: 'System Zamówień Online & Social',
    desc: 'Pełne wdrożenie dedykowanego systemu zamówień bezpośrednich przełamującego monopol drogich platform kurierskich, połączone z opieką marketingową.',
    image: image3,
    align: 'full'
  }
];

export default function Portfolio() {
  return (
    <section id="realizacje" className="py-24 bg-navy-dark text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Column */}
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <span className="text-[#C9A84C] font-mono text-xs uppercase tracking-widest font-semibold block mb-4">
            / Wybrane realizacje
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-semibold leading-tight">
            Projekty z krwi i kości, <br />
            <span className="italic font-normal text-[#C9A84C]">które pracują na siebie.</span>
          </h2>
          <p className="text-text-muted mt-6 text-lg font-light leading-relaxed font-body">
            Wdrażane witryny nie są martwymi stronami do szuflady. Każdy zrealizowany projekt ma jeden cel: dostarczać realną liczbę klientów i budować lokalną reputację Twojego biznesu.
          </p>
        </div>

        {/* Asymmetrical staggered project display */}
        <div className="space-y-32">
          {projects.map((project, index) => {
            if (project.align === 'full') {
              // Full-bleed breakthrough layout
              return (
                <div key={index} className="flex flex-col gap-8">
                  {/* Decorative line separator */}
                  <div className="w-full h-[1px] bg-white/10 mb-8" />
                  
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-4">
                      <span className="inline-block px-3 py-1 border border-[#C9A84C]/30 text-[#C9A84C] text-[10px] font-bold uppercase tracking-widest rounded-sm mb-4">
                        {project.tag}
                      </span>
                      <h3 className="text-4xl font-heading font-medium mb-4">{project.title}</h3>
                      <p className="text-text-muted text-base font-light leading-relaxed font-body">
                        {project.desc}
                      </p>
                    </div>

                    <div className="lg:col-span-8">
                      <div className="relative aspect-[21/9] overflow-hidden rounded-sm group bg-navy-light shadow-2xl">
                        <img 
                          src={project.image} 
                          alt={`Realizacja Alto: ${project.title}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[#C9A84C]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                           <div className="w-12 h-12 rounded-full bg-[#C9A84C] text-white flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                              <Eye className="w-5 h-5 text-navy-dark" />
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center`}
              >
                {/* Image Column */}
                <div className={`lg:col-span-7 ${project.align === 'right' ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-video overflow-hidden rounded-sm group bg-navy-light shadow-2xl">
                    <img 
                      src={project.image} 
                      alt={`Realizacja Alto: ${project.title}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#C9A84C]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                       <div className="w-12 h-12 rounded-full bg-[#C9A84C] text-white flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                          <Eye className="w-5 h-5 text-navy-dark" />
                       </div>
                    </div>
                  </div>
                </div>

                {/* Text Column */}
                <div className="lg:col-span-5">
                  <span className="inline-block px-3 py-1 border border-[#C9A84C]/30 text-[#C9A84C] text-[10px] font-bold uppercase tracking-widest rounded-sm mb-4">
                    {project.tag}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-heading font-medium mb-4 text-white">
                    {project.title}
                  </h3>
                  <p className="text-[#5C6B84] text-base md:text-md font-light leading-relaxed font-body">
                    {project.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
