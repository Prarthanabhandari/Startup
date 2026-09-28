import { Request, Response, NextFunction } from 'express';
import * as estimateService from '../services/estimate.service';

export async function calculateEstimate(req: Request, res: Response, next: NextFunction) {
  try {
    const { projectType, selectedFeatures, timeline } = req.body;
    const result = estimateService.computeEstimate(projectType, selectedFeatures, timeline);

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
}

export async function saveEstimateProposal(req: Request, res: Response, next: NextFunction) {
  try {
    const ipAddress = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress;
    const saved = await estimateService.saveEstimate(req.body, ipAddress);

    res.status(201).json({
      success: true,
      message: 'Estimate proposal recorded successfully',
      data: saved,
    });
  } catch (error) {
    next(error);
  }
}

export async function listEstimates(req: Request, res: Response, next: NextFunction) {
  try {
    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = parseInt(req.query.limit as string, 10) || 20;

    const result = await estimateService.getAllEstimates(page, limit);
    res.json({
      success: true,
      data: result.estimates,
      pagination: {
        total: result.total,
        page: result.page,
        totalPages: result.totalPages,
      },
    });
  } catch (error) {
    next(error);
  }
}
