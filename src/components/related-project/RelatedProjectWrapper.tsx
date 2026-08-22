import SecondaryBanner from '@/components/common/SecondaryBanner'
import RelatedProjectContent from './RelatedProjectContent'

const RelatedProjectWrapper = () => {
  return (
    <>
      <SecondaryBanner 
        title="Related Projects"
        subtitle="Discover similar properties"
        badge="DISCOVER FEATURED PROPERTIES"
        imageSrc="/assets/images/banners/related-projects-banner.jpg"
      />
      <RelatedProjectContent />
    </>
  )
}


export default RelatedProjectWrapper
