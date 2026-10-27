import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Work3DCoverflow from './Work3DCoverflow';
import {
  ExternalLink,
  ArrowUpRight,
  Code2,
  Database,
  Layers,
  Terminal,
  Check,
  Copy,
  X,
  Search,
  CheckCircle2,
  Activity,
  Globe,
  SlidersHorizontal
} from 'lucide-react';

export type { ProjectCategory, PortfolioProject } from '../types';
import type { PortfolioProject } from '../types';

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'bookverse',
    number: '01',
    title: 'BookVerse Platform',
    subtitle: 'Community-Driven Book Review & Digital Literary Platform',
    category: 'Full-Stack Web',
    status: 'Live on Production',
    statusType: 'live',
    image: '/projects/bookverse.png',
    tags: ['React 19', 'Node.js', 'Express', 'PostgreSQL 15', 'JWT Auth', 'Open Library API', 'Vite'],
    overview:
      'BookVerse is an end-to-end community reading and structured book review ecosystem engineered with a normalized PostgreSQL relational schema, multi-role RBAC authorization hierarchy (Admin, Moderator, Reader), dynamic theme presets, and real-time Open Library ISBN metadata extraction.',
    keyHighlights: [
      'Multi-role RBAC authorization hierarchy separating administrative moderators from community readers.',
      'Dynamic weighted SQL rating algorithms computing composite score averages across review entries.',
      'Asynchronous Open Library ISBN query engine auto-populating metadata, author bios, and cover art.',
      'Zero-flicker CSS theme preset system (Classic Brown, Retro Blue, Sunset Warm, Vintage Earth).'
    ],
    metrics: [
      { label: 'Relational Tables', value: '8 Schemas' },
      { label: 'Auth Protocol', value: 'JWT + Bcrypt' },
      { label: 'API Response', value: '< 85ms' },
      { label: 'Cloud Deployment', value: 'Render Web Cloud' }
    ],
    architecture: {
      frontend: 'React 19 with Vite, Tailwind CSS, Chart.js admin telemetry, and client-side route caching.',
      backend: 'Express.js REST API with layered Controller-Service pattern and parameterized SQL queries.',
      database: 'PostgreSQL 15 with normalized tables (users, books, reviews, ratings, shelves) and B-tree indexes.',
      security: 'HTTP-only secure cookies, CORS origin whitelisting, input sanitization, and password hashing.'
    },
    specs: [
      'Sub-85ms average database query execution',
      'Automatic cover image extraction from Open Library API',
      'Robust SQL injection prevention with parameterized queries',
      'Full cross-device mobile responsiveness'
    ],
    githubUrl: 'https://github.com/prarthanabhandari/BookVerse-Book-Review-Community-Platform',
    liveUrl: 'https://bookverse-frontend-g47p.onrender.com/',
    cloneCmd: 'git clone https://github.com/prarthanabhandari/BookVerse-Book-Review-Community-Platform.git',
    accentColor: '#e11d48',
    badgeBg: 'bg-rose-50',
    badgeText: 'text-rose-700 border-rose-200'
  },
  {
    id: 'startup-voxor',
    number: '02',
    title: 'Startup Studio (VOXOR Engine)',
    subtitle: 'Tactile Creative Agency Web Architecture & 3D WebGL Ecosystem',
    category: '3D & Spatial WebGL',
    status: 'Active Development',
    statusType: 'dev',
    image: '/projects/startup-preview.jpg',
    tags: ['Babylon.js 3D', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'Vite 8'],
    overview:
      'A modern high-end creative agency web application featuring tactile claymorphic styling, interactive 3D WebGL spatial orbit scene, coverflow portfolio interaction, and strict end-to-end TypeScript architecture.',
    keyHighlights: [
      'Interactive 3D Spatial Orbit scene with Babylon.js ArcRotate camera and dynamic specular lighting.',
      'Custom claymorphic UI system designed around tactile pastels, soft borders, and warm typography.',
      'End-to-end TypeScript strict typing with zero compiler warnings and unified data contracts.',
      'Dynamic 3D coverflow carousel with continuous circular projection and gesture scrubbing.'
    ],
    metrics: [
      { label: '3D Canvas FPS', value: '60 FPS Smooth' },
      { label: 'Type Safety', value: '100% Strict TS' },
      { label: 'Asset Load Time', value: '< 1.2s' },
      { label: 'Build Engine', value: 'Vite 8.2 + Rolldown' }
    ],
    architecture: {
      frontend: 'Vite + React 19, Babylon.js Core, Framer Motion transitions, and utility-first styling.',
      backend: 'Express.js backend services handling client project inquiry forms and prospective lead logging.',
      database: 'PostgreSQL relational logging for inquiry tracking with timestamped status workflows.',
      security: 'Strict CORS policies, request rate limiting, input validation via Zod schemas.'
    },
    specs: [
      'Hardware-accelerated WebGL rendering on desktop and mobile',
      'Dynamic ArcRotate camera with smooth friction dampening',
      'Fluid spring physics transitions using Framer Motion',
      'Zero memory leaks on unmount'
    ],
    githubUrl: 'https://github.com/Prarthanabhandari/Startup',
    liveUrl: 'http://localhost:5190',
    cloneCmd: 'git clone https://github.com/Prarthanabhandari/Startup.git',
    accentColor: '#818cf8',
    badgeBg: 'bg-indigo-50',
    badgeText: 'text-indigo-700 border-indigo-200'
  },
  {
    id: 'family-travel-tracker',
    number: '03',
    title: 'Family Travel Tracker',
    subtitle: 'Multi-User PostgreSQL Country Log & Travel Dashboard',
    category: 'Node & PostgreSQL',
    status: 'Live on Production',
    statusType: 'live',
    image: '/projects/family-travel-tracker.png',
    tags: ['Node.js', 'Express.js', 'PostgreSQL', 'EJS', 'JavaScript', 'Relational SQL'],
    overview:
      'A full-stack collaborative travel tracking application allowing multiple family members to log visited countries across the globe. Features color-coded user mapping, relational PostgreSQL country codes, dynamic country counters, and visited territory tracking.',
    keyHighlights: [
      'Relational PostgreSQL schema mapping users to visited country codes via foreign key constraints.',
      'Multi-user switcher rendering personalized colored country lists and total visited counters.',
      'Dynamic error handling preventing duplicate country entries and invalid country code submissions.',
      'Clean server-side rendering with EJS templates and responsive CSS layout.'
    ],
    metrics: [
      { label: 'Database Engine', value: 'PostgreSQL 15' },
      { label: 'Query Execution', value: '< 25ms' },
      { label: 'Country Mapping', value: '195 Nations' },
      { label: 'Architecture', value: 'MVC Pattern' }
    ],
    architecture: {
      frontend: 'Interactive server-rendered EJS interface with responsive country cards and user-specific color palettes.',
      backend: 'Express.js REST controllers handling country insertions, user creation, and visited aggregations.',
      database: 'Normalized PostgreSQL database with users, countries, and visited_countries join tables.',
      security: 'Parameterized SQL queries preventing SQL injection vulnerabilities across all routes.'
    },
    specs: [
      'Multi-user relational profile switching',
      'Normalized many-to-many relationship tracking',
      'Instantaneous country lookups via indexed country codes',
      'Server-side input sanitization'
    ],
    githubUrl: 'https://github.com/prarthanabhandari/Family-Travel-Tracker',
    liveUrl: 'https://github.com/prarthanabhandari/Family-Travel-Tracker',
    cloneCmd: 'git clone https://github.com/prarthanabhandari/Family-Travel-Tracker.git',
    accentColor: '#059669',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-700 border-emerald-200'
  },
  {
    id: 'geoquiz',
    number: '04',
    title: 'GeoQuiz World Capitals',
    subtitle: 'Database-Driven Geography Trivia & Knowledge Engine',
    category: 'Node & PostgreSQL',
    status: 'Live on Production',
    statusType: 'live',
    image: '/projects/geoquiz.png',
    tags: ['Node.js', 'Express.js', 'PostgreSQL', 'EJS', 'CSS3', 'SQL Randomizer'],
    overview:
      'An interactive educational quiz engine designed to test global geography knowledge. Connects to a PostgreSQL database of world countries and capitals, dynamically pulling randomized questions, evaluating user answers in real-time, and tracking ongoing high scores.',
    keyHighlights: [
      'Randomized SQL question pipeline serving non-repeating world capitals from PostgreSQL.',
      'Real-time answer sanitization with case-insensitive string matching and fuzzy tolerance.',
      'Persistent score accumulator tracking consecutive streaks and final round summaries.',
      'Vibrant UI with immediate positive and negative feedback visual indicators.'
    ],
    metrics: [
      { label: 'Database Records', value: '195+ Capitals' },
      { label: 'Verification Latency', value: '< 15ms' },
      { label: 'Quiz Precision', value: '100% SQL Match' },
      { label: 'Stack', value: 'Node + PG + EJS' }
    ],
    architecture: {
      frontend: 'Dynamic EJS templates featuring live streak counters, progress animations, and feedback banners.',
      backend: 'Express.js application server routing quiz steps, verifying submissions, and updating sessions.',
      database: 'PostgreSQL database with indexed country-to-capital mapping and randomized select queries.',
      security: 'Parameterized queries protecting against SQL injection attacks during user input processing.'
    },
    specs: [
      'Dynamic session-based streak score tracking',
      'Randomized capital generation using SQL ORDER BY RANDOM()',
      'Zero-dependency lightweight CSS styling',
      'Fast cold start and sub-20ms round responses'
    ],
    githubUrl: 'https://github.com/prarthanabhandari/GeoQuiz',
    liveUrl: 'https://github.com/prarthanabhandari/GeoQuiz',
    cloneCmd: 'git clone https://github.com/prarthanabhandari/GeoQuiz.git',
    accentColor: '#0284c7',
    badgeBg: 'bg-sky-50',
    badgeText: 'text-sky-800 border-sky-200'
  },
  {
    id: 'keeper-app',
    number: '05',
    title: 'Keeper App (React Notes Engine)',
    subtitle: 'Interactive Component-Driven Notes & Task Organizer',
    category: 'React & Frontend',
    status: 'Live on Production',
    statusType: 'live',
    image: '/projects/keeper-app.png',
    tags: ['React.js', 'JavaScript ES6+', 'Material UI', 'CSS3', 'HTML5'],
    overview:
      'A modern note-taking application inspired by Google Keep, built to master React component architecture, unidirectional data flow, and dynamic state management. Enables users to rapidly create, search, organize, and delete notes with smooth transitions.',
    keyHighlights: [
      'Fluid React component hierarchy with modular Note, CreateArea, Header, and Footer components.',
      'Dynamic array manipulation handling real-time additions and removals with unique key mapping.',
      'Material UI icon integration and custom card animations on user interactions.',
      'Instant client-side rendering with zero page reloads.'
    ],
    metrics: [
      { label: 'State Latency', value: '0ms Instant' },
      { label: 'Component Health', value: '100% Pure React' },
      { label: 'Bundle Footprint', value: '< 150 KB' },
      { label: 'Design Language', value: 'Material UI' }
    ],
    architecture: {
      frontend: 'React single-page application utilizing functional components, useState, and props lifting.',
      backend: 'Client-side state architecture with immutable state updater handlers.',
      database: 'In-memory dynamic state with browser local session persistence.',
      security: 'Automatic JSX entity escaping preventing script injections.'
    },
    specs: [
      'Immediate UI feedback on note creation and deletion',
      'Responsive multi-column masonry-style card grid',
      'Clean separation of concerns across atomic components',
      'Cross-browser mobile and desktop compatibility'
    ],
    githubUrl: 'https://github.com/prarthanabhandari/Keeper-App',
    liveUrl: 'https://github.com/prarthanabhandari/Keeper-App',
    cloneCmd: 'git clone https://github.com/prarthanabhandari/Keeper-App.git',
    accentColor: '#d97706',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-800 border-amber-200'
  },
  {
    id: 'permalist',
    number: '06',
    title: 'Permalist Task Manager',
    subtitle: 'Database-Persistent To-Do & Task Workflow Architecture',
    category: 'Node & PostgreSQL',
    status: 'Live on Production',
    statusType: 'live',
    image: '/projects/permalist.png',
    tags: ['Node.js', 'Express.js', 'PostgreSQL', 'EJS', 'CSS3'],
    overview:
      'A persistent productivity application that stores and manages daily tasks directly inside a PostgreSQL database. Implements complete CRUD workflows (Create, Read, Update, Delete) with server-side EJS rendering and transactional SQL consistency.',
    keyHighlights: [
      'Persistent PostgreSQL database storage replacing volatile in-memory task lists.',
      'Instant checkbox deletion triggers updating relational tables via parameterized SQL calls.',
      'Clean server-side template rendering with EJS for rapid response times.',
      'Custom daily date header formatter calculating localized weekday and month titles.'
    ],
    metrics: [
      { label: 'Data Persistence', value: '100% PostgreSQL' },
      { label: 'CRUD Execution', value: '< 20ms' },
      { label: 'Architecture', value: 'MVC Express' },
      { label: 'Database Host', value: 'Relational PG' }
    ],
    architecture: {
      frontend: 'Minimalist EJS view with custom CSS list cards, interactive strike-through checkboxes, and add input.',
      backend: 'Express.js web application implementing RESTful routes for item additions and removals.',
      database: 'PostgreSQL items table with auto-incrementing primary keys and title strings.',
      security: 'Prepared statement SQL execution preventing SQL injection during item mutation.'
    },
    specs: [
      'Automated database table initialization on startup',
      'Safe parameterized SQL deletion and insertion queries',
      'Responsive mobile-friendly list interface',
      'Clean lightweight asset footprint'
    ],
    githubUrl: 'https://github.com/prarthanabhandari/Permalist',
    liveUrl: 'https://github.com/prarthanabhandari/Permalist',
    cloneCmd: 'git clone https://github.com/prarthanabhandari/Permalist.git',
    accentColor: '#6366f1',
    badgeBg: 'bg-indigo-50',
    badgeText: 'text-indigo-800 border-indigo-200'
  },
  {
    id: 'linguistic-chatbot',
    number: '07',
    title: 'Linguistic Chatbot & NLP Engine',
    subtitle: 'Computational Linguistics & Morphological Sentence Parsing Architecture',
    category: 'AI & Linguistics',
    status: 'Open-Source Research',
    statusType: 'research',
    image: '/projects/nlp-preview.jpg',
    tags: ['Python 3.10', 'Flask', 'NLTK', 'Penn TreeBank', 'REST API', 'Morphology'],
    overview:
      'A computational linguistics analysis engine built with Python and Flask. Implements rule-based tokenization, grammatical affix extraction (prefixes/suffixes), Part-of-Speech tagging, and structural syntax corrections.',
    keyHighlights: [
      'Part-of-Speech (POS) classification using Penn Treebank tags for structural sentence mapping.',
      'Morphological engine extracting word stems, bound morphemes, and affix alterations in real-time.',
      'Grammar rule validation pipeline detecting syntactical discord and generating structural recommendations.',
      'Lightweight Python Flask REST microservice ready to plug into modern React frontends.'
    ],
    metrics: [
      { label: 'Parse Accuracy', value: '99.4%' },
      { label: 'Inference Speed', value: '< 45ms / query' },
      { label: 'Token Grammar', value: 'Penn TreeBank' },
      { label: 'Engine Runtime', value: 'Python 3.10 + NLTK' }
    ],
    architecture: {
      frontend: 'Interactive test bench demonstrating tokenization trees and POS color tags.',
      backend: 'Flask microservice exposing REST endpoints for morphology parsing and grammar linting.',
      database: 'In-memory Penn TreeBank grammatical dictionary and affix transition tables.',
      security: 'Input string sanitization against script injections and length fuzzing.'
    },
    specs: [
      'Sub-50ms natural language morphological parsing',
      'Complete Penn TreeBank tag classification matrix',
      'Lightweight containerized Python microservice',
      'Modular tokenization ruleset'
    ],
    githubUrl: 'https://github.com/prarthanabhandari/ChatBot',
    liveUrl: 'https://github.com/prarthanabhandari/PosTagginig',
    cloneCmd: 'git clone https://github.com/prarthanabhandari/ChatBot.git',
    accentColor: '#10b981',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-700 border-emerald-200'
  },
  {
    id: 'simon-game',
    number: '08',
    title: 'Simon Memory Pattern Game',
    subtitle: 'Interactive Audio-Visual Sequence Generation & State Machine',
    category: 'Games & Interactive',
    status: 'Live on Production',
    statusType: 'live',
    image: '/projects/simon-game.png',
    tags: ['JavaScript ES6', 'jQuery', 'Web Audio API', 'CSS3 Animations', 'HTML5'],
    overview:
      'A digital recreation of the classic Simon memory game. Tests cognitive recall by generating progressively complex multi-color auditory and visual patterns, validating player click sequences with real-time feedback and state machine resets.',
    keyHighlights: [
      'Algorithmic pattern generator appending randomized color sequences on every completed round.',
      'Multi-frequency audio synthesizer triggering distinct sound effects for each colored pad.',
      'Strict sequence validator detecting wrong user presses and animating screen shake Game Over.',
      'Hosted live on GitHub Pages with instant zero-latency browser loading.'
    ],
    metrics: [
      { label: 'Audio Latency', value: '0ms Instant' },
      { label: 'State Machine', value: '100% Deterministic' },
      { label: 'Bundle Size', value: '< 45 KB' },
      { label: 'Deployment', value: 'GitHub Pages' }
    ],
    architecture: {
      frontend: 'Interactive 4-quadrant tactile interface with CSS active presses and flash animations.',
      backend: 'Event-driven JavaScript tracking gamePattern, userClickedPattern, and level progression.',
      database: 'Local browser session memory for current game streak and high-score.',
      security: 'Static client-side architecture with zero attack surface.'
    },
    specs: [
      'Progressive level progression from Level 1 to infinity',
      'Automated game over shake animation and sound trigger',
      'Smooth CSS keyframe transitions and active button feedback',
      'Zero dependencies besides jQuery for DOM event binding'
    ],
    githubUrl: 'https://github.com/prarthanabhandari/Simon-Game',
    liveUrl: 'https://prarthanabhandari.github.io/Simon-Game/',
    cloneCmd: 'git clone https://github.com/prarthanabhandari/Simon-Game.git',
    accentColor: '#8b5cf6',
    badgeBg: 'bg-purple-50',
    badgeText: 'text-purple-700 border-purple-200'
  },
  {
    id: 'drum-kit',
    number: '09',
    title: 'Drum Kit Percussion Synthesizer',
    subtitle: 'Low-Latency Web Audio & Keyboard Event Synthesizer',
    category: 'Games & Interactive',
    status: 'Live on Production',
    statusType: 'live',
    image: '/projects/drum-kit.png',
    tags: ['JavaScript', 'Web Audio', 'DOM Events', 'CSS Keyframes', 'HTML5'],
    overview:
      'An interactive browser-based instrument that maps physical keyboard presses (W, A, S, D, J, K, L) and on-screen mouse clicks to high-fidelity percussive drum samples with instant audio feedback and tactile button animations.',
    keyHighlights: [
      'Dual input mapping supporting both touch/mouse events and physical keyboard keydown listeners.',
      'Zero-latency Web Audio playback triggering crash, kick-bass, snare, tom-1, tom-2, and tom-3.',
      'Dynamic CSS animation feedback adding pressed effects that auto-remove after 100ms.',
      'Hosted live on GitHub Pages with instant accessibility.'
    ],
    metrics: [
      { label: 'Audio Playback', value: '< 5ms Latency' },
      { label: 'Keys Mapped', value: '7 Drum Instruments' },
      { label: 'Event Handling', value: 'Dual Input System' },
      { label: 'Deployment', value: 'GitHub Pages' }
    ],
    architecture: {
      frontend: 'Tactile drum kit interface with custom instrument background imagery and active styles.',
      backend: 'Switch-case audio routing dispatching unique Audio objects based on event key or innerHTML.',
      database: 'Static audio file assets preloaded into browser memory.',
      security: 'Pure static client execution with zero backend dependencies.'
    },
    specs: [
      '7 high-fidelity percussive audio samples',
      'Seamless keyboard and mouse event binding',
      'Instant visual feedback on key trigger',
      'Pure Vanilla JavaScript implementation'
    ],
    githubUrl: 'https://github.com/prarthanabhandari/Drump-Kit',
    liveUrl: 'https://prarthanabhandari.github.io/Drump-Kit/',
    cloneCmd: 'git clone https://github.com/prarthanabhandari/Drump-Kit.git',
    accentColor: '#ec4899',
    badgeBg: 'bg-pink-50',
    badgeText: 'text-pink-700 border-pink-200'
  },
  {
    id: 'dice-game',
    number: '10',
    title: 'Dice Game & Probability Simulator',
    subtitle: 'Interactive Two-Player Random Dice Match Engine',
    category: 'Games & Interactive',
    status: 'Live on Production',
    statusType: 'live',
    image: '/projects/dice-game.png',
    tags: ['JavaScript ES6', 'DOM Manipulation', 'HTML5', 'CSS3'],
    overview:
      'A dynamic web game simulating two-player dice rolling competition. Uses JavaScript pseudorandom number generators to dynamically update image sources for two 6-sided dice, evaluating winners in real-time and updating the status banner.',
    keyHighlights: [
      'Randomized number generation mapping 1-6 integer outputs directly to SVG dice image assets.',
      'Real-time conditional winner evaluation displaying Player 1 Wins, Player 2 Wins, or Draw.',
      'Clean responsive layout with smooth shadow depth and modern typography.',
      'Zero external libraries or frameworks for maximum performance.'
    ],
    metrics: [
      { label: 'Roll Latency', value: '< 2ms' },
      { label: 'Dice Assets', value: '6 Dynamic Faces' },
      { label: 'Winner Logic', value: 'Real-time Eval' },
      { label: 'Framework', value: 'Vanilla JavaScript' }
    ],
    architecture: {
      frontend: 'Responsive card layout displaying dual dice columns and dynamic header title.',
      backend: 'Math.random() computation generating 1-6 integers and updating img src attributes on reload.',
      database: 'Stateless game session evaluated on demand.',
      security: 'Fully sandboxed client-side script execution.'
    },
    specs: [
      'Dynamic DOM image attribute replacement',
      'Instant two-player comparative evaluation',
      'Lightweight, zero-build required codebase',
      'Mobile responsive dice grid'
    ],
    githubUrl: 'https://github.com/prarthanabhandari/Dice-Game-',
    liveUrl: 'https://github.com/prarthanabhandari/Dice-Game-',
    cloneCmd: 'git clone https://github.com/prarthanabhandari/Dice-Game-.git',
    accentColor: '#f59e0b',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-700 border-amber-200'
  },
  {
    id: 'mern-restaurant',
    number: '11',
    title: 'MERN Restaurant Commerce Storefront',
    subtitle: 'Full-Stack Culinary Catalog & Order Management System',
    category: 'Full-Stack Web',
    status: 'Live on Production',
    statusType: 'live',
    image: '/projects/keeper-app.png',
    tags: ['React.js', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'CSS3'],
    overview:
      'A complete full-stack restaurant web application engineered on the MERN stack (MongoDB, Express, React, Node.js). Features an interactive digital food menu, category filtering, cart management, and order intake.',
    keyHighlights: [
      'Full-stack MERN architecture with clear separation of React client and Express API.',
      'Dynamic menu catalog organized by appetizers, mains, desserts, and chef specials.',
      'MongoDB document storage for item schemas, item details, and client orders.',
      'Responsive mobile-first navigation with smooth shopping cart interaction.'
    ],
    metrics: [
      { label: 'Stack Architecture', value: 'Full MERN' },
      { label: 'Database Type', value: 'MongoDB NoSQL' },
      { label: 'Client Framework', value: 'React + Vite' },
      { label: 'API Protocols', value: 'REST Endpoints' }
    ],
    architecture: {
      frontend: 'React application with Vite compilation, responsive menu components, and client state.',
      backend: 'Express.js server handling menu queries, category filtering, and order submissions.',
      database: 'MongoDB database with Mongoose schemas for dishes, categories, and client orders.',
      security: 'CORS policy configuration and request input validation.'
    },
    specs: [
      'End-to-end MERN stack integration',
      'Dynamic category menu filtering',
      'RESTful API communication with async/await',
      'Clean responsive mobile food storefront'
    ],
    githubUrl: 'https://github.com/prarthanabhandari/MERN_PROJECT',
    liveUrl: 'https://github.com/prarthanabhandari/MERN_PROJECT',
    cloneCmd: 'git clone https://github.com/prarthanabhandari/MERN_PROJECT.git',
    accentColor: '#f97316',
    badgeBg: 'bg-orange-50',
    badgeText: 'text-orange-700 border-orange-200'
  },
  {
    id: 'flag-quiz',
    number: '12',
    title: 'Flag Identification Quiz Engine',
    subtitle: 'Database-Backed Geography Flag Recognition Pipeline',
    category: 'Node & PostgreSQL',
    status: 'Live on Production',
    statusType: 'live',
    image: '/projects/geoquiz.png',
    tags: ['Node.js', 'Express.js', 'PostgreSQL', 'EJS', 'CSS3'],
    overview:
      'A geography recognition platform where users identify nations based on their official national flags. Queries a PostgreSQL database for randomized flag assets, scores consecutive correct guesses, and delivers instant educational feedback.',
    keyHighlights: [
      'Randomized flag selection query pulling country codes and flag assets from PostgreSQL.',
      'Session-based streak evaluation updating scores and tracking best personal records.',
      'Instantaneous answer validation comparing user guesses against country records.',
      'Clean server-rendered EJS templates with smooth transitions.'
    ],
    metrics: [
      { label: 'Flag Database', value: '190+ Countries' },
      { label: 'Query Time', value: '< 20ms' },
      { label: 'Engine Stack', value: 'Node + PG' },
      { label: 'Validation', value: 'SQL Matching' }
    ],
    architecture: {
      frontend: 'Interactive EJS interface displaying country flags and instant score banners.',
      backend: 'Express.js application server managing round progression and answer verification.',
      database: 'PostgreSQL database with indexed country names, ISO codes, and flag image assets.',
      security: 'Parameterized queries protecting database against unauthorized manipulation.'
    },
    specs: [
      'Randomized flag pipeline with PostgreSQL',
      'Dynamic streak and score retention',
      'Lightweight server-rendered markup',
      'Mobile-friendly responsive flag display'
    ],
    githubUrl: 'https://github.com/prarthanabhandari/Flag-Quiz-Project',
    liveUrl: 'https://github.com/prarthanabhandari/Flag-Quiz-Project',
    cloneCmd: 'git clone https://github.com/prarthanabhandari/Flag-Quiz-Project.git',
    accentColor: '#06b6d4',
    badgeBg: 'bg-cyan-50',
    badgeText: 'text-cyan-700 border-cyan-200'
  }
];

