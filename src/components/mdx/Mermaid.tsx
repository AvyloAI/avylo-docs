'use client';

import React, { useEffect, useId, useState } from 'react';
import { useTheme } from 'next-themes';

interface MermaidProps {
  chart: string;
}

export function Mermaid({ chart }: MermaidProps) {
  const id = useId().replace(/:/g, '');
  const [svg, setSvg] = useState<string>('');
  const [hasError, setHasError] = useState<boolean>(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    let isMounted = true;

    async function renderChart() {
      try {
        const mermaid = (await import('mermaid')).default;
        mermaid.initialize({
          startOnLoad: false,
          theme: resolvedTheme === 'dark' ? 'dark' : 'neutral',
          themeVariables:
            resolvedTheme === 'dark'
              ? {
                  primaryColor: '#162338',
                  primaryTextColor: '#f0f4ff',
                  primaryBorderColor: '#0087f8',
                  lineColor: '#44c4f6',
                  secondaryColor: '#1c2d43',
                  tertiaryColor: '#0d1829',
                  fontFamily: 'Inter, sans-serif',
                }
              : {
                  primaryColor: '#f0f7ff',
                  primaryTextColor: '#0d1829',
                  primaryBorderColor: '#0087f8',
                  lineColor: '#0087f8',
                  secondaryColor: '#f8fafc',
                  tertiaryColor: '#ffffff',
                  fontFamily: 'Inter, sans-serif',
                },
          securityLevel: 'strict',
        });

        const uniqueId = `mermaid-${id}-${Math.random().toString(36).substring(2, 9)}`;
        const { svg } = await mermaid.render(uniqueId, chart.trim());
        if (isMounted) {
          setSvg(svg);
          setHasError(false);
        }
      } catch (err) {
        console.error('Mermaid render error:', err);
        if (isMounted) {
          setHasError(true);
        }
      }
    }

    renderChart();

    return () => {
      isMounted = false;
    };
  }, [chart, id, resolvedTheme]);

  if (hasError) {
    return (
      <div className="my-4 rounded-lg border border-destructive/30 bg-destructive/10 p-4 font-mono text-xs text-destructive">
        <p className="font-semibold">Failed to render diagram:</p>
        <pre className="mt-2 overflow-x-auto text-[11px]">{chart}</pre>
      </div>
    );
  }

  if (!svg) {
    return (
      <div className="my-6 flex min-h-[140px] items-center justify-center rounded-xl border border-border/50 bg-muted/20 p-6 text-xs text-muted-foreground animate-pulse">
        Rendering diagram...
      </div>
    );
  }

  return (
    <div
      className="my-6 flex justify-center overflow-x-auto rounded-xl border border-border/70 bg-card p-5 shadow-xs transition-colors hover:border-border"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
