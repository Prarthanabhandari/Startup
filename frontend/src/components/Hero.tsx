import { motion } from 'framer-motion';
import { ChevronRight, Sparkles, Terminal, Rocket } from 'lucide-react';
import Scene3D from './Scene3D';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="home" className="relative min-h-screen pt-20 flex items-center bg-grid-pattern">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[130px] transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <motion.div
            className="lg:col-span-5 text-center lg:text-left space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span>NEXT GENERATION WEB SOLUTIONS</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
            >
              We Build{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent text-glow-blue">
                Websites
              </span>{' '}
              That Feel{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent text-glow-purple">
                Alive.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              VOXOR LAB engineers interactive 3D landing pages, high-fidelity WebGL dashboards, and lightning-fast digital storefronts designed to drive conversions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 pt-4"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 border border-transparent text-base font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/25 group hover:-translate-y-0.5"
              >
                Launch Your Website
                <Rocket className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 border border-white/10 text-base font-semibold rounded-xl text-slate-300 hover:text-white hover:border-white/20 bg-slate-900/40 hover:bg-slate-900/60 transition-all duration-300 glass hover:-translate-y-0.5"
              >
                <span>Explore Showcase</span>
                <ChevronRight className="w-5 h-5 ml-1" />
              </a>
            </motion.div>

            {/* Quick Tech Badges */}
            <motion.div variants={itemVariants} className="pt-8 border-t border-white/5 space-y-3">
              <span className="text-xs text-slate-500 font-mono flex items-center justify-center lg:justify-start">
                <Terminal className="w-3.5 h-3.5 mr-2 text-slate-400" />
                POWERING INNOVATIVE TEAMS WITH
              </span>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {['Three.js', 'React 3 Fiber', 'Tailwind v4', 'Framer Motion', 'TypeScript'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-slate-900/80 border border-white/5 text-[11px] text-slate-400 font-medium tracking-wide shadow-inner"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Right 3D Scene */}
          <div className="lg:col-span-7 w-full h-[550px] md:h-[650px] lg:h-[750px]">
            <Scene3D />
          </div>
        </div>
      </div>
    </section>
  );
}
