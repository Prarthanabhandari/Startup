import { Pool, PoolClient, QueryResult, QueryResultRow } from 'pg';
import { config } from './env';

export const pool = new Pool(config.database);

pool.on('error', (err: Error) => {
  console.error('[PostgreSQL] Unexpected error on idle client:', err.message);
});

export async function query<T extends QueryResultRow = any>(
  text: string,
  params?: any[]
): Promise<QueryResult<T>> {
  const start = Date.now();
  try {
    const res = await pool.query<T>(text, params);
    const duration = Date.now() - start;
    if (config.nodeEnv === 'development' && duration > 100) {
      console.log(`[PostgreSQL Slow Query] (${duration}ms): ${text.replace(/\s+/g, ' ').trim()}`);
    }
    return res;
  } catch (error: any) {
    console.error(`[PostgreSQL Query Error]: ${error.message} \nQuery: ${text}`);
    throw error;
  }
}

export async function getClient(): Promise<PoolClient> {
  return await pool.connect();
}

export async function testConnection(): Promise<boolean> {
  try {
    const res = await pool.query('SELECT NOW() as current_time, current_database() as db_name');
    console.log(
      `[PostgreSQL Connected] Database: "${res.rows[0].db_name}", Server Time: ${res.rows[0].current_time.toISOString()}`
    );
    return true;
  } catch (error: any) {
    console.error(`[PostgreSQL Connection Failed]: ${error.message}`);
    return false;
  }
}
