import dynamic from "next/dynamic";
import LandownerBanner from "./LandownerBanner"
// import LandownerSlider from "./LandownerSlider";
const LandownerSlider = dynamic(() => import('./LandownerSlider'));


const LandownerWrapper = () => {
  return (
    <>
      <LandownerBanner />
      <LandownerSlider />
    </>
  )
}

export default LandownerWrapper
