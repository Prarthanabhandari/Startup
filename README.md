# VOXOR LAB // Supernova Digital Engineering Studio

VOXOR LAB is a flagship full-stack digital web studio and engineering platform built by Prarthana Bhandari and the founding team (Tanvi Suryavanshi, Siddhi Malwadkar, Shravani Nimbalkar).

The repository follows a clean, decoupled architecture with strict separation between the **Frontend** and **Backend** directories.

---

## 🏛️ Architecture Overview

```
Startup/
├── frontend/                     # Modern React 19 + TypeScript SPA Client
│   ├── public/                   # Public static assets & images
│   │   ├── about/                # Team portraits and workspace photography
│   │   ├── images/               # Floral papercraft card frames & desk vignettes
│   │   ├── projects/             # Nova Portfolio project preview screenshots
│   │   └── voxor-logo.png        # Studio SVG/PNG brand identity
│   ├── src/
│   │   ├── components/           # Modular PascalCase React UI components
│   │   │   ├── Contact.tsx       # Interactive inquiry form with 3D canvas
│   │   │   ├── ContactScene3D.tsx# Babylon.js kinetic 3D ribbon sculpture
│   │   │   ├── Curved3DCarousel.tsx # 3D cylindrical capabilities carousel
│   │   │   ├── EngineeringToolkit.tsx # Interactive technology matrix
│   │   │   ├── FlagshipProjectsShowcase.tsx # Live production project cards
│   │   │   ├── Footer.tsx        # Glassmorphic studio telemetry & newsletter
│   │   │   ├── Hero.tsx          # Cinematic 3D intro stage
│   │   │   ├── Portfolio.tsx     # Zolarys-style 3D showcase
│   │   │   ├── Process.tsx       # Scrollytelling delivery roadmap
│   │   │   ├── ScrollyNavigation.tsx # Route-aware responsive header
│   │   │   ├── ScrollToTop.tsx   # Automatic viewport reset on route switch
│   │   │   ├── Services.tsx      # 3D interactive tilt cards with deep breakdown
│   │   │   ├── TechStackMarquee.tsx # Infinite technology ribbon
│   │   │   ├── WhyUs.tsx         # Engineering discipline & strategy section
│   │   │   ├── Work3DCoverflow.tsx  # 3.2s continuous 3D coverflow carousel
│   │   │   └── WorkPortfolioGrid.tsx # Papercraft floral cards & deep modal
│   │   ├── pages/                # High-level route views
│   │   │   ├── AboutPage.tsx     # Founder journey, degrees & team profiles
│   │   │   ├── ContactPage.tsx   # Direct SLAs, FAQs & inquiry configurator
│   │   │   ├── HomePage.tsx      # Studio landing and flagship experience
│   │   │   ├── ProcessPage.tsx   # Milestones & studio guarantees
│   │   │   ├── ServicesPage.tsx  # Interactive capabilities & specs
│   │   │   └── WorkPage.tsx      # Filterable 12-project archive & 3D carousel
│   │   ├── services/             # Clean API clients & data fetchers
│   │   │   └── api.ts            # Typed HTTP client with fallback resilience
│   │   ├── types/                # Central TypeScript interfaces & schemas
│   │   │   └── index.ts          # Standardized data contracts
│   │   ├── App.tsx               # Client router & global theme provider
│   │   ├── index.css             # Tailwind CSS v4 directives & clay styling
│   │   └── main.tsx              # StrictMode React root mounting
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
├── backend/                      # Production Express.js + PostgreSQL REST API
│   ├── src/
│   │   ├── config/               # Environment & database connection pooling
│   │   │   ├── database.ts       # pg Pool with connection verification
│   │   │   └── env.ts            # Typed env parser with multi-origin CORS
│   │   ├── controllers/          # Request handlers & HTTP responses
│   │   │   ├── analytics.controller.ts
│   │   │   ├── auth.controller.ts
│   │   │   ├── estimate.controller.ts
│   │   │   ├── inquiry.controller.ts
│   │   │   ├── project.controller.ts
│   │   │   ├── service.controller.ts
│   │   │   └── testimonial.controller.ts
│   │   ├── db/                   # Migrations & authentic seed data
│   │   │   ├── migrate.ts        # Idempotent DDL migration script
│   │   │   ├── seed.ts           # 12 Nova portfolio projects & services
│   │   │   └── setup.ts          # Database bootstrap pipeline
│   │   ├── middleware/           # Security, auth, error & validation handlers
│   │   │   ├── auth.middleware.ts
│   │   │   ├── error.middleware.ts
│   │   │   └── validate.middleware.ts
│   │   ├── routes/               # Modular REST route definitions
│   │   │   ├── analytics.routes.ts
│   │   │   ├── auth.routes.ts
│   │   │   ├── estimate.routes.ts
│   │   │   ├── inquiry.routes.ts
│   │   │   ├── project.routes.ts
│   │   │   ├── service.routes.ts
│   │   │   ├── testimonial.routes.ts
│   │   │   └── index.ts          # Central /api router & /health endpoint
│   │   ├── schemas/              # Zod validation schemas
│   │   │   ├── estimate.schema.ts
│   │   │   └── inquiry.schema.ts
│   │   ├── services/             # Business logic & resilient data layers
│   │   │   ├── analytics.service.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── estimate.service.ts
│   │   │   ├── inquiry.service.ts # In-memory fallback queue for zero data loss
│   │   │   ├── project.service.ts
│   │   │   ├── service.service.ts
│   │   │   └── testimonial.service.ts
│   │   ├── types/                # Backend data models & Express types
│   │   │   └── index.ts
│   │   ├── app.ts                # Express application factory & middleware
│   │   └── server.ts             # HTTP server bootstrap & graceful shutdown
│   ├── package.json
│   └── tsconfig.json
│
└── README.md
```

---

## 🚀 Getting Started

### 1. Frontend Development Server
```bash
cd frontend
npm install
npm run dev
```
Accessible at `http://localhost:5173` or `http://localhost:5190`.

### 2. Backend API Server
```bash
cd backend
npm install
npm run dev
```
Accessible at `http://localhost:5000/api`.

### 3. API Health Check
```bash
curl http://localhost:5000/api/health
```

---

## 🎨 Design Philosophy
- **Light Studio Aesthetic:** Clean claymorphic cards, luminous gradients, and velvety maroon floral motifs.
- **Zero Dollar Mentions:** Strictly zero pricing, fees, or monetary packages anywhere on the site.
- **Interactive 3D Stages:** Babylon.js kinetic ribbon sculpture and Three.js 3D coverflow carousel with continuous 3.2s autoplay.
