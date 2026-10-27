/**
 * VOXOR LAB Frontend API Client
 * Enterprise-grade HTTP client with resilient fallbacks and typed interfaces.
 */

const API_BASE_URL = 
  (import.meta as any).env?.VITE_API_URL?.replace(/\/$/, '') || 
  'http://localhost:5000/api';

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface InquiryPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  timeline?: string;
  projectScale?: string;
  budget?: string;
  message: string;
}

export interface InquiryResult {
  id: string;
  status: string;
  referenceNumber: string;
  createdAt: string;
}

export interface HealthCheckResult {
  status: 'healthy' | 'degraded';
  database: 'connected' | 'disconnected';
  uptime: number;
  timestamp: string;
  service: string;
  version: string;
}

/**
 * Robust fetch wrapper with timeout and standardized JSON response
 */
async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
  
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...(options.headers as Record<string, string> || {}),
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12000); // 12s timeout

  try {
    const response = await fetch(url, {
      ...options,
      headers,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const contentType = response.headers.get('content-type') || '';
    const isJson = contentType.includes('application/json');
    const data = isJson ? await response.json() : await response.text();

    if (!response.ok) {
      const errorMessage = 
        (typeof data === 'object' && data?.error) || 
        (typeof data === 'object' && data?.message) || 
        `Request failed with status ${response.status}`;
      throw new Error(errorMessage);
    }

    return data as T;
  } catch (err: any) {
    clearTimeout(timeoutId);
    if (err.name === 'AbortError') {
      throw new Error('Server request timed out after 12 seconds');
    }
    throw err;
  }
}

/**
 * High-level API Service methods
 */
export const api = {
  // Check backend server & database status
  async checkHealth(): Promise<HealthCheckResult> {
    return request<HealthCheckResult>('/health', { method: 'GET' });
  },

  // Submit client lead / project inquiry to backend with resilient fallback
  async submitInquiry(payload: InquiryPayload): Promise<ApiResponse<InquiryResult>> {
    return request<ApiResponse<InquiryResult>>('/contact', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  // Fetch all backend projects
  async getProjects(): Promise<ApiResponse<any[]>> {
    return request<ApiResponse<any[]>>('/projects', { method: 'GET' });
  },

  // Generic GET
  async get<T>(endpoint: string): Promise<T> {
    return request<T>(endpoint, { method: 'GET' });
  },

  // Generic POST
  async post<T>(endpoint: string, body: any): Promise<T> {
    return request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
    });
  },
};

export default api;
