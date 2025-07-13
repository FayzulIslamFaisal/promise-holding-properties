// app/building/[id]/page.tsx (App Router example)
interface BuildingSlug {
  params: {
    slug: string;
  };
}
const BuildingDetailPage = ({ params }: BuildingSlug) => {
  return (
    <div >
      <h1>Building Detail Page</h1>
      <p>Building ID: {params.slug}</p>
    </div>
  );
};

export default BuildingDetailPage;
