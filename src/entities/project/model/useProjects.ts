import { projectsData } from "./data";
import { ProjectCardData } from "./types";

export const useProjects = () => {
  const getAllProjects = (): ProjectCardData[] => {
    return projectsData;
  };

  const getFeaturedProjects = (limit: number = 2): ProjectCardData[] => {
    return projectsData.slice(0, limit);
  };

  const getProjectByTitle = (title: string): ProjectCardData | undefined => {
    return projectsData.find((p) => p.title === title);
  };

  return {
    projects: projectsData, // Default access
    getAllProjects,
    getFeaturedProjects,
    getProjectByTitle,
  };
};
