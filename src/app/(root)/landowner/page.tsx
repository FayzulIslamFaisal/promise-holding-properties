
import { Metadata } from "next";
import LandownerWrapper from "@/components/landowner/LandownerWrapper"

export const metadata: Metadata = {
  title: "Landowner Partnership",
  description: "Join hands with Promise Holding Properties for a seamless and rewarding land development partnership.",
};




const LandownerPage = () => {
  return (
    <LandownerWrapper />
  )
}

export default LandownerPage
