import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';
import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import TechStackMarquee from '../components/TechStackMarquee';

interface HomePageProps {
  introState: 'fullscreen' | 'transitioning' | 'completed';
  setIntroState: (state: 'fullscreen' | 'transitioning' | 'completed') => void;
}

export default function HomePage({ introState, setIntroState }: HomePageProps) {
  return (
    <div className="space-y-0">
      {/* Cinematic 3D Hero Experience */}
      <Hero introState={introState} setIntroState={setIntroState} />

      {/* Creativity, Code & Strategy Methodology */}
      <WhyUs />

      {/* Services Highlight Section */}
      <Services />

      {/* Work / Missions Showcase (Zolarys-Style 3D Stage) */}
      <Portfolio />

      {/* The Stack We Build On (Infinite Marquee) */}
      <TechStackMarquee />

      {/* Quick Process Banner */}
      <section className="py-20 bg-slate-50/50 border-y border-slate-200/40 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold font-mono">
              <Zap className="w-3.5 h-3.5" />
              <span>THE ENGINEERING PIPELINE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Rapid Execution. Zero Guesswork.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We guide every project through our structured 6-phase engineering pipeline from initial discovery to high-scale deployment.
            </p>
            <div className="pt-2">
              <Link
                to="/process"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider text-slate-700 hover:text-brand-primary bg-white border border-slate-200 shadow-sm transition-all group"
              >
                <span>Read Our Full Process</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
