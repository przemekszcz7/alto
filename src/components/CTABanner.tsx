import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-24 bg-navy-light relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Minimalist, solid board layout */}
        <div className="relative group border border-white/15 bg-navy-dark/40 p-12 md:p-20 rounded-sm">
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <span className="text-[#C9A84C] font-mono text-xs uppercase tracking-widest font-semibold block mb-6">
              / Twój marketing może pracować poprawnie
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-semibold mb-8 text-white leading-tight">
              Odzyskaj swój czas.<br />
              <span className="italic font-normal text-[#C9A84C]">My zajmiemy się resztą.</span>
            </h2>
            <p className="text-[#5C6B84] text-lg md:text-xl font-light font-body max-w-2xl mx-auto mb-12 leading-relaxed">
              Ty zajmij się tym, co robisz najlepiej — świadczeniem usług i budowaniem zespołu. My weźmiemy pełną, codzienną odpowiedzialność za to, by świat dowiedział się o Twojej firmie.
            </p>
            
            <a href="#kontakt" className="btn-primary text-lg inline-flex items-center gap-3 ripple">
              Ustal termin darmowej konsultacji <ArrowRight size={18} />
            </a>
          </div>

          {/* Solid premium branding indicator in background */}
          <div className="absolute right-4 bottom-4 font-heading text-8xl font-black text-white/[0.02] select-none leading-none pointer-events-none">
            ALTO
          </div>
        </div>

      </div>
    </section>
  );
}
