import SecondaryBanner from "@/components/common/SecondaryBanner"
import MediaCenterContent from "./MediaCenterContent"

const MediaCenterWrapper = () => {
  return (
    <>
      <SecondaryBanner 
        title="Insights"
        subtitle="Latest Market Analysis & Updates"
        badge="PRESS & MARKET INSIGHTS"
        imageSrc="/assets/images/banners/media-banner.jpg"
      />
      <MediaCenterContent />
    </>
  )
}


export default MediaCenterWrapper
