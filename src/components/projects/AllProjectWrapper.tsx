import PageBanner from "@/components/common/PageBanner"
import AllProjectContent from "./AllProjectContent"

const AllProjectWrapper = () => {
  return (
    <>
      <PageBanner 
        title="Our Projects"
        subtitle="Exclusive Properties for a Better Life"
        description="Browse our extensive collection of premium properties and find your next investment or home."
        imageSrc="/assets/images/contact/banner.jpg"
      />
      <AllProjectContent />
    </>
  )
}


export default AllProjectWrapper