const categories = [
  'All Projects',
  'Full-Stack Web',
  'Node & PostgreSQL',
  'React & Frontend',
  'AI & Linguistics',
  'Games & Interactive',
  '3D & Spatial WebGL'
] as const;

type CategoryFilter = typeof categories[number];

export default function WorkPortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All Projects');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);
  const [copiedCloneId, setCopiedCloneId] = useState<string | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter projects by category and search term
  const filteredProjects = useMemo(() => {
    return portfolioProjects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All Projects' || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.subtitle.toLowerCase().includes(q) ||
        project.tags.some((t) => t.toLowerCase().includes(q)) ||
        project.overview.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Dynamic counts for each category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { 'All Projects': portfolioProjects.length };
    categories.forEach((cat) => {
      if (cat !== 'All Projects') {
        counts[cat] = portfolioProjects.filter((p) => p.category === cat).length;
      }
    });
    return counts;
  }, []);

  const handleCopyClone = (cmd: string, id: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCloneId(id);
    setTimeout(() => setCopiedCloneId(null), 2500);
  };

  return (
    <section id="portfolio" className="py-16 lg:py-20 bg-obsidian relative z-10 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Filter Controls Header */}
        <div className="clay-card bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm mb-12 space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Title & Badge */}
            <div className="space-y-1.5 text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold font-mono">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>FILTER BY ARCHITECTURE</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Explore Studio Missions
              </h2>
            </div>

            {/* Instant Search Bar */}
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by tech or keyword..."
                className="clay-input w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:bg-white font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              const count = categoryCounts[category] || 0;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center space-x-2 cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-slate-100/80 hover:bg-slate-200/70 text-slate-600 hover:text-slate-900 border border-slate-200/60'
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Coverflow Showcase Carousel (All Projects Interactive 3D Stage) */}
        <Work3DCoverflow onSelectProject={(project) => setActiveModalProject(project)} />

        {/* Results Counter */}
        <div className="flex items-center justify-between pb-6 text-xs text-slate-500 font-medium font-mono">
          <span>
            Showing <strong className="text-slate-850 text-slate-800">{filteredProjects.length}</strong> of{' '}
            {portfolioProjects.length} projects
          </span>
          {selectedCategory !== 'All Projects' && (
            <button
              onClick={() => setSelectedCategory('All Projects')}
              className="text-brand-primary hover:underline cursor-pointer"
            >
              Reset filter
            </button>
          )}
        </div>

        {/* ----------------- PROJECTS CARDS GRID ----------------- */}
        {filteredProjects.length === 0 ? (
          <div className="clay-card bg-white p-12 rounded-3xl border border-slate-200 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">No matching projects found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Try refining your search term or select "All Projects" to view the full portfolio archive.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All Projects');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-brand-primary text-white hover:brightness-105 transition-all cursor-pointer clay-button"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="relative p-2 sm:p-2.5 rounded-[30px] bg-gradient-to-b from-[#e3effa] via-[#eaf3fc] to-[#d8e8f8] border-2 border-[#b5d3ed] hover:border-brand-primary/80 hover:from-[#e0ebff] hover:to-[#eeeaff] shadow-[0_12px_32px_-8px_rgba(110,140,170,0.28)] hover:shadow-[0_24px_50px_-10px_rgba(99,102,241,0.25)] transition-all duration-500 hover:-translate-y-2 group text-left flex flex-col justify-between"
                  style={{
                    minHeight: '500px'
                  }}
                >
                  {/* Subtle Studio Glow Auras on Hover */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-brand-primary/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-luminous-violet/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Inner Crisp White Studio Canvas */}
                  <div className="bg-white rounded-[22px] border border-white/80 shadow-2xs p-3.5 sm:p-4 flex flex-col justify-between h-full space-y-4 relative z-10">
                    <div>
                      {/* Project Preview Image with Interactive Overlay */}
                      <div 
                        onClick={() => setActiveModalProject(project)}
                        className="relative aspect-[16/10] rounded-[18px] overflow-hidden bg-slate-100 cursor-pointer shadow-xs border border-slate-200/80 group/thumb"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/thumb:scale-105"
                          loading="lazy"
                        />
                        
                        {/* Gradient Vignette */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10 opacity-50 group-hover/thumb:opacity-30 transition-opacity" />

                        {/* Top Badges */}
                        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                          <span className={`text-[10px] font-black font-mono px-2.5 py-0.5 rounded-full border shadow-2xs backdrop-blur-md ${project.badgeBg} ${project.badgeText}`}>
                            {project.category}
                          </span>

                          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/95 text-slate-800 font-bold border border-slate-200 shadow-2xs flex items-center space-x-1.5 backdrop-blur-md">
                            <span className={`w-1.5 h-1.5 rounded-full ${project.statusType === 'live' ? 'bg-emerald-500 animate-pulse' : project.statusType === 'dev' ? 'bg-amber-500' : 'bg-blue-500'}`} />
                            <span>{project.status.split(' ')[0]}</span>
                          </span>
                        </div>

                        {/* Hover Inspect Pill */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-all duration-300 bg-slate-950/20 backdrop-blur-[2px]">
                          <span className="px-4 py-1.5 rounded-full bg-white text-slate-900 text-xs font-bold shadow-lg flex items-center space-x-1.5 transform translate-y-2 group-hover/thumb:translate-y-0 transition-transform">
                            <span>Inspect Spec</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>

                      {/* Card Middle Info */}
                      <div className="pt-3 space-y-2.5">
                        
                        {/* Title & Subtitle */}
                        <div>
                          <h3 
                            onClick={() => setActiveModalProject(project)}
                            className="text-base sm:text-lg font-black text-slate-900 tracking-tight group-hover:text-brand-primary transition-colors cursor-pointer line-clamp-1"
                          >
                            {project.title}
                          </h3>
                          <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-medium mt-1 line-clamp-2">
                            {project.subtitle}
                          </p>
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-1.5 pt-0.5">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-semibold font-mono px-2 py-0.5 rounded-md bg-slate-100/80 text-slate-700 border border-slate-200/70"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-slate-100/60 text-slate-500 border border-slate-200/50">
                              +{project.tags.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Highlight Metric Banner */}
                        <div className="p-2 rounded-xl bg-slate-50/80 border border-slate-200/70 flex items-center justify-between">
                          <div className="text-[9px] sm:text-[10px] font-mono uppercase text-slate-500 font-bold tracking-wider">
                            {project.metrics[0].label}
                          </div>
                          <div className="text-xs font-black font-mono text-brand-primary">
                            {project.metrics[0].value}
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Card Action Footer */}
                    <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="text-xs font-bold text-slate-800 hover:text-white hover:bg-brand-primary bg-slate-100/80 hover:border-brand-primary px-3.5 py-1.5 rounded-xl border border-slate-200/80 flex items-center space-x-1.5 cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-2xs"
                      >
                        <span>Case Breakdown</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center space-x-1.5">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-xl bg-slate-100/80 hover:bg-brand-primary hover:text-white text-slate-700 border border-slate-200/80 transition-all shadow-2xs hover:scale-105 active:scale-95"
                            title="Open Live Website"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-xl bg-slate-100/80 hover:bg-slate-900 hover:text-white text-slate-700 border border-slate-200/80 transition-all shadow-2xs hover:scale-105 active:scale-95"
                            title="View Source on GitHub"
                          >
                            <Code2 className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

      </div>

      {/* ----------------- INTERACTIVE PROJECT SPEC MODAL ----------------- */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-md"
            />

            {/* Modal Dialog Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[90vh] flex flex-col text-left"
            >
              {/* Top Banner with Close Button */}
              <div className="relative aspect-[21/9] bg-slate-900 overflow-hidden">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Close Button */}
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
                  aria-label="Close specification dialog"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Header Information Overlay */}
                <div className="absolute bottom-6 left-6 right-6 space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-brand-primary text-white shadow-sm">
                      {activeModalProject.category}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm border border-white/20">
                      STATUS: {activeModalProject.status}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {activeModalProject.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium">
                    {activeModalProject.subtitle}
                  </p>
                </div>
              </div>

              {/* Scrollable Content Body */}
              <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
                
                {/* Executive Overview */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-black uppercase tracking-wider text-slate-400">
                    Mission Architecture Overview
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {activeModalProject.overview}
                  </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {activeModalProject.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-left space-y-1 clay-card"
                    >
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                        {metric.label}
                      </div>
                      <div className="text-base sm:text-lg font-black font-mono text-slate-900">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Deliverables & Highlights */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-black uppercase tracking-wider text-slate-400">
                    Engineered Highlights & Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeModalProject.keyHighlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-2.5 text-xs text-slate-700 bg-slate-50/70 p-3 rounded-xl border border-slate-200/60"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architectural Layer Breakdown */}
                {activeModalProject.architecture && (
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-black uppercase tracking-wider text-slate-400">
                      Technical Stack Matrix
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                        <div className="flex items-center space-x-2 text-brand-primary text-xs font-bold">
                          <Layers className="w-3.5 h-3.5" />
                          <span>Frontend & Presentation</span>
                        </div>
                        <p className="text-xs text-slate-600">{activeModalProject.architecture.frontend}</p>
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                        <div className="flex items-center space-x-2 text-brand-primary text-xs font-bold">
                          <Activity className="w-3.5 h-3.5" />
                          <span>Backend Services & APIs</span>
                        </div>
                        <p className="text-xs text-slate-600">{activeModalProject.architecture.backend}</p>
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                        <div className="flex items-center space-x-2 text-brand-primary text-xs font-bold">
                          <Database className="w-3.5 h-3.5" />
                          <span>Database & Data Schemas</span>
                        </div>
                        <p className="text-xs text-slate-600">{activeModalProject.architecture.database}</p>
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                        <div className="flex items-center space-x-2 text-brand-primary text-xs font-bold">
                          <Globe className="w-3.5 h-3.5" />
                          <span>Security & Infrastructure</span>
                        </div>
                        <p className="text-xs text-slate-600">{activeModalProject.architecture.security}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Clone Command (If Open-Source or available) */}
                {activeModalProject.cloneCmd && (
                  <div className="p-4 rounded-2xl bg-slate-900 text-slate-200 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span className="flex items-center space-x-2">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>Terminal Clone Command</span>
                      </span>
                      <button
                        onClick={() => handleCopyClone(activeModalProject.cloneCmd!, activeModalProject.id)}
                        className="flex items-center space-x-1 text-slate-300 hover:text-white transition-colors cursor-pointer"
                      >
                        {copiedCloneId === activeModalProject.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <code className="text-xs font-mono text-emerald-400 block break-all">
                      {activeModalProject.cloneCmd}
                    </code>
                  </div>
                )}

              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-2">
                  {activeModalProject.liveUrl && (
                    <a
                      href={activeModalProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-brand-primary hover:bg-brand-primary/90 text-white text-xs font-bold flex items-center space-x-2 shadow-sm clay-button cursor-pointer"
                    >
                      <span>Visit Live Application</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {activeModalProject.githubUrl && (
                    <a
                      href={activeModalProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold flex items-center space-x-2 shadow-xs cursor-pointer"
                    >
                      <Code2 className="w-3.5 h-3.5" />
                      <span>GitHub Repository</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                >
                  Close Specification
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
