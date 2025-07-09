import ProjectBuildingCards from "./ProjectBuildingCards"
import ProjectDetailInfo from "./ProjectDetailInfo"
import ProjectInformation from "./ProjectInformation"
import ProjectSlider from "./ProjectSlider"

const ProjectDetailsWrapp = () => {
  return (
    <>
        <ProjectSlider />
        <ProjectDetailInfo/>
        <ProjectBuildingCards/>
        <ProjectInformation />
    </>
  )
    
}

export default ProjectDetailsWrapp