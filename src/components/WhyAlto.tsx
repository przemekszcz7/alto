import { motion } from 'motion/react';
import { Laptop, Megaphone, Share2, Search, Zap } from 'lucide-react';

const HubDiagram = () => {
  const nodes = [
    { label: 'Strona WWW', icon: Laptop, x: 200, y: 50 },
    { label: 'Reklamy', icon: Megaphone, x: 350, y: 150 },
    { label: 'Social Media', icon: Share2, x: 300, y: 300 },
    { label: 'Audyt', icon: Search, x: 100, y: 300 },
    { label: 'Automatyzacje', icon: Zap, x: 50, y: 150 },
  ];

  return (
    <div className="relative w-full max-w-[500px] aspect-square mx-auto my-20">
      <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
        {/* Lines with gold pulse */}
        {nodes.map((node, i) => (
          <g key={`line-${i}`}>
            <line
              x1="200"
              y1="200"
              x2={node.x}
              y2={node.y}
              className="stroke-white/10"
              strokeWidth="1"
            />
            <motion.line
              x1="200"
              y1="200"
              x2={node.x}
              y2={node.y}
              stroke="#D4AF37"
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ strokeDashoffset: 0, opacity: 0 }}
              animate={{ 
                strokeDashoffset: -20,
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2, 
                ease: "linear",
                delay: i * 0.4
              }}
            />
          </g>
        ))}

        {/* Central Node */}
        <g className="filter drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
          <circle cx="200" cy="200" r="45" className="fill-navy-dark stroke-primary" strokeWidth="2" />
          <text 
            x="200" 
            y="208" 
            textAnchor="middle" 
            className="fill-primary font-black text-xl tracking-tighter"
          >
            ALTO
          </text>
        </g>

        {/* Outer Nodes */}
        {nodes.map((node, i) => (
          <motion.g 
            key={`node-${i}`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2 + i * 0.1, type: 'spring' }}
          >
            <circle cx={node.x} cy={node.y} r="30" className="fill-navy-light stroke-white/20" strokeWidth="1" />
            <foreignObject x={node.x - 15} y={node.y - 15} width="30" height="30">
              <div className="w-full h-full flex items-center justify-center text-white/60">
                <node.icon className="w-5 h-5" />
              </div>
            </foreignObject>
            <text 
              x={node.x} 
              y={node.y + 45} 
              textAnchor="middle" 
              className="fill-text-muted text-[10px] font-bold uppercase tracking-widest"
            >
              {node.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
};

export default function WhyAlto() {
  return (
    <section className="py-32 bg-navy-light/40 relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-reveal mb-12 text-center max-w-3xl mx-auto">
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">- NASZE ROZWIĄZANIE</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Jeden partner. Cały marketing. Zero chaosu.</h2>
        </div>

        <HubDiagram />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
          <div className="section-reveal flex flex-col items-center text-center">
            <div className="mb-6 text-3xl">🛡️</div>
            <h3 className="text-2xl font-bold mb-4">Jeden opiekun</h3>
            <p className="text-text-muted leading-relaxed">
              Jedna osoba zna Twój biznes od A do Z. Nie tłumaczysz wszystkiego od nowa za każdym razem.
            </p>
          </div>
          
          <div className="section-reveal flex flex-col items-center text-center">
            <div className="mb-6 text-3xl">📋</div>
            <h3 className="text-2xl font-bold mb-4">Jeden rachunek</h3>
            <p className="text-text-muted leading-relaxed">
              Koniec z fakturami od 5 różnych firm. Wszystko w jednym miejscu, jedna płatność miesięcznie.
            </p>
          </div>

          <div className="section-reveal flex flex-col items-center text-center">
            <div className="mb-6 text-3xl">📊</div>
            <h3 className="text-2xl font-bold mb-4">Pełna przejrzystość</h3>
            <p className="text-text-muted leading-relaxed">
              Miesięczny raport w prostym języku. Zawsze wiesz co robimy i jakie są efekty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
