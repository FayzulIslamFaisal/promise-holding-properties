import ProjectDetailWrapper from "@/components/project-details/ProjectDetailWrapper";
import { projectService } from "@/services";
import { ProjectDetail } from "@/types/api";

export const dynamic = "force-dynamic";

interface SlugProps {
  params: { slug: string; }
}

const ProjectDetailsPage = async({
  params,
}: {
  params: Promise<SlugProps['params']>
}) => {
  const { slug } = await params;
  
  let project: ProjectDetail | undefined;
  
  try {
    const res = await projectService.getProjectDetails(slug);
    project = res.data;
  } catch (error) {
    console.error("Error fetching project details:", error);
  }

  return (
    <>
      <ProjectDetailWrapper project={project} />
    </>
  );
}

export default ProjectDetailsPage;
