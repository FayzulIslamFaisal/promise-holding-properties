import ProjectBuildingCards from "./ProjectBuildingCards"
import ProjectDetailInfo from "./ProjectDetailInfo"
// import ProjectInformation from "./ProjectInformation"
import ProjectSlider from "./ProjectSlider"
import PropertyFeatures from "./PropertyFeatures"

const ProjectDetailsWrapp = () => {
  return (
    <>
        <ProjectSlider />
        <ProjectDetailInfo/>
        <ProjectBuildingCards/>
        <PropertyFeatures />
        {/* <ProjectInformation /> */}
    </>
  )
    
}

export default ProjectDetailsWrapp