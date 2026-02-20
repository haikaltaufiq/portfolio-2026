// src/features/portfolio/hooks/useProjects.ts
import { infoList } from "../data/info";
import { projects } from "../data/projects";

export function useProjects() {
  return {
    projects,
    infoList,
  };
}
