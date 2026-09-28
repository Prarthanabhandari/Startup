# VOXOR LAB Backend API

Production-ready backend API service for **VOXOR LAB / Supernova Digital Agency** built with **Node.js**, **Express**, **TypeScript**, and **PostgreSQL**.

---

## 🏛️ Architecture & Folder Structure

```
backend/
├── .env                            # Active environment configuration
├── .env.example                    # Environment configuration template
├── package.json                    # Dependencies & npm scripts
├── tsconfig.json                   # TypeScript compiler configuration
├── dist/                           # Compiled production JavaScript
└── src/
    ├── app.ts                      # Express app factory (CORS, Helmet, Morgan, parsers)
    ├── server.ts                   # Server entrypoint with DB connection & graceful shutdown
    ├── config/
    │   ├── env.ts                  # Type-safe environment variables parser
    │   └── database.ts             # PostgreSQL connection pool (pg.Pool) & query helpers
    ├── db/
    │   ├── schema.sql              # Database DDL: tables, indexes, extensions (UUIDs)
    │   ├── migrate.ts              # Migration runner to create database & tables
    │   ├── seed.ts                 # Initial seeder (admin, missions, services, testimonials)
    │   └── setup.ts                # One-command migration and seed runner
    ├── types/
    │   └── index.ts                # TypeScript interfaces (Inquiry, Project, Admin, etc.)
    ├── schemas/
    │   ├── inquiry.schema.ts       # Zod schemas for contact form & status
    │   ├── estimate.schema.ts      # Zod schemas for cost estimator & proposals
    │   ├── project.schema.ts       # Zod schemas for portfolio missions CRUD
    │   └── auth.schema.ts          # Zod schemas for admin authentication
    ├── middleware/
    │   ├── auth.middleware.ts      # JWT Bearer token authentication
    │   ├── validate.middleware.ts  # Generic Zod request validation middleware
    │   ├── error.middleware.ts     # Centralized Express error handler
    │   └── logger.middleware.ts    # Request logging utilities
    ├── controllers/
    │   ├── inquiry.controller.ts   # Contact submissions & lead management
    │   ├── estimate.controller.ts  # Project cost calculator & proposals
    │   ├── project.controller.ts   # Portfolio missions CRUD
    │   ├── service.controller.ts   # Agency capabilities & services
    │   ├── testimonial.controller.ts# Client reviews & testimonials
    │   ├── analytics.controller.ts # Telemetry logs & business metrics
    │   └── auth.controller.ts      # Admin login & profile verification
    ├── services/
    │   ├── inquiry.service.ts      # Database logic for client inquiries
    │   ├── estimate.service.ts     # Cost estimation engine & storage
    │   ├── project.service.ts      # Database operations for projects
    │   ├── service.service.ts      # Database operations for services
    │   ├── testimonial.service.ts  # Database operations for testimonials
    │   ├── analytics.service.ts    # Aggregation queries for telemetry & KPIs
    │   └── auth.service.ts         # Bcrypt password hashing & JWT signing
    ├── routes/
    │   ├── index.ts                # Master API router (/api/health, /api/contact alias)
    │   ├── inquiry.routes.ts       # /api/inquiries & /api/contact
    │   ├── estimate.routes.ts      # /api/estimates
    │   ├── project.routes.ts       # /api/projects
    │   ├── service.routes.ts       # /api/services
    │   ├── testimonial.routes.ts   # /api/testimonials
    │   ├── analytics.routes.ts     # /api/analytics
    │   └── auth.routes.ts          # /api/auth
    └── test/
        └── verify-api.ts           # Automated 14-point API verification test suite
```

---

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js**: v18 or newer
- **PostgreSQL**: v14 or newer running locally or on a remote host

### 2. Configure Environment
Copy `.env.example` to `.env` and verify database credentials:
```env
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=admin
DB_NAME=voxor_db
JWT_SECRET=supernova_voxor_secret_jwt_key_2026_x89!
```

### 3. Initialize & Seed Database
Run the setup script which creates the database, applies `schema.sql`, and seeds initial agency data:
```bash
npm run db:setup
```

### 4. Run Development Server
```bash
npm run dev
```
The server will start on `http://localhost:5000`.

### 5. Build for Production
```bash
npm run build
npm start
```

---

## 📡 API Reference

### Health & System
- `GET /api/health` - Server health check, uptime, and PostgreSQL connection status.

### Contact & Inquiries (Direct Frontend Compatibility)
- `POST /api/contact` - Public lead intake from website contact form.
- `POST /api/inquiries` - Public lead intake.
- `GET /api/inquiries` - `[Protected]` List leads with pagination, search, and status filters.
- `GET /api/inquiries/:id` - `[Protected]` Get single lead details.
- `PATCH /api/inquiries/:id/status` - `[Protected]` Update lead status (`new`, `in_review`, `contacted`, `archived`).
- `DELETE /api/inquiries/:id` - `[Protected]` Delete lead.

### Project Cost Calculator
- `POST /api/estimates/calculate` - Public server-side cost calculation based on project parameters.
- `POST /api/estimates/save` - Public proposal saving with client information.
- `GET /api/estimates` - `[Protected]` List saved proposals.

### Portfolio Showcase (Missions)
- `GET /api/projects` - Public list of portfolio projects (optional `?category=saas&featured=true`).
- `GET /api/projects/:slug` - Public project details by slug.
- `POST /api/projects` - `[Protected]` Create portfolio project.
- `PUT /api/projects/:id` - `[Protected]` Update portfolio project.
- `DELETE /api/projects/:id` - `[Protected]` Delete portfolio project.

### Agency Services
- `GET /api/services` - Public list of services with deliverables and icons.
- `GET /api/services/:slug` - Public service detail.
- `POST /api/services` - `[Protected]` Create service offering.

### Client Testimonials
- `GET /api/testimonials` - Public client reviews.
- `POST /api/testimonials` - `[Protected]` Add client testimonial.

### Telemetry & Analytics
- `POST /api/analytics/telemetry` - Public telemetry event stream.
- `GET /api/analytics/stats` - Real-time agency performance metrics and pipeline KPIs.

### Authentication
- `POST /api/auth/login` - Admin login with email & password, returns JWT token.
- `GET /api/auth/me` - `[Protected]` Get current authenticated admin profile.

---

## 🧪 Testing

To run the automated 14-point API verification test suite:
```bash
npx ts-node src/test/verify-api.ts
```
