import dynamic from "next/dynamic"
import AboutBanner from "./AboutBanner"
import OurServices from "./OurServices"
import OurStory from "./OurStory"
import OurValues from "./OurValues"
import WhyChoose from "./WhyChoose"
const AboutTestimonial = dynamic(() => import('./AboutTestimonial'));
const TeamMember = dynamic(() => import('./TeamMember'));
const AboutWrapper = () => {
  return (
    <>
        <AboutBanner />
        <OurStory />
        <OurValues />
        <TeamMember />
        <WhyChoose />
        <OurServices />
        <AboutTestimonial autoplay={true} />
    </>
  )
}

export default AboutWrapper
