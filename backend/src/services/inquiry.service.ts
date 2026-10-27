import { pool } from '../config/database';
import { Inquiry } from '../types';
import { AppError } from '../middleware/error.middleware';

export interface CreateInquiryInput {
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  projectType?: string;
  project_type?: string;
  timeline?: string | null;
  projectScale?: string | null;
  budget?: string | null;
  message: string;
}

const inMemoryInquiries: Inquiry[] = [];

export async function createInquiry(
  input: CreateInquiryInput,
  ipAddress?: string
): Promise<Inquiry> {
  const projectType = input.projectType || input.project_type || 'General Inquiry';

  const query = `
    INSERT INTO inquiries (name, email, phone, company, project_type, budget, message, ip_address)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *;
  `;

  const values = [
    input.name,
    input.email,
    input.phone || null,
    input.company || null,
    projectType,
    input.budget || input.projectScale || 'Standard',
    input.message,
    ipAddress || null,
  ];

  try {
    const result = await pool.query<Inquiry>(query, values);
    return result.rows[0];
  } catch (dbErr: any) {
    console.warn('[Inquiry Service] PostgreSQL unavailable, storing inquiry in memory fallback:', dbErr.message);
    const fallbackInquiry: Inquiry = {
      id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: input.name,
      email: input.email,
      phone: input.phone || null,
      company: input.company || null,
      project_type: projectType,
      budget: input.budget || input.projectScale || 'Standard',
      message: input.message,
      status: 'new',
      ip_address: ipAddress || null,
      created_at: new Date(),
      updated_at: new Date(),
    };
    inMemoryInquiries.unshift(fallbackInquiry);
    return fallbackInquiry;
  }
}

export async function getInquiries(params: {
  status?: string;
  search?: string;
  page?: number;
  limit?: number;
}): Promise<{ inquiries: Inquiry[]; total: number; page: number; totalPages: number }> {
  const page = params.page || 1;
  const limit = params.limit || 20;
  const offset = (page - 1) * limit;

  const conditions: string[] = [];
  const values: any[] = [];
  let paramIndex = 1;

  if (params.status && params.status !== 'all') {
    conditions.push(`status = $${paramIndex++}`);
    values.push(params.status);
  }

  if (params.search) {
    conditions.push(`(name ILIKE $${paramIndex} OR email ILIKE $${paramIndex} OR company ILIKE $${paramIndex})`);
    values.push(`%${params.search}%`);
    paramIndex++;
  }

  try {
    const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

    const countQuery = `SELECT COUNT(*) FROM inquiries ${whereClause}`;
    const totalCountRes = await pool.query(countQuery, values);
    const total = parseInt(totalCountRes.rows[0].count, 10);

    const dataQuery = `
      SELECT * FROM inquiries
      ${whereClause}
      ORDER BY created_at DESC
      LIMIT $${paramIndex++} OFFSET $${paramIndex++};
    `;

    const dataRes = await pool.query<Inquiry>(dataQuery, [...values, limit, offset]);

    return {
      inquiries: dataRes.rows,
      total,
      page,
      totalPages: Math.ceil(total / limit) || 1,
    };
  } catch (err: any) {
    console.warn('[Inquiry Service] Reading inquiries from in-memory fallback:', err.message);
    const total = inMemoryInquiries.length;
    return {
      inquiries: inMemoryInquiries.slice(offset, offset + limit),
      total,
      page,
      totalPages: Math.ceil(total / limit) || 1,
    };
  }
}

export async function getInquiryById(id: string): Promise<Inquiry> {
  const result = await pool.query<Inquiry>('SELECT * FROM inquiries WHERE id = $1', [id]);
  if (result.rowCount === 0) {
    throw new AppError('Inquiry not found', 404);
  }
  return result.rows[0];
}

export async function updateInquiryStatus(id: string, status: string): Promise<Inquiry> {
  const result = await pool.query<Inquiry>(
    `UPDATE inquiries
     SET status = $1, updated_at = CURRENT_TIMESTAMP
     WHERE id = $2
     RETURNING *`,
    [status, id]
  );

  if (result.rowCount === 0) {
    throw new AppError('Inquiry not found', 404);
  }

  return result.rows[0];
}

export async function deleteInquiry(id: string): Promise<void> {
  const result = await pool.query('DELETE FROM inquiries WHERE id = $1', [id]);
  if (result.rowCount === 0) {
    throw new AppError('Inquiry not found', 404);
  }
}
