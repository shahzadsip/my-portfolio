export interface TProjectHero {
  breadcrumb: string;
  title: string;
  description: string;
  client: string;
  time_line: string;
  year: string;
  role: string;
  stack: string[];
  url: string;
  github: string;
}

export interface TProjectImage {
  url: string;
  alt: string;
}

export interface TProjectAchievement {
  stats: string;
  label: string;
}

export interface TProjectSection {
  // type:'overview' | 'feature' | 'technical'
  title: string;
  data: string[];
}

export interface TProjectDetailItem {
  label: string;
  content: string;
}

export interface TProject {
  hero: TProjectHero;
  images: TProjectImage[];
  achievements: TProjectAchievement[];
  detailed_overview: TProjectSection[];
  project_detail: TProjectDetailItem[];
  project_stack: string[];
  service_provided: string[];
}

