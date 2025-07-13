// app/building/[id]/page.tsx (App Router example)
import BuildingWrapper from "@/components/buildingDetails/BuildingWrapper";
interface BuildingSlug {
  params: {
    slug: string;
  };
}
const BuildingDetailPage = ({ params }: BuildingSlug) => {
  return (
    <BuildingWrapper slug={params.slug}/>
  );
};

export default BuildingDetailPage;
