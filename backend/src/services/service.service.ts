import { pool } from '../config/database';
import { ServiceItem } from '../types';
import { AppError } from '../middleware/error.middleware';

export async function getAllServices(): Promise<ServiceItem[]> {
  const result = await pool.query<ServiceItem>(
    'SELECT * FROM services ORDER BY display_order ASC, created_at ASC'
  );
  return result.rows;
}

export async function getServiceBySlug(slug: string): Promise<ServiceItem> {
  const result = await pool.query<ServiceItem>('SELECT * FROM services WHERE slug = $1', [slug]);
  if (result.rowCount === 0) {
    throw new AppError('Service not found', 404);
  }
  return result.rows[0];
}

export async function createService(data: {
  title: string;
  slug: string;
  subtitle?: string;
  description: string;
  deliverables: string[];
  icon?: string;
  displayOrder?: number;
}): Promise<ServiceItem> {
  const query = `
    INSERT INTO services (title, slug, subtitle, description, deliverables, icon, display_order)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;
  `;

  const values = [
    data.title,
    data.slug,
    data.subtitle || null,
    data.description,
    data.deliverables,
    data.icon || 'Sparkles',
    data.displayOrder ?? 0,
  ];

  const result = await pool.query<ServiceItem>(query, values);
  return result.rows[0];
}
