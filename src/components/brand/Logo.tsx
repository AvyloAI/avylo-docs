import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const dimensions = {
    sm: { icon: 20, text: 'text-sm' },
    md: { icon: 26, text: 'text-base' },
    lg: { icon: 34, text: 'text-xl' },
  }[size];

  return (
    <div className={`flex items-center gap-2.5 font-semibold tracking-tight ${className}`}>
      <div className="relative flex items-center justify-center">
        <Image
          src="/brand/avylo-mark.png"
          alt="Avylo Logo"
          width={dimensions.icon}
          height={dimensions.icon}
          className="rounded-md object-contain"
          priority
        />
      </div>
      {showText && (
        <div className="flex items-center gap-1.5 font-mono">
          <span className={`font-bold tracking-tight text-foreground ${dimensions.text}`}>
            avylo
          </span>
          <span className="rounded bg-avylo-blue/15 px-1.5 py-0.5 text-[10px] font-semibold text-avylo-cyan uppercase tracking-wider">
            docs
          </span>
        </div>
      )}
    </div>
  );
}
