import ChooseServiceplane from "./ChooseServiceplane"
import GetStartedService from "./GetStartedService"
import OurServices from "./OurServices"
import ServiceBanner from "./ServiceBanner"

const ServiceWrapper = () => {
  return (
    <>
      <ServiceBanner />
      <OurServices />
      <ChooseServiceplane />
      <GetStartedService />
    </>
  )
}

export default ServiceWrapper
