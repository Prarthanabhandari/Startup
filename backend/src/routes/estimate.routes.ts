import { Router } from 'express';
import * as estimateController from '../controllers/estimate.controller';
import { validateBody } from '../middleware/validate.middleware';
import { calculateEstimateSchema, saveEstimateSchema } from '../schemas/estimate.schema';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

// Public: compute estimate on the fly
router.post('/calculate', validateBody(calculateEstimateSchema), estimateController.calculateEstimate);

// Public: save proposal estimate
router.post('/save', validateBody(saveEstimateSchema), estimateController.saveEstimateProposal);

// Protected: list all saved estimates
router.get('/', authenticate, estimateController.listEstimates);

export default router;
