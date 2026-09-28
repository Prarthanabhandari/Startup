import { pool } from '../config/database';
import { Project } from '../types';
import { AppError } from '../middleware/error.middleware';

export async function getAllProjects(options?: {
  category?: string;
  featured?: boolean;
}): Promise<Project[]> {
  const conditions: string[] = [];
  const values: any[] = [];
  let paramIndex = 1;

  if (options?.category) {
    conditions.push(`category = $${paramIndex++}`);
    values.push(options.category);
  }

  if (options?.featured !== undefined) {
    conditions.push(`featured = $${paramIndex++}`);
    values.push(options.featured);
  }

  const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';
  const query = `
    SELECT * FROM projects
    ${whereClause}
    ORDER BY display_order ASC, created_at DESC;
  `;

  const result = await pool.query<Project>(query, values);
  return result.rows;
}

export async function getProjectBySlug(slug: string): Promise<Project> {
  const result = await pool.query<Project>('SELECT * FROM projects WHERE slug = $1', [slug]);
  if (result.rowCount === 0) {
    throw new AppError('Project mission not found', 404);
  }
  return result.rows[0];
}

export async function createProject(data: {
  title: string;
  slug: string;
  category: string;
  categoryName: string;
  description: string;
  result: string;
  techStack: string[];
  imageUrl: string;
  featured?: boolean;
  displayOrder?: number;
}): Promise<Project> {
  const query = `
    INSERT INTO projects (
      title, slug, category, category_name, description, result, tech_stack, image_url, featured, display_order
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    RETURNING *;
  `;

  const values = [
    data.title,
    data.slug,
    data.category,
    data.categoryName,
    data.description,
    data.result,
    data.techStack,
    data.imageUrl,
    data.featured ?? false,
    data.displayOrder ?? 0,
  ];

  const result = await pool.query<Project>(query, values);
  return result.rows[0];
}

export async function updateProject(id: string, data: Partial<Project>): Promise<Project> {
  const keys = Object.keys(data).filter((k) => (data as any)[k] !== undefined);
  if (keys.length === 0) {
    throw new AppError('No update fields provided', 400);
  }

  const setClauses: string[] = [];
  const values: any[] = [];
  let paramIndex = 1;

  for (const key of keys) {
    // Map camelCase to snake_case column names
    const colName = key.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
    setClauses.push(`${colName} = $${paramIndex++}`);
    values.push((data as any)[key]);
  }

  setClauses.push(`updated_at = CURRENT_TIMESTAMP`);

  const query = `
    UPDATE projects
    SET ${setClauses.join(', ')}
    WHERE id = $${paramIndex}
    RETURNING *;
  `;
  values.push(id);

  const result = await pool.query<Project>(query, values);
  if (result.rowCount === 0) {
    throw new AppError('Project mission not found', 404);
  }

  return result.rows[0];
}

export async function deleteProject(id: string): Promise<void> {
  const result = await pool.query('DELETE FROM projects WHERE id = $1', [id]);
  if (result.rowCount === 0) {
    throw new AppError('Project mission not found', 404);
  }
}
