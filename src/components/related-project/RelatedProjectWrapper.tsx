import SecondaryBanner from '@/components/common/SecondaryBanner'
import RelatedProjectContent from './RelatedProjectContent'

const RelatedProjectWrapper = () => {
  return (
    <>
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
