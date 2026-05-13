'use client';

import { 
  Building2,
  CheckCircle2,
} from "lucide-react";

import dynamic from 'next/dynamic';
import { ProjectDetail } from "@/types/api";
import ProjectInfo from "../project-details/ProjectInfo";
import SecondaryBanner from '@/components/common/SecondaryBanner';
import LandCalculator from './LandCalculator';
import PlotMapViewer from './PlotMapViewer';

const ProjectLocationMap = dynamic(() => import('../project-details/ProjectLocationMap'));
const ProjectFeature = dynamic(() => import('../project-details/ProjectFeature'));
const ContactForm = dynamic(() => import('../project-details/ContactForm'));

interface LandProjectDetailWrapperProps {
  project?: ProjectDetail;
}

const LandProjectDetailWithMapWrapper = ({ project }: LandProjectDetailWrapperProps) => {

  if (!project) {
    return (
      <div className="flex justify-center items-center h-[100vh] w-full text-xl text-[var(--brand-dark)]">
        Project not found.
      </div>
    );
  }

  const allFeatures = project.buildings.flatMap(b => b.features).filter((f, index, self) => 
    index === self.findIndex((t) => t.name === f.name)
  );

  const featureItems = allFeatures.map(f => ({
      title: f.name,
      icon: <CheckCircle2 className="w-8 h-8 text-primary" />
  }));

  if (featureItems.length === 0) {
      featureItems.push({
          title: "Premium Land Location",
          icon: <Building2 className="w-8 h-8 text-primary" />
      });
  }

  return (
    <>
      <SecondaryBanner 
        title={project.project_name}
        subtitle="Exclusive Plot Details"
        imageSrc={project.project_image} 
      />

      <ProjectInfo project={project} />

      {/* Calculator & Map Section */}
      <section className="px-4">
        <div className="container mx-auto sectionSpaceBorder">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Side - Plot Map (Spans 8 columns on lg) */}
              <div className="lg:col-span-8 h-full">
                <PlotMapViewer mapImage={project.project_image} />
              </div>
              
              {/* Right Side - Calculator (Spans 4 columns on lg) */}
              <div className="lg:col-span-4 h-full">
                <LandCalculator pricePerUnit={5000} />
              </div>
           </div>
        </div>
      </section>

      <ProjectFeature items={featureItems}/>
      <ProjectLocationMap project={project} />
      <ContactForm/>
    </>
  );
};

export default LandProjectDetailWithMapWrapper;
