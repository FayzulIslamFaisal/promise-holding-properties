import { Metadata } from "next";
import MediaCenterWrapper from "@/components/media-center/MediaCenterWrapper"

export const metadata: Metadata = {
  title: "Insights",
  description: "Stay updated with the latest insights, events, and market news from Promise Assets.",
};

const InsightsPage = () => {
  return (
    <>
      <MediaCenterWrapper />
    </>
  )
}

export default InsightsPage
