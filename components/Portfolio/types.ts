import { PortfolioType } from "./data";

export enum GalleryGridType {
  hero = 'hero',
  normal = 'normal',
  same = 'same'
}

export type PortfolioData = {
  title: React.ReactNode;
  taskTitle?: React.ReactNode;
  task?: React.ReactNode;
  implementationTitle?: React.ReactNode;
  implementation?: React.ReactNode;
  headerImages: string[];
  images?: string[];
  sections?: {
    name: React.ReactNode;
    images: string[]
  }[]
  type: PortfolioType;
  gridType: GalleryGridType;
}
