import { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import { Sparkles, Eye, Compass, Edit3, Terminal, Rocket, Activity } from 'lucide-react';

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeStep, setActiveStep] = useState(0);

  // Smooth scroll progress for line
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const steps = [
    {
      number: '01',
      title: 'Discover',
      description: 'We understand your goals, target audience, and engineering requirements.',
      icon: Eye,
      color: '#60a5fa',
      glow: 'shadow-[0_0_15px_rgba(96,165,250,0.12)]',
    },
    {
      number: '02',
      title: 'Strategize',
      description: 'We plan the systems architecture, schema designs, and user journey workflows.',
      icon: Compass,
      color: '#818cf8',
      glow: 'shadow-[0_0_15px_rgba(129,140,248,0.12)]',
    },
    {
      number: '03',
      title: 'Design',
      description: 'We design beautiful, interactive, glassmorphism layouts and UI/UX systems.',
      icon: Edit3,
      color: '#f472b6',
      glow: 'shadow-[0_0_15px_rgba(244,114,182,0.12)]',
    },
    {
      number: '04',
      title: 'Build',
      description: 'We engineer highly optimized frontend modules and secure backend endpoints.',
      icon: Terminal,
      color: '#fb923c',
      glow: 'shadow-[0_0_15px_rgba(251,146,60,0.12)]',
    },
    {
      number: '05',
      title: 'Launch',
      description: 'We perform end-to-end telemetry audits and safely deploy to staging and production.',
      icon: Rocket,
      color: '#34d399',
      glow: 'shadow-[0_0_15px_rgba(52,211,153,0.12)]',
    },
    {
      number: '06',
      title: 'Scale',
      description: 'We continuously tune performance, add new features, and scale servers capacity.',
      icon: Activity,
      color: '#c084fc',
      glow: 'shadow-[0_0_15px_rgba(192,132,252,0.12)]',
    },
  ];

  // Set active step based on scroll position
  useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
    const idx = Math.min(
      steps.length - 1,
      Math.floor(latest * (steps.length + 0.5))
    );
    setActiveStep(idx);
  });

  return (
    <section ref={containerRef} id="process" className="relative h-[250vh] bg-obsidian">
      
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        {/* Ambient Grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.5] pointer-events-none z-0" />
        
        {/* Soft atmospheric gradient */}
        <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Sticky Headings */}
          <div className="lg:col-span-5 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE CYCLE</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight leading-tight">
              From Idea <br className="hidden lg:block" />
              to <span className="bg-gradient-to-r from-brand-orange to-brand-accent bg-clip-text text-transparent text-glow-indigo">Impact</span>
            </h2>
            
            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm mx-auto lg:mx-0">
              Scroll down to explore how we run our operations from initial analysis to final scale pipelines.
            </p>
            
            {/* Steps Navigation Helper Indicator */}
            <div className="hidden lg:flex flex-col space-y-2.5 pt-4">
              {steps.map((s, i) => (
                <div 
                  key={i} 
                  className={`flex items-center space-x-3 transition-all duration-350 ${
                    i === activeStep ? 'translate-x-2 text-slate-800 font-black' : 'text-slate-400 font-semibold'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    i === activeStep ? 'bg-brand-primary shadow-[0_0_8px_rgba(129,140,248,0.5)]' : 'bg-slate-300'
                  }`} />
                  <span className="text-[10px] font-mono tracking-widest uppercase">{s.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Scroll Timeline Component */}
          <div className="lg:col-span-7 h-[70vh] flex items-center justify-center relative">
            
            {/* Timeline Vertical Axis Line */}
            <div className="absolute left-6 lg:left-1/2 top-[5%] bottom-[5%] w-0.5 bg-slate-200 -translate-x-1/2 hidden sm:block">
              {/* Active filled line */}
              <motion.div 
                style={{ scaleY, originY: 0 }}
                className="absolute inset-x-0 top-0 bottom-0 bg-gradient-to-b from-brand-secondary via-brand-primary to-brand-orange origin-top"
              />
            </div>

            {/* Stages Stack Container */}
            <div className="w-full pl-12 sm:pl-0 sm:h-full relative flex flex-col justify-between py-[2%] space-y-4 sm:space-y-0">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === activeStep;
                
                return (
                  <motion.div
                    key={index}
                    animate={{
                      opacity: isActive ? 1 : 0.45,
                      scale: isActive ? 1.02 : 0.98,
                    }}
                    transition={{ duration: 0.35 }}
                    className={`flex items-center w-full relative sm:odd:flex-row-reverse`}
                  >
                    {/* Node Dot on Timeline */}
                    <div className="absolute -left-[54px] sm:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 hidden sm:block">
                      <motion.div
                        animate={{
                          borderColor: isActive ? step.color : '#cbd5e1',
                          backgroundColor: isActive ? '#ffffff' : '#e2e8f0',
                          scale: isActive ? 1.3 : 1
                        }}
                        className="w-5 h-5 rounded-full border-2 bg-slate-100 flex items-center justify-center shadow-lg transition-all duration-300"
                      >
                        {isActive && (
                          <div 
                            className="w-1.5 h-1.5 rounded-full" 
                            style={{ 
                              backgroundColor: step.color,
                              boxShadow: `0 0 8px ${step.color}`
                            }} 
                          />
                        )}
                      </motion.div>
                    </div>

                    {/* Step Card Layout */}
                    <div className="w-full sm:w-[45%] text-left">
                      <div 
                        className={`p-5 rounded-2xl clay-card border ${
                          isActive ? 'border-slate-205' : 'border-slate-100'
                        } ${isActive ? step.glow : ''} transition-all duration-300`}
                      >
                        <div className="flex items-center space-x-3 mb-2">
                          <div 
                            className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200/40 shadow-inner"
                            style={{ color: step.color, backgroundColor: `${step.color}10` }}
                          >
                            <Icon className="w-4.5 h-4.5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-black font-mono tracking-widest text-slate-400">{step.number} / STAGE</span>
                            <h3 className="text-sm font-black text-slate-800 font-mono tracking-wide">{step.title}</h3>
                          </div>
                        </div>
                        
                        <p className="text-slate-600 text-xs leading-relaxed font-semibold">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
