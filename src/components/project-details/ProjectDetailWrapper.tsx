'use client';

// components/project-details/ProjectDetailWrapper.tsx
import { 
  Building2,
  CheckCircle2,
} from "lucide-react";

import dynamic from 'next/dynamic';
import { ProjectDetail } from "@/types/api";
import ProjectInfo from "./ProjectInfo";
import ProjectUnit from "./ProjectUnit";

const ProjectLocationMap = dynamic(() => import('./ProjectLocationMap'));
const ProjectBanner = dynamic(() => import('./ProjectBanner'));
const ProjectFeature = dynamic(() => import('./ProjectFeature'));
const BuildingDrawingSlider = dynamic(() => import('./BuildingDrawingSlider'));
const ContactForm = dynamic(() => import('./ContactForm'));
const RelatedProject = dynamic(() => import('./RelatedProject'));

interface ProjectDetailWrapperProps {
  project?: ProjectDetail;
}

const ProjectDetailWrapper = ({ project }: ProjectDetailWrapperProps) => {

  if (!project) {
    return (
      <div className="flex justify-center items-center h-[100vh] w-full text-xl text-[var(--custom-text-primary)]">
        Project not found.
      </div>
    );
  }

  // Get features from the first building (or consolidate all buildings)
  const allFeatures = project.buildings.flatMap(b => b.features).filter((f, index, self) => 
    index === self.findIndex((t) => t.name === f.name)
  );

  const featureItems = allFeatures.map(f => ({
      title: f.name,
      icon: <CheckCircle2 className="w-8 h-8 text-[var(--custom-text-secondary)]" />
  }));

  // If no features, add a default one
  if (featureItems.length === 0) {
      featureItems.push({
          title: "Modern Design",
          icon: <Building2 className="w-8 h-8 text-[var(--custom-text-secondary)]" />
      });
  }

  return (
    <>
      <ProjectBanner project={project} />
      <ProjectInfo project={project} />
      <ProjectFeature items={featureItems}/>
      <BuildingDrawingSlider project={project} />
      <ProjectUnit project={project} />
      <ProjectLocationMap project={project} />
      <ContactForm/>
      <RelatedProject />
    </>
  );
};

export default ProjectDetailWrapper;
