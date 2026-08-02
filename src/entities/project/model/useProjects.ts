import { projectsData } from "./data";
import { ProjectArchiveData } from "./types";

/** Hook to access and filter project data. */
export const useProjects = () => {
  const getAllProjects = (): ProjectArchiveData[] => {
    return projectsData;
  };

  const getFeaturedProjects = (limit: number = 2): ProjectArchiveData[] => {
    return projectsData.slice(0, limit);
  };

  const getProjectByTitle = (title: string): ProjectArchiveData | undefined => {
    return projectsData.find((p) => p.title === title);
  };

  return {
    projects: projectsData, // Default access
    getAllProjects,
    getFeaturedProjects,
    getProjectByTitle,
  };
};
