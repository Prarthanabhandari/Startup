import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ScrollyNavigationProps {
  introState?: 'fullscreen' | 'transitioning' | 'completed';
}

export default function ScrollyNavigation({ introState = 'completed' }: ScrollyNavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={introState !== 'fullscreen' ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
      transition={{ 
        type: "spring",
        stiffness: 60,
        damping: 15,
        mass: 1,
        delay: 0.1
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-[72px] flex items-center ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/40 shadow-sm shadow-slate-200/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        {/* Left: Logo */}
        <a href="#home" className="flex items-center text-slate-800 group select-none">
          <img 
            src="/voxor-logo.png" 
            alt="VOXOR LAB Logo" 
            className="w-7 h-7 mr-2 transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_8px_rgba(129,140,248,0.25)]"
          />
          <span className="text-[14px] font-black tracking-[0.2em] font-mono text-slate-800">
            VOXOR<span className="text-brand-primary text-glow-indigo">LAB</span>
          </span>
        </a>

        {/* Center: Minimalist Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500 hover:text-brand-primary hover:text-glow-indigo transition-colors duration-350 font-sans"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: CTA Button */}
        <div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-brand-primary to-brand-secondary hover:brightness-105 active:scale-95 transition-all duration-350 shadow-md shadow-brand-primary/20 cursor-pointer clay-button"
          >
            Start a Project
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
