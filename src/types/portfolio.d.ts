export type PortfolioCategory =
  | 'Product Ads'
  | 'UGC Videos'
  | 'Meta Ads'
  | 'AI Commercials'
  | 'Animated Videos'
  | 'Course Videos'
  | 'YouTube Content';

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
}
