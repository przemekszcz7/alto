export default function CTABanner() {
  return (
    <section className="py-32 bg-navy-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative group overflow-hidden rounded-sm p-12 md:p-24 text-center">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-navy-light z-0" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 z-0 animate-pulse" />
          
          <div className="relative z-10 max-w-3xl mx-auto section-reveal">
            <h2 className="text-4xl md:text-7xl font-bold mb-8 italic">Odzyskaj swój czas.</h2>
            <p className="text-xl md:text-2xl text-text-muted mb-12">
              Ty zajmij się tym, co robisz najlepiej - <span className="text-white">my zadbamy o to, żeby świat się o tym dowiedział.</span>
            </p>
            <a href="#kontakt" className="btn-primary text-xl inline-flex items-center gap-3 ripple">
              Darmowa konsultacja <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          {/* Decorative shapes */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-primary/20 rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 border-2 border-primary/10 rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
        </div>
      </div>
    </section>
  );
}
