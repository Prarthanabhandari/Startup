import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';
import Services from '../components/Services';
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

      {/* The Stack We Build On (Infinite Marquee) */}
      <TechStackMarquee />
    </div>
  );
}
