import http from 'http';
import { createApp } from './app';
import { config } from './config/env';
import { pool, testConnection } from './config/database';
import { runMigration } from './db/migrate';
import { runSeed } from './db/seed';

async function bootstrap() {
  console.log('\n=================================================');
  console.log('🌌 INITIALIZING VOXOR LAB CORE BACKEND');
  console.log('=================================================');

  // 1. Verify Database Connection
  const isConnected = await testConnection();
  if (!isConnected) {
    console.error('❌ Failed to connect to PostgreSQL. Attempting auto-migration...');
    try {
      await runMigration();
      await runSeed();
    } catch (err: any) {
      console.error('💥 Fatal: Could not establish database connection:', err.message);
      process.exit(1);
    }
  }

  // 2. Instantiate Express App
  const app = createApp();
  const server = http.createServer(app);

  // 3. Start Listening
  server.listen(config.port, () => {
    console.log(`🚀 VOXOR LAB Backend Server running at: http://localhost:${config.port}`);
    console.log(`🌐 Environment: ${config.nodeEnv}`);
    console.log(`📡 Health Check: http://localhost:${config.port}/api/health`);
    console.log(`📩 Inbound Lead Node: http://localhost:${config.port}/api/contact`);
    console.log('=================================================\n');
  });

  // 4. Graceful Shutdown Handlers
  const shutdown = async (signal: string) => {
    console.log(`\n🛑 Received ${signal}. Starting graceful shutdown...`);
    server.close(async () => {
      console.log('🔌 HTTP server closed.');
      try {
        await pool.end();
        console.log('📦 PostgreSQL pool drained and disconnected.');
        process.exit(0);
      } catch (err: any) {
        console.error('❌ Error draining PostgreSQL pool:', err.message);
        process.exit(1);
      }
    });

    // Force exit after 10s if hanging
    setTimeout(() => {
      console.error('⚠️ Forcefully terminating server after timeout.');
      process.exit(1);
    }, 10000);
  };

  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT', () => shutdown('SIGINT'));
}

bootstrap().catch((err) => {
  console.error('💥 Bootstrap failed:', err);
  process.exit(1);
});
