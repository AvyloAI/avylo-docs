import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';
import { Logo } from '@/components/brand/Logo';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: <Logo size="sm" />,
        url: '/',
      }}
      links={[
        {
          text: 'Product',
          url: process.env.NEXT_PUBLIC_AVYLO_URL || 'https://avyloai.com',
          external: true,
        },
      ]}
      sidebar={{
        defaultOpenLevel: 1,
        banner: (
          <div className="rounded-lg border border-avylo-blue/20 bg-avylo-blue/5 p-2.5 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5 font-medium text-avylo-cyan">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-avylo-cyan animate-pulse" />
              <span>Private Alpha</span>
            </div>
            <p className="mt-1 text-[11px] leading-snug">Product documentation for early-access builders and reviewers.</p>
          </div>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
