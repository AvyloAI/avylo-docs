import { source } from '@/lib/source';
import type { MetadataRoute } from 'next';
import { baseUrl } from '@/lib/metadata';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string) => `${baseUrl}${path}`;

  const pages = source.getPages().map((page) => ({
    url: url(page.url),
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page.url === '/docs' ? 1.0 : 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...pages,
  ];
}
