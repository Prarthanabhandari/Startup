import { motion } from 'framer-motion';
import { Layers, Globe, ShoppingCart, Activity, Cpu } from 'lucide-react';

interface ServiceCard {
  icon: any;
  title: string;
  description: string;
  colorClass: string;
  glowClass: string;
  features: string[];
}

export default function Services() {
  const services: ServiceCard[] = [
    {
      icon: Globe,
      title: 'Interactive 3D Webscapes',
      description: 'We bring standard 2D layouts into full 3D environments. Experience immersive storytelling that keeps users engaged longer.',
      colorClass: 'text-blue-400 border-blue-500/20 bg-blue-500/5',
      glowClass: 'shadow-glow-blue',
      features: ['WebGL / Three.js', 'Smooth Scroll Physics', 'Dynamic Camera Orbits', 'Asset Optimization'],
    },
    {
      icon: Cpu,
      title: 'High-Performance SaaS',
      description: 'Custom dashboards, reactive workflows, and robust state management. Engineered with sub-second page loads and complete scalability.',
      colorClass: 'text-purple-400 border-purple-500/20 bg-purple-500/5',
      glowClass: 'shadow-glow-purple',
      features: ['TypeScript & Next.js', 'Real-time WebSockets', 'Interactive Data Visuals', 'Secure Identity Control'],
    },
    {
      icon: ShoppingCart,
      title: 'Immersive E-Commerce',
      description: 'Move beyond static images. Let customers inspect, rotate, and customize products in full 3D before adding them to their cart.',
      colorClass: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/5',
      glowClass: 'shadow-glow-blue',
      features: ['3D Product Viewers', 'Interactive Configurator', 'Payment Gateway APIs', 'Conversion Analytics'],
    },
    {
      icon: Layers,
      title: 'Creative Design & UX',
      description: 'Stunning visual identities coupled with fluid, accessibility-first design systems. We engineer the look, feel, and motion.',
      colorClass: 'text-pink-400 border-pink-500/20 bg-pink-500/5',
      glowClass: 'shadow-glow-purple',
      features: ['Tailwind-driven Layouts', 'Framer Motion Transitions', 'Responsive Grid Engine', 'WAI-ARIA Compliant'],
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 80, damping: 15 },
    },
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 90, damping: 18 },
    },
  };

  return (
    <section id="services" className="relative py-24 bg-slate-950/40 border-y border-white/5">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full bg-indigo-500/5 blur-[150px] transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto space-y-4 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={headerVariants}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
            <Activity className="w-3.5 h-3.5" />
            <span>WHAT WE ENGINEER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Comprehensive Digital Production Capabilities
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            From highly interactive 3D pages that elevate your brand narrative to heavy enterprise applications optimized for performance.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`p-8 rounded-2xl glass border flex flex-col justify-between group hover:border-slate-500/25 transition-all duration-300 ${service.glowClass}`}
            >
              <div className="space-y-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-colors duration-300 ${service.colorClass}`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-300 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center space-x-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 block"></span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
