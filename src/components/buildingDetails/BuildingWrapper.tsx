// import ProjectInformation from "../projectDetails/ProjectInformation";
import ProjectSlider from "../projectDetails/ProjectSlider";
import PropertyFeatures from "../projectDetails/PropertyFeatures";
import ProjectFloorCard from "./ProjectFloorCard";
import ProjectFloorSummary from "./ProjectFloorSummary";


interface SlugProps {
  slug: string;
}
const BuildingWrapper = ({ slug }: SlugProps) => {
    console.log("Building slug===>",slug);
    
  return (
    <>
        <ProjectSlider/>
        <div className="pt-12">
          <PropertyFeatures buildingPage={true} />
        </div>
        <ProjectFloorSummary/>
        <div className="pt-12">
          <ProjectFloorCard/>
        </div>
        {/* <ProjectInformation/> */}
        
    </>
  )
}

export default BuildingWrapper
