import dynamic from "next/dynamic";
import LandownerBanner from "./LandownerBanner"
// import JointVentureForm from "./JointVentureForm";
// import LandownerSlider from "./LandownerSlider";
const LandownerSlider = dynamic(() => import('./LandownerSlider'));
const JointVentureForm = dynamic(() => import('./JointVentureForm'));

const LandownerWrapper = () => {
  return (
    <>
      <LandownerBanner />
      <LandownerSlider />
      <JointVentureForm />
    </>
  )
}

export default LandownerWrapper
