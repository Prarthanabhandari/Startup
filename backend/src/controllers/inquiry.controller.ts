import { Request, Response, NextFunction } from 'express';
import * as inquiryService from '../services/inquiry.service';

export async function submitInquiry(req: Request, res: Response, next: NextFunction) {
  try {
    const ipAddress = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress;
    const inquiry = await inquiryService.createInquiry(req.body, ipAddress);

    // Keep response signature matching what frontend expects
    res.status(201).json({
      success: true,
      message: 'Inquiry submitted successfully to VOXOR LAB database node.',
      data: inquiry,
      receivedLead: {
        id: inquiry.id,
        name: inquiry.name,
        email: inquiry.email,
        budget: inquiry.budget,
        projectType: inquiry.project_type,
      },
    });
  } catch (error) {
    next(error);
  }
}

export async function listInquiries(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await inquiryService.getInquiries(req.query as any);
    res.json({
      success: true,
      data: result.inquiries,
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

export async function getInquiry(req: Request, res: Response, next: NextFunction) {
  try {
    const inquiry = await inquiryService.getInquiryById(req.params.id);
    res.json({
      success: true,
      data: inquiry,
    });
  } catch (error) {
    next(error);
  }
}

export async function updateStatus(req: Request, res: Response, next: NextFunction) {
  try {
    const inquiry = await inquiryService.updateInquiryStatus(req.params.id, req.body.status);
    res.json({
      success: true,
      message: `Inquiry status updated to "${inquiry.status}"`,
      data: inquiry,
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteInquiry(req: Request, res: Response, next: NextFunction) {
  try {
    await inquiryService.deleteInquiry(req.params.id);
    res.json({
      success: true,
      message: 'Inquiry deleted successfully',
    });
  } catch (error) {
    next(error);
  }
}
