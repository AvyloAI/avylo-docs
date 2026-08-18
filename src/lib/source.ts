import { docs, meta } from '@/.source';
import { loader } from 'fumadocs-core/source';

// Normalize file structure and Windows backslashes for cross-platform stability
const files = [
  ...docs.map((doc: any) => ({
    type: 'page' as const,
    path: doc._file?.path ? doc._file.path.replace(/\\/g, '/') : doc._file?.path,
    absolutePath: doc._file?.absolutePath,
    data: doc,
  })),
  ...meta.map((m: any) => ({
    type: 'meta' as const,
    path: m._file?.path ? m._file.path.replace(/\\/g, '/') : m._file?.path,
    absolutePath: m._file?.absolutePath,
    data: m,
  })),
];

export const source = loader({
  baseUrl: '/docs',
  source: {
    files,
  },
});
