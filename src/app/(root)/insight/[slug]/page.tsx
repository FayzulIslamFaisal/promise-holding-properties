import InsightWrapper from "@/components/insight/InsightWrapper";
interface SlugProps {
  params: { slug: string; }
}
const InsightPage = async({
  params,
}: {
  params: Promise<SlugProps['params']>
}) => {
  const { slug } = await params;
  console.log(slug);
  
  return (
    <InsightWrapper />
  )
}

export default InsightPage
