// "HomePageWrapper.tsx"

import HeroSlider from "./HeroSlider"
import { InsightsSection } from "./InsightsSection"
import ProjectVideoThumbnail from "./ProjectVideoThumbnail "

const HomePageWrapper = () => {
    return (
        <>
            <HeroSlider />
            <ProjectVideoThumbnail/>
            <InsightsSection/>
        </>
    )
}

export default HomePageWrapper