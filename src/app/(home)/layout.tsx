import { HomeLayout } from 'fumadocs-ui/layouts/home';
import type { ReactNode } from 'react';
import { Logo } from '@/components/brand/Logo';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout
      nav={{
        title: <Logo size="md" />,
        url: '/',
      }}
      links={[
        {
          text: 'Documentation',
          url: '/docs/getting-started',
          active: 'nested-url',
        },
        {
          text: 'Concepts',
          url: '/docs/getting-started/core-concepts',
        },
        {
          text: 'FAQ',
          url: '/docs/faq',
        },
        {
          text: 'Main Website',
          url: process.env.NEXT_PUBLIC_AVYLO_URL || 'https://avyloai.com',
          external: true,
        },
      ]}
    >
      {children}
    </HomeLayout>
  );
}
