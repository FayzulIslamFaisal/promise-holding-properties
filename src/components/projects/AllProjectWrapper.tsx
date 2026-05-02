import SecondaryBanner from "@/components/common/SecondaryBanner"
import AllProjectContent from "./AllProjectContent"

const AllProjectWrapper = () => {
  return (
    <>
      <SecondaryBanner 
        title="Explore Properties"
        subtitle="Find your perfect home"
        imageSrc="/assets/images/contact/banner.jpg"
      />
      <AllProjectContent />
    </>
  )
}


export default AllProjectWrapper
