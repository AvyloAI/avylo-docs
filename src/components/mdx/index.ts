import defaultMdxComponents from 'fumadocs-ui/mdx';
import { ScreenshotPlaceholder } from './ScreenshotPlaceholder';
import { Mermaid } from './Mermaid';
import { ConceptCard } from './ConceptCard';

export const customComponents = {
  ...defaultMdxComponents,
  ScreenshotPlaceholder,
  Mermaid,
  ConceptCard,
  ArchitectureConcept: ConceptCard,
};
