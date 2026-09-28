import { pool } from '../config/database';

export async function recordTelemetry(
  eventType: string,
  metadata: Record<string, any> = {},
  ipAddress?: string
): Promise<void> {
  const query = `
    INSERT INTO telemetry_events (event_type, metadata, ip_address)
    VALUES ($1, $2, $3);
  `;
  await pool.query(query, [eventType, JSON.stringify(metadata), ipAddress || null]);
}

export async function getAgencyStats() {
  // 1. Total and recent inquiries
  const inquiriesCountRes = await pool.query(`
    SELECT 
      COUNT(*) AS total,
      COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '7 days') AS last_7_days,
      COUNT(*) FILTER (WHERE status = 'new') AS pending_review
    FROM inquiries;
  `);

  // 2. Inquiries by project type
  const inquiriesByTypeRes = await pool.query(`
    SELECT project_type, COUNT(*) as count
    FROM inquiries
    GROUP BY project_type
    ORDER BY count DESC;
  `);

  // 3. Calculator estimates stats
  const estimatesStatsRes = await pool.query(`
    SELECT 
      COUNT(*) AS total_estimates,
      COALESCE(AVG(min_price), 0) AS avg_min_price,
      COALESCE(AVG(max_price), 0) AS avg_max_price
    FROM estimates;
  `);

  // 4. Portfolio count
  const portfolioCountRes = await pool.query('SELECT COUNT(*) FROM projects');

  // 5. Total telemetry events
  const telemetryCountRes = await pool.query('SELECT COUNT(*) FROM telemetry_events');

  return {
    inquiries: {
      total: parseInt(inquiriesCountRes.rows[0].total, 10),
      last7Days: parseInt(inquiriesCountRes.rows[0].last_7_days, 10),
      pendingReview: parseInt(inquiriesCountRes.rows[0].pending_review, 10),
      byType: inquiriesByTypeRes.rows,
    },
    estimates: {
      total: parseInt(estimatesStatsRes.rows[0].total_estimates, 10),
      averageMin: Math.round(parseFloat(estimatesStatsRes.rows[0].avg_min_price)),
      averageMax: Math.round(parseFloat(estimatesStatsRes.rows[0].avg_max_price)),
    },
    projectsCount: parseInt(portfolioCountRes.rows[0].count, 10),
    telemetryEventsLogged: parseInt(telemetryCountRes.rows[0].count, 10),
    timestamp: new Date().toISOString(),
  };
}
