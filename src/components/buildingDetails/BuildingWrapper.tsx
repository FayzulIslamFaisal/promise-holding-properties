// import ProjectInformation from "../projectDetails/ProjectInformation";
import ProjectSlider from "../projectDetails/ProjectSlider";
import PropertyFeatures from "../projectDetails/PropertyFeatures";
import ProjectFloorCard from "./ProjectFloorCard";


interface SlugProps {
  slug: string;
}
const BuildingWrapper = ({ slug }: SlugProps) => {
    console.log("Building slug===>",slug);
    
  return (
    <>
        <ProjectSlider/>
        <PropertyFeatures buildingPage={true} />
        <ProjectFloorCard/>
        {/* <ProjectInformation/> */}
        
    </>
  )
}

export default BuildingWrapper
