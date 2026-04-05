// src/features/portfolio/types.ts
export type Project = {
  id: string;
  title: string;
  description: string;
  slug: string;
  image?: string;
  video?: string;
  tags?: string[];
};
