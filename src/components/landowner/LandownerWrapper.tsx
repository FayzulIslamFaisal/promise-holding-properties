import dynamic from "next/dynamic";
import LandownerBanner from "./LandownerBanner"
// import LandTestimonial from "./LandTestimonial";
// import JointVentureForm from "./JointVentureForm";
// import LandownerSlider from "./LandownerSlider";
const LandownerSlider = dynamic(() => import('./LandownerSlider'));
const JointVentureForm = dynamic(() => import('./JointVentureForm'));
const LandTestimonial = dynamic(() => import('./LandTestimonial'));

const LandownerWrapper = () => {
  return (
    <>
      <LandownerBanner />
      <LandownerSlider />
      <JointVentureForm />
      <LandTestimonial autoplay={true} />
    </>
  )
}

export default LandownerWrapper
