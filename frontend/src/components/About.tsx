import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { User, Code2, Database, Terminal } from 'lucide-react';

interface StatCounterProps {
  value: string;
  suffix: string;
  duration?: number;
}

function StatCounter({ value, suffix, duration = 1.2 }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    
    // Extract number from value
    const target = parseInt(value.replace(/\D/g, ''), 10);
    if (isNaN(target)) return;

    let start = 0;
    const stepTime = Math.max(Math.floor((duration * 1000) / target), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(target / 80); // increment steps to keep it smooth
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  const stats = [
    { label: 'Digital Products Launched', value: '50', suffix: '+' },
    { label: 'Global Markets Covered', value: '12', suffix: '' },
    { label: 'Client Satisfaction Index', value: '98', suffix: '%' },
    { label: 'Combined Experience', value: '8', suffix: 'k+ hrs' },
  ];

  const techCategories = [
    {
      title: 'Design & UI/UX',
      icon: Code2,
      techs: ['Figma', '3D Modeling', 'Webflow', 'TailwindCSS', 'Framer Motion'],
    },
    {
      title: 'Core Development',
      icon: Terminal,
      techs: ['React', 'TypeScript', 'Node.js', 'Express', 'Python', 'Three.js'],
    },
    {
      title: 'Data & Scale',
      icon: Database,
      techs: ['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS Cloud'],
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-obsidian border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* About Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-luminous-violet/10 border border-luminous-violet/20 text-luminous-violet text-xs font-semibold font-mono">
              <User className="w-3.5 h-3.5" />
              <span>THE STUDIO</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-850 leading-tight">
              Small Team.<br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-luminous-violet via-pink-500 to-brand-orange bg-clip-text text-transparent text-glow-violet">
                Massive Impact.
              </span>
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              VOXOR LAB brings together strategy, design, technology and AI to create digital products that move businesses forward. We work closely with a limited number of clients so every project receives serious attention.
            </p>
            <p className="text-slate-450 text-xs sm:text-sm leading-relaxed font-semibold">
              We operate as a high-end, developer-led collective. By cutting out accounts bureaucracy, we focus 100% of our energy on high-performance code, custom animations, and spatial digital design.
            </p>
          </div>

          {/* Right Stats Column */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="p-6 clay-card flex flex-col justify-center items-center text-center shadow-xl hover:border-luminous-violet/20 transition-all duration-300 group"
              >
                <div className="text-3xl sm:text-4xl font-mono font-black text-slate-800 group-hover:text-luminous-violet transition-colors">
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[10px] font-bold text-slate-400 tracking-wider uppercase font-mono mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Tech Stack Sub-section */}
        <div className="space-y-10">
          <h3 className="text-sm font-black text-slate-400 uppercase font-mono tracking-[0.25em] text-center">
            VOXOR LAB Stack Capabilities
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {techCategories.map((category, index) => (
              <motion.div
                key={index}
                className="p-6 clay-card flex flex-col items-center text-center space-y-4 hover:border-brand-primary/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary shadow-inner">
                  <category.icon className="w-5.5 h-5.5" />
                </div>
                <h4 className="text-xs font-black text-slate-800 font-mono tracking-wider uppercase">{category.title}</h4>
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {category.techs.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 bg-slate-100 text-[10px] text-slate-650 rounded-lg font-mono border border-slate-200/50 hover:bg-slate-200/50 hover:text-slate-800 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
