import { Request, Response, NextFunction } from 'express';
import { config } from '../config/env';

export class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    super(message);
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const statusCode = err.statusCode || (err.status ? err.status : 500);
  const message = err.message || 'Internal server error';

  // Handle unique constraint violations from Postgres
  if (err.code === '23505') {
    return res.status(409).json({
      success: false,
      error: 'Conflict: Record with this unique identifier already exists.',
      details: err.detail,
    });
  }

  // Handle foreign key violation from Postgres
  if (err.code === '23503') {
    return res.status(400).json({
      success: false,
      error: 'Referenced relation constraint violated.',
    });
  }

  if (statusCode >= 500) {
    console.error(`[Server Exception] ${req.method} ${req.originalUrl}:`, err);
  }

  res.status(statusCode).json({
    success: false,
    error: message,
    ...(config.nodeEnv === 'development' && { stack: err.stack }),
  });
}
