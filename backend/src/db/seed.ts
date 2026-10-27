import bcrypt from 'bcryptjs';
import { pool } from '../config/database';
import { config } from '../config/env';

export async function runSeed(): Promise<void> {
  console.log('🌱 Starting database seeding...');

  try {
    // 1. Seed Admin User
    const existingAdmin = await pool.query('SELECT id FROM admins WHERE email = $1', [
      config.admin.email,
    ]);

    if (existingAdmin.rowCount === 0) {
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(config.admin.password, salt);

      await pool.query(
        `INSERT INTO admins (name, email, password_hash, role)
         VALUES ($1, $2, $3, $4)`,
        [config.admin.name, config.admin.email, passwordHash, 'admin']
      );
      console.log(`👤 Default admin created: ${config.admin.email}`);
    } else {
      console.log(`👤 Admin ${config.admin.email} already exists.`);
    }

    // 2. Seed Portfolio Projects
    const projectsCount = await pool.query('SELECT count(*) FROM projects');
    if (parseInt(projectsCount.rows[0].count, 10) === 0) {
      const projects = [
        {
          title: 'BookVerse Platform',
          slug: 'bookverse-platform',
          category: 'fullstack',
          category_name: 'Full-Stack Web',
          description:
            'Community reading and structured book review ecosystem engineered with PostgreSQL 15 relational schema, RBAC hierarchy, dynamic themes, and Open Library API.',
          result: 'Sub-85ms Query Latency',
          tech_stack: ['React 19', 'Node.js', 'Express', 'PostgreSQL 15', 'JWT', 'Open Library API'],
          image_url: '/projects/bookverse.png',
          featured: true,
          display_order: 1,
        },
        {
          title: 'Family Travel Tracker',
          slug: 'family-travel-tracker',
          category: 'fullstack',
          category_name: 'Node & PostgreSQL',
          description:
            'Multi-user travel log visualizer with normalized relational tables, country code cross-referencing, and real-time SVG world map updates.',
          result: '195 Countries Mapped',
          tech_stack: ['Node.js', 'Express', 'PostgreSQL 15', 'SVG Map Engine', 'CSS3'],
          image_url: '/projects/family-travel-tracker.png',
          featured: true,
          display_order: 2,
        },
        {
          title: 'GeoQuiz Challenge',
          slug: 'geoquiz-challenge',
          category: 'fullstack',
          category_name: 'Node & PostgreSQL',
          description:
            'Interactive real-time world capital quiz application powered by relational question sets, live session streak scores, and instant feedback.',
          result: 'Sub-40ms Answer Scoring',
          tech_stack: ['Node.js', 'Express', 'PostgreSQL', 'REST API', 'Session State'],
          image_url: '/projects/geoquiz.png',
          featured: true,
          display_order: 3,
        },
        {
          title: 'Keeper Note Workspace',
          slug: 'keeper-app',
          category: 'frontend',
          category_name: 'React & Frontend',
          description:
            'Note organization workspace inspired by Google Keep with reactive card grid rendering, state hooks, and client-side persistence.',
          result: '100% Offline Resilience',
          tech_stack: ['React 19', 'Material-UI Icons', 'CSS Grid', 'LocalStorage'],
          image_url: '/projects/keeper-app.png',
          featured: true,
          display_order: 4,
        },
        {
          title: 'Permalist Task Hub',
          slug: 'permalist-task-hub',
          category: 'fullstack',
          category_name: 'Node & PostgreSQL',
          description:
            'Multi-list task coordination engine with persistent database storage, dynamic list switching, and atomic task state transitions.',
          result: 'Zero Data Loss Architecture',
          tech_stack: ['Node.js', 'Express', 'PostgreSQL', 'EJS Engine', 'Full CRUD'],
          image_url: '/projects/permalist.png',
          featured: true,
          display_order: 5,
        },
        {
          title: 'Simon Game Interactive',
          slug: 'simon-game-interactive',
          category: 'games',
          category_name: 'Games & Interactive',
          description:
            'Interactive memory pattern game built with JavaScript, Web Audio API sound synthesizers, and keyframe animations.',
          result: 'Zero-Latency Web Audio',
          tech_stack: ['JavaScript (ES6+)', 'Web Audio API', 'DOM Engine', 'CSS Keyframes'],
          image_url: '/projects/simon-game.png',
          featured: true,
          display_order: 6,
        },
        {
          title: 'Drum Kit Studio',
          slug: 'drum-kit-studio',
          category: 'games',
          category_name: 'Games & Interactive',
          description:
            'Multi-timbral acoustic drum simulator with low-latency keyboard listeners and polyphonic audio playback.',
          result: 'Full Keyboard Polyphony',
          tech_stack: ['JavaScript ES6', 'HTML5 Audio', 'Event Delegation', 'Haptic Animations'],
          image_url: '/projects/drum-kit.png',
          featured: true,
          display_order: 7,
        },
        {
          title: 'Dice Game Web Challenge',
          slug: 'dice-game-web-challenge',
          category: 'games',
          category_name: 'Games & Interactive',
          description:
            'High-speed randomized competitive dice rolling game with DOM node updates and outcome determination.',
          result: 'Sub-10ms DOM Refresh',
          tech_stack: ['JavaScript', 'DOM Manipulation', 'CSS Flexbox', 'RNG Engine'],
          image_url: '/projects/dice-game.png',
          featured: true,
          display_order: 8,
        },
        {
          title: 'MERN Bistro Platform',
          slug: 'mern-bistro-platform',
          category: 'fullstack',
          category_name: 'Full-Stack Web',
          description:
            'End-to-end culinary storefront and online ordering platform with cart state preservation and category filtering.',
          result: 'Sub-120ms Cart Operations',
          tech_stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'REST API'],
          image_url: '/projects/startup-preview.jpg',
          featured: true,
          display_order: 9,
        },
        {
          title: 'Lingua NLP Platform',
          slug: 'lingua-nlp-platform',
          category: 'ai',
          category_name: 'AI & Linguistics',
          description:
            'Rule-based and intent-classified conversational NLP assistant with semantic tokenization and intent pipelines.',
          result: '420 tok/sec Inference',
          tech_stack: ['Python', 'Flask', 'NLTK / spaCy', 'Vector Search', 'React Frontend'],
          image_url: '/projects/nlp-preview.jpg',
          featured: true,
          display_order: 10,
        },
        {
          title: 'World Flag Quiz',
          slug: 'world-flag-quiz',
          category: 'fullstack',
          category_name: 'Node & PostgreSQL',
          description:
            'Geographic trivia testing visual country flag identification with normalized flag dataset queries and score tracking.',
          result: '100% Query Accuracy',
          tech_stack: ['Node.js', 'Express', 'PostgreSQL', 'EJS', 'RESTful API'],
          image_url: '/projects/geoquiz.png',
          featured: true,
          display_order: 11,
        },
        {
          title: 'Spatial 3D Platform (VOXOR)',
          slug: 'spatial-3d-platform',
          category: 'spatial',
          category_name: '3D & Spatial WebGL',
          description:
            'Physics-driven 3D web environments, procedural lighting, and interactive WebGL shaders for high-end digital experiences.',
          result: '60 FPS Hardware Render',
          tech_stack: ['Three.js', 'Babylon.js', 'WebGL / WebGPU', 'TailwindCSS'],
          image_url: '/projects/startup-preview.jpg',
          featured: true,
          display_order: 12,
        },
      ];

      for (const p of projects) {
        await pool.query(
          `INSERT INTO projects (title, slug, category, category_name, description, result, tech_stack, image_url, featured, display_order)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
          [
            p.title,
            p.slug,
            p.category,
            p.category_name,
            p.description,
            p.result,
            p.tech_stack,
            p.image_url,
            p.featured,
            p.display_order,
          ]
        );
      }
      console.log(`🚀 Seeded ${projects.length} portfolio missions.`);
    } else {
      console.log('🚀 Portfolio projects already seeded.');
    }

    // 3. Seed Services
    const servicesCount = await pool.query('SELECT count(*) FROM services');
    if (parseInt(servicesCount.rows[0].count, 10) === 0) {
      const services = [
        {
          title: 'Premium Website Design',
          slug: 'premium-website-design',
          subtitle: 'Immersive, cinematic digital presences for world-class founders',
          description:
            'We create bespoke, motion-rich web platforms that combine editorial visual rhythm, high-performance interactions, and conversion-engineered layouts.',
          deliverables: ['Custom Art Direction', 'Interactive 3D Elements', 'Motion Design System', 'Responsive Architecture'],
          icon: 'Layout',
          display_order: 1,
        },
        {
          title: 'AI-Powered Applications',
          slug: 'ai-powered-applications',
          subtitle: 'Next-generation intelligent interfaces and workflow tooling',
          description:
            'From generative workflows to autonomous agent co-pilots, we build production AI systems with sub-second feedback loops and intuitive interfaces.',
          deliverables: ['LLM Orchestration', 'Prompt Engineering', 'Vector Database Search', 'Real-time Streaming UI'],
          icon: 'Brain',
          display_order: 2,
        },
        {
          title: 'Mobile App Development',
          slug: 'mobile-app-development',
          subtitle: 'Native and cross-platform mobile experiences that delight users',
          description:
            'Pixel-precise, 120 FPS iOS and Android applications crafted with buttery micro-interactions, offline resilience, and biometric security.',
          deliverables: ['Cross-platform Architecture', 'Haptic Feedback', 'Offline Caching', 'App Store Deployment'],
          icon: 'Smartphone',
          display_order: 3,
        },
        {
          title: 'SaaS Product Development',
          slug: 'saas-product-development',
          subtitle: 'Scalable multi-tenant cloud platforms engineered for hyperscale',
          description:
            'We take SaaS products from zero to one hundred thousand users with robust relational databases, secure billing, and frictionless onboarding.',
          deliverables: ['Multi-tenant Architecture', 'Subscription Billing', 'RBAC Security', 'Realtime Collaboration'],
          icon: 'Cloud',
          display_order: 4,
        },
        {
          title: 'UI/UX Design Systems',
          slug: 'ui-ux-design-systems',
          subtitle: 'Uncompromising design languages and reusable component libraries',
          description:
            'Consistent, mathematically scaled design tokens, comprehensive Figma kits, and matched React/TypeScript component systems.',
          deliverables: ['Design Token Architecture', 'Component Libraries', 'Accessibility (WCAG AAA)', 'Comprehensive Documentation'],
          icon: 'Palette',
          display_order: 5,
        },
        {
          title: 'Digital Strategy',
          slug: 'digital-strategy',
          subtitle: 'Market positioning, user research, and technical roadmaps',
          description:
            'Data-driven product strategy that aligns technical feasibility with commercial viability to outpace competitors and maximize ROI.',
          deliverables: ['Market Landscape Audit', 'Tech Stack Selection', 'Conversion Funnel Design', 'Growth Architecture'],
          icon: 'Compass',
          display_order: 6,
        },
      ];

      for (const s of services) {
        await pool.query(
          `INSERT INTO services (title, slug, subtitle, description, deliverables, icon, display_order)
           VALUES ($1, $2, $3, $4, $5, $6, $7)`,
          [s.title, s.slug, s.subtitle, s.description, s.deliverables, s.icon, s.display_order]
        );
      }
      console.log(`✨ Seeded ${services.length} agency services.`);
    } else {
      console.log('✨ Agency services already seeded.');
    }

    // 4. Seed Testimonials
    const testimonialsCount = await pool.query('SELECT count(*) FROM testimonials');
    if (parseInt(testimonialsCount.rows[0].count, 10) === 0) {
      const testimonials = [
        {
          client_name: 'Elena Rostova',
          designation: 'VP of Product',
          company: 'HyperScale AI (San Francisco)',
          avatar_url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
          content:
            'VOXOR LAB took our product from a clunky prototype to an Apple-grade SaaS interface in under 6 weeks. Our trial-to-paid conversion rate immediately jumped by 48%.',
          project_category: 'AI Application',
          rating: 5,
          display_order: 1,
        },
        {
          client_name: 'Marcus Thorne',
          designation: 'Founder & CEO',
          company: 'Horizon Labs (London)',
          avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
          content:
            'The 3D interactions and claymorphic aesthetics blew our investors away. They are not just developers; they are artists and product architects.',
          project_category: 'SaaS Platform',
          rating: 5,
          display_order: 2,
        },
        {
          client_name: 'Sophie Laurent',
          designation: 'Design Director',
          company: 'Atelier Luxe (Paris)',
          avatar_url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
          content:
            'Working with the team was an absolute masterclass in craft. The attention to typography, micro-animations, and responsive fluidity is unmatched anywhere in the industry.',
          project_category: 'Luxury Brand Website',
          rating: 5,
          display_order: 3,
        },
      ];

      for (const t of testimonials) {
        await pool.query(
          `INSERT INTO testimonials (client_name, designation, company, avatar_url, content, project_category, rating, display_order)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
          [t.client_name, t.designation, t.company, t.avatar_url, t.content, t.project_category, t.rating, t.display_order]
        );
      }
      console.log(`💬 Seeded ${testimonials.length} client testimonials.`);
    } else {
      console.log('💬 Testimonials already seeded.');
    }

    console.log('✅ Seeding complete!');
  } catch (err: any) {
    console.error('❌ Error during seeding:', err.message);
    throw err;
  }
}

if (require.main === module) {
  runSeed()
    .then(() => {
      console.log('🎉 Seeding finished successfully.');
      process.exit(0);
    })
    .catch((err) => {
      console.error('💥 Seeding failed:', err);
      process.exit(1);
    });
}
