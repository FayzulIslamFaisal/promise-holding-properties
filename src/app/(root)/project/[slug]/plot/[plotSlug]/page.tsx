import { Metadata } from "next";
import PlotDetailWrapper from "@/components/plot-details/PlotDetailWrapper";
import { projectService } from "@/services";
import { getPlotsByProject } from "@/data/dummyPlots";
import { ProjectDetail } from "@/types/api";

type Props = {
  params: Promise<{ slug: string; plotSlug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, plotSlug } = await params;
  try {
    let project: ProjectDetail | undefined;
    try {
      const res = await projectService.getProjectDetails(slug);
      project = res.data;
    } catch {
      // ignore
    }

    const projectName = project?.project_name || "Premium Project";
    const projectLocation = project?.project_location || "Dhaka";
    
    const plots = getPlotsByProject(slug, projectName, projectLocation);
    const plot = plots.find((p) => p.slug === plotSlug);

    if (!plot) return { title: "Plot Not Found" };

    return {
      title: `${plot.name} | ${projectName}`,
      description: plot.description || `Examine the details of ${plot.name} under ${projectName} by Promise Assets.`,
      openGraph: {
        images: plot.image ? [plot.image] : [],
      },
    };

  } catch {
    return { title: "Plot Details" };
  }
}

export const dynamic = "force-dynamic";

const PlotDetailsPage = async ({
  params,
}: Props) => {
  const { slug, plotSlug } = await params;

  let project: ProjectDetail | undefined;
  try {
    const res = await projectService.getProjectDetails(slug);
    project = res.data;
  } catch (error) {
    console.error("Error fetching project details for plot:", error);
  }

  const projectName = project?.project_name || "Premium Project";
  const projectLocation = project?.project_location || "Dhaka";

  const plots = getPlotsByProject(slug, projectName, projectLocation);
  const plot = plots.find((p) => p.slug === plotSlug);

  return (
    <>
      <PlotDetailWrapper project={project} plot={plot} />
    </>
  );
}

export default PlotDetailsPage;
