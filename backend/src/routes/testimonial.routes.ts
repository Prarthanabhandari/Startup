import { Router } from 'express';
import * as testimonialController from '../controllers/testimonial.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

// Public routes
router.get('/', testimonialController.getTestimonials);

// Protected Admin routes
router.post('/', authenticate, testimonialController.createTestimonial);

export default router;
