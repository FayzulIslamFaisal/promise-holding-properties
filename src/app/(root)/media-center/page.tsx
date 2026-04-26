import { Metadata } from "next";
import MediaCenterWrapper from "@/components/media-center/MediaCenterWrapper"

export const metadata: Metadata = {
  title: "Media Center",
  description: "Stay updated with the latest news, events, and media coverage of Promise Assets.",
};

const MediaCenterPage = () => {
  return (
    <>
      <MediaCenterWrapper />
    </>
  )
}

export default MediaCenterPage
