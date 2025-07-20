// "HomePageWrapper.tsx"

import HeroSlider from "./HeroSlider"
import { InsightsSection } from "./InsightsSection"
import ProjectTabViews from "./ProjectTabViews"
import ProjectTestimonial from "./ProjectTestimonial"
import ProjectVideoThumbnail from "./ProjectVideoThumbnail "

const HomePageWrapper = () => {
    return (
        <>
            <HeroSlider />
            <ProjectTabViews/>
            <ProjectVideoThumbnail/>
            <ProjectTestimonial autoplay={false}/>
            <InsightsSection/>
        </>
    )
}

export default HomePageWrapper