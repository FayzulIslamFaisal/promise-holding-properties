import ProjectBuildingCards from "./ProjectBuildingCards"
import ProjectDetailInfo from "./ProjectDetailInfo"
// import ProjectInformation from "./ProjectInformation"
import ProjectSlider from "./ProjectSlider"
import PropertyFeatures from "./PropertyFeatures"
interface SlugProps {
  slug: string;
}

const ProjectDetailsWrapp = ({slug}: SlugProps) => {
  console.log("Project Slug==>",slug);
  
  return (
    <>
        <ProjectSlider />
        <ProjectDetailInfo/>
        <div className="py-12">
          <PropertyFeatures buildingPage={false} />
        </div>
        <ProjectBuildingCards/>
    </>
  )
    
}

export default ProjectDetailsWrapp