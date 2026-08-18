import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';

test('Documentation files exist and have valid frontmatter', () => {
  const docsDir = path.resolve('content/docs');
  assert.ok(fs.existsSync(docsDir), 'content/docs directory must exist');

  const requiredDocs = [
    'index.mdx',
    'faq.mdx',
    'getting-help.mdx',
    'getting-started/index.mdx',
    'getting-started/core-concepts.mdx',
    'getting-started/first-architecture.mdx',
    'getting-started/understanding-architecture-v1.mdx',
    'workspace/index.mdx',
    'workspace/ai-architect.mdx',
    'workspace/assumptions-open-decisions.mdx',
    'workspace/health-maturity.mdx',
    'architecture/project-knowledge-blueprint.mdx',
    'architecture/capabilities-requirements.mdx',
    'architecture/decisions.mdx',
    'architecture/model.mdx',
    'review/sharing.mdx',
    'review/reviewer-experience.mdx',
  ];

  for (const relPath of requiredDocs) {
    const fullPath = path.join(docsDir, relPath);
    assert.ok(fs.existsSync(fullPath), `Document ${relPath} must exist`);
    const content = fs.readFileSync(fullPath, 'utf8');
    assert.ok(content.includes('title:'), `Document ${relPath} must have title frontmatter`);
    assert.ok(content.includes('description:'), `Document ${relPath} must have description frontmatter`);
  }
});

test('Public brand assets exist', () => {
  const brandDir = path.resolve('public/brand');
  assert.ok(fs.existsSync(brandDir), 'public/brand directory must exist');
  assert.ok(fs.existsSync(path.join(brandDir, 'avylo-mark.png')), 'avylo-mark.png must exist');
  assert.ok(fs.existsSync(path.join(brandDir, 'avylo-logo.png')), 'avylo-logo.png must exist');
  assert.ok(fs.existsSync(path.join(brandDir, 'avylo-mark.svg')), 'avylo-mark.svg must exist');
  assert.ok(fs.existsSync(path.resolve('public/favicon.ico')), 'favicon.ico must exist');
});

test('Screenshot placeholder component directory and image paths exist', () => {
  const imagesDir = path.resolve('public/images/docs');
  assert.ok(fs.existsSync(imagesDir), 'public/images/docs must exist');
  assert.ok(fs.existsSync(path.join(imagesDir, 'getting-started')), 'getting-started folder must exist');
  assert.ok(fs.existsSync(path.join(imagesDir, 'workspace')), 'workspace folder must exist');
  assert.ok(fs.existsSync(path.join(imagesDir, 'architecture')), 'architecture folder must exist');
  assert.ok(fs.existsSync(path.join(imagesDir, 'review')), 'review folder must exist');
});

test('Configuration files are present and safe', () => {
  assert.ok(fs.existsSync(path.resolve('.env.example')), '.env.example must exist');
  assert.ok(fs.existsSync(path.resolve('.gitignore')), '.gitignore must exist');
  assert.ok(fs.existsSync(path.resolve('.github/workflows/ci.yml')), 'CI workflow must exist');

  const envContent = fs.readFileSync(path.resolve('.env.example'), 'utf8');
  assert.ok(!envContent.includes('SECRET'), '.env.example must contain no secret keys');
  assert.ok(!envContent.includes('DATABASE_URL'), '.env.example must contain no database URLs');
});
