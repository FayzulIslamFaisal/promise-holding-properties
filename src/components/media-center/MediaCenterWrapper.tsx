import SecondaryBanner from "@/components/common/SecondaryBanner"
import MediaCenterContent from "./MediaCenterContent"

const MediaCenterWrapper = () => {
  return (
    <>
      <SecondaryBanner 
        title="Insights"
        subtitle="Latest Market Analysis & Updates"
        imageSrc="/assets/images/contact/banner.jpg"
      />
      <MediaCenterContent />
    </>
  )
}


export default MediaCenterWrapper
