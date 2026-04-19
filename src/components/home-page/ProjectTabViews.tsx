import { Project } from "@/types/api";
import { projectService } from "@/services"
import ProjectTabViewsClient from "./ProjectTabViewsClient"

const ProjectTabViews = async () => {
  let projects: Project[] = [];
  try {
    const res = await projectService.getProjects();
    projects = res.data || [];
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  return <ProjectTabViewsClient projects={projects} />
}

export default ProjectTabViews
