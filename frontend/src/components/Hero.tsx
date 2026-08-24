import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu } from 'lucide-react';
import HeroScene3D from './HeroScene3D';

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect screen size to keep mobile centering clean
  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  // Track scroll progress of the hero section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Text animations: fade out and slide up as the user scrolls 30% of the section
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -30]);
  const textScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.96]);

  // Canvas animations: translate from right side to absolute center and zoom slightly
  const canvasX = useTransform(scrollYProgress, [0, 0.35], [isDesktop ? "18%" : "0%", "0%"]);
  const canvasScale = useTransform(scrollYProgress, [0, 0.35], [0.95, 1.05]);

  return (
    <section ref={sectionRef} id="home" className="relative h-[200vh] bg-obsidian">
      
      {/* Sticky Full Screen Viewport Wrapper */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-obsidian">
        
        {/* Soft radial cosmic glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.85)_0%,rgba(248,250,252,1)_100%)] z-0" />
        
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
            className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start space-y-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] tracking-[0.2em] uppercase font-mono font-bold shadow-sm shadow-brand-primary/5">
              <Cpu className="w-3.5 h-3.5 mr-1" />
              <span>We combine creativity, technology & strategy</span>
            </div>

            {/* Main Header */}
            <h1 className="text-4xl sm:text-5xl lg:text-[46px] font-black tracking-tight font-sans leading-[1.2] text-slate-800">
              We Build <br />
              <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-orange bg-clip-text text-transparent text-glow-indigo">
                Digital Experiences
              </span> <br />
              That Explode With Possibility.
            </h1>

            {/* Description */}
            <p className="text-slate-600 text-sm leading-relaxed font-sans max-w-lg">
              VOXOR LAB creates premium websites, AI applications and digital products for ambitious brands ready to grow beyond ordinary.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
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
            </div>

            {/* Trust Line */}
            <p className="text-[11px] font-semibold text-slate-400 tracking-wide font-sans pt-2">
              Trusted by ambitious founders, startups and growing brands.
            </p>
          </motion.div>

          {/* Right Column: Sticky Canvas */}
          <motion.div
            style={{ 
              x: canvasX,
              scale: canvasScale
            }}
            className="lg:col-span-7 w-full flex justify-center items-center relative z-10"
          >
            <HeroScene3D scrollYProgress={scrollYProgress} />
          </motion.div>

        </div>

        {/* Ambient coordinate markers */}
        <div className="absolute bottom-6 left-6 text-[9px] font-mono text-slate-500 hidden md:block">
          <p>SYS.LOC: [COSMIC.ENGINE]</p>
          <p>FOUNDER: P. BHANDARI</p>
        </div>
        <div className="absolute bottom-6 right-6 text-[9px] font-mono text-slate-500 hidden md:block">
          <p>ENGINE: OCTANE RENDER / CINEMA 4D</p>
          <p>THEME: VOXOR LAB / DARK GALAXY / GLOW</p>
        </div>

        {/* Scroll Helper Badge */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]) }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 pointer-events-none select-none z-20"
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

      </div>
    </section>
  );
}
