import type { PortfolioItem } from '@/types/portfolio';

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'project-01',
    title: 'Placeholder Product Ad',
    category: 'Product Ads',
    description: 'A premium, AI-driven product promotion concept crafted for brand impact.',
    thumbnail: '/thumbnails/product-ad-01.jpg',
    videoUrl: '/videos/product-ads/placeholder.mp4',
    clientName: 'Brand Partner',
    toolsUsed: ['Runway', 'After Effects', 'Premiere Pro'],
    projectType: 'Video Ad Campaign',
    featured: true,
    year: 2025
  },
  {
    id: 'project-02',
    title: 'UGC Campaign Teaser',
    category: 'UGC Videos',
    description: 'High-energy user-generated content styling for digital conversion.',
    thumbnail: '/thumbnails/ugc-01.jpg',
    videoUrl: '/videos/ugc-videos/placeholder.mp4',
    clientName: 'Consumer Brand',
    toolsUsed: ['CapCut', 'Pika', 'Premiere Pro'],
    projectType: 'UGC Video Suite',
    featured: false,
    year: 2025
  }
];
