import { Metadata } from "next";
import LandProjectDetailWrapper from "@/components/land-project/LandProjectDetailWrapper";
import LandProjectDetailWithMapWrapper from "@/components/land-project/LandProjectDetailWithMapWrapper";
import { projectService } from "@/services";
import { ProjectDetail } from "@/types/api";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    if (slug === 'demo' || slug === 'demo-map') {
      const { dummyLandProject } = await import("@/data/dummyLandProject");
      return {
        title: `${dummyLandProject.project_name} | Land Project`,
        description: dummyLandProject.project_location,
        openGraph: {
          images: [dummyLandProject.project_image],
        },
      };
    }

    const res = await projectService.getProjectDetails(slug);
    const project = res.data;
    if (!project) return { title: "Land Project Not Found" };

    return {
      title: `${project.project_name} | Land Project`,
      description: project.project_location || `Examine the details of ${project.project_name} by Promise Assets.`,
      openGraph: {
        images: project.project_image ? [project.project_image] : [],
      },
    };

  } catch {
    return { title: "Land Project Details" };
  }
}


export const dynamic = "force-dynamic";

interface SlugProps {
  params: { slug: string; }
}

const LandProjectDetailsPage = async({
  params,
}: {
  params: Promise<SlugProps['params']>
}) => {
  const { slug } = await params;
  
  let project: ProjectDetail | undefined;
  
  try {
    if (slug === 'demo' || slug === 'demo-map') {
      const { dummyLandProject } = await import("@/data/dummyLandProject");
      project = dummyLandProject;
    } else {
      const res = await projectService.getProjectDetails(slug);
      project = res.data;
    }
  } catch (error) {
    console.error("Error fetching project details:", error);
  }

  return (
    <>
      {slug === 'demo-map' ? (
        <LandProjectDetailWithMapWrapper project={project} />
      ) : (
        <LandProjectDetailWrapper project={project} />
      )}
    </>
  );
}

export default LandProjectDetailsPage;
