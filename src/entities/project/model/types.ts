/** Data structure representing a single project entry. */
export interface ProjectCardData {
  title: string;
  category: string;
  year: number;
  src: string;
  githubLink: string;
  liveLink: string;
  linkType: string;
  content: {
    imageSrc: string;
    description: string;
    tech: string[];
    role?: string;
    problem?: string;
    solution?: string;
    features?: string[];
    challenges?: string;
    installCommand?: string;
    screenshots?: string[];
  };
  srcs?: string[];
  key?: string;
}
