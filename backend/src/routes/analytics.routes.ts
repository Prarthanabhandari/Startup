import { Router } from 'express';
import * as analyticsController from '../controllers/analytics.controller';

const router = Router();

// Public: Log client telemetry events
router.post('/telemetry', analyticsController.logTelemetry);

// Public / Agency Overview: Key stats & KPIs
router.get('/stats', analyticsController.getAgencyStats);

export default router;
