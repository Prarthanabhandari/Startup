import { Router } from 'express';
import * as serviceController from '../controllers/service.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

// Public routes
router.get('/', serviceController.getServices);
router.get('/:slug', serviceController.getServiceBySlug);

// Protected Admin routes
router.post('/', authenticate, serviceController.createService);

export default router;
