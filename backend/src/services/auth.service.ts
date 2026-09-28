import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { pool } from '../config/database';
import { config } from '../config/env';
import { AdminUser, AuthPayload } from '../types';
import { AppError } from '../middleware/error.middleware';

export async function loginAdmin(
  email: string,
  plainPassword: string
): Promise<{ token: string; user: Omit<AdminUser, 'password_hash'> }> {
  const result = await pool.query(
    'SELECT id, name, email, password_hash, role, created_at FROM admins WHERE email = $1',
    [email.toLowerCase().trim()]
  );

  if (result.rowCount === 0) {
    throw new AppError('Invalid email or password', 401);
  }

  const admin = result.rows[0];
  const isMatch = await bcrypt.compare(plainPassword, admin.password_hash);

  if (!isMatch) {
    throw new AppError('Invalid email or password', 401);
  }

  const payload: AuthPayload = {
    id: admin.id,
    email: admin.email,
    role: admin.role,
  };

  const token = jwt.sign(payload, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn as any,
  });

  return {
    token,
    user: {
      id: admin.id,
      name: admin.name,
      email: admin.email,
      role: admin.role,
      created_at: admin.created_at,
    },
  };
}

export async function getAdminProfile(id: string): Promise<Omit<AdminUser, 'password_hash'>> {
  const result = await pool.query(
    'SELECT id, name, email, role, created_at FROM admins WHERE id = $1',
    [id]
  );

  if (result.rowCount === 0) {
    throw new AppError('Admin account not found', 404);
  }

  return result.rows[0];
}
