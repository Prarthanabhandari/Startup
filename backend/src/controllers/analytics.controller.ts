import { Request, Response, NextFunction } from 'express';
import * as analyticsService from '../services/analytics.service';

export async function logTelemetry(req: Request, res: Response, next: NextFunction) {
  try {
    const { eventType, metadata } = req.body;
    const ipAddress = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress;

    await analyticsService.recordTelemetry(eventType || 'interaction', metadata || {}, ipAddress);

    res.status(202).json({
      success: true,
      message: 'Telemetry event accepted',
    });
  } catch (error) {
    next(error);
  }
}

export async function getAgencyStats(req: Request, res: Response, next: NextFunction) {
  try {
    const stats = await analyticsService.getAgencyStats();
    res.json({
      success: true,
      data: stats,
    });
  } catch (error) {
    next(error);
  }
}
