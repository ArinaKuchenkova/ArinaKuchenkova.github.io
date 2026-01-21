/* ===== Общий ответ Strapi ===== */

import { Project, ProjectsByCategoriesQuery } from "@/graphql/generated";

export interface StrapiCollectionResponse<T> {
  data: T[];
  meta: {
    pagination: Pagination;
  };
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export type ProjectCategory = NonNullable<ProjectsByCategoriesQuery['projectCategories'][number]>


/* ===== Portfolio item ===== */

export type PortfolioItem = NonNullable<ProjectCategory['projects'][number]>

/* ===== Media ===== */

export interface MediaFile {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;

  formats: MediaFormats;

  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown;

  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blurhash: string | null;
}

export interface MediaFormats {
  large?: MediaFormat;
  medium?: MediaFormat;
  small?: MediaFormat;
  thumbnail?: MediaFormat;
}

export interface MediaFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

/* ===== Links ===== */

export interface PortfolioLink {
  id: number;
  Label: string;
  URL: string;
}

/* ===== Dynamic zone ===== */

export type ProjectContentBlock = ProjectTextBlock;

export interface ProjectTextBlock {
  __component: 'project.text-block';
  id: number;
  title: string;
  content: string;
}
