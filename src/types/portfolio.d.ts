export type PortfolioCategory = string;

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  thumbnail: string;
  videoUrl: string;
  clientName: string;
  toolsUsed: string[];
  projectType: string;
  featured: boolean;
  year: number;
  summary?: string;
  goal?: string;
  process?: string;
  aiTools?: string[];
  editingTools?: string[];
  deliverables?: string[];
}
