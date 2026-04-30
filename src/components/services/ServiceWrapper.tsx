import ChooseServiceplane from "./ChooseServiceplane"

import OurServices from "./OurServices"
import PageBanner from "@/components/common/PageBanner"
import ServiceFAQSection from "./ServiceFAQSection"
import ServiceProcess from "./ServiceProcess"

const ServiceWrapper = () => {
  return (
    <>
      <PageBanner 
        title="Our Services"
        subtitle="Unlocking the Doors to Your Future"
        description="We offer a comprehensive suite of real estate services designed to meet your every property need."
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
