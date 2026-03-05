import { projectsList } from "@/src/data/project";
import { Project } from "../type";

export const projects: Project[] = projectsList.map((project) => ({
  id: project.id,
  slug: project.slug,
  title: project.title,
  image: project.image,
  description: project.summary,
  tags: project.tags,
}));
