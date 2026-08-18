import { source } from '@/lib/source';
import { NextResponse } from 'next/server';
import { baseUrl } from '@/lib/metadata';

export async function GET() {
  const pages = source.getPages();

  let content = `# Avylo AI Documentation

> Avylo is an AI-native Architecture Operating System for technical founders and reviewers that helps users build, understand, review, and evolve one living software architecture model.

## Documentation Index

`;

  for (const page of pages) {
    content += `- [${page.data.title}](${baseUrl}${page.url}): ${page.data.description || ''}\n`;
  }

  content += `\n## Core Concepts

- **Project Knowledge**: Private, revisioned source material and problem context provided by the creator.
- **Blueprint**: Structured synthesis of business intent and functional scope.
- **Domains & Capabilities**: Buildable functional decomposition of product requirements.
- **Architecture Decision**: Material architectural choices with recommendation, alternatives, trade-offs, evidence, and confidence.
- **Canonical Architecture Model**: The authoritative, editable model of system components, boundaries, and connections.
- **AI Architect**: Continuous reasoning partner that investigates trade-offs and prepares proposals without overriding creator authority.
- **Assumptions vs Open Decisions**: Assumptions are AI-inferred baseline values; Open Decisions represent material architectural uncertainty.
- **Architecture Health & Maturity**: Evidence-based metric coverage and stage progression (Idea → Business Defined → Capabilities Complete → Architecture Stable → Deployment Ready).
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
