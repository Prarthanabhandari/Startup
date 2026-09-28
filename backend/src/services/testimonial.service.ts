import { pool } from '../config/database';
import { Testimonial } from '../types';

export async function getAllTestimonials(): Promise<Testimonial[]> {
  const result = await pool.query<Testimonial>(
    'SELECT * FROM testimonials ORDER BY display_order ASC, created_at ASC'
  );
  return result.rows;
}

export async function createTestimonial(data: {
  clientName: string;
  designation: string;
  company: string;
  avatarUrl?: string;
  content: string;
  projectCategory: string;
  rating?: number;
  displayOrder?: number;
}): Promise<Testimonial> {
  const query = `
    INSERT INTO testimonials (client_name, designation, company, avatar_url, content, project_category, rating, display_order)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *;
  `;

  const values = [
    data.clientName,
    data.designation,
    data.company,
    data.avatarUrl || null,
    data.content,
    data.projectCategory,
    data.rating ?? 5,
    data.displayOrder ?? 0,
  ];

  const result = await pool.query<Testimonial>(query, values);
  return result.rows[0];
}
