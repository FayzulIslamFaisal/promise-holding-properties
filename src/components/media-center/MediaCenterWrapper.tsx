import SecondaryBanner from "@/components/common/SecondaryBanner"
import MediaCenterContent from "./MediaCenterContent"

const MediaCenterWrapper = () => {
  return (
    <>
      <SecondaryBanner 
        title="News & Updates"
        subtitle="Latest from Promise Holding"
        imageSrc="/assets/images/contact/banner.jpg"
      />
      <MediaCenterContent />
    </>
  )
}


export default MediaCenterWrapper
