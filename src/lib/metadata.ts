import type { Metadata } from 'next';

export const baseUrl = process.env.NEXT_PUBLIC_DOCS_URL || 'https://docs.avyloai.com';

export function createMetadata(override: Partial<Metadata> = {}): Metadata {
  return {
    metadataBase: new URL(baseUrl),
    title: {
      template: '%s | Avylo Docs',
      default: 'Avylo Docs | AI-native Architecture Operating System',
    },
    description:
      override.description ||
      'Official documentation for Avylo AI. Build, understand, review, and evolve your living software architecture model.',
    openGraph: {
      title: override.title ? `${override.title} | Avylo Docs` : 'Avylo Docs',
      description:
        override.description ||
        'Official documentation for Avylo AI. Build, understand, review, and evolve your living software architecture model.',
      url: baseUrl,
      siteName: 'Avylo Docs',
      type: 'website',
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      title: override.title ? `${override.title} | Avylo Docs` : 'Avylo Docs',
      description:
        override.description ||
        'Official documentation for Avylo AI. Build, understand, review, and evolve your living software architecture model.',
      ...override.twitter,
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/brand/avylo-mark.png',
    },
    ...override,
  };
}
