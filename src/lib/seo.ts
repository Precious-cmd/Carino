import { seoConfig } from '@/config/seoConfig';

export const buildPageTitle = (title?: string) => {
  if (!title) return seoConfig.defaultTitle;
  return seoConfig.titleTemplate.replace('%s', title);
};

export const buildMetaDescription = (description?: string) => description ?? seoConfig.defaultDescription;
