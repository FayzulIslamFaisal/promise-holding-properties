// "HomePageWrapper.tsx"

import HeroSlider from "./HeroSlider"
import { InsightsSection } from "./InsightsSection"
import ProjectTestimonial from "./ProjectTestimonial"
import ProjectVideoThumbnail from "./ProjectVideoThumbnail "

const HomePageWrapper = () => {
    return (
        <>
            <HeroSlider />
            <ProjectVideoThumbnail/>
            <ProjectTestimonial autoplay={false}/>
            <InsightsSection/>
        </>
    )
}

export default HomePageWrapper