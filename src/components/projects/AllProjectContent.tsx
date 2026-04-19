import { Project } from "@/types/api";
import AllProjectContentCard from "./AllProjectContentCard";
import { projectService } from "@/services";

const AllProjectContent = async () => {
  let projects: Project[] = [];
  
  try {
    const res = await projectService.getProjects();
    projects = res.data || [];
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  return (
    <section className="px-4 dark:bg-[var(--custom-bg-body)] bg-[var(--custom-bg-white)]" >
      <div className="container mx-auto">
        {projects.length === 0 ? (
           <div className="flex justify-center items-center h-64 w-full text-lg">
             No projects found.
           </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sectionSpaceBorder">
            {projects.map((project) => (
              <AllProjectContentCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default AllProjectContent;
