import dynamic from "next/dynamic"
import PageBanner from "@/components/common/PageBanner"
import OurServices from "./OurServices"
import OurStory from "./OurStory"
import OurValues from "./OurValues"
import WhyChoose from "./WhyChoose"

const ProjectTestimonial = dynamic(() => import('../home-page/ProjectTestimonial'));
const TeamMember = dynamic(() => import('./TeamMember'));

const AboutWrapper = () => {
  return (
    <>
        <PageBanner 
            title="Premier Real Estate Solutions"
            subtitle="Your Trusted Real Estate Partner"
            description="Transforming property dreams into reality with expertise, integrity, and innovation since 2025."
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
