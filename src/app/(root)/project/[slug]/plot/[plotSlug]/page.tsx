import { Metadata } from "next";
import PlotDetailWrapper from "@/components/plot-details/PlotDetailWrapper";
import { projectService } from "@/services";
import { PlotDetail } from "@/data/dummyPlots";
import { ProjectDetail } from "@/types/api";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string; plotSlug: string }>;
};

async function getMappedPlot(slug: string, plotSlug: string) {
  try {
    const res = await projectService.getPlotDetails(plotSlug);
    const plotData = res.data;
    if (!plotData) return null;

    const project: ProjectDetail = {
      id: plotData.project?.id || 0,
      project_name: plotData.project?.project_name || "",
      project_location: plotData.project?.project_location || "",
      google_map_link: plotData.project?.google_map_link || "",
      project_image: plotData.project?.project_image || "",
      buildings: plotData.buildings || [],
    };

    const plot: PlotDetail = {
      id: String(plotData.id),
      name: plotData.name || `${project.project_name} - Plot ${plotData.plot_no}`,
      slug: plotData.slug,
      projectSlug: plotData.project?.project_slug || slug,
      location: plotData.location || project.project_location,
      type: plotData.type || "",
      size: plotData.size || `${plotData.land_area.toLocaleString()} sqft`,
      sizeSqft: plotData.land_area,
      plotNo: plotData.plot_no,
      roadSize: plotData.road_size || plotData.roadSize || "",
      facing: plotData.facing || "",
      status: (plotData.status || "") as PlotDetail['status'],
      pricePerSqft: plotData.price_per_sqft || plotData.pricePerSqft || (plotData.land_area > 0 ? Math.round(plotData.price / plotData.land_area) : 0),
      totalPrice: plotData.price || plotData.total_price || plotData.totalPrice || 0,
      description: plotData.description || "",
      image: plotData.image,
      gallery: plotData.gallery || (plotData.image ? [plotData.image] : []),
      features: plotData.features || [],
      googleMapLink: plotData.google_map_link || plotData.googleMapLink || project.google_map_link,
    };

    return { project, plot };
  } catch (error) {
    console.error("Error loading plot details:", error);
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, plotSlug } = await params;
  try {
    const data = await getMappedPlot(slug, plotSlug);
    if (!data || !data.plot) return { title: "Plot Not Found" };

    return {
      title: `${data.plot.name} | ${data.project?.project_name}`,
      description: data.plot.description || `Examine the details of ${data.plot.name} under ${data.project?.project_name} by Promise Assets.`,
      openGraph: {
        images: data.plot.image ? [data.plot.image] : [],
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

  const data = await getMappedPlot(slug, plotSlug);

  if (!data || !data.plot) {
    notFound();
  }

  return (
    <>
      <PlotDetailWrapper project={data.project} plot={data.plot} />
    </>
  );
}

export default PlotDetailsPage;
