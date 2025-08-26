import AboutBanner from "./AboutBanner"
import OurServices from "./OurServices"
import OurStory from "./OurStory"
import OurValues from "./OurValues"
import TeamMember from "./TeamMember"
import WhyChoose from "./WhyChoose"

const AboutWrapper = () => {
  return (
    <>
        <AboutBanner />
        <OurStory />
        <OurValues />
        <TeamMember />
        <WhyChoose />
        <OurServices />
    </>
  )
}

export default AboutWrapper
