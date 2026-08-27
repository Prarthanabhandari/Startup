import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu } from 'lucide-react';
import HeroScene3D from './HeroScene3D';

interface HeroProps {
  introState?: 'fullscreen' | 'transitioning' | 'completed';
  setIntroState?: (state: 'fullscreen' | 'transitioning' | 'completed') => void;
}

export default function Hero({ introState = 'completed', setIntroState }: HeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.28,
        delayChildren: 0.3,
      }
    }
  };

  const childVariants = {
    hidden: { 
      opacity: 0, 
      x: -50 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 70,
        damping: 16,
        mass: 1
      }
    }
  };


  // Track scroll progress of the hero section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Text animations: fade out and slide up as the user scrolls 30% of the section
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -30]);
  const textScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.96]);



  return (
    <section ref={sectionRef} id="home" className="relative h-[200vh] bg-obsidian">
      
      {/* Sticky Full Screen Viewport Wrapper */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-obsidian">
        
        {/* Soft radial cosmic glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.5)_0%,rgba(236,238,239,1)_100%)] z-0" />
        
        {/* Premium subtle blurred color glow behind the canvas (nebula effect) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-tr from-brand-primary/15 via-brand-secondary/15 to-brand-accent/5 blur-[140px] pointer-events-none z-0" />
        
        {/* Space tech grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.5] pointer-events-none z-0" />

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading Copy & CTAs */}
          <motion.div
            style={{ 
              opacity: textOpacity, 
              y: textY,
              scale: textScale,
              pointerEvents: useTransform(scrollYProgress, (v) => v > 0.28 ? 'none' : 'auto') as any
            }}
            className="lg:col-span-5 text-center lg:text-left"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={introState !== 'fullscreen' ? "visible" : "hidden"}
              className="flex flex-col items-center lg:items-start space-y-6"
            >
              {/* Badge */}
              <motion.div variants={childVariants}>
                <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] tracking-[0.2em] uppercase font-mono font-bold shadow-sm shadow-brand-primary/5">
                  <Cpu className="w-3.5 h-3.5 mr-1" />
                  <span>We combine creativity, technology & strategy</span>
                </div>
              </motion.div>

              {/* Main Header */}
              <motion.h1 variants={childVariants} className="text-4xl sm:text-5xl lg:text-[46px] font-black tracking-tight font-sans leading-[1.2] text-slate-800">
                We Build <br />
                <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-orange bg-clip-text text-transparent text-glow-indigo">
                  Digital Experiences
                </span> <br />
                That Explode With Possibility.
              </motion.h1>

              {/* Description */}
              <motion.p variants={childVariants} className="text-slate-600 text-sm leading-relaxed font-sans max-w-lg">
                VOXOR LAB creates premium websites, AI applications and digital products for ambitious brands ready to grow beyond ordinary.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={childVariants} className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-brand-primary via-luminous-violet to-brand-secondary hover:brightness-105 active:scale-95 transition-all shadow-md shadow-brand-primary/20 cursor-pointer clay-button"
                >
                  Start Your Project
                </a>
                <a
                  href="#work"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-wider text-slate-700 hover:text-slate-900 border border-slate-200/80 hover:border-slate-300 bg-white/60 shadow-sm transition-all group clay-card"
                >
                  Explore Our Work
                </a>
              </motion.div>

              {/* Trust Line */}
              <motion.p variants={childVariants} className="text-[11px] font-semibold text-slate-400 tracking-wide font-sans pt-2">
                Trusted by ambitious founders, startups and growing brands.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right Column: Sticky Canvas */}
          <div className="lg:col-span-7 w-full flex justify-center items-center relative z-10">
            <HeroScene3D scrollYProgress={scrollYProgress} introState={introState} setIntroState={setIntroState} />
          </div>

        </div>

        {/* Ambient coordinate markers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={introState !== 'fullscreen' ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ 
            type: "spring",
            stiffness: 60,
            damping: 15,
            mass: 1,
            delay: 0.25
          }}
          className="absolute bottom-6 left-6 text-[9px] font-mono text-slate-500 hidden md:block"
        >
          <p>SYS.LOC: [COSMIC.ENGINE]</p>
          <p>FOUNDER: P. BHANDARI</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={introState !== 'fullscreen' ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ 
            type: "spring",
            stiffness: 60,
            damping: 15,
            mass: 1,
            delay: 0.25
          }}
          className="absolute bottom-6 right-6 text-[9px] font-mono text-slate-500 hidden md:block"
        >
          <p>ENGINE: OCTANE RENDER / CINEMA 4D</p>
          <p>THEME: VOXOR LAB / DARK GALAXY / GLOW</p>
        </motion.div>

        {/* Scroll Helper Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={introState !== 'fullscreen' ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ 
            type: "spring",
            stiffness: 60,
            damping: 15,
            mass: 1,
            delay: 0.35
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
        >
          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]) }}
            className="flex flex-col items-center space-y-2 select-none"
          >
            <span className="text-[9px] font-black font-mono text-slate-400 uppercase tracking-[0.2em]">
              Scroll to explore
            </span>
            <div className="w-5 h-9 border-2 border-slate-700 rounded-full flex justify-center p-1">
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-1 rounded-full bg-slate-500 block"
              />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
