import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-obsidian py-16 text-slate-650 border-t border-slate-200/50 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Logo & Description */}
          <div className="md:col-span-4 space-y-4 text-left">
            <Link to="/" className="flex items-center space-x-2 inline-flex group">
              <img 
                src="/voxor-logo.png" 
                alt="VOXOR LAB Logo" 
                className="w-10 h-10 mr-3 logo-sticker transition-transform group-hover:scale-105"
              />
              <span className="text-lg font-black tracking-[0.25em] text-slate-800 select-none font-mono">
                VOXOR<span className="text-brand-primary">LAB</span>
              </span>
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs font-semibold">
              Ideas into digital products. We build modern, robust websites, WebGL experiences, AI integrations, and custom SaaS software blueprints.
            </p>
          </div>

          {/* Services Links */}
          <div className="md:col-span-2 space-y-3 text-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-800 font-mono">Services</h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li>
                <Link to="/services" className="hover:text-brand-primary transition-colors">Web Development</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-primary transition-colors">3D & Spatial Web</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-primary transition-colors">AI & Automations</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-primary transition-colors">SaaS Platforms</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-primary transition-colors">Cost Estimator</Link>
              </li>
            </ul>
          </div>

          {/* Company Navigation Links */}
          <div className="md:col-span-2 space-y-3 text-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-800 font-mono">Company</h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li>
                <Link to="/" className="hover:text-brand-primary transition-colors">Home Experience</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-primary transition-colors">About Studio</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-primary transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-brand-primary transition-colors">Selected Missions</Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-brand-primary transition-colors">Our Process</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-primary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-800 font-mono">Subscribe</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Join our newsletter to receive case studies, design insights, and studio updates.
            </p>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="enter your email"
                className="bg-slate-55 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary w-full font-semibold clay-input"
              />
              <button 
                type="button"
                className="bg-brand-primary hover:brightness-105 active:scale-95 text-white p-2.5 rounded-xl transition-all shadow-md shadow-brand-primary/20 flex items-center justify-center cursor-pointer clay-button"
              >
                <ChevronRightIcon />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-400">
          <span>&copy; {new Date().getFullYear()} VOXOR Lab. All rights reserved.</span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-450 font-mono">
            Designed to go beyond ordinary.
          </span>
          <div className="flex space-x-6">
            <Link to="/about" className="hover:text-brand-primary transition-colors">About</Link>
            <Link to="/contact" className="hover:text-brand-primary transition-colors">Get in Touch</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

function ChevronRightIcon() {
  return (
    <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
