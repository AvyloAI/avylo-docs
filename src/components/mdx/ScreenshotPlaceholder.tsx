'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, Image as ImageIcon, Sparkles, Layers, Info } from 'lucide-react';

interface ScreenshotPlaceholderProps {
  id: string;
  title: string;
  description?: string;
  recommendedSize?: string;
  src?: string;
  alt?: string;
  caption?: string;
}

export function ScreenshotPlaceholder({
  id,
  title,
  description,
  recommendedSize = '1600×1000',
  src,
  alt,
  caption,
}: ScreenshotPlaceholderProps) {
  const [hasError, setHasError] = useState(false);

  // If real screenshot src provided and not errored, render real image
  if (src && !hasError) {
    return (
      <figure className="my-6 overflow-hidden rounded-xl border border-border/80 bg-card shadow-sm">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/40">
          <Image
            src={src}
            alt={alt || title}
            fill
            className="object-cover object-top"
            onError={() => setHasError(true)}
          />
        </div>
        {(caption || title) && (
          <figcaption className="border-t border-border/40 px-4 py-2.5 text-center text-xs text-muted-foreground">
            {caption || title}
          </figcaption>
        )}
      </figure>
    );
  }

  // Otherwise render styled architectural placeholder
  return (
    <figure className="my-6 overflow-hidden rounded-xl border border-border/70 bg-gradient-to-b from-card to-background shadow-sm transition-all hover:border-avylo-blue/40">
      <div className="relative flex min-h-[260px] sm:min-h-[320px] flex-col items-center justify-center p-6 text-center">
        {/* Subtle grid pattern background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(var(--foreground) 1px, transparent 1px)`,
            backgroundSize: '16px 16px',
          }}
        />

        {/* Top badge */}
        <div className="relative z-10 mb-3.5 inline-flex items-center gap-1.5 rounded-full border border-avylo-blue/25 bg-avylo-blue/10 px-3 py-1 text-[11px] font-medium text-avylo-cyan">
          <Camera className="h-3 w-3" />
          <span>Screenshot Reference</span>
          <span className="font-mono text-muted-foreground">#{id}</span>
        </div>

        {/* Icon & Title */}
        <div className="relative z-10 flex flex-col items-center max-w-lg">
          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg border border-border/80 bg-muted/50 text-foreground shadow-2xs">
            <Layers className="h-5 w-5 text-avylo-blue" />
          </div>

          <h4 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
            {title}
          </h4>

          {description && (
            <p className="mt-1.5 text-xs text-muted-foreground sm:text-sm leading-relaxed">
              {description}
            </p>
          )}

          {/* Author guidance metadata */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[11px] text-muted-foreground/80">
            <span className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 font-mono">
              Target: /images/docs/{id}.webp
            </span>
            <span className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 font-mono">
              Size: {recommendedSize}
            </span>
          </div>
        </div>
      </div>

      {(caption || description) && (
        <figcaption className="border-t border-border/40 bg-muted/20 px-4 py-2 text-center text-xs text-muted-foreground">
          {caption || `Illustration: ${title}`}
        </figcaption>
      )}
    </figure>
  );
}
