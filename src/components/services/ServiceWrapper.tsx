import ChooseServiceplane from "./ChooseServiceplane"
import GetStartedService from "./GetStartedService"
import OurServices from "./OurServices"
import ServiceBanner from "./ServiceBanner"
import ServiceFAQSection from "./ServiceFAQSection"
import ServiceProcess from "./ServiceProcess"

const ServiceWrapper = () => {
  return (
    <>
      <ServiceBanner />
      <OurServices />
      <ChooseServiceplane />
      <ServiceProcess />
      <ServiceFAQSection />
      <GetStartedService />
    </>
  )
}

export default ServiceWrapper
