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
import ProjectBanner from "./ProjectBanner";
import { ProjectFeature } from "./ProjectFeature";
import ProjectInfo from "./ProjectInfo";

// components/project-details/ProjectDetailWrapper.tsx
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
    </>
  )
}

export default ProjectDetailWrapper
