import PageBanner from "@/components/common/PageBanner"
import SecondaryBanner from "@/components/common/SecondaryBanner"
import AgentListCard from "./AgentListCard"

const AgentListWrapper = () => {
  return (
    <>
      {/* <PageBanner 
        title="Meet Our Elite Agents"
        description="Connect with our exceptional team of real estate professionals who deliver unparalleled service and expertise in luxury property transactions."
        imageSrc="/assets/images/media-center/img1.jpg"
      /> */}
      <SecondaryBanner 
        title="Our Experts"
        subtitle="Professional Real Estate Agents"
        imageSrc="/assets/images/media-center/img1.jpg"
      />
      <AgentListCard />
    </>
  )
}


export default AgentListWrapper
