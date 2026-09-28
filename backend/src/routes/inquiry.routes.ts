import { Router } from 'express';
import * as inquiryController from '../controllers/inquiry.controller';
import { validateBody, validateQuery } from '../middleware/validate.middleware';
import { createInquirySchema, updateInquiryStatusSchema, inquiryQuerySchema } from '../schemas/inquiry.schema';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

// Public: Submit inquiry (contact form)
router.post('/', validateBody(createInquirySchema), inquiryController.submitInquiry);

// Protected Admin Endpoints
router.get('/', authenticate, validateQuery(inquiryQuerySchema), inquiryController.listInquiries);
router.get('/:id', authenticate, inquiryController.getInquiry);
router.patch('/:id/status', authenticate, validateBody(updateInquiryStatusSchema), inquiryController.updateStatus);
router.delete('/:id', authenticate, inquiryController.deleteInquiry);

export default router;
