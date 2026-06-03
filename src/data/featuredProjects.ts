import type { FeaturedProject } from '@/types/featuredProject';

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'featured-01',
    title: 'Product Launch Cinematic Ad',
    category: 'Product Ads',
    clientName: 'Luxe Gear',
    year: 2025,
    goal: 'Create a luxury product launch film that positions the brand as premium, modern, and emotionally compelling.',
    process: 'From concept ideation to AI asset generation and editorial refinement, the project blended cinematic direction with rapid AI-enhanced production workflows.',
    aiTools: ['Midjourney', 'Runway', 'Flow'],
    editingTools: ['Premiere Pro', 'After Effects'],
    deliverables: ['30s hero ad', '15s social cutdowns', 'motion logo sting', 'campaign teaser kit'],
    thumbnail: '/thumbnails/product-ad-01.jpg',
    summary: 'A polished launch campaign designed for high-impact digital placements and brand storytelling.',
    videoUrl: '/videos/product-ads/placeholder.mp4',
    highlighted: true
  },
  {
    id: 'featured-02',
    title: 'UGC Growth Campaign',
    category: 'UGC Videos',
    clientName: 'Spark Studio',
    year: 2025,
    goal: 'Deliver authentic UGC-style content that scales across social feeds while preserving premium brand energy.',
    process: 'We mapped audience behavior into a content playbook, produced multiple short-form assets, and layered AI-powered visual enhancements for maximum thumb-stop impact.',
    aiTools: ['Pika', 'Runway'],
    editingTools: ['CapCut', 'Premiere Pro'],
    deliverables: ['6x UGC cuts', 'story ad sequence', 'platform-specific edits'],
    thumbnail: '/thumbnails/ugc-01.jpg',
    summary: 'A studio-crafted UGC suite for better engagement and a more sophisticated social presence.',
    videoUrl: '/videos/ugc-videos/placeholder.mp4',
    highlighted: true
  }
];
