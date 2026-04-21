import dynamic from "next/dynamic";
import PageBanner from "@/components/common/PageBanner";

const LandownerSlider = dynamic(() => import('./LandownerSlider'));
const JointVentureForm = dynamic(() => import('./JointVentureForm'));
const ProjectTestimonial = dynamic(() => import('../home-page/ProjectTestimonial'));

const LandownerWrapper = () => {
  return (
    <>
      <PageBanner 
        title="Our Commitment to Quality"
        subtitle="Transforming properties into masterpieces"
        description="Connect with our exceptional team of real estate professionals who deliver unparalleled service and expertise in luxury property transactions."
        imageSrc="/assets/images/contact/banner.jpg"
      />
      <LandownerSlider />
      <JointVentureForm />
      <ProjectTestimonial autoplay={true} />
    </>
  )
}


export default LandownerWrapper
