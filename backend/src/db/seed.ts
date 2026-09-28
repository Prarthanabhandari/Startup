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
          title: 'Nexus AI Studio',
          slug: 'nexus-ai-studio',
          category: 'ai',
          category_name: 'AI Application',
          description:
            'Generative intelligence platform engineered with real-time neural inference, multi-modal workflows, and high-frequency canvas rendering.',
          result: '4.8x Workflow Efficiency',
          tech_stack: ['Next.js 14', 'Python / FastAPI', 'WebGL', 'TailwindCSS'],
          image_url:
            'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
          featured: true,
          display_order: 1,
        },
        {
          title: 'Aura Flow Mobile',
          slug: 'aura-flow-mobile',
          category: 'mobile',
          category_name: 'Mobile App',
          description:
            'Fluid ambient task orchestra and biometric cognitive scheduler designed for asynchronous team collaboration and flow state.',
          result: '2.5M Active Monthly Users',
          tech_stack: ['React Native', 'Swift', 'Node.js', 'PostgreSQL'],
          image_url:
            'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80',
          featured: true,
          display_order: 2,
        },
        {
          title: 'HyperPay FinTech',
          slug: 'hyperpay-fintech',
          category: 'fintech',
          category_name: 'Fintech Dashboard',
          description:
            'Institutional-grade treasury settlement interface with millisecond latency, sub-second ledger reconciliation, and cryptographic proof verification.',
          result: '$4.2B Quarterly Volume',
          tech_stack: ['TypeScript', 'Golang', 'PostgreSQL', 'Three.js'],
          image_url:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
          featured: true,
          display_order: 3,
        },
        {
          title: 'Prism Cloud SaaS',
          slug: 'prism-cloud-saas',
          category: 'saas',
          category_name: 'SaaS Platform',
          description:
            'Multi-tenant cloud infrastructure intelligence console with automated failover routing, telemetry telemetry visualizations, and zero-trust policy orchestration.',
          result: '99.999% SLA Uptime',
          tech_stack: ['React', 'Express', 'Docker', 'GraphQL'],
          image_url:
            'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
          featured: true,
          display_order: 4,
        },
        {
          title: 'Chrono Atelier',
          slug: 'chrono-atelier',
          category: 'luxury',
          category_name: 'Luxury Brand Website',
          description:
            'Hyper-tactile digital showroom and bespoke configurator for Swiss independent horology houses with photorealistic 3D ray-tracing.',
          result: '+180% Inbound Inquiries',
          tech_stack: ['Babylon.js', 'Vite', 'GLSL Shaders', 'TailwindCSS'],
          image_url:
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
          featured: true,
          display_order: 5,
        },
        {
          title: 'Quantum Edge Commerce',
          slug: 'quantum-edge-commerce',
          category: 'ecommerce',
          category_name: 'E-commerce Experience',
          description:
            'Headless micro-frontend commerce ecosystem with predictive pre-caching, sub-second checkout, and dynamic personalization engine.',
          result: '3.2x Conversion Multiplier',
          tech_stack: ['Shopify Plus', 'Hydrogen', 'Redis', 'TailwindCSS'],
          image_url:
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
          featured: true,
          display_order: 6,
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
