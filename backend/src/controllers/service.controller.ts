import { Request, Response, NextFunction } from 'express';
import * as agencyService from '../services/service.service';

export async function getServices(req: Request, res: Response, next: NextFunction) {
  try {
    const services = await agencyService.getAllServices();
    res.json({
      success: true,
      data: services,
      count: services.length,
    });
  } catch (error) {
    next(error);
  }
}

export async function getServiceBySlug(req: Request, res: Response, next: NextFunction) {
  try {
    const service = await agencyService.getServiceBySlug(req.params.slug);
    res.json({
      success: true,
      data: service,
    });
  } catch (error) {
    next(error);
  }
}

export async function createService(req: Request, res: Response, next: NextFunction) {
  try {
    const service = await agencyService.createService(req.body);
    res.status(201).json({
      success: true,
      message: 'Agency service created successfully',
      data: service,
    });
  } catch (error) {
    next(error);
  }
}
