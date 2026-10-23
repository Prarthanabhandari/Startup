import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUp, 
  Check, 
  Mail, 
  Copy, 
  Sparkles, 
  Globe, 
  Cpu, 
  Layers, 
  ExternalLink,
  Lock 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('hello@voxorlab.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setIsSubscribed(true);
    setEmail('');

    try {
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#818cf8', '#c084fc', '#38bdf8', '#fb923c', '#ffffff'],
      });
    } catch {
      // Confetti fallback if canvas not available
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative z-10 text-slate-600 font-sans overflow-hidden border-t border-slate-200/80 bg-obsidian">
      {/* ----------------- CLEAN AMBIENT STUDIO LIGHTING LAYER ----------------- */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        {/* Soft Ambient Aurora Lights */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-primary/15 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute top-1/3 -right-32 w-[480px] h-[480px] bg-luminous-violet/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute -bottom-24 left-1/4 w-[420px] h-[360px] bg-brand-orange/10 rounded-full blur-[110px] pointer-events-none" />

        {/* High-tech Blueprint Dot-Matrix Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.22) 1.2px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Top & Bottom Seamless Blends */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#eceeef] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#eceeef] to-transparent" />

        {/* Studio Monogram Watermark Typography */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[14vw] font-black tracking-tighter text-slate-900/[0.03] uppercase whitespace-nowrap select-none font-mono">
          VOXOR LAB
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14 relative z-10">
        {/* ----------------- FLAGSHIP GLASSMORPHIC FOOTER ISLAND ----------------- */}
        <div className="clay-card bg-white/90 backdrop-blur-xl border border-white/90 shadow-[0_25px_60px_-15px_rgba(100,116,139,0.12)] rounded-[36px] p-8 sm:p-12 lg:p-14 relative z-10 overflow-hidden">
          
          {/* Subtle Internal Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-luminous-violet/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Live Studio Telemetry Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/70 pb-6 mb-10 text-xs font-mono">
            <div className="flex items-center space-x-2 text-emerald-700 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>STUDIO ONLINE // READY FOR Q4 PROJECTS</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-slate-500 text-[11px]">
              <span className="flex items-center space-x-1.5">
                <Cpu className="w-3.5 h-3.5 text-brand-primary" />
                <span>VOXOR ENGINE v2.4</span>
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center space-x-1.5">
                <Layers className="w-3.5 h-3.5 text-luminous-violet" />
                <span>60 FPS WebGL & React 19</span>
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center space-x-1.5">
                <Globe className="w-3.5 h-3.5 text-brand-secondary" />
                <span>SF • TOKYO • BENGALURU</span>
              </span>
            </div>
          </div>

          {/* Main Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-10 border-b border-slate-200/70">
            
            {/* Logo & Bio & Direct Connect (4 cols) */}
            <div className="md:col-span-4 space-y-4 text-left">
              <Link to="/" className="inline-flex items-center space-x-2 group select-none">
                <img 
                  src="/voxor-logo.png" 
                  alt="VOXOR LAB Logo" 
                  className="w-10 h-10 mr-2 logo-sticker transition-transform group-hover:scale-105"
                />
                <span className="text-lg font-black tracking-[0.25em] text-slate-800 font-mono">
                  VOXOR<span className="text-brand-primary">LAB</span>
                </span>
              </Link>

              <p className="text-xs text-slate-500 leading-relaxed font-medium max-w-sm">
                Ideas into digital products. We build modern, robust websites, WebGL experiences, AI integrations, and custom SaaS software blueprints.
              </p>

              {/* Quick Click-to-Copy Direct Contact Chip */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-slate-100/90 hover:bg-slate-200/80 border border-slate-200/80 text-xs font-mono font-bold text-slate-700 hover:text-brand-primary transition-all cursor-pointer group"
                  title="Click to copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied hello@voxorlab.com!</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-3.5 h-3.5 text-brand-primary group-hover:scale-110 transition-transform" />
                      <span>hello@voxorlab.com</span>
                      <Copy className="w-3 h-3 text-slate-400 ml-1" />
                    </>
                  )}
                </button>
              </div>

              {/* Clean Social Links */}
              <div className="pt-2">
                <span className="text-[10px] font-mono font-black uppercase tracking-wider text-slate-400 block mb-2">
                  Connect With Studio
                </span>
                <div className="flex items-center space-x-2">
                  <SocialLink 
                    href="https://github.com" 
                    ariaLabel="GitHub"
                    icon={
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    } 
                  />
                  <SocialLink 
                    href="https://twitter.com" 
                    ariaLabel="Twitter / X"
                    icon={
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    } 
                  />
                  <SocialLink 
                    href="https://linkedin.com" 
                    ariaLabel="LinkedIn"
                    icon={
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    } 
                  />
                  <SocialLink 
                    href="https://instagram.com" 
                    ariaLabel="Instagram"
                    icon={
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    } 
                  />
                </div>
              </div>
            </div>

            {/* Services Links (2 cols) */}
            <div className="md:col-span-2 space-y-3.5 text-left">
              <div className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-800 font-mono">Services</h4>
              </div>
              <ul className="space-y-2.5 text-xs font-semibold text-slate-600">
                <li>
                  <Link to="/services" className="hover:text-brand-primary transition-colors flex items-center justify-between group">
                    <span>Web Development</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-brand-primary" />
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-brand-primary transition-colors flex items-center justify-between group">
                    <span className="flex items-center">
                      3D & Spatial Web
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-brand-primary/10 text-brand-primary ml-1.5">3D</span>
                    </span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-brand-primary" />
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-brand-primary transition-colors flex items-center justify-between group">
                    <span className="flex items-center">
                      AI & Automations
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-purple-500/10 text-purple-600 ml-1.5">AI</span>
                    </span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-brand-primary" />
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-brand-primary transition-colors flex items-center justify-between group">
                    <span>SaaS Platforms</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-brand-primary" />
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-brand-primary transition-colors flex items-center justify-between group">
                    <span>Mobile Development</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-brand-primary" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links (2 cols) */}
            <div className="md:col-span-2 space-y-3.5 text-left">
              <div className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-luminous-violet" />
                <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-800 font-mono">Company</h4>
              </div>
              <ul className="space-y-2.5 text-xs font-semibold text-slate-600">
                <li>
                  <Link to="/" className="hover:text-brand-primary transition-colors flex items-center justify-between group">
                    <span>Home Experience</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-brand-primary" />
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-brand-primary transition-colors flex items-center justify-between group">
                    <span>About Studio</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-brand-primary" />
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-brand-primary transition-colors flex items-center justify-between group">
                    <span>Our Services</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-brand-primary" />
                  </Link>
                </li>
                <li>
                  <Link to="/work" className="hover:text-brand-primary transition-colors flex items-center justify-between group">
                    <span>Selected Missions</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-brand-primary" />
                  </Link>
                </li>
                <li>
                  <Link to="/process" className="hover:text-brand-primary transition-colors flex items-center justify-between group">
                    <span>Our Process</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-brand-primary" />
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-brand-primary transition-colors flex items-center justify-between group">
                    <span>Contact Us</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-brand-primary" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter & Studio Preview (4 cols) */}
            <div className="md:col-span-4 space-y-4 text-left">
              <div className="flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-800 font-mono">
                  Subscribe & Dispatch
                </h4>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Join our newsletter to receive case studies, design insights, and studio updates.
              </p>

              {isSubscribed ? (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-800 text-xs font-semibold flex items-center space-x-3 shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-bold block">You're on the list!</span>
                    <span className="text-[11px] text-emerald-700">Watch your inbox for exclusive studio drops.</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2.5">
                  <div className="flex items-center space-x-2">
                    <div className="relative flex-1">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="clay-input bg-slate-50/90 border border-slate-200/90 rounded-2xl pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary w-full font-medium shadow-inner"
                      />
                    </div>
                    <button 
                      type="submit"
                      className="bg-gradient-to-r from-brand-primary to-luminous-violet hover:brightness-105 text-white p-2.5 rounded-2xl transition-all shadow-md shadow-brand-primary/25 flex items-center justify-center cursor-pointer clay-button flex-shrink-0 active:scale-95 group"
                      aria-label="Subscribe"
                    >
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                  <span className="text-[10px] text-slate-400 block font-medium flex items-center space-x-1.5">
                    <Lock className="w-3 h-3 text-slate-400" />
                    <span>We respect your privacy. No spam, ever.</span>
                  </span>
                </form>
              )}

              {/* Aesthetic Studio Visual Showcase Card using download (13) */}
              <Link 
                to="/contact"
                className="group relative block mt-3 p-3 rounded-2xl bg-gradient-to-br from-slate-50 to-indigo-50/30 border border-slate-200/70 hover:border-brand-primary/50 transition-all duration-300 shadow-xs hover:shadow-md overflow-hidden"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border border-slate-200 shadow-xs relative">
                    <img 
                      src="/images/contact-bg.jpg" 
                      alt="VOXOR Studio Workspace" 
                      className="w-full h-full object-cover object-bottom group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-1.5 text-[9px] font-mono font-black text-brand-primary uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                      <span>STUDIO DIRECT LINE</span>
                    </div>
                    <div className="text-xs font-bold text-slate-800 truncate group-hover:text-brand-primary transition-colors flex items-center justify-between">
                      <span>Schedule a Discovery Call</span>
                      <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-brand-primary transition-colors ml-1 flex-shrink-0" />
                    </div>
                    <p className="text-[10px] text-slate-500 font-medium truncate">
                      Direct engineering consultation & scoping
                    </p>
                  </div>
                </div>
              </Link>

            </div>

          </div>

          {/* ----------------- BOTTOM BAR ----------------- */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-400">
            <div className="flex items-center space-x-2">
              <span>&copy; {new Date().getFullYear()} VOXOR LAB. All rights reserved.</span>
            </div>

            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100/80 border border-slate-200/60">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-gradient-to-r from-brand-primary via-luminous-violet to-brand-orange bg-clip-text text-transparent font-mono">
                Designed to go beyond ordinary.
              </span>
            </div>

            <div className="flex items-center space-x-6">
              <Link to="/about" className="hover:text-brand-primary transition-colors">About</Link>
              <Link to="/contact" className="hover:text-brand-primary transition-colors">Get in Touch</Link>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer text-xs font-mono font-semibold shadow-xs hover:shadow-sm active:scale-95 group"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 text-brand-primary" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}

function SocialLink({ href, icon, ariaLabel }: { href: string; icon: React.ReactNode; ariaLabel: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="w-9 h-9 rounded-xl bg-white border border-slate-200/80 hover:border-brand-primary/60 text-slate-500 hover:text-brand-primary hover:bg-slate-50 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs hover:shadow-md"
    >
      {icon}
    </a>
  );
}
