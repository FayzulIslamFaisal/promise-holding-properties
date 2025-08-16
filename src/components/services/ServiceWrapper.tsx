import ChooseServiceplane from "./ChooseServiceplane"
import GetStartedService from "./GetStartedService"
import OurServices from "./OurServices"
import ServiceBanner from "./ServiceBanner"
import ServiceFAQSection from "./ServiceFAQSection"

const ServiceWrapper = () => {
  return (
    <>
      <ServiceBanner />
      <OurServices />
      <ChooseServiceplane />
      <ServiceFAQSection />
      <GetStartedService />
    </>
  )
}

export default ServiceWrapper
