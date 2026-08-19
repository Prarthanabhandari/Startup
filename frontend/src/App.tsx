import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#030712] min-h-screen text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section containing 3D viewport and pitch text */}
      <Hero />

      {/* Services grid detailing what we build */}
      <Services />

      {/* Interactive portfolio showcase */}
      <Portfolio />

      {/* Interactive Contact Form with active 3D node */}
      <Contact />

      {/* Footer block */}
      <Footer />
    </div>
  );
}

export default App;
