'use client';

import { 
  Building2,
  CheckCircle2,
} from "lucide-react";

import dynamic from 'next/dynamic';
import { ProjectDetail } from "@/types/api";
import LandProjectInfo from "./LandProjectInfo";
import SecondaryBanner from '@/components/common/SecondaryBanner';
import LandCalculator from './LandCalculator';


const ProjectLocationMap = dynamic(() => import('../project-details/ProjectLocationMap'));
const ProjectFeature = dynamic(() => import('../project-details/ProjectFeature'));
const ContactForm = dynamic(() => import('../project-details/ContactForm'));

interface LandProjectDetailWrapperProps {
  project?: ProjectDetail;
}

const LandProjectDetailWrapper = ({ project }: LandProjectDetailWrapperProps) => {

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

      <section className="px-4 py-8 lg:py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Side - Scrolling Content */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              <LandProjectInfo project={project} />
              
              <div className="-mx-4 sm:mx-0">
                <ProjectFeature items={featureItems}/>
                <ProjectLocationMap project={project} />
                <ContactForm/>
              </div>
            </div>

            {/* Right Side - Sticky Calculator */}
            <div className="lg:col-span-4 sticky top-28 z-20 hidden lg:block">
              <LandCalculator pricePerUnit={5000} />
            </div>

            {/* Mobile Calculator (Shows normally in document flow for mobile) */}
            <div className="col-span-1 block lg:hidden">
              <LandCalculator pricePerUnit={5000} />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default LandProjectDetailWrapper;
