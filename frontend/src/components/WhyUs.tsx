import { motion } from 'framer-motion';
import { Palette, Code2, Target, PackageOpen } from 'lucide-react';

export default function WhyUs() {
  const cards = [
    {
      title: 'CREATIVITY',
      description: 'Unique designs that connect, inspire and break the noise.',
      icon: Palette,
      color: 'bg-violet-950/30 text-luminous-violet border-luminous-violet/20 group-hover:border-luminous-violet/40',
      iconColor: '#a855f7',
      glow: 'shadow-glow-violet',
    },
    {
      title: 'CODE',
      description: 'Clean, efficient, secure and highly scalable deployment.',
      icon: Code2,
      color: 'bg-cyan-950/30 text-electric-cyan border-electric-cyan/20 group-hover:border-electric-cyan/40',
      iconColor: '#22d3ee',
      glow: 'shadow-glow-cyan',
    },
    {
      title: 'STRATEGY',
      description: 'Data-driven planning focused on tangible growth metrics.',
      icon: Target,
      color: 'bg-orange-950/30 text-brand-orange border-brand-orange/20 group-hover:border-brand-orange/40',
      iconColor: '#ea580c',
      glow: 'shadow-[0_0_15px_rgba(234,88,12,0.15)]',
    },
    {
      title: 'DIGITAL PRODUCT',
      description: 'Immersive digital products built to scale effortlessly.',
      icon: PackageOpen,
      color: 'bg-rose-950/30 text-brand-accent border-brand-accent/20 group-hover:border-brand-accent/40',
      iconColor: '#f43f5e',
      glow: 'shadow-[0_0_15px_rgba(244,63,94,0.15)]',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-obsidian border-b border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 font-mono block">
            THE METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            We Combine <br />
            <span className="bg-gradient-to-r from-electric-cyan via-brand-primary to-brand-orange bg-clip-text text-transparent text-glow-cyan">
              Creativity, Code & Strategy
            </span>
          </h2>
          <p className="text-slate-400 text-sm font-medium">
            The mathematical formula for building digital systems that stand out.
          </p>
        </div>

        {/* Row Layout with math operators */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-2">
          
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="flex flex-col lg:flex-row items-center w-full lg:w-auto flex-1 justify-center">
                
                {/* Card Container */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className={`w-full sm:w-[260px] h-[300px] p-6 glass rounded-3xl flex flex-col items-center text-center justify-between hover:border-slate-700 transition-all duration-300 relative group ${card.glow}`}
                >
                  <div className="flex flex-col items-center space-y-5 flex-1 justify-center">
                    {/* Circle Icon Base */}
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 ${card.color} transition-transform duration-500 group-hover:scale-105 shadow-lg`}>
                      <Icon className="w-8 h-8" style={{ color: card.iconColor }} />
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-xs font-black tracking-[0.2em] text-white uppercase font-mono">
                        {card.title}
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed px-1">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Operator Symbol (Plus or Equals) */}
                {index < cards.length - 1 && (
                  <div className="my-6 lg:my-0 lg:mx-4 flex items-center justify-center">
                    <span className="text-2xl font-black text-slate-700 font-mono select-none">
                      {index === cards.length - 2 ? '=' : '+'}
                    </span>
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
