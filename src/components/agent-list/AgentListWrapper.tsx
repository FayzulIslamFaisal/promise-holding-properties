import SecondaryBanner from "@/components/common/SecondaryBanner"
import AgentListCard from "./AgentListCard"

const AgentListWrapper = () => {
  return (
    <>
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
