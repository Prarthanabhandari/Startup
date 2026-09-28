import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface ScrollyNavigationProps {
  introState?: 'fullscreen' | 'transitioning' | 'completed';
}

export default function ScrollyNavigation({ introState = 'completed' }: ScrollyNavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'Process', path: '/process' },
    { name: 'Contact', path: '/contact' },
  ];

  const shouldShowNav = !isHome || introState !== 'fullscreen';

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={shouldShowNav ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ 
          type: "spring",
          stiffness: 60,
          damping: 15,
          mass: 1,
          delay: isHome ? 0.1 : 0
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[72px] flex items-center ${
          scrolled || !isHome
            ? 'bg-white/85 backdrop-blur-md border-b border-slate-200/50 shadow-sm shadow-slate-200/30'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center text-slate-800 group select-none">
            <img 
              src="/voxor-logo.png" 
              alt="VOXOR LAB Logo" 
              className="w-10 h-10 mr-3 transition-transform duration-300 group-hover:scale-110 logo-sticker"
            />
            <span className="text-[18px] font-black tracking-[0.25em] font-mono text-slate-800">
              VOXOR<span className="text-brand-primary text-glow-indigo">LAB</span>
            </span>
          </Link>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/60 shadow-inner">
            {navLinks.map((link) => {
              const isActive = link.path === '/' 
                ? location.pathname === '/' 
                : location.pathname.startsWith(link.path);

              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={`text-[11px] font-bold uppercase tracking-[0.16em] px-4 py-1.5 rounded-full transition-all duration-200 font-sans ${
                    isActive
                      ? 'bg-white text-brand-primary shadow-sm border border-slate-200/80 font-black'
                      : 'text-slate-600 hover:text-brand-primary hover:bg-white/50'
                  }`}
                >
                  {link.name}
                </NavLink>
              );
            })}
          </div>

          {/* Right: CTA Button & Mobile Hamburger */}
          <div className="flex items-center space-x-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-brand-primary to-brand-secondary hover:brightness-105 active:scale-95 transition-all duration-300 shadow-md shadow-brand-primary/20 cursor-pointer clay-button"
            >
              Start a Project
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-700 hover:text-brand-primary hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl px-6 py-6 md:hidden flex flex-col space-y-3"
          >
            {navLinks.map((link) => {
              const isActive = link.path === '/' 
                ? location.pathname === '/' 
                : location.pathname.startsWith(link.path);

              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-bold uppercase tracking-wider px-4 py-3 rounded-2xl transition-all ${
                    isActive
                      ? 'bg-brand-primary/10 text-brand-primary font-black border border-brand-primary/20'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </NavLink>
              );
            })}
            <div className="pt-2">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center py-3 rounded-2xl text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-brand-primary to-brand-secondary shadow-md shadow-brand-primary/20"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
