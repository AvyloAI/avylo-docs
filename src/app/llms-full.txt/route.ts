import { source } from '@/lib/source';
import { NextResponse } from 'next/server';
import { baseUrl } from '@/lib/metadata';

export async function GET() {
  const pages = source.getPages();

  let content = `# Avylo AI Full Public Documentation

> Avylo is an AI-native Architecture Operating System for technical founders and reviewers that helps users build, understand, review, and evolve one living software architecture model.
> Website: https://avyloai.com
> Documentation: ${baseUrl}

`;

  for (const page of pages) {
    content += `\n================================================================================\n`;
    content += `# ${page.data.title}\n`;
    content += `URL: ${baseUrl}${page.url}\n`;
    if (page.data.description) {
      content += `Description: ${page.data.description}\n`;
    }
    content += `================================================================================\n\n`;

    const structured = (page.data as any).structuredData;
    if (structured?.contents) {
      for (const section of structured.contents) {
        if (section.heading) {
          content += `## ${section.heading}\n\n`;
        }
        if (section.content) {
          content += `${section.content}\n\n`;
        }
      }
    } else {
      content += `View full interactive documentation at ${baseUrl}${page.url}\n\n`;
    }
  }

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
