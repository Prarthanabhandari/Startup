import fs from 'fs';
import path from 'path';
import { Client } from 'pg';
import { config } from '../config/env';

export async function runMigration(): Promise<void> {
  console.log('🔄 Starting database migration...');

  // Step 1: Ensure database exists by connecting to 'postgres' administrative DB
  const adminClient = new Client({
    host: config.database.host,
    port: config.database.port,
    user: config.database.user,
    password: config.database.password,
    database: 'postgres',
    ssl: config.database.ssl,
  });

  try {
    await adminClient.connect();
    const checkDbRes = await adminClient.query(
      `SELECT 1 FROM pg_database WHERE datname = $1`,
      [config.database.database]
    );

    if (checkDbRes.rowCount === 0) {
      console.log(`📦 Database "${config.database.database}" does not exist. Creating now...`);
      await adminClient.query(`CREATE DATABASE "${config.database.database}"`);
      console.log(`✅ Database "${config.database.database}" created successfully.`);
    } else {
      console.log(`✅ Database "${config.database.database}" already exists.`);
    }
  } catch (err: any) {
    console.error('❌ Error during administrative DB check:', err.message);
    throw err;
  } finally {
    await adminClient.end();
  }

  // Step 2: Connect to the target project database and run schema.sql
  const targetClient = new Client({
    host: config.database.host,
    port: config.database.port,
    user: config.database.user,
    password: config.database.password,
    database: config.database.database,
    ssl: config.database.ssl,
  });

  try {
    await targetClient.connect();
    let schemaPath = path.resolve(__dirname, 'schema.sql');
    if (!fs.existsSync(schemaPath)) {
      schemaPath = path.resolve(__dirname, '../../src/db/schema.sql');
    }
    const schemaSql = fs.readFileSync(schemaPath, 'utf8');

    console.log('🚀 Executing schema DDL scripts...');
    await targetClient.query(schemaSql);
    console.log('✅ All tables, indexes, and extensions created successfully.');
  } catch (err: any) {
    console.error('❌ Error executing schema.sql:', err.message);
    throw err;
  } finally {
    await targetClient.end();
  }
}

if (require.main === module) {
  runMigration()
    .then(() => {
      console.log('🎉 Migration completed successfully.');
      process.exit(0);
    })
    .catch((err) => {
      console.error('💥 Migration failed:', err);
      process.exit(1);
    });
}
