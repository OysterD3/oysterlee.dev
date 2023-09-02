import type { ValuesOf } from '~/utils/ts-utils';

export const BLOG_TAG = {
  personal: 'Personal',
  selfEnrichment: 'Self-Enrichment',
  inspiration: 'Inspiration',
} as const;

export type BlogTagType = ValuesOf<typeof BLOG_TAG>;
