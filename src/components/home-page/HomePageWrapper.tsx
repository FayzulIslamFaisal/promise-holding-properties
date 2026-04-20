// "HomePageWrapper.tsx"
import dynamic from "next/dynamic"
import ProjectVideoThumbnail from "./ProjectVideoThumbnail"

const HeroSlider = dynamic(() => import('./HeroSlider'));
const InsightsSection = dynamic(() => import('./InsightsSection'));
const ProjectTabViews = dynamic(() => import('./ProjectTabViews'));
const ProjectTestimonial = dynamic(() => import('./ProjectTestimonial'));

const HomePageWrapper = () => {
    return (
        <>
            <HeroSlider />
            <ProjectTabViews />
            <ProjectVideoThumbnail/>
            <ProjectTestimonial autoplay={true} />
            <InsightsSection/>
        </>
    )
}

export default HomePageWrapper