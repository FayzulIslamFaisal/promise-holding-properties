import { Metadata } from "next";
import ProjectPlotsWrapper from "@/components/plots-list/ProjectPlotsWrapper";
import { projectService } from "@/services";
import { PlotDetail } from "@/data/dummyPlots";
import { ProjectDetail, ApiPlot } from "@/types/api";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const res = await projectService.getProjectPlots(slug);
    const project = res.data;
    if (!project) return { title: "Project Not Found" };

    return {
      title: `${project.project_name} | Plots`,
      description: `Explore premium plots and available properties in ${project.project_name} by Promise Assets.`,
      openGraph: {
        images: project.project_image ? [project.project_image] : [],
      },
    };

  } catch {
    return { title: "Project Plots" };
  }
}


export const dynamic = "force-dynamic";

interface SlugProps {
  params: { slug: string; }
}

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<SlugProps['params']>
}) => {
  const { slug } = await params;

  let project: ProjectDetail | undefined;
  let plots: PlotDetail[] = [];

  try {
    const res = await projectService.getProjectPlots(slug);
    const plotsData = res.data;

    if (plotsData) {
      project = {
        id: plotsData.id,
        project_name: plotsData.project_name,
        project_location: plotsData.project_location,
        google_map_link: plotsData.google_map_link,
        project_image: plotsData.project_image,
        buildings: [],
      };

      plots = (plotsData.plots || []).map((plot: ApiPlot) => ({
        id: String(plot.id),
        name: plot.name || `${plotsData.project_name} - Plot ${plot.plot_no}`,
        slug: plot.slug,
        projectSlug: plotsData.project_slug || slug,
        location: plot.location || plotsData.project_location,
        type: plot.type || "",
        size: plot.size || `${plot.land_area.toLocaleString()} sqft`,
        sizeSqft: plot.land_area,
        plotNo: plot.plot_no,
        roadSize: plot.road_size || plot.roadSize || "",
        facing: plot.facing || "",
        status: (plot.status || "") as PlotDetail['status'],
        pricePerSqft: plot.price_per_sqft || plot.pricePerSqft || (plot.land_area > 0 ? Math.round(plot.price / plot.land_area) : 0),
        totalPrice: plot.price || plot.total_price || plot.totalPrice || 0,
        description: plot.description || "",
        image: plot.image,
        gallery: plot.gallery || (plot.image ? [plot.image] : []),
        features: plot.features || [],
        googleMapLink: plot.google_map_link || plot.googleMapLink || plotsData.google_map_link,
      }));
    }
  } catch (error) {
    console.error("Error fetching project details and plots:", error);
  }

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectPlotsWrapper project={project} plots={plots} projectSlug={slug} />
    </>
  );
}

export default ProjectDetailsPage;
