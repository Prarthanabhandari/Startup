import { createApp } from '../app';
import { pool, testConnection } from '../config/database';
import http from 'http';

async function runApiVerification() {
  console.log('\n======================================================');
  console.log('🧪 RUNNING COMPREHENSIVE BACKEND API VERIFICATION SUITE');
  console.log('======================================================');

  // Ensure DB connected
  const dbOk = await testConnection();
  if (!dbOk) {
    throw new Error('Database is not connected');
  }

  const app = createApp();
  const server = http.createServer(app);
  const TEST_PORT = 5001;

  await new Promise<void>((resolve) => server.listen(TEST_PORT, () => resolve()));
  const baseUrl = `http://localhost:${TEST_PORT}`;

  let passed = 0;
  let failed = 0;

  async function testEndpoint(name: string, fn: () => Promise<void>) {
    try {
      await fn();
      console.log(`✅ [PASS] ${name}`);
      passed++;
    } catch (err: any) {
      console.error(`❌ [FAIL] ${name}:`, err.message);
      failed++;
    }
  }

  let adminToken = '';
  let testInquiryId = '';

  try {
    // Test 1: Health check
    await testEndpoint('GET /api/health returns healthy and database connected', async () => {
      const res = await fetch(`${baseUrl}/api/health`);
      if (!res.ok) throw new Error(`Status ${res.status}`);
      const body = await res.json();
      if (body.status !== 'healthy' || body.database !== 'connected') {
        throw new Error(`Unexpected body: ${JSON.stringify(body)}`);
      }
    });

    // Test 2: Contact Form Lead Inbound (direct frontend endpoint)
    await testEndpoint('POST /api/contact saves lead into PostgreSQL inquiries table', async () => {
      const payload = {
        name: 'Sarah Connor',
        email: 'sarah.connor@cyberdyne.io',
        phone: '+1 415 555 9012',
        company: 'Resistance Inc',
        projectType: 'AI-Powered Applications',
        budget: '$10,000–$25,000',
        message: 'Looking to build an autonomous threat analysis dashboard with real-time neural inference.',
      };

      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.status !== 201) {
        const text = await res.text();
        throw new Error(`Status ${res.status}: ${text}`);
      }

      const body = await res.json();
      if (!body.success || !body.data?.id) {
        throw new Error(`Invalid response structure: ${JSON.stringify(body)}`);
      }
      testInquiryId = body.data.id;

      // Verify in Postgres
      const dbCheck = await pool.query('SELECT * FROM inquiries WHERE id = $1', [testInquiryId]);
      if (dbCheck.rowCount === 0) {
        throw new Error('Inquiry was not found in PostgreSQL!');
      }
    });

    // Test 3: Validation failure handling on invalid contact form
    await testEndpoint('POST /api/contact returns 400 on invalid payload', async () => {
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'not-an-email' }),
      });
      if (res.status !== 400) throw new Error(`Expected 400 but got ${res.status}`);
      const body = await res.json();
      if (!body.details || body.details.length === 0) {
        throw new Error('Expected validation error details');
      }
    });

    // Test 4: Cost Estimator calculation
    await testEndpoint('POST /api/estimates/calculate returns accurate project estimate', async () => {
      const payload = {
        projectType: 'saas',
        selectedFeatures: ['custom-ui', 'payment', 'auth'],
        timeline: 'priority',
      };

      const res = await fetch(`${baseUrl}/api/estimates/calculate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`Status ${res.status}`);
      const body = await res.json();
      if (!body.data?.minPrice || !body.data?.maxPrice || body.data.minPrice <= 0) {
        throw new Error(`Invalid calculation result: ${JSON.stringify(body)}`);
      }
    });

    // Test 5: Save Estimate proposal
    await testEndpoint('POST /api/estimates/save records proposal in PostgreSQL', async () => {
      const payload = {
        projectType: 'ai',
        selectedFeatures: ['3d-anim', 'ai-integ'],
        timeline: 'standard',
        clientName: 'David Mercer',
        clientEmail: 'david@mercerbiotech.com',
      };

      const res = await fetch(`${baseUrl}/api/estimates/save`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.status !== 201) throw new Error(`Status ${res.status}`);
      const body = await res.json();
      if (!body.data?.id) throw new Error('Proposal was not saved');
    });

    // Test 6: Portfolio missions API
    await testEndpoint('GET /api/projects returns seeded portfolio missions', async () => {
      const res = await fetch(`${baseUrl}/api/projects`);
      if (!res.ok) throw new Error(`Status ${res.status}`);
      const body = await res.json();
      if (!Array.isArray(body.data) || body.data.length < 6) {
        throw new Error(`Expected at least 6 projects, received ${body.data?.length}`);
      }
    });

    // Test 7: Services API
    await testEndpoint('GET /api/services returns agency service offerings', async () => {
      const res = await fetch(`${baseUrl}/api/services`);
      if (!res.ok) throw new Error(`Status ${res.status}`);
      const body = await res.json();
      if (!Array.isArray(body.data) || body.data.length < 6) {
        throw new Error(`Expected at least 6 services, received ${body.data?.length}`);
      }
    });

    // Test 8: Testimonials API
    await testEndpoint('GET /api/testimonials returns client social proof', async () => {
      const res = await fetch(`${baseUrl}/api/testimonials`);
      if (!res.ok) throw new Error(`Status ${res.status}`);
      const body = await res.json();
      if (!Array.isArray(body.data) || body.data.length < 3) {
        throw new Error(`Expected at least 3 testimonials, received ${body.data?.length}`);
      }
    });

    // Test 9: Admin Authentication Login
    await testEndpoint('POST /api/auth/login authenticates admin and issues JWT', async () => {
      const res = await fetch(`${baseUrl}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'admin@voxorlab.com',
          password: 'Admin@123456',
        }),
      });

      if (!res.ok) throw new Error(`Status ${res.status}`);
      const body = await res.json();
      if (!body.token || !body.user) {
        throw new Error('Token or user missing from login response');
      }
      adminToken = body.token;
    });

    // Test 10: Protected Admin Profile
    await testEndpoint('GET /api/auth/me returns admin profile with Bearer token', async () => {
      const res = await fetch(`${baseUrl}/api/auth/me`, {
        headers: { Authorization: `Bearer ${adminToken}` },
      });

      if (!res.ok) throw new Error(`Status ${res.status}`);
      const body = await res.json();
      if (body.data?.email !== 'admin@voxorlab.com') {
        throw new Error(`Unexpected user: ${JSON.stringify(body)}`);
      }
    });

    // Test 11: Protected Inquiries Management
    await testEndpoint('GET /api/inquiries returns leads for authenticated admin', async () => {
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        headers: { Authorization: `Bearer ${adminToken}` },
      });

      if (!res.ok) throw new Error(`Status ${res.status}`);
      const body = await res.json();
      if (!Array.isArray(body.data) || body.data.length === 0) {
        throw new Error('Expected list of inquiries');
      }
    });

    // Test 12: Status update on inquiry
    await testEndpoint('PATCH /api/inquiries/:id/status updates lead state in PostgreSQL', async () => {
      const res = await fetch(`${baseUrl}/api/inquiries/${testInquiryId}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${adminToken}`,
        },
        body: JSON.stringify({ status: 'contacted' }),
      });

      if (!res.ok) throw new Error(`Status ${res.status}`);
      const body = await res.json();
      if (body.data?.status !== 'contacted') {
        throw new Error(`Status was not updated: ${JSON.stringify(body)}`);
      }
    });

    // Test 13: Live Telemetry Event Recording
    await testEndpoint('POST /api/analytics/telemetry logs interaction events', async () => {
      const res = await fetch(`${baseUrl}/api/analytics/telemetry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventType: 'terminal_status_query',
          metadata: { node: 'VOXOR-CORE-01', intensity: 45 },
        }),
      });

      if (res.status !== 202) throw new Error(`Status ${res.status}`);
    });

    // Test 14: Agency KPIs & Analytics Dashboard stats
    await testEndpoint('GET /api/analytics/stats returns aggregated metrics', async () => {
      const res = await fetch(`${baseUrl}/api/analytics/stats`);
      if (!res.ok) throw new Error(`Status ${res.status}`);
      const body = await res.json();
      if (typeof body.data?.inquiries?.total !== 'number' || body.data.inquiries.total < 1) {
        throw new Error(`Inquiry metrics missing: ${JSON.stringify(body)}`);
      }
    });

  } finally {
    server.close();
    await pool.end();
  }

  console.log('\n======================================================');
  console.log(`📊 SUITE SUMMARY: ${passed} PASSED, ${failed} FAILED`);
  console.log('======================================================\n');

  if (failed > 0) {
    process.exit(1);
  }
}

runApiVerification().catch((err) => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
