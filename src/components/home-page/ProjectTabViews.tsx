import { Project } from "@/types/api";
import { projectService } from "@/services"
import ProjectTabViewsClient from "./ProjectTabViewsClient"

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const ProjectTabViews = async ({ searchParams }: Props) => {
  let projects: Project[] = [];

  try {
    const res = await projectService.getProjects();
    projects = res.data || [];
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  const currentTab = typeof searchParams?.product_status === "string" ? searchParams.product_status : "all";

  return (
    <ProjectTabViewsClient 
      projects={projects} 
      currentTab={currentTab} 
      viewType="swiper" 
      showTitle={true} 
    />
  );
}

export default ProjectTabViews
