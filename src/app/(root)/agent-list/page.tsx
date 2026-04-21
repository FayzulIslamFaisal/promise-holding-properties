import { Metadata } from "next";
import AgentListWrapper from "@/components/agent-list/AgentListWrapper"

export const metadata: Metadata = {
  title: "Our Agents",
  description: "Meet our professional real estate agents at Promise Holding Properties, dedicated to helping you find your perfect property.",
};


const AgentListPage = () => {
  return (
    <AgentListWrapper />
  )
}

export default AgentListPage
