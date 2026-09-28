import { runMigration } from './migrate';
import { runSeed } from './seed';
import { pool } from '../config/database';

async function setup() {
  console.log('============================================');
  console.log('🚀 VOXOR LAB DATABASE INITIALIZATION RUNNER');
  console.log('============================================');

  try {
    await runMigration();
    await runSeed();
    console.log('============================================');
    console.log('🎉 DATABASE SETUP & SEED COMPLETED PROPERLY!');
    console.log('============================================');
  } catch (error: any) {
    console.error('❌ Setup encountered error:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

setup();
