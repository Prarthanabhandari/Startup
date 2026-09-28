import { Router } from 'express';
import { pool } from '../config/database';
import inquiryRoutes from './inquiry.routes';
import estimateRoutes from './estimate.routes';
import projectRoutes from './project.routes';
import serviceRoutes from './service.routes';
import testimonialRoutes from './testimonial.routes';
import analyticsRoutes from './analytics.routes';
import authRoutes from './auth.routes';

import { validateBody } from '../middleware/validate.middleware';
import { createInquirySchema } from '../schemas/inquiry.schema';
import * as inquiryController from '../controllers/inquiry.controller';

const router = Router();

// Health Check with Database Status
router.get('/health', async (req, res) => {
  try {
    const dbRes = await pool.query('SELECT NOW() as current_time, current_database() as db_name');
    res.json({
      status: 'healthy',
      database: 'connected',
      currentDatabase: dbRes.rows[0].db_name,
      dbTimestamp: dbRes.rows[0].current_time,
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      service: 'VOXOR LAB Core API',
      version: '1.0.0',
    });
  } catch (error: any) {
    res.status(500).json({
      status: 'degraded',
      database: 'disconnected',
      error: error.message,
      timestamp: new Date().toISOString(),
    });
  }
});

// Backward compatibility: Direct endpoint used by frontend Contact form
router.post('/contact', validateBody(createInquirySchema), inquiryController.submitInquiry);

// Modular Sub-routers
router.use('/inquiries', inquiryRoutes);
router.use('/estimates', estimateRoutes);
router.use('/projects', projectRoutes);
router.use('/services', serviceRoutes);
router.use('/testimonials', testimonialRoutes);
router.use('/analytics', analyticsRoutes);
router.use('/auth', authRoutes);

export default router;
