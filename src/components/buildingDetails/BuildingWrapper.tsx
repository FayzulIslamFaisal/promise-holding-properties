import ProjectInformation from "../projectDetails/ProjectInformation";
import ProjectSlider from "../projectDetails/ProjectSlider";

interface SlugProps {
  slug: string;
}
const BuildingWrapper = ({ slug }: SlugProps) => {
    console.log("Building slug===>",slug);
    
  return (
    <>
        <ProjectSlider/>
        <ProjectInformation/>
    </>
  )
}

export default BuildingWrapper
