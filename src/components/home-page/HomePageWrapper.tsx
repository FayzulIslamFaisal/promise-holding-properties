// "HomePageWrapper.tsx"

import dynamic from "next/dynamic"
// import HeroSlider from "./HeroSlider"
// import { InsightsSection } from "./InsightsSection"
// import ProjectTabViews from "./ProjectTabViews"
// import ProjectTestimonial from "./ProjectTestimonial"
import ProjectVideoThumbnail from "./ProjectVideoThumbnail "

const HeroSlider = dynamic(() => import('./HeroSlider'));
const InsightsSection = dynamic(() => import('./InsightsSection'));
// const ProjectVideoThumbnail = dynamic(() => import('./ProjectVideoThumbnail'));
const ProjectTabViews = dynamic(() => import('./ProjectTabViews'));
const ProjectTestimonial = dynamic(() => import('./ProjectTestimonial'));

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