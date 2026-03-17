'use client';

import { useProjects } from "@/hooks/use-content";
import AllProjectContentCard from "./AllProjectContentCard";

const AllProjectContent = () => {
  const { data, isLoading } = useProjects();
  const projects = data?.data ?? [];

  return (
    <section className="px-4 dark:bg-[var(--custom-bg-body)] bg-[var(--custom-bg-white)]" >
      <div className="container mx-auto">
        {isLoading ? (
          <div className="flex justify-center items-center h-64 w-full">
            <span className="loading loading-spinner loading-lg text-[var(--custom-bg-accent)]"></span>
          </div>
        ) : projects.length === 0 ? (
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
