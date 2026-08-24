import CustomCursor from './components/CustomCursor';
import ScrollyNavigation from './components/ScrollyNavigation';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import FeaturedCaseStudy from './components/FeaturedCaseStudy';
import CostCalculator from './components/CostCalculator';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-obsidian min-h-screen text-cream selection:bg-indigo-100 selection:text-indigo-900">
      {/* Custom Interactive Cursor */}
      <CustomCursor />

      {/* Pinned Scrollytelling Glass Navigation Bar */}
      <ScrollyNavigation />

      {/* Cinematic 3D Hero Experience */}
      <Hero />

      {/* Creativity, Code & Strategy Methodology */}
      <WhyUs />

      {/* Small Team. Massive Impact. (About VOXOR LAB) */}
      <About />

      {/* What We Create (Services Section) */}
      <Services />

      {/* From Idea to Impact (Agency Process Section) */}
      <Process />

      {/* Selected Missions (Portfolio Section) */}
      <Portfolio />

      {/* Featured Case Study (Fintech Platform Report) */}
      <FeaturedCaseStudy />

      {/* Project Cost Calculator */}
      <CostCalculator />

      {/* What Our Clients Say (Endorsements Carousel) */}
      <Testimonials />

      {/* Final Call-to-Action (Starfield Particle Section) */}
      <FinalCTA />

      {/* Contact Form connected to Fallback Handlers */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
