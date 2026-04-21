import PageBanner from "@/components/common/PageBanner"
import AgentListCard from "./AgentListCard"

const AgentListWrapper = () => {
  return (
    <>
      <PageBanner 
        title="Meet Our Elite Agents"
        description="Connect with our exceptional team of real estate professionals who deliver unparalleled service and expertise in luxury property transactions."
        imageSrc="/assets/images/media-center/img1.jpg"
      />
      <AgentListCard />
    </>
  )
}


export default AgentListWrapper
