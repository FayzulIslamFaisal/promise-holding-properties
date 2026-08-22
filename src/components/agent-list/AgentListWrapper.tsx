import SecondaryBanner from "@/components/common/SecondaryBanner"
import AgentListCard from "./AgentListCard"

const AgentListWrapper = () => {
  return (
    <>
      <SecondaryBanner 
        title="Our Experts"
        subtitle="Professional Real Estate Agents"
        badge="CERTIFIED PROPERTY CONSULTANTS"
        imageSrc="/assets/images/banners/agents-banner.jpg"
      />
      <AgentListCard />
    </>
  )
}


export default AgentListWrapper
