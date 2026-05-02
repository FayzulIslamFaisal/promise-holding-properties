import PageBanner from "@/components/common/PageBanner"
import SecondaryBanner from "@/components/common/SecondaryBanner"
import MediaCenterContent from "./MediaCenterContent"

const MediaCenterWrapper = () => {
  return (
    <>
      {/* <PageBanner 
        title="Media Center"
        subtitle="Latest Updates & Press Releases"
        description="Stay informed about our latest projects, company news, and industry insights."
        imageSrc="/assets/images/contact/banner.jpg"
      /> */}
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
