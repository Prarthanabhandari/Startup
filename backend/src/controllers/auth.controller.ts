import { Request, Response, NextFunction } from 'express';
import * as authService from '../services/auth.service';
import { AuthenticatedRequest } from '../types';

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body;
    const result = await authService.loginAdmin(email, password);

    res.json({
      success: true,
      message: 'Authentication successful',
      token: result.token,
      user: result.user,
    });
  } catch (error) {
    next(error);
  }
}

export async function me(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    if (!req.user) {
      return res.status(401).json({ success: false, error: 'Unauthorized' });
    }

    const admin = await authService.getAdminProfile(req.user.id);
    res.json({
      success: true,
      data: admin,
    });
  } catch (error) {
    next(error);
  }
}
