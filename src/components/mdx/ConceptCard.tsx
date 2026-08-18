import React from 'react';
import Link from 'next/link';
import { ArrowRight, Box, Compass, FileText, GitBranch, Layers, ShieldCheck, Zap } from 'lucide-react';

interface ConceptCardProps {
  title: string;
  description: string;
  href: string;
  category?: string;
  icon?: string;
}

export function ConceptCard({ title, description, href, category, icon }: ConceptCardProps) {
  const renderIcon = () => {
    switch (icon) {
      case 'model':
        return <Layers className="h-5 w-5 text-avylo-blue" />;
      case 'blueprint':
        return <Compass className="h-5 w-5 text-avylo-cyan" />;
      case 'decision':
        return <GitBranch className="h-5 w-5 text-avylo-blue" />;
      case 'health':
        return <ShieldCheck className="h-5 w-5 text-emerald-400" />;
      case 'ai':
        return <Zap className="h-5 w-5 text-amber-400" />;
      default:
        return <Box className="h-5 w-5 text-avylo-blue" />;
    }
  };

  return (
    <Link
      href={href}
      className="group relative flex flex-col justify-between rounded-xl border border-border/80 bg-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-avylo-blue/60 hover:shadow-md"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/70 bg-muted/40 transition-colors group-hover:border-avylo-blue/40 group-hover:bg-avylo-blue/10">
            {renderIcon()}
          </div>
          {category && (
            <span className="rounded bg-muted/60 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              {category}
            </span>
          )}
        </div>

        <h3 className="text-base font-semibold tracking-tight text-foreground transition-colors group-hover:text-avylo-blue">
          {title}
        </h3>
        <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-avylo-blue group-hover:text-avylo-cyan">
        <span>Read documentation</span>
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
