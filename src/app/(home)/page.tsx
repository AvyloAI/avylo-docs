import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Box,
  Compass,
  Cpu,
  FileCheck2,
  FileCode2,
  GitBranch,
  Layers,
  Search,
  ShieldCheck,
  Sparkles,
  Users2,
  Zap,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-between overflow-hidden">
      {/* Background glow & architectural grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[500px] w-[700px] max-w-full rounded-full bg-gradient-to-tr from-avylo-blue/15 to-avylo-cyan/10 blur-[130px]" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025] dark:opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(var(--foreground) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        {/* Top Hero Section */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-avylo-blue/30 bg-avylo-blue/10 px-3.5 py-1 text-xs font-medium text-avylo-cyan">
            <span className="flex h-2 w-2 rounded-full bg-avylo-cyan animate-pulse" />
            <span>Avylo Documentation • Private Alpha</span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Build, understand, and evolve your <span className="bg-gradient-to-r from-avylo-blue via-avylo-cyan to-sky-300 bg-clip-text text-transparent">software architecture</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Avylo is the AI-native Architecture Operating System for technical founders and reviewers.
            Maintain one living, explainable architecture model connecting product intent to technical decisions.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center gap-2 rounded-lg bg-avylo-blue px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-avylo-blue/20 transition-all hover:bg-avylo-blue/90 hover:shadow-lg"
            >
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/docs/getting-started/core-concepts"
              className="inline-flex items-center gap-2 rounded-lg border border-border/80 bg-card/80 backdrop-blur-xs px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-avylo-blue/50 hover:bg-card hover:shadow-sm"
            >
              <BookOpen className="h-4 w-4 text-avylo-cyan" />
              <span>Understand Avylo</span>
            </Link>
          </div>
        </div>

        {/* Popular Starting Points */}
        <div className="mt-16 sm:mt-20">
          <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-6">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-avylo-blue" />
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Popular Starting Points
              </h2>
            </div>
            <Link
              href="/docs/getting-started"
              className="text-xs font-medium text-avylo-blue hover:text-avylo-cyan transition-colors"
            >
              View all docs &rarr;
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/docs/getting-started/first-architecture"
              className="group rounded-xl border border-border/70 bg-card p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-avylo-blue/50 hover:shadow-md"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-muted/40 text-avylo-blue group-hover:bg-avylo-blue/10 group-hover:border-avylo-blue/30">
                <FileCode2 className="h-4 w-4" />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-foreground group-hover:text-avylo-blue transition-colors">
                Create First Architecture
              </h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Provide project knowledge and watch Bootstrap Discovery produce Architecture V1.
              </p>
            </Link>

            <Link
              href="/docs/workspace"
              className="group rounded-xl border border-border/70 bg-card p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-avylo-blue/50 hover:shadow-md"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-muted/40 text-avylo-cyan group-hover:bg-avylo-cyan/10 group-hover:border-avylo-cyan/30">
                <Layers className="h-4 w-4" />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-foreground group-hover:text-avylo-blue transition-colors">
                Architecture Workspace
              </h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Explore your continuous canvas, AI recommendations, decisions, and system views.
              </p>
            </Link>

            <Link
              href="/docs/architecture/decisions"
              className="group rounded-xl border border-border/70 bg-card p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-avylo-blue/50 hover:shadow-md"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-muted/40 text-avylo-blue group-hover:bg-avylo-blue/10 group-hover:border-avylo-blue/30">
                <GitBranch className="h-4 w-4" />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-foreground group-hover:text-avylo-blue transition-colors">
                Architecture Decisions
              </h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Inspect AI trade-offs, evidence, impact analysis, and accept canonical choices.
              </p>
            </Link>

            <Link
              href="/docs/workspace/health-maturity"
              className="group rounded-xl border border-border/70 bg-card p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-avylo-blue/50 hover:shadow-md"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-muted/40 text-emerald-400 group-hover:bg-emerald-400/10 group-hover:border-emerald-400/30">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-foreground group-hover:text-avylo-blue transition-colors">
                Health & Maturity
              </h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Track evidence-based coverage, confidence, drift detection, and maturity milestones.
              </p>
            </Link>
          </div>
        </div>

        {/* Core Architecture Concepts */}
        <div className="mt-14 sm:mt-18">
          <div className="border-b border-border/60 pb-3 mb-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Core Architecture Concepts
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/docs/architecture/project-knowledge-blueprint"
              className="group rounded-xl border border-border/70 bg-card p-5 transition-all hover:border-avylo-blue/50 hover:shadow-sm"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-avylo-cyan">
                <Compass className="h-4 w-4" />
                <span>Intent Layer</span>
              </div>
              <h3 className="mt-2 text-base font-semibold text-foreground group-hover:text-avylo-blue transition-colors">
                Project Knowledge & Blueprint
              </h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Raw business context and structured problem statements that ground all downstream architecture choices.
              </p>
            </Link>

            <Link
              href="/docs/architecture/capabilities-requirements"
              className="group rounded-xl border border-border/70 bg-card p-5 transition-all hover:border-avylo-blue/50 hover:shadow-sm"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-avylo-blue">
                <Box className="h-4 w-4" />
                <span>Functional Decomposition</span>
              </div>
              <h3 className="mt-2 text-base font-semibold text-foreground group-hover:text-avylo-blue transition-colors">
                Domains & Capabilities
              </h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Break business intent down into buildable capability blocks and explicit functional requirements.
              </p>
            </Link>

            <Link
              href="/docs/architecture/model"
              className="group rounded-xl border border-border/70 bg-card p-5 transition-all hover:border-avylo-blue/50 hover:shadow-sm"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-indigo-400">
                <Layers className="h-4 w-4" />
                <span>Single Source of Truth</span>
              </div>
              <h3 className="mt-2 text-base font-semibold text-foreground group-hover:text-avylo-blue transition-colors">
                Canonical Architecture Model
              </h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                The authoritative model of your software system. Diagrams and exports are derived views, not competing authorities.
              </p>
            </Link>

            <Link
              href="/docs/workspace/ai-architect"
              className="group rounded-xl border border-border/70 bg-card p-5 transition-all hover:border-avylo-blue/50 hover:shadow-sm"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-amber-400">
                <Zap className="h-4 w-4" />
                <span>Assisted Intelligence</span>
              </div>
              <h3 className="mt-2 text-base font-semibold text-foreground group-hover:text-avylo-blue transition-colors">
                AI Architect
              </h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                An active reasoning partner that investigates trade-offs, evaluates impact, and proposes Change Sets for creator approval.
              </p>
            </Link>

            <Link
              href="/docs/workspace/assumptions-open-decisions"
              className="group rounded-xl border border-border/70 bg-card p-5 transition-all hover:border-avylo-blue/50 hover:shadow-sm"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-rose-400">
                <GitBranch className="h-4 w-4" />
                <span>Uncertainty Management</span>
              </div>
              <h3 className="mt-2 text-base font-semibold text-foreground group-hover:text-avylo-blue transition-colors">
                Assumptions vs. Open Decisions
              </h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Distinguish between low-risk AI inferences (Assumptions) and high-impact architectural branch points (Open Decisions).
              </p>
            </Link>

            <Link
              href="/docs/review/reviewer-experience"
              className="group rounded-xl border border-border/70 bg-card p-5 transition-all hover:border-avylo-blue/50 hover:shadow-sm"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-teal-400">
                <Users2 className="h-4 w-4" />
                <span>Collaboration Boundaries</span>
              </div>
              <h3 className="mt-2 text-base font-semibold text-foreground group-hover:text-avylo-blue transition-colors">
                Reviewer Experience
              </h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Share read-only or scoped architecture perspectives with external reviewers without losing creator authority.
              </p>
            </Link>
          </div>
        </div>

        {/* Conceptual Chain Banner */}
        <div className="mt-16 rounded-2xl border border-border/80 bg-gradient-to-r from-card via-muted/30 to-card p-6 sm:p-8">
          <h3 className="text-base font-semibold text-foreground sm:text-lg">
            The Avylo Architecture Lifecycle
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            Architecture flows deterministically from business intent to authoritative technical models.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
            <div className="rounded-md border border-border/60 bg-card px-3 py-1.5 font-medium text-foreground">
              Project Knowledge
            </div>
            <span className="text-muted-foreground/60">&rarr;</span>
            <div className="rounded-md border border-border/60 bg-card px-3 py-1.5 font-medium text-foreground">
              Blueprint
            </div>
            <span className="text-muted-foreground/60">&rarr;</span>
            <div className="rounded-md border border-border/60 bg-card px-3 py-1.5 font-medium text-foreground">
              Capabilities & Requirements
            </div>
            <span className="text-muted-foreground/60">&rarr;</span>
            <div className="rounded-md border border-border/60 bg-card px-3 py-1.5 font-medium text-avylo-blue">
              Architecture Decisions
            </div>
            <span className="text-muted-foreground/60">&rarr;</span>
            <div className="rounded-md border border-avylo-blue/40 bg-avylo-blue/10 px-3 py-1.5 font-semibold text-avylo-cyan">
              Architecture Model
            </div>
            <span className="text-muted-foreground/60">&rarr;</span>
            <div className="rounded-md border border-border/60 bg-card px-3 py-1.5 font-medium text-emerald-400">
              Health & Derived Views
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-card/40 py-8 text-center text-xs text-muted-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
          <p>&copy; {new Date().getFullYear()} Avylo AI. Customer-facing documentation for Avylo Private Alpha.</p>
          <div className="flex items-center gap-4">
            <Link href="/docs/getting-started" className="hover:text-foreground transition-colors">Documentation</Link>
            <Link href="/docs/faq" className="hover:text-foreground transition-colors">FAQ</Link>
            <Link href="/docs/getting-help" className="hover:text-foreground transition-colors">Getting Help</Link>
            <Link href="/llms.txt" className="hover:text-foreground transition-colors">llms.txt</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
