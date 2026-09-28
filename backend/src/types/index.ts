import { Request } from 'express';

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: string;
  created_at: Date;
}

export interface AuthPayload {
  id: string;
  email: string;
  role: string;
}

export interface AuthenticatedRequest extends Request {
  user?: AuthPayload;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  project_type: string;
  budget: string;
  message: string;
  status: 'new' | 'in_review' | 'contacted' | 'archived';
  ip_address?: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface Estimate {
  id: string;
  client_name?: string | null;
  client_email?: string | null;
  project_type: string;
  selected_features: string[];
  timeline: string;
  min_price: number;
  max_price: number;
  currency: string;
  created_at: Date;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  category_name: string;
  description: string;
  result: string;
  tech_stack: string[];
  image_url: string;
  featured: boolean;
  display_order: number;
  created_at: Date;
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  subtitle?: string | null;
  description: string;
  deliverables: string[];
  icon?: string | null;
  display_order: number;
  created_at: Date;
}

export interface Testimonial {
  id: string;
  client_name: string;
  designation: string;
  company: string;
  avatar_url?: string | null;
  content: string;
  project_category: string;
  rating: number;
  display_order: number;
  created_at: Date;
}

export interface TelemetryEvent {
  id: string;
  event_type: string;
  metadata: Record<string, any>;
  ip_address?: string | null;
  created_at: Date;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
  details?: any;
}
