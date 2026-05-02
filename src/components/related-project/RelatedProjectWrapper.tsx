import PageBanner from '@/components/common/PageBanner'
import SecondaryBanner from '@/components/common/SecondaryBanner'
import RelatedProjectContent from './RelatedProjectContent'

const RelatedProjectWrapper = () => {
  return (
    <>
      {/* <PageBanner 
        title="Our Projects"
        subtitle="Bridging Dreams with Reality"
        description="Explore our curated selection of properties that redefine luxury living and commercial excellence."
        imageSrc="/assets/images/contact/banner.jpg"
      /> */}
      <SecondaryBanner 
        title="Related Projects"
        subtitle="Discover similar properties"
        imageSrc="/assets/images/contact/banner.jpg"
      />
      <RelatedProjectContent />
    </>
  )
}


export default RelatedProjectWrapper
