import ChooseServiceplane from "./ChooseServiceplane"

import OurServices from "./OurServices"
import SecondaryBanner from "@/components/common/SecondaryBanner"
import ServiceFAQSection from "./ServiceFAQSection"
import ServiceProcess from "./ServiceProcess"

const ServiceWrapper = () => {
  return (
    <>
      <SecondaryBanner 
        title="Professional Services"
        subtitle="Excellence in every detail"
        imageSrc="/assets/images/contact/banner.jpg"
      />
      <OurServices />
      <ChooseServiceplane />
      <ServiceProcess />
      <ServiceFAQSection />

    </>
  )
}

export default ServiceWrapper
