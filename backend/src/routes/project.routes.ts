import { Router } from 'express';
import * as projectController from '../controllers/project.controller';
import { validateBody } from '../middleware/validate.middleware';
import { createProjectSchema, updateProjectSchema } from '../schemas/project.schema';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

// Public routes
router.get('/', projectController.getProjects);
router.get('/:slug', projectController.getProjectBySlug);

// Protected Admin routes
router.post('/', authenticate, validateBody(createProjectSchema), projectController.createProject);
router.put('/:id', authenticate, validateBody(updateProjectSchema), projectController.updateProject);
router.delete('/:id', authenticate, projectController.deleteProject);

export default router;
