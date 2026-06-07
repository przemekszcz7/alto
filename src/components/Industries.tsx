import { motion } from 'motion/react';
import { Utensils, Wrench, Home, Flower2, Store, PawPrint, Dumbbell, GraduationCap } from 'lucide-react';

const industries = [
  { name: 'Gastronomia', icon: Utensils, detail: 'restauracje, kawiarnie, bary' },
  { name: 'Warsztaty & Serwisy', icon: Wrench, detail: 'serwis samochodowy, naprawy' },
  { name: 'Usługi domowe & budowlane', icon: Home, detail: 'remonty, sprzątanie, hydraulika' },
  { name: 'Salony urody & zdrowie', icon: Flower2, detail: 'kosmetyka, fryzjer, fizjoterapia' },
  { name: 'Sklepy lokalne & e-commerce', icon: Store, detail: 'butiki, kwiaciarnie, mały e-com' },
  { name: 'Weterynaria & pet usługi', icon: PawPrint, detail: 'kliniki, groomerzy, hotele dla psów' },
  { name: 'Fitness & sport', icon: Dumbbell, detail: 'siłownie, trenerzy, studia jogi' },
  { name: 'Edukacja & usługi prywatne', icon: GraduationCap, detail: 'szkoły językowe, korepetycje, doradztwo' },
];

export default function Industries() {
  return (
    <section className="py-32 bg-navy-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-reveal mb-20 text-center max-w-3xl mx-auto">
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">- DLA KOGO JESTEŚMY</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Jeśli prowadzisz małą firmę - jesteśmy dla Ciebie.</h2>
          <p className="text-xl text-text-muted leading-relaxed">
            Nie obsługujemy korporacji. Skupiamy się na małych firmach, które chcą rosnąć.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, index) => (
            <div 
              key={index} 
              className="section-reveal group bg-navy-light/30 border border-white/5 p-8 rounded-sm hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(201,168,76,0.1)]"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 transition-colors text-primary">
                <ind.icon className="w-6 h-6" />
              </div>
              <h3 className="font-jost text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {ind.name}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {ind.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="section-reveal mt-16 max-w-2xl mx-auto">
          <div className="bg-primary/5 border border-primary/20 rounded-sm p-6 text-center">
            <p className="text-white/80 font-medium">
              Nie widzisz swojej branży? <a href="#kontakt" aria-label="Napisz do nas w sprawie konsultacji marketingowej dla Twojej branży" className="text-primary hover:underline underline-offset-4">Napisz do nas</a> - prawdopodobnie i tak możemy pomóc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
