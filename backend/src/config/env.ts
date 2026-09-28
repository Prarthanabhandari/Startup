import dotenv from 'dotenv';
import path from 'path';

// Load .env from project root or backend folder
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export const config = {
  port: parseInt(process.env.PORT || '5000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',

  database: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'admin',
    database: process.env.DB_NAME || 'voxor_db',
    ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
    max: parseInt(process.env.DB_POOL_MAX || '20', 10),
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000,
  },

  jwt: {
    secret: process.env.JWT_SECRET || 'supernova_voxor_default_secret_jwt_key_2026',
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  },

  admin: {
    email: process.env.DEFAULT_ADMIN_EMAIL || 'admin@voxorlab.com',
    password: process.env.DEFAULT_ADMIN_PASSWORD || 'Admin@123456',
    name: process.env.DEFAULT_ADMIN_NAME || 'VOXOR Super Admin',
  },

  cors: {
    origin: (process.env.CORS_ORIGIN || 'http://localhost:5173,http://localhost:5190,http://127.0.0.1:5173,http://127.0.0.1:5190')
      .split(',')
      .map((o) => o.trim()),
  },
};
