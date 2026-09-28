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
  budget: string;
  message: string;
}

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
    input.budget,
    input.message,
    ipAddress || null,
  ];

  const result = await pool.query<Inquiry>(query, values);
  return result.rows[0];
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
