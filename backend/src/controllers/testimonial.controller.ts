import { Request, Response, NextFunction } from 'express';
import * as testimonialService from '../services/testimonial.service';

export async function getTestimonials(req: Request, res: Response, next: NextFunction) {
  try {
    const testimonials = await testimonialService.getAllTestimonials();
    res.json({
      success: true,
      data: testimonials,
      count: testimonials.length,
    });
  } catch (error) {
    next(error);
  }
}

export async function createTestimonial(req: Request, res: Response, next: NextFunction) {
  try {
    const testimonial = await testimonialService.createTestimonial(req.body);
    res.status(201).json({
      success: true,
      message: 'Testimonial created successfully',
      data: testimonial,
    });
  } catch (error) {
    next(error);
  }
}
