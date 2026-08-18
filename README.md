# Avylo Public Documentation Platform

Official public customer-facing product documentation for **Avylo AI**—the AI-native Architecture Operating System.

* Production Domain: [https://docs.avyloai.com](https://docs.avyloai.com)
* Main Website: [https://avyloai.com](https://avyloai.com)
* Product Stage: **Private Alpha**

---

## Overview

This repository houses the standalone documentation application for Avylo. It provides technical founders, lead architects, reviewers, and design partners with comprehensive guides on:
- Starting greenfield architectures with **Bootstrap Discovery**
- Operating the interactive **Architecture Workspace**
- Evaluating and accepting explainable **Architecture Decisions**
- Tracking evidence-based **Architecture Health & Maturity**
- Reviewing systems securely without compromising creator authority

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19, TypeScript)
- **Documentation Engine**: [Fumadocs](https://fumadocs.dev/) (MDX parser, page tree, search, table of contents)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with Avylo dark-first design tokens
- **Diagrams**: Interactive client-side Mermaid rendering
- **Search**: Built-in full-text search with keyboard shortcuts (`Cmd+K`, `/`)
- **Deployment**: [Vercel](https://vercel.com/)

---

## Getting Started

### Prerequisites

- Node.js >= 20.x (Recommended: Node.js 22.x LTS)
- [pnpm](https://pnpm.io/) >= 10.x (Configured for pnpm v11)

### Installation

```bash
# Clone the public documentation repository
git clone https://github.com/AvyloAI/avylo-docs.git
cd avylo-docs

# Install dependencies
pnpm install
```

### Development Server

```bash
# Start local documentation server (runs on port 4300 by default)
pnpm dev
```

Open [http://localhost:4300](http://localhost:4300) in your browser.

---

## Project Structure

```text
avylo-docs/
├── content/
│   └── docs/                          # MDX Documentation source files
│       ├── getting-started/           # Onboarding & Core Concepts
│       ├── workspace/                 # Workspace, AI Architect & Health
│       ├── architecture/              # Intent, Capabilities, Decisions & Model
│       ├── review/                    # Sharing & Reviewer Experience
│       ├── faq.mdx                    # Frequently Asked Questions
│       ├── getting-help.mdx           # Alpha Support & Feedback
│       ├── index.mdx                  # Documentation Overview
│       └── meta.json                  # Navigation structure & ordering
│
├── public/
│   ├── brand/                         # Public brand assets (SVG, PNG)
│   └── images/docs/                   # Product screenshots & illustrations
│
├── src/
│   ├── app/                           # Next.js App Router routes
│   │   ├── (home)/                    # Documentation landing page
│   │   ├── docs/                      # Dynamic documentation layout & pages
│   │   ├── api/search/                # Search index API route
│   │   ├── llms.txt/                  # LLM index endpoint
│   │   ├── llms-full.txt/             # Full documentation text endpoint
│   │   ├── sitemap.ts                 # Dynamic sitemap generator
│   │   └── robots.ts                  # Robots.txt configuration
│   ├── components/
│   │   ├── brand/                     # Logo & Brand components
│   │   └── mdx/                       # Custom MDX components (ScreenshotPlaceholder, Mermaid)
│   └── lib/                           # Source loader & metadata helpers
│
├── tests/                             # Automated smoke tests
├── .github/workflows/                 # CI automation (lint, typecheck, build, test)
└── README.md
```

---

## Authoring Documentation

### Creating a New Page

1. Add a new `.mdx` file inside the appropriate directory in `content/docs/`.
2. Include frontmatter at the top:
   ```yaml
   ---
   title: Page Title
   description: Concise description for SEO and navigation.
   ---
   ```
3. Register the file in the adjacent `meta.json` file to define its position in the sidebar.

### Using MDX Primitives

```tsx
import { Callout } from 'fumadocs-ui/components/callout';
import { Steps } from 'fumadocs-ui/components/steps';
import { Cards, Card } from 'fumadocs-ui/components/card';
import { ScreenshotPlaceholder } from '@/components/mdx/ScreenshotPlaceholder';
import { Mermaid } from '@/components/mdx/Mermaid';

<Callout type="info" title="Important Note">
  Helpful context for users.
</Callout>

<ScreenshotPlaceholder
  id="workspace-overview"
  title="Architecture Workspace"
  description="Overview of the continuous canvas and inspector."
  recommendedSize="1600×1000"
/>
```

---

## Quality & Verification

```bash
# Run ESLint linter
pnpm lint

# Check TypeScript types
pnpm typecheck

# Run automated smoke test suite
pnpm test

# Build production bundle
pnpm build
```

---

## Deployment (Vercel)

This repository is self-contained and preconfigured for deployment on Vercel:

1. **Framework Preset**: Next.js
2. **Build Command**: `pnpm build`
3. **Install Command**: `pnpm install`
4. **Output Directory**: `.next` (default)
5. **Custom Domain**: `docs.avyloai.com`

---

## Public Repository Hygiene

This repository is **PUBLIC**.

- **No Secrets**: Never commit API keys, tokens, auth secrets, or credentials.
- **Zero Runtime Dependencies**: This repository does not connect to private backend repositories at runtime or build time.
- **Public-Safe Content**: Only publish curated, customer-facing documentation. Internal execution tracker notes, employee runbooks, or implementation gaps are strictly excluded.
