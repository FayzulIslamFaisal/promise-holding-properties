import dynamic from "next/dynamic"
import SecondaryBanner from "@/components/common/SecondaryBanner"
import OurServices from "./OurServices"
import OurStory from "./OurStory"
import OurValues from "./OurValues"
import WhyChoose from "./WhyChoose"

const ProjectTestimonial = dynamic(() => import('../home-page/ProjectTestimonial'));
const TeamMember = dynamic(() => import('./TeamMember'));

const AboutWrapper = () => {
  return (
    <>
        <SecondaryBanner 
            title="Innovation in Real Estate"
            subtitle="Building the Future"
            imageSrc="/assets/images/contact/banner.jpg"
        />
        <OurStory />
        <OurValues />
        <TeamMember />
        <WhyChoose />
        <OurServices />
        <ProjectTestimonial autoplay={true} />
    </>
  )
}



export default AboutWrapper
