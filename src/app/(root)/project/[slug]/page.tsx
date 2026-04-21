import { Metadata } from "next";
import ProjectDetailWrapper from "@/components/project-details/ProjectDetailWrapper";
import { projectService } from "@/services";
import { ProjectDetail } from "@/types/api";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const res = await projectService.getProjectDetails(slug);
    const project = res.data;
    if (!project) return { title: "Project Not Found" };

    return {
      title: project.project_name,
      description: project.project_location || `Examine the details of ${project.project_name} by Promise Holding Properties.`,
      openGraph: {
        images: project.project_image ? [project.project_image] : [],
      },
    };

  } catch (error) {
    return { title: "Project Details" };
  }
}


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
