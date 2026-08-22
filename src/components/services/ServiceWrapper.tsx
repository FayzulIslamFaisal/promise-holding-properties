import OurServices from "./OurServices"
import SecondaryBanner from "@/components/common/SecondaryBanner"
import ServiceFAQSection from "./ServiceFAQSection"
import ServiceProcess from "./ServiceProcess"
import WhyChooseOurServices from "./WhyChooseOurServices"

const ServiceWrapper = () => {
  return (
    <>
      <SecondaryBanner
        title="Professional Services"
        subtitle="Excellence in every detail"
        badge="COMPREHENSIVE SOLUTIONS"
        imageSrc="/assets/images/banners/services-banner.jpg"
      />
      <OurServices />
      <WhyChooseOurServices />
      <ServiceProcess />
      <ServiceFAQSection />

    </>
  )
}

export default ServiceWrapper
