import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { siteConfig } from '@/config/appConfig';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.title,
    type: 'website'
  },
  twitter: {
    title: siteConfig.title,
    description: siteConfig.description
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
