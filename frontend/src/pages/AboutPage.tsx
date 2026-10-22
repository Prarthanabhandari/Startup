import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Heart, 
  GraduationCap, 
  Briefcase, 
  Mail, 
  MapPin, 
  ArrowRight, 
  ExternalLink, 
  MessageCircle, 
  Copy, 
  Check, 
  Building2, 
  Users,
  X,
  ChevronDown,
  ArrowUpRight
} from 'lucide-react';
import EngineeringToolkit from '../components/EngineeringToolkit';
import FlagshipProjectsShowcase from '../components/FlagshipProjectsShowcase';

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width="24" 
      height="24" 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width="24" 
      height="24" 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function AboutPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedMemberId, setSelectedMemberId] = useState<number | null>(0);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('prarthanabhandari2003@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const education = [
    {
      degree: 'MCA (Master of Computer Applications)',
      institution: 'K.B. Joshi Institute of Information Technology, Pune',
      university: "S.N.D.T. Women's University",
      period: '2024 – 2026',
      badge: 'Current / Final Year',
      highlight: 'Focusing on Enterprise Web Architectures, Advanced Data Structures, and Cloud Systems.',
    },
    {
      degree: 'BCA (Bachelor of Computer Applications)',
      institution: 'Affiliated University Institute, Pune',
      university: 'State University Board',
      period: '2020 – 2023',
      badge: 'Completed',
      highlight: 'Built solid computer science foundations in Java, SQL, OOP, and Web Development basics.',
    },
  ];

  const experience = [
    {
      role: 'Back-end Developer Intern',
      company: 'Graphura India Pvt. Ltd.',
      location: 'Pune',
      period: 'March 2026 – Present',
      current: true,
      description: 'Building RESTful APIs using Node.js and Express.js for web-based enterprise applications. Integrating relational database schemas and managing server connections.',
    },
    {
      role: 'MERN Stack Developer Intern',
      company: 'Codec Technologies Pvt. Ltd.',
      location: 'Pune',
      period: 'Jan 2026 – April 2026',
      current: false,
      description: 'Completed a 3-month AICTE & ICAC-approved internship program. Built full-stack MERN (MongoDB, Express, React, Node.js) features and developed responsive dashboards.',
    },
  ];

  const teamMembers = [
    {
      id: 0,
      name: 'Prarthana Bhandari',
      role: 'Founder & Full-Stack Lead',
      subtitle: 'Full-Stack Architecture & Systems',
      badge: 'Founder',
      initials: 'PB',
      image: '/about/team-prarthana.jpg',
      borderActive: 'border-rose-400 ring-4 ring-rose-100/80 shadow-2xl shadow-rose-200/50',
      activeText: 'text-rose-600',
      gradient: 'from-rose-400 via-pink-500 to-rose-600',
      badgeStyle: 'bg-rose-50 text-rose-700 border-rose-200/60',
      focus: 'System Architecture & Full-Stack Development',
      bio: 'Leading overall project vision, frontend engineering with React 19 & TypeScript, and integrating layered backend services. Focused on crafting responsive, high-performance web products that scale effortlessly.',
      responsibilities: [
        'End-to-end full-stack architecture with React 19, TypeScript, and Express.',
        'Core 3D canvas integration using Babylon.js and Framer Motion interactions.',
        'Database modeling, PostgreSQL connection pooling, and REST API standards.',
        'Codebase organization, build optimizations, and deployment workflows.'
      ],
      quote: '“Great software does not need to be complicated — it just needs to be built with care, tested thoroughly, and crafted with purpose.”',
      skills: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Express.js', 'Babylon.js', 'Tailwind CSS'],
      github: 'https://github.com/prarthanabhandari',
      linkedin: 'https://www.linkedin.com/in/prarthana-bhandari-ab2a5a293/',
      email: 'prarthanabhandari2003@gmail.com',
    },
    {
      id: 1,
      name: 'Tanvi Suryavanshi',
      role: 'Co-Founder & UI/UX Design Lead',
      subtitle: 'Design Systems & User Experience',
      badge: 'Design & UI/UX',
      initials: 'TS',
      image: '/about/team-tanvi.jpg',
      borderActive: 'border-purple-400 ring-4 ring-purple-100/80 shadow-2xl shadow-purple-200/50',
      activeText: 'text-purple-600',
      gradient: 'from-purple-400 via-violet-500 to-indigo-600',
      badgeStyle: 'bg-purple-50 text-purple-700 border-purple-200/60',
      focus: 'Design Systems & User Experience',
      bio: 'Crafting elegant design languages, responsive micro-interactions, Figma component libraries, and intuitive user journeys. Bringing creative aesthetic vision to life.',
      responsibilities: [
        'Figma wireframing, high-fidelity prototypes, and component design systems.',
        'Claymorphic visual language, pastel color harmony, and typography hierarchy.',
        'Interactive UI patterns, micro-animations, and UX accessibility audits.',
        'User experience mapping and converting client requirements into sleek screens.'
      ],
      quote: '“Design is not just what it looks like; it is how effortlessly someone can navigate and feel at home inside the product.”',
      skills: ['Figma', 'UI/UX Design', 'Tailwind CSS', 'Design Systems', 'Micro-interactions', 'Prototyping'],
      github: 'https://github.com/',
      linkedin: 'https://linkedin.com/',
      email: 'tanvi@startup.studio',
    },
    {
      id: 2,
      name: 'Siddhi Malwadkar',
      role: 'Co-Founder & Backend Engineer',
      subtitle: 'Backend APIs & Data Scalability',
      badge: 'Backend & Data',
      initials: 'SM',
      image: '/about/team-siddhi.jpg',
      borderActive: 'border-amber-400 ring-4 ring-amber-100/80 shadow-2xl shadow-amber-200/50',
      activeText: 'text-amber-700',
      gradient: 'from-amber-400 via-orange-500 to-amber-600',
      badgeStyle: 'bg-amber-50 text-amber-800 border-amber-200/60',
      focus: 'REST APIs & Database Scalability',
      bio: 'Architecting relational schemas, secure authentication middleware, API routing, and high-performance server operations. Dedicated to clean data pipelines and rock-solid endpoints.',
      responsibilities: [
        'Express.js server architecture, Zod validation schemas, and rate-limiting.',
        'PostgreSQL table migrations, query optimization, and transaction safety.',
        'JWT authentication tokens, bcrypt password encryption, and security headers.',
        'Backend error logging, API documentation, and database indexing.'
      ],
      quote: '“A smooth frontend depends entirely on the reliability, speed, and integrity of the backend running beneath it.”',
      skills: ['Express.js', 'PostgreSQL', 'MongoDB', 'REST APIs', 'JWT Security', 'Node.js', 'Database Design'],
      github: 'https://github.com/',
      linkedin: 'https://linkedin.com/',
      email: 'siddhi@startup.studio',
    },
    {
      id: 3,
      name: 'Shravani Nimbalkar',
      role: 'Co-Founder & Full-Stack / QA Lead',
      subtitle: 'Component QA & Delivery Operations',
      badge: 'Full-Stack & QA',
      initials: 'SN',
      image: '/about/team-shravani.jpg',
      borderActive: 'border-emerald-400 ring-4 ring-emerald-100/80 shadow-2xl shadow-emerald-200/50',
      activeText: 'text-emerald-700',
      gradient: 'from-teal-400 via-emerald-500 to-teal-600',
      badgeStyle: 'bg-emerald-50 text-emerald-800 border-emerald-200/60',
      focus: 'Component QA & End-to-End Testing',
      bio: 'Ensuring seamless cross-device responsiveness, component test coverage, code review checks, and smooth deployment delivery across desktop and mobile.',
      responsibilities: [
        'Cross-browser and cross-device responsive testing across iOS, Android, and Desktop.',
        'Full-stack component integration, bug triaging, and quality assurance.',
        'Git branch workflows, PR validations, and deployment regression testing.',
        'Performance auditing (Lighthouse metrics, bundle size, and render speed).'
      ],
      quote: '“Quality is not an afterthought; it is built into every component, every test case, and every deployed line of code.”',
      skills: ['Frontend QA', 'React', 'JavaScript', 'Git Workflows', 'Performance Testing', 'Usability Auditing'],
      github: 'https://github.com/',
      linkedin: 'https://linkedin.com/',
      email: 'shravani@startup.studio',
    },
  ];

  return (
    <div className="pt-[72px] bg-[#faf7f5] text-[#2d2625] min-h-screen selection:bg-rose-100 selection:text-rose-900 font-sans">
      
      {/* ──────────────────────────────────────────────────────────
          SECTION 1: HERO (Warm Editorial Portrait & OG Profile)
         ────────────────────────────────────────────────────────── */}
      <section className="relative py-16 lg:py-24 border-b border-[#ede4df] overflow-hidden">
        {/* Soft background radial glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Heading & Authentic Personal Bio */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-7 text-left"
            >
              {/* Pill badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#ede4df] shadow-xs text-xs font-semibold text-[#8b5e56]">
                <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                <span className="tracking-wide uppercase text-[11px] font-bold">Full Stack Developer & MCA Graduate</span>
              </div>

              {/* Main Editorial Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-medium leading-[1.15] text-[#2d2625] tracking-tight">
                I build digital experiences that are{' '}
                <span className="font-serif italic text-rose-600 font-normal underline decoration-rose-300 decoration-wavy decoration-1 underline-offset-4">
                  beautiful
                </span>
                ,{' '}
                <span className="font-serif italic text-purple-600 font-normal">
                  fast
                </span>{' '}
                &{' '}
                <span className="font-serif italic text-cyan-600 font-normal">
                  meaningful
                </span>
                .
              </h1>

              {/* Authentic OG Biography directly from portfolio */}
              <div className="space-y-4 text-base sm:text-lg text-[#5a4d4b] leading-relaxed max-w-xl font-normal">
                <p>
                  I'm <strong className="font-semibold text-[#2d2625]">Prarthana Basawraj Bhandari</strong>, a Full Stack Developer and MCA student at{' '}
                  <strong className="font-semibold text-[#2d2625]">K.B. Joshi Institute of Information Technology, Pune</strong>.
                </p>
                <p className="text-sm sm:text-base text-[#786b69]">
                  I specialize in developing clean, scalable, and high-performance web applications with React, TypeScript, Node.js, and PostgreSQL. Every project is built from scratch with genuine craft, zero fluff, and strong fundamentals.
                </p>
              </div>

              {/* Location & Status pills */}
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-[#786b69]">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-[#ede4df] shadow-2xs font-medium">
                  <MapPin className="w-3.5 h-3.5 mr-1.5 text-rose-500" />
                  Pune, Maharashtra, India
                </span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
                  Open for Full-Stack & Backend Roles
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  to="/work"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#2d2625] text-white text-xs font-bold uppercase tracking-wider hover:bg-black hover:shadow-lg transition-all duration-200 active:scale-95"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="https://github.com/prarthanabhandari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-white border border-[#ede4df] text-[#2d2625] text-xs font-bold uppercase tracking-wider hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-2xs"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://www.linkedin.com/in/prarthana-bhandari-ab2a5a293/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-white border border-[#ede4df] text-[#0077b5] text-xs font-bold uppercase tracking-wider hover:bg-slate-50 transition-all duration-200 shadow-2xs"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </motion.div>

            {/* Right Column: Hero Workspace Photograph */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Back decorative border card */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-rose-200/50 via-amber-100/40 to-white rounded-[36px] blur-sm -z-10" />

                <div className="relative bg-white p-3 sm:p-4 rounded-[32px] border border-[#ede4df] shadow-xl overflow-hidden group">
                  <img
                    src="/about/prarthana-workspace.jpg"
                    alt="Prarthana Bhandari at desk coding"
                    className="w-full h-[360px] sm:h-[420px] object-cover rounded-[24px] group-hover:scale-[1.02] transition-transform duration-500"
                  />

                  {/* Aesthetic Floating Glass Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-lg text-left">
                    <div className="flex items-center space-x-2 text-xs font-bold text-rose-600 font-serif italic mb-1">
                      <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                      <span>Creating with purpose. Coding with heart.</span>
                    </div>
                    <p className="text-[11px] text-[#786b69] leading-tight font-sans">
                      MCA Scholar · Backend Developer Intern @ Graphura India · Full-Stack Builder
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 2: EDUCATION & INDUSTRY EXPERIENCE (Real & Grounded)
         ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-b border-[#ede4df] bg-[#fbf8f6]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Education Journey */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-[11px] font-mono font-bold tracking-wider uppercase border border-rose-200/60">
                <GraduationCap className="w-3.5 h-3.5 text-rose-500" />
                <span>ACADEMIC FOUNDATION</span>
              </div>

              <h2 className="text-3xl font-medium text-[#2d2625] tracking-tight">
                Academic Degrees & <span className="font-serif italic text-rose-600">Qualifications</span>
              </h2>

              <p className="text-sm text-[#786b69] leading-relaxed">
                Structured computer applications coursework combined with hands-on final-year project development.
              </p>

              <div className="space-y-4 pt-2">
                {education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-[24px] bg-white border border-[#ede4df] shadow-2xs hover:shadow-md transition-all duration-300 space-y-3 relative"
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <span className="text-xs font-mono font-bold text-rose-500 tracking-wider">
                          {edu.period}
                        </span>
                        <h3 className="text-base font-bold text-[#2d2625]">{edu.degree}</h3>
                        <p className="text-xs font-medium text-[#5a4d4b]">{edu.institution}</p>
                        <p className="text-[11px] text-[#786b69]">{edu.university}</p>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 text-[10px] font-mono font-bold border border-rose-200/60 shrink-0">
                        {edu.badge}
                      </span>
                    </div>

                    <p className="text-xs text-[#786b69] leading-relaxed pt-2 border-t border-[#ede4df]/60">
                      {edu.highlight}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Professional Experience (Internships) */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-[11px] font-mono font-bold tracking-wider uppercase border border-indigo-200/60">
                <Briefcase className="w-3.5 h-3.5 text-indigo-500" />
                <span>PROFESSIONAL EXPERIENCE</span>
              </div>

              <h2 className="text-3xl font-medium text-[#2d2625] tracking-tight">
                Software Engineering <span className="font-serif italic text-indigo-600">Internships</span>
              </h2>

              <p className="text-sm text-[#786b69] leading-relaxed">
                Practical, real-world development experience in Pune-based software organizations.
              </p>

              <div className="space-y-4 pt-2">
                {experience.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-[24px] bg-white border border-[#ede4df] shadow-2xs hover:shadow-md transition-all duration-300 space-y-3"
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-mono font-bold text-indigo-600 tracking-wider">
                            {exp.period}
                          </span>
                          {exp.current && (
                            <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-mono font-bold border border-emerald-200">
                              Active
                            </span>
                          )}
                        </div>
                        <h3 className="text-base font-bold text-[#2d2625]">{exp.role}</h3>
                        <p className="text-xs font-semibold text-[#5a4d4b] flex items-center">
                          <Building2 className="w-3 h-3 mr-1 text-slate-400" />
                          {exp.company} · {exp.location}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-[#786b69] leading-relaxed pt-2 border-t border-[#ede4df]/60">
                      {exp.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 3: STARTUP FOUNDING TEAM (4 Co-Founders & Builders)
         ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-b border-[#ede4df] bg-[#faf7f5] relative overflow-hidden">
        {/* Soft background aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-amber-100/30 via-rose-100/30 to-purple-100/20 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#ede4df] text-[11px] font-mono font-bold tracking-wider uppercase text-[#8b5e56] shadow-2xs">
              <Users className="w-3.5 h-3.5 text-rose-500" />
              <span>THE STARTUP FOUNDING TEAM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium text-[#2d2625] tracking-tight">
              The Minds Building the <span className="font-serif italic text-rose-600">Vision</span>
            </h2>
            <p className="text-sm sm:text-base text-[#786b69] leading-relaxed">
              Four ambitious developers and designers collaborating together to build modern, high-performance web products with genuine craft and engineering discipline.
            </p>
          </div>

          {/* 4-Member Clickable Team Grid (Portrait Cards matching reference) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {teamMembers.map((member) => {
              const isSelected = selectedMemberId === member.id;

              return (
                <motion.div
                  key={member.name}
                  onClick={() => setSelectedMemberId(isSelected ? null : member.id)}
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.98 }}
                  className={`bg-white rounded-[32px] border transition-all duration-300 p-3.5 flex flex-col justify-between text-left cursor-pointer group relative ${
                    isSelected
                      ? member.borderActive
                      : 'border-[#ede4df] hover:border-slate-300 shadow-sm hover:shadow-xl'
                  }`}
                >
                  {/* Upper Area: Large Portrait Photo Container */}
                  <div className="relative h-72 sm:h-80 w-full rounded-[24px] overflow-hidden bg-slate-100 mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`w-full h-full object-cover object-top transition-all duration-500 ${
                        isSelected 
                          ? 'scale-105 filter-none' 
                          : 'filter contrast-[0.98] group-hover:scale-105 group-hover:filter-none'
                      }`}
                    />

                    {/* Gradient Ambient Scrim on bottom of photo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

                    {/* Top-Right: Role Badge */}
                    <div className="absolute top-3 right-3">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md shadow-xs ${member.badgeStyle}`}>
                        {member.badge}
                      </span>
                    </div>

                    {/* Bottom-Left: Floating Glassy Social Pills */}
                    <div className="absolute bottom-3 left-3 flex items-center space-x-1.5 z-10">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-8 h-8 rounded-full bg-black/60 hover:bg-white hover:text-[#0077b5] text-white backdrop-blur-md flex items-center justify-center transition-colors shadow-sm"
                        title={`${member.name} on LinkedIn`}
                      >
                        <LinkedinIcon className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-8 h-8 rounded-full bg-black/60 hover:bg-white hover:text-black text-white backdrop-blur-md flex items-center justify-center transition-colors shadow-sm"
                        title={`${member.name} on GitHub`}
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    {/* Bottom-Right: Interactive Click Pill */}
                    <div className="absolute bottom-3 right-3 z-10">
                      <span className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider backdrop-blur-md shadow-xs transition-colors ${
                        isSelected
                          ? 'bg-rose-500 text-white'
                          : 'bg-white/80 text-[#2d2625] group-hover:bg-white'
                      }`}>
                        {isSelected ? (
                          <>
                            <span>Selected</span>
                            <Check className="w-3 h-3 ml-0.5" />
                          </>
                        ) : (
                          <>
                            <span>View Bio</span>
                            <ChevronDown className="w-3 h-3 ml-0.5" />
                          </>
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Text Area: Name & Subtitle */}
                  <div className="px-2 pb-2 space-y-1">
                    <h3 className={`text-lg font-bold tracking-tight transition-colors ${
                      isSelected ? member.activeText : 'text-[#2d2625] group-hover:text-rose-600'
                    }`}>
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#8b5e56]">
                      {member.role}
                    </p>
                    <p className="text-[11px] text-[#786b69] truncate">
                      {member.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ──────────────────────────────────────────────────────────
              ANIMATED DETAIL PANEL (Appears after clicking any card)
             ────────────────────────────────────────────────────────── */}
          <AnimatePresence mode="wait">
            {selectedMemberId !== null && (
              <motion.div
                key={selectedMemberId}
                initial={{ opacity: 0, y: 24, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: 16, height: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="mt-10 overflow-hidden"
              >
                {(() => {
                  const current = teamMembers.find((m) => m.id === selectedMemberId) || teamMembers[0];

                  return (
                    <div className="bg-white rounded-[36px] border border-[#ede4df] shadow-xl p-8 sm:p-12 text-left relative overflow-hidden">
                      {/* Subtle background glow */}
                      <div className="absolute -top-24 -right-24 w-80 h-80 bg-rose-100/40 rounded-full blur-3xl pointer-events-none" />

                      {/* Header bar of the panel: Badges & Member Switcher Tabs */}
                      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#ede4df]/80 mb-8">
                        <div className="flex items-center space-x-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider border ${current.badgeStyle}`}>
                            {current.badge}
                          </span>
                          <span className="text-xs text-[#786b69] font-medium hidden sm:inline">
                            Founding Member Profile
                          </span>
                        </div>

                        {/* Quick Member Switcher Pills */}
                        <div className="flex items-center space-x-1.5 bg-[#faf7f5] p-1.5 rounded-full border border-[#ede4df]">
                          {teamMembers.map((m) => (
                            <button
                              key={m.id}
                              onClick={() => setSelectedMemberId(m.id)}
                              className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all ${
                                m.id === selectedMemberId
                                  ? 'bg-white text-rose-600 shadow-xs border border-[#ede4df]'
                                  : 'text-[#786b69] hover:text-[#2d2625]'
                              }`}
                            >
                              {m.initials}
                            </button>
                          ))}
                          <button
                            onClick={() => setSelectedMemberId(null)}
                            className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 transition-colors ml-1"
                            title="Close profile drawer"
                            aria-label="Close profile drawer"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Detailed Content Grid */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                        
                        {/* Left Column: Portrait & Direct Contact */}
                        <div className="lg:col-span-4 space-y-6">
                          <div className="relative rounded-[28px] overflow-hidden border border-[#ede4df] shadow-md group">
                            <img
                              src={current.image}
                              alt={current.name}
                              className="w-full h-80 object-cover object-top"
                            />
                            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-white/80 shadow text-left">
                              <p className="text-xs font-bold text-[#2d2625]">{current.name}</p>
                              <p className="text-[11px] text-rose-600 font-semibold">{current.role}</p>
                            </div>
                          </div>

                          {/* Quote box */}
                          <div className="p-5 rounded-2xl bg-[#faf7f5] border border-[#ede4df] relative">
                            <span className="text-2xl text-rose-400 font-serif leading-none absolute -top-1 left-3">“</span>
                            <p className="text-xs text-[#5a4d4b] italic leading-relaxed pt-2">
                              {current.quote}
                            </p>
                          </div>

                          {/* Direct Links */}
                          <div className="flex flex-wrap items-center gap-3">
                            <a
                              href={current.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#faf7f5] border border-[#ede4df] text-xs font-bold text-[#2d2625] hover:bg-white hover:border-slate-300 transition-colors shadow-2xs"
                            >
                              <GithubIcon className="w-3.5 h-3.5" />
                              <span>GitHub</span>
                            </a>
                            <a
                              href={current.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-200/60 text-xs font-bold text-rose-700 hover:bg-rose-100/60 transition-colors shadow-2xs"
                            >
                              <LinkedinIcon className="w-3.5 h-3.5" />
                              <span>LinkedIn</span>
                            </a>
                          </div>
                        </div>

                        {/* Right Column: In-depth Biography & Responsibilities */}
                        <div className="lg:col-span-8 space-y-6">
                          <div className="space-y-2">
                            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-rose-500 font-bold block">
                              STARTUP ROLE & LEADERSHIP
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-medium text-[#2d2625]">
                              {current.name}
                            </h3>
                            <p className="text-sm font-semibold text-[#8b5e56]">
                              {current.focus}
                            </p>
                          </div>

                          <p className="text-sm text-[#5a4d4b] leading-relaxed">
                            {current.bio}
                          </p>

                          {/* Key Responsibilities */}
                          <div className="space-y-3 pt-2">
                            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#2d2625]">
                              Key Areas of Responsibility:
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {current.responsibilities.map((resp, rIdx) => (
                                <div
                                  key={rIdx}
                                  className="p-3.5 rounded-2xl bg-[#faf7f5] border border-[#ede4df] text-xs text-[#5a4d4b] leading-relaxed flex items-start space-x-2.5"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                                  <span>{resp}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Skills & Technologies */}
                          <div className="space-y-2.5 pt-3">
                            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#2d2625]">
                              Specialized Skills & Toolkit:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {current.skills.map((skill, sIdx) => (
                                <span
                                  key={sIdx}
                                  className="px-3 py-1 rounded-xl bg-white border border-[#ede4df] text-xs font-mono text-[#2d2625] shadow-2xs hover:border-rose-300 transition-colors"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                        </div>

                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Team Collaboration Callout */}
          <div className="mt-10 max-w-4xl mx-auto p-5 rounded-2xl bg-white border border-[#ede4df] shadow-2xs text-xs text-[#5a4d4b] leading-relaxed text-center flex items-center justify-center space-x-2">
            <Sparkles className="w-4 h-4 text-rose-500 shrink-0" />
            <span>
              <strong>We 4</strong> — Prarthana Bhandari, Tanvi Suryavanshi, Siddhi Malwadkar & Shravani Nimbalkar — united by a shared vision to design, develop, and launch impactful digital experiences.
            </span>
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 4: CORE ENGINEERING TOOLKIT & DISCIPLINES
         ────────────────────────────────────────────────────────── */}
      <EngineeringToolkit />

      {/* ──────────────────────────────────────────────────────────
          SECTION 5: FLAGSHIP PROJECTS & REPOSITORIES (Rich, Manageable & Interactive)
         ────────────────────────────────────────────────────────── */}
      <FlagshipProjectsShowcase />

      {/* ──────────────────────────────────────────────────────────
          SECTION 6: CONTACT & CONNECT BANNER (Matching Reference)
         ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#fbf8f6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[40px] bg-white border border-[#ede4df] shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Left Column: Contact details & CTA */}
              <div className="lg:col-span-7 p-8 sm:p-14 flex flex-col justify-between text-left space-y-8">
                <div className="space-y-5">
                  <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/60 text-rose-700 text-[11px] font-mono font-bold tracking-wider uppercase">
                    <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                    <span>GET IN TOUCH</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#2d2625] leading-tight">
                    Let's create something{' '}
                    <span className="font-serif italic text-rose-600">extraordinary</span> together.
                  </h2>

                  <p className="text-sm sm:text-base text-[#786b69] leading-relaxed max-w-lg">
                    Whether you have an ambitious digital product in mind, need full-stack architecture & 3D WebGL interfaces, or want to collaborate with our 4-developer engineering team in Pune — our doors are always open.
                  </p>
                </div>

                {/* Contact information details */}
                <div className="space-y-3.5 pt-2">
                  <div className="flex items-center space-x-3 text-xs sm:text-sm text-[#5a4d4b]">
                    <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-600 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="font-mono">prarthanabhandari2003@gmail.com</span>
                    <button
                      onClick={handleCopyEmail}
                      className="ml-2 p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                      title="Copy Email"
                      aria-label="Copy Email to clipboard"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="flex items-center space-x-3 text-xs sm:text-sm text-[#5a4d4b]">
                    <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-600 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span>Pune, Maharashtra, India // Remote Worldwide</span>
                  </div>

                  <div className="flex items-center space-x-3 text-xs sm:text-sm text-[#5a4d4b]">
                    <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-600 shrink-0">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <span>Open for Startup Projects, Client Products & Engineering Roles</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-rose-500 to-[#d48275] text-white text-xs font-bold uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all shadow-md shadow-rose-500/20"
                  >
                    <span>Start a Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="mailto:prarthanabhandari2003@gmail.com"
                    className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-white border border-[#ede4df] text-[#2d2625] text-xs font-bold uppercase tracking-wider hover:bg-slate-50 transition-colors shadow-2xs"
                  >
                    <span>Direct Email</span>
                  </a>

                  <a
                    href="https://novaportfolio.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-5 py-3.5 rounded-full bg-slate-50 border border-slate-200 text-[#473e3d] text-xs font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors"
                  >
                    <span>NovaPortfolio</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                </div>
              </div>

              {/* Right Column: Modern Tech Startup Engineering Studio Workspace */}
              <div className="lg:col-span-5 relative bg-[#faf7f5] border-t lg:border-t-0 lg:border-l border-[#ede4df] overflow-hidden min-h-[360px] lg:min-h-full group">
                <img
                  src="/about/startup-studio-desk.jpg"
                  alt="VOXOR LAB startup engineering studio workspace with code and 3D WebGL displays"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                {/* Aesthetic Floating Studio Glass Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-xl text-left">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-rose-600 font-bold">
                      VOXOR LAB // ENGINEERING STUDIO
                    </span>
                    <span className="flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-mono font-bold border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>4 Developers Active</span>
                    </span>
                  </div>
                  <p className="text-xs font-bold text-[#2d2625]">
                    Engineering digital products with precision, 3D WebGL & heart.
                  </p>
                  <p className="text-[11px] text-[#786b69] mt-0.5 font-sans">
                    Full-Stack Web · 3D Babylon.js · PostgreSQL Architecture · NLP Engines
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
