// =============================================================================
// Learning Hub — Types, Content Data & Helpers
// =============================================================================

export type ContentType = 'article' | 'video' | 'infographic' | 'worksheet';
export type Topic = 'basics' | 'erp' | 'accommodation' | 'school' | 'self-care' | 'subtypes' | 'medication' | 'siblings' | 'therapy' | 'strategies';
export type AgeGroup = '4-7' | '8-12' | '13-18' | 'all';
export type ContentDifficulty = 'beginner' | 'intermediate' | 'advanced';

export interface LearningContent {
  slug: string;
  title: string;
  contentType: ContentType;
  topic: Topic;
  ageGroups: AgeGroup[];
  difficulty: ContentDifficulty;
  readingTimeMinutes: number;
  keyTakeaways: string[];
  body: string;
  relatedSituationSlugs: string[];
}

export interface LearningPath {
  slug: string;
  title: string;
  description: string;
  estimatedMinutes: number;
  contentSlugs: string[];
}

// =============================================================================
// Articles
// =============================================================================

export const learningContent: LearningContent[] = [
