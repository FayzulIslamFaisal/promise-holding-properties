// components/project-details/ProjectDetailWrapper.tsx
import Image from "next/image";
interface ProjectDetailWrapperProps {
  slug: string;
}
const ProjectDetailWrapper = ({ slug }: ProjectDetailWrapperProps) => {
    console.log("Project slug:", slug);
  return (
    <div className="mb-14">
      <div className="w-full h-[calc(100vh-120px)] relative">
        <Image
          src={`/assets/images/slider/banner11.png`}
          alt={slug}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[var(--custom-bg-primary)]/20" />
      </div>
    </div>
  )
}

export default ProjectDetailWrapper
