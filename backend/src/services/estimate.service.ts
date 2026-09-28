import { pool } from '../config/database';
import { Estimate } from '../types';

interface ProjectTypeConfig {
  label: string;
  baseMin: number;
  baseMax: number;
}

interface FeatureConfig {
  label: string;
  minPrice: number;
  maxPrice: number;
}

const PROJECT_TYPES: Record<string, ProjectTypeConfig> = {
  business: { label: 'Business Website', baseMin: 3000, baseMax: 5000 },
  ecommerce: { label: 'E-commerce Website', baseMin: 6000, baseMax: 9000 },
  saas: { label: 'SaaS Platform', baseMin: 10000, baseMax: 16000 },
  ai: { label: 'AI Application', baseMin: 12000, baseMax: 20000 },
  mobile: { label: 'Mobile App', baseMin: 11000, baseMax: 18000 },
};

const FEATURES: Record<string, FeatureConfig> = {
  'custom-ui': { label: 'Custom UI/UX', minPrice: 1500, maxPrice: 2500 },
  '3d-anim': { label: '3D Animations', minPrice: 2000, maxPrice: 3500 },
  'auth': { label: 'User Authentication', minPrice: 1000, maxPrice: 1500 },
  'payment': { label: 'Payment Integration', minPrice: 1200, maxPrice: 2000 },
  'admin-dash': { label: 'Admin Dashboard', minPrice: 2500, maxPrice: 4000 },
  'ai-integ': { label: 'AI Integration', minPrice: 3500, maxPrice: 6000 },
  'adv-anim': { label: 'Advanced Animations', minPrice: 1800, maxPrice: 3000 },
};

const TIMELINES: Record<string, { multiplier: number; delivery: string }> = {
  standard: { multiplier: 1.0, delivery: '6-8 weeks delivery' },
  priority: { multiplier: 1.3, delivery: '4-5 weeks delivery (+30%)' },
  express: { multiplier: 1.6, delivery: '2-3 weeks delivery (+60%)' },
};

export interface CalculationResult {
  projectType: string;
  projectTypeLabel: string;
  timeline: string;
  deliveryTime: string;
  selectedFeatures: Array<{ id: string; label: string; minPrice: number; maxPrice: number }>;
  minPrice: number;
  maxPrice: number;
  currency: string;
}

export function computeEstimate(
  projectTypeKey: string,
  featureKeys: string[] = [],
  timelineKey: string = 'standard'
): CalculationResult {
  const project = PROJECT_TYPES[projectTypeKey] || PROJECT_TYPES.saas;
  const timelineInfo = TIMELINES[timelineKey] || TIMELINES.standard;

  let min = project.baseMin;
  let max = project.baseMax;

  const resolvedFeatures: Array<{ id: string; label: string; minPrice: number; maxPrice: number }> = [];

  for (const fKey of featureKeys) {
    const feat = FEATURES[fKey];
    if (feat) {
      min += feat.minPrice;
      max += feat.maxPrice;
      resolvedFeatures.push({ id: fKey, ...feat });
    }
  }

  min = Math.round(min * timelineInfo.multiplier);
  max = Math.round(max * timelineInfo.multiplier);

  return {
    projectType: projectTypeKey,
    projectTypeLabel: project.label,
    timeline: timelineKey,
    deliveryTime: timelineInfo.delivery,
    selectedFeatures: resolvedFeatures,
    minPrice: min,
    maxPrice: max,
    currency: 'USD',
  };
}

export async function saveEstimate(
  data: {
    projectType: string;
    selectedFeatures: string[];
    timeline: string;
    clientName?: string | null;
    clientEmail?: string | null;
  },
  ipAddress?: string
): Promise<Estimate> {
  const calc = computeEstimate(data.projectType, data.selectedFeatures, data.timeline);

  const query = `
    INSERT INTO estimates (
      client_name, client_email, project_type, selected_features, timeline, min_price, max_price, currency, ip_address
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING *;
  `;

  const values = [
    data.clientName || null,
    data.clientEmail || null,
    data.projectType,
    JSON.stringify(data.selectedFeatures),
    data.timeline,
    calc.minPrice,
    calc.maxPrice,
    calc.currency,
    ipAddress || null,
  ];

  const result = await pool.query<Estimate>(query, values);
  return result.rows[0];
}

export async function getAllEstimates(page = 1, limit = 20) {
  const offset = (page - 1) * limit;
  const countRes = await pool.query('SELECT COUNT(*) FROM estimates');
  const total = parseInt(countRes.rows[0].count, 10);

  const dataRes = await pool.query<Estimate>(
    'SELECT * FROM estimates ORDER BY created_at DESC LIMIT $1 OFFSET $2',
    [limit, offset]
  );

  return {
    estimates: dataRes.rows,
    total,
    page,
    totalPages: Math.ceil(total / limit) || 1,
  };
}
