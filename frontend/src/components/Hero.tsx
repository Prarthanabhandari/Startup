import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
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
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const childVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 18,
        mass: 0.9
      }
    }
  };

  return (
    <section 
      ref={sectionRef} 
      id="home" 
      className="relative min-h-[calc(100vh-72px)] flex items-center justify-center bg-obsidian pt-6 pb-12 sm:pt-10 sm:pb-16 overflow-hidden border-b border-slate-200/70"
    >
      {/* Soft radial cosmic studio illumination */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.95)_0%,rgba(236,238,239,0.95)_100%)] z-0 pointer-events-none" />
      
      {/* Subtle ambient lighting gradients */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-tr from-indigo-300/20 via-purple-300/20 to-sky-300/15 blur-[120px] pointer-events-none z-0" />
      
      {/* Subtle Grid Accent Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.4] pointer-events-none z-0" />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Heading Copy & CTAs */}
        <div className="lg:col-span-5 text-center lg:text-left">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={introState !== 'fullscreen' ? "visible" : "hidden"}
            className="flex flex-col items-center lg:items-start space-y-6"
          >
            {/* Main Header with High-Contrast Crisp Fashionable Typography */}
            <motion.h1 
              variants={childVariants} 
              className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight font-sans leading-[1.12] text-slate-900"
            >
              Ordinary Was <br />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Never the Vision.
              </span>
            </motion.h1>

            {/* Description - Fashionable, Hungry & Sharp */}
            <motion.p 
              variants={childVariants} 
              className="text-slate-700 text-sm sm:text-base leading-relaxed font-sans max-w-lg font-normal"
            >
              We transform bold ideas into beautifully engineered digital experiences — designed with purpose, built with precision, and made to move businesses forward.
            </motion.p>

            {/* High-Contrast Interactive CTAs */}
            <motion.div 
              variants={childVariants} 
              className="flex flex-col sm:flex-row items-center gap-3.5 pt-2 w-full sm:w-auto"
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-600 hover:brightness-105 active:scale-95 transition-all shadow-lg shadow-indigo-500/25 cursor-pointer clay-button"
              >
                Start Your Project
              </Link>
              <Link
                to="/work"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-wider text-slate-800 hover:text-slate-950 border border-slate-300 hover:border-slate-400 bg-white shadow-xs transition-all clay-card"
              >
                Explore Our Work
              </Link>
            </motion.div>

            {/* Trust Line & Technical Proof Badges */}
            <motion.div variants={childVariants} className="pt-2 space-y-2 text-center lg:text-left">
              <p className="text-xs font-semibold text-slate-600 tracking-wide font-sans">
                Trusted by ambitious founders, startups and growing brands.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-[11px] font-mono text-slate-600 font-bold">
                <span className="flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1 flex-shrink-0" />
                  Bespoke Code
                </span>
                <span className="flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 mr-1 flex-shrink-0" />
                  120 FPS Fluidity
                </span>
                <span className="flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 mr-1 flex-shrink-0" />
                  Enterprise Fullstack
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column: 3D Video Showcase Canvas */}
        <div className="lg:col-span-7 w-full flex justify-center items-center relative z-10">
          <HeroScene3D introState={introState} setIntroState={setIntroState} />
        </div>

      </div>
    </section>
  );
}
