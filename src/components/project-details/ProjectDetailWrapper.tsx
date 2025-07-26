
// components/project-details/ProjectDetailWrapper.tsx
import { Laptop,
  Utensils,
  DoorOpen,
  Camera,
  ShieldCheck,
  ParkingCircle,
  Church,
  Waves,
  Dumbbell,
  Baby, } from "lucide-react";


// import ProjectLocationMap from "./ProjectLocationMap";
// import ProjectBanner from "./ProjectBanner";
// import ProjectFeature from "./ProjectFeature";
// import BuildingDrawingSlider from "./BuildingDrawingSlider";
// import ImageGallery from "./ImageGallery";

import dynamic from 'next/dynamic';
import ProjectInfo from "./ProjectInfo";
// import RelatedProject from "./RelatedProject";
const ProjectLocationMap = dynamic(() => import('./ProjectLocationMap'));
const ProjectBanner = dynamic(() => import('./ProjectBanner'));
const ProjectFeature = dynamic(() => import('./ProjectFeature'));
const BuildingDrawingSlider = dynamic(() => import('./BuildingDrawingSlider'));
const ImageGallery = dynamic(() => import('./ImageGallery'));
const RelatedProject = dynamic(() => import('./RelatedProject'));


interface ProjectDetailWrapperProps {
  slug: string;
}
interface Project {
  title: string;
  icon: React.ReactNode;
}
const ProjectDetailWrapper = ({ slug }: ProjectDetailWrapperProps) => {
    console.log("Project slug:", slug);

  const projects: Project[] = [
   {
    icon: <Laptop className="w-10 h-10 text-[var(--custom-text-secondary)]" />,
    title: "IT Support",
  },
  {
    icon: <Utensils className="w-10 h-10 text-[var(--custom-text-secondary)]" />,
    title: "Kitchen",
  },
  {
    icon: <DoorOpen className="w-10 h-10 text-[var(--custom-text-secondary)]" />,
    title: "Emergency Exit",
  },
  {
    icon: <Camera className="w-10 h-10 text-[var(--custom-text-secondary)]" />,
    title: "CCTV",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-[var(--custom-text-secondary)]" />,
    title: "Security",
  },
  {
    icon: <ParkingCircle className="w-10 h-10 text-[var(--custom-text-secondary)]" />,
    title: "Parking",
  },
  {
    icon: <Church className="w-10 h-10 text-[var(--custom-text-secondary)]" />,
    title: "Prayer Space",
  },
  {
    icon: <Waves className="w-10 h-10 text-[var(--custom-text-secondary)]" />,
    title: "Swimming Pool",
  },
  {
    icon: <Dumbbell className="w-10 h-10 text-[var(--custom-text-secondary)]" />,
    title: "Gymnasium",
  },
  {
    icon: <Baby className="w-10 h-10 text-[var(--custom-text-secondary)]" />,
    title: "Children's Play Area",
  },
  ]
  return (
    <>
      <ProjectBanner slug={slug} />
      <ProjectInfo />
      <ProjectFeature items={projects}/>
      <BuildingDrawingSlider />
      <ImageGallery />
      <ProjectLocationMap />
      <RelatedProject />
    </>
  )
}

export default ProjectDetailWrapper
