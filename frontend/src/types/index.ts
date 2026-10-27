/**
 * VOXOR LAB - Enterprise TypeScript Type Definitions
 * Standardized interfaces for frontend and backend contracts.
 */

// ==================== PORTFOLIO & PROJECTS ====================

export type ProjectCategory =
  | 'Full-Stack Web'
  | 'Node & PostgreSQL'
  | 'React & Frontend'
  | 'AI & Linguistics'
  | 'Games & Interactive'
  | '3D & Spatial WebGL';

export type ProjectStatusType = 'live' | 'dev' | 'research';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectArchitecture {
  frontend: string;
  backend: string;
  database: string;
  security: string;
}

export interface PortfolioProject {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  status: 'Live on Production' | 'Active Development' | 'Open-Source Research';
  statusType: ProjectStatusType;
  image: string;
  tags: string[];
  overview: string;
  keyHighlights: string[];
  metrics: ProjectMetric[];
  architecture?: ProjectArchitecture;
  specs?: string[];
  githubUrl?: string;
  liveUrl?: string | null;
  cloneCmd?: string;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
}

// ==================== SERVICES & OFFERINGS ====================

export interface ServiceItemData {
  number: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  fullDesc: string;
  deliverables: string[];
  specs: string[];
  techStack: string[];
  icon: any;
  colorTheme: {
    bgGradient: string;
    borderAccent: string;
    pillBg: string;
    pillText: string;
    glowColor: string;
    iconColor: string;
    cardBorder?: string;
    hoverBorder?: string;
    topRailGradient?: string;
    cornerColor?: string;
    shadowGlow?: string;
  };
  visualType: 'web' | 'ai' | 'mobile' | 'saas' | 'design' | 'strategy';
}

// ==================== INQUIRIES & CONTACT ====================

export interface InquiryFormData {
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

export interface InquirySubmissionResult {
  id: string;
  status: 'received' | 'in_review' | 'responded';
  referenceNumber: string;
  createdAt: string;
}

// ==================== TEAM MEMBERS ====================

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  subtitle: string;
  badge: string;
  initials: string;
  image: string;
  borderActive: string;
  activeText: string;
  gradient: string;
  badgeStyle: string;
  focus: string;
  bio: string;
  responsibilities: string[];
  quote: string;
  skills: string[];
  github: string;
  linkedin: string;
  email: string;
}

// ==================== NAVIGATION ====================

export interface NavLinkItem {
  name: string;
  path: string;
}
