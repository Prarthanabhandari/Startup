import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, MessageSquare } from 'lucide-react';

interface Testimonial {
  name: string;
  designation: string;
  company: string;
  copy: string;
  image: string;
  category: string;
}

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: 'Marcus Thorne',
      designation: 'VP of Product Eng',
      company: 'Aether Cloud Systems',
      copy: 'VOXOR LAB engineered our multi-region Kubernetes console. Their deep technical expertise in WebAssembly APIs and high-performance React architectures was stellar.',
      category: 'SaaS Platform',
      image: 'https://api.dicebear.com/7.x/clay/svg?seed=Marcus',
    },
    {
      name: 'Elena Rostova',
      designation: 'Director of UX',
      company: 'Mirage Luxury Watches',
      copy: 'The 3D WebGL catalog designed by VOXOR LAB transformed our digital checkout funnel. Order values went up by 45%, and the spatial UI layout is a masterclass in aesthetics.',
      category: 'Luxury Brand Web',
      image: 'https://api.dicebear.com/7.x/clay/svg?seed=Elena',
    },
    {
      name: 'Siddharth Mehta',
      designation: 'Co-Founder & CEO',
      company: 'Zenith Ledger Inc',
      copy: 'Building a low-latency financial clearing dashboard is no easy feat. VOXOR LAB delivered a Rust-driven WebGL solution that clears transaction telemetry in under 0.8s.',
      category: 'Fintech Dashboard',
      image: 'https://api.dicebear.com/7.x/clay/svg?seed=Siddharth',
    },
  ];

  useEffect(() => {
    const calcConstraints = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const scrollWidth = containerRef.current.scrollWidth;
      setDragConstraints({
        left: -(scrollWidth - containerWidth),
        right: 0
      });
    };
    calcConstraints();
    window.addEventListener('resize', calcConstraints);
    return () => window.removeEventListener('resize', calcConstraints);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-obsidian border-b border-white/5 relative overflow-hidden">
      <div className="absolute top-[30%] right-[10%] w-[350px] h-[350px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="max-w-2xl mx-auto text-center mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-luminous-violet/10 border border-luminous-violet/20 text-luminous-violet text-xs font-semibold font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>ENDORSEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight leading-tight">
            What Our <span className="bg-gradient-to-r from-luminous-violet to-brand-accent bg-clip-text text-transparent text-glow-indigo">Clients Say</span>
          </h2>
          <p className="text-slate-500 text-sm font-medium">
            Read references from founders and design leads who built their core products with us.
          </p>
        </div>

        <div className="relative" data-cursor="drag">
          <div 
            ref={containerRef}
            className="overflow-hidden cursor-grab active:cursor-grabbing w-full"
          >
            <motion.div
              drag="x"
              dragConstraints={dragConstraints}
              className="flex space-x-6 w-max py-4 px-1"
            >
              {testimonials.map((t, idx) => (
                <div 
                  key={idx}
                  className="w-[300px] sm:w-[420px] p-6 sm:p-8 clay-card rounded-[28px] border border-slate-200/50 flex flex-col justify-between space-y-6 relative shadow-xl hover:border-brand-primary/20 transition-all duration-300 bg-white"
                >
                  <Quote className="absolute top-6 right-8 w-10 h-10 text-slate-900/5" />
                  
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                    ))}
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-left font-semibold">
                    "{t.copy}"
                  </p>

                  <div className="flex items-center space-x-4 border-t border-slate-100 pt-4 text-left">
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="w-12 h-12 rounded-full border border-slate-200/40 object-cover bg-slate-100" 
                    />
                    <div>
                      <h4 className="text-sm font-black text-slate-800 font-sans">{t.name}</h4>
                      <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                        {t.designation}, <span className="text-slate-600 font-bold">{t.company}</span>
                      </p>
                    </div>
                    
                    <span className="ml-auto text-[8px] font-black tracking-widest text-luminous-violet bg-luminous-violet/10 border border-luminous-violet/20 px-2 py-0.5 rounded font-mono uppercase">
                      {t.category}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === activeIndex ? 'w-6 bg-luminous-violet' : 'bg-slate-800'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
