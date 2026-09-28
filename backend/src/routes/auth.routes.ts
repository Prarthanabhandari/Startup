import { Router } from 'express';
import * as authController from '../controllers/auth.controller';
import { validateBody } from '../middleware/validate.middleware';
import { loginSchema } from '../schemas/auth.schema';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

// Public: Admin login
router.post('/login', validateBody(loginSchema), authController.login);

// Protected: Get current authenticated admin
router.get('/me', authenticate, authController.me);

export default router;
