export default function Footer() {
  return (
    <footer className="bg-obsidian py-16 text-slate-650 border-t border-slate-200/50 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Logo & Description */}
          <div className="md:col-span-4 space-y-4 text-left">
            <div className="flex items-center space-x-2">
              <img 
                src="/voxor-logo.png" 
                alt="VOXOR LAB Logo" 
                className="w-7 h-7 mr-2 filter drop-shadow-[0_2px_8px_rgba(139,92,246,0.25)]"
              />
              <span className="text-md font-black tracking-[0.2em] text-slate-800 select-none font-mono">
                VOXOR<span className="text-brand-primary">LAB</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs font-semibold">
              Ideas into digital products. We build modern, robust websites, WebGL experiences, AI integrations, and custom SaaS software blueprints.
            </p>
          </div>

          {/* Services Links */}
          <div className="md:col-span-2 space-y-3 text-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-800 font-mono">Services</h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li>
                <a href="#services" className="hover:text-brand-primary transition-colors">Website Design</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-primary transition-colors">AI Applications</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-primary transition-colors">Mobile Apps</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-primary transition-colors">SaaS Products</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-primary transition-colors">Design Systems</a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="md:col-span-2 space-y-3 text-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-800 font-mono">Company</h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li>
                <a href="#about" className="hover:text-brand-primary transition-colors">About Studio</a>
              </li>
              <li>
                <a href="#work" className="hover:text-brand-primary transition-colors">Selected Missions</a>
              </li>
              <li>
                <a href="#process" className="hover:text-brand-primary transition-colors">Our Process</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-primary transition-colors">Contact</a>
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
              <button className="bg-brand-primary hover:brightness-105 active:scale-95 text-white p-2.5 rounded-xl transition-all shadow-md shadow-brand-primary/20 flex items-center justify-center cursor-pointer clay-button">
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
            <a href="#privacy" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-brand-primary transition-colors">Terms & Conditions</a>
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
