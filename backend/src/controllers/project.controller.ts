import { Request, Response, NextFunction } from 'express';
import * as projectService from '../services/project.service';

export async function getProjects(req: Request, res: Response, next: NextFunction) {
  try {
    const category = req.query.category as string | undefined;
    const featured = req.query.featured ? req.query.featured === 'true' : undefined;

    const projects = await projectService.getAllProjects({ category, featured });
    res.json({
      success: true,
      data: projects,
      count: projects.length,
    });
  } catch (error) {
    next(error);
  }
}

export async function getProjectBySlug(req: Request, res: Response, next: NextFunction) {
  try {
    const project = await projectService.getProjectBySlug(req.params.slug);
    res.json({
      success: true,
      data: project,
    });
  } catch (error) {
    next(error);
  }
}

export async function createProject(req: Request, res: Response, next: NextFunction) {
  try {
    const project = await projectService.createProject(req.body);
    res.status(201).json({
      success: true,
      message: 'Portfolio mission created successfully',
      data: project,
    });
  } catch (error) {
    next(error);
  }
}

export async function updateProject(req: Request, res: Response, next: NextFunction) {
  try {
    const project = await projectService.updateProject(req.params.id, req.body);
    res.json({
      success: true,
      message: 'Portfolio mission updated successfully',
      data: project,
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteProject(req: Request, res: Response, next: NextFunction) {
  try {
    await projectService.deleteProject(req.params.id);
    res.json({
      success: true,
      message: 'Portfolio mission deleted successfully',
    });
  } catch (error) {
    next(error);
  }
}
