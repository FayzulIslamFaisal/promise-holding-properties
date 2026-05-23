import { Project } from "@/types/api";
import { projectService } from "@/services";
import ProjectTabViewsClient from "../home-page/ProjectTabViewsClient";

const AllProjectContent = async () => {
  let projects: Project[] = [];
  
  try {
    const res = await projectService.getProjects();
    projects = res.data || [];
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  return (
    <section className="px-4 dark:bg-[var(--bg-body)] bg-white" >
      <div className="container mx-auto">
        {projects.length === 0 ? (
           <div className="flex justify-center items-center h-64 w-full text-lg">
             No projects found.
           </div>
        ) : (
          <ProjectTabViewsClient 
            projects={projects} 
            currentTab="all" 
            viewType="grid" 
            showTitle={false} 
          />
        )}
      </div>
    </section>
  )
}

export default AllProjectContent;
