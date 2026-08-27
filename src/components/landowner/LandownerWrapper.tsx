import dynamic from "next/dynamic";
import SecondaryBanner from "@/components/common/SecondaryBanner"

const LandownerSlider = dynamic(() => import('./LandownerSlider'));
const JointVentureForm = dynamic(() => import('./JointVentureForm'));
// const ProjectTestimonial = dynamic(() => import('../home-page/ProjectTestimonial'));

const LandownerWrapper = () => {
  return (
    <>
      <SecondaryBanner 
        title="Joint Venture"
        subtitle="Partner with the best"
        badge="STRATEGIC JOINT VENTURE"
        imageSrc="/assets/images/banners/Landowner.png"
      />
      <LandownerSlider />
      <JointVentureForm />
      {/* <ProjectTestimonial autoplay={true} /> */}
    </>
  )
}


export default LandownerWrapper
