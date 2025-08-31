import InsightWrapper from "@/components/insight/InsightWrapper";


const InsightPage = ({ params }: { params: { slug: string } }) => {
    const { slug } = params
    console.log(slug);
  return (
    <InsightWrapper />
  )
}

export default InsightPage
