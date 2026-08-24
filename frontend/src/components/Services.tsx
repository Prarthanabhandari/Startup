import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Laptop, Cpu, Smartphone, ShoppingBag, Layers, LineChart } from 'lucide-react';

interface TiltCardProps {
  title: string;
  description: string;
  longDesc: string;
  icon: any;
  glowColor: string;
  glowClass: string;
}

function ServiceCard({ title, description, longDesc, icon: Icon, glowColor, glowClass }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Tilt limit (10 degrees max)
    const factor = 10;
    const rx = -(y / (box.height / 2)) * factor;
    const ry = (x / (box.width / 2)) * factor;
    
    setRotate({ x: rx, y: ry });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
      }}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
        scale: isHovered ? 1.02 : 1,
        borderColor: isHovered ? glowColor : 'rgba(0, 0, 0, 0.04)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={`p-8 rounded-[28px] clay-card flex flex-col justify-between items-start text-left h-[280px] relative overflow-hidden group shadow-lg cursor-pointer transition-colors duration-300`}
    >
      {/* Background Gradient Shift on Hover */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-slate-50 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500" 
      />
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`
        }}
      />

      {/* Floating Spark / Glow inside card */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[45px] pointer-events-none ${glowClass}`}
          />
        )}
      </AnimatePresence>

      <div className="w-full space-y-4 relative z-10" style={{ transform: 'translateZ(30px)' }}>
        {/* Icon wrapper with micro-animation */}
        <motion.div 
          animate={{
            y: isHovered ? -4 : 0,
            scale: isHovered ? 1.08 : 1,
            color: isHovered ? '#ffffff' : '#64748b'
          }}
          className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/50 flex items-center justify-center text-slate-500 group-hover:bg-brand-primary transition-colors duration-300 shadow-sm"
        >
          <Icon className="w-6 h-6" />
        </motion.div>

        <h3 className="text-lg font-black text-slate-800 group-hover:text-brand-primary font-mono tracking-wide transition-colors">
          {title}
        </h3>
      </div>

      {/* Description Expand Layout */}
      <div className="w-full relative z-10 space-y-2 mt-4" style={{ transform: 'translateZ(20px)' }}>
        <p className="text-slate-600 text-xs font-semibold leading-relaxed group-hover:text-slate-700 transition-colors">
          {description}
        </p>
        
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isHovered ? 'auto' : 0,
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <p className="text-[11px] text-slate-550 leading-relaxed pt-2 border-t border-slate-100">
            {longDesc}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const services = [
    {
      title: 'Premium Website Design',
      description: 'Next-generation interactive websites featuring rich 3D animations.',
      longDesc: 'Built with React, Tailwind CSS, Framer Motion, and WebGL animations to hook users and deliver brand prestige.',
      icon: Laptop,
      glowColor: '#60a5fa',
      glowClass: 'bg-blue-500/10',
    },
    {
      title: 'AI-Powered Applications',
      description: 'Custom intelligent systems with built-in LLM interfaces.',
      longDesc: 'Full neural pipeline integrations, automated tasks agents, and responsive AI chat tools crafted for modern startups.',
      icon: Cpu,
      glowColor: '#c084fc',
      glowClass: 'bg-purple-500/10',
    },
    {
      title: 'Mobile App Development',
      description: 'Native cross-platform iOS and Android apps with 120Hz feel.',
      longDesc: 'Optimized touch architectures, offline synchronizations, and stunning spatial micro-interactions.',
      icon: Smartphone,
      glowColor: '#fb923c',
      glowClass: 'bg-orange-500/10',
    },
    {
      title: 'SaaS Product Development',
      description: 'Highly scalable subscriptions software architectures.',
      longDesc: 'Robust authentication flow setups, payment gateways, dashboard metrics controls, and multi-tenant logic.',
      icon: ShoppingBag,
      glowColor: '#f472b6',
      glowClass: 'bg-pink-500/10',
    },
    {
      title: 'UI/UX Design Systems',
      description: 'Ultra-custom, pixel-perfect layout branding foundations.',
      longDesc: 'Standardized design guidelines, scalable component templates, interactive tokens, and complete design assets packages.',
      icon: Layers,
      glowColor: '#818cf8',
      glowClass: 'bg-indigo-500/10',
    },
    {
      title: 'Digital Strategy',
      description: 'Comprehensive data strategies to position brands for market dominance.',
      longDesc: 'Rigorous funnel diagnostics, target market sizing analytics, conversion tracking setups, and marketing automation.',
      icon: LineChart,
      glowColor: '#34d399',
      glowClass: 'bg-emerald-500/10',
    },
  ];

  return (
    <section id="services" className="py-24 bg-obsidian border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-20 text-center space-y-4">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 font-mono block">
            OUR CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight leading-tight">
            What We <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent text-glow-indigo">Create</span>
          </h2>
          <p className="text-slate-500 text-sm font-medium">
            Immersive, functional, and highly optimized digital product capabilities built to convert.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title}
              description={service.description}
              longDesc={service.longDesc}
              icon={service.icon}
              glowColor={service.glowColor}
              glowClass={service.glowClass}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
