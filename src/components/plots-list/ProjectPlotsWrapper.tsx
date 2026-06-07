'use client';

import SecondaryBanner from "@/components/common/SecondaryBanner";
import SectionTitle from "@/components/common/SectionTitle";
import PlotCard from "./PlotCard";
import { PlotDetail } from "@/data/dummyPlots";
import { ProjectDetail } from "@/types/api";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ProjectPlotsWrapperProps {
  project?: ProjectDetail;
  plots: PlotDetail[];
  projectSlug: string;
}

const ProjectPlotsWrapper = ({ project, plots, projectSlug }: ProjectPlotsWrapperProps) => {
  return (
    <>
      <SecondaryBanner 
        title={project?.project_name || "Project Plots"}
        subtitle={`Explore premium properties in ${project?.project_location || "exclusive locations"}`}
        imageSrc={project?.project_image || "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop"}
      />
      
      <section className="px-4 py-12 dark:bg-[var(--bg-body)] bg-white">
        <div className="container mx-auto">
          <div className="flex justify-center mb-8">
            <Link 
              href={`/project/${projectSlug}/details`}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors shadow-md"
            >
              <ArrowLeft size={18} />
              View Project Details
            </Link>
          </div>

          <div className="text-center mb-10">
            <SectionTitle 
              title="Project Plots" 
              subtitle={`Discover the exclusive plots available under ${project?.project_name || "this project"}`} 
              border_b={true} 
            />
          </div>
          
          {plots.length === 0 ? (
            <div className="w-full py-16 text-center border-2 border-dashed border-primary/30 rounded-xl bg-primary/5">
              <p className="text-lg md:text-xl font-medium darkLight-text-color">
                No plots found for this project at the moment.
              </p>
            </div>
          ) : (
            <div className="flex flex-wrap justify-center gap-6 py-8 max-w-[800px] mx-auto">
              {plots.map((plot) => (
                <PlotCard 
                  key={plot.id} 
                  plot={plot} 
                  projectSlug={projectSlug}
                  className="w-full sm:w-[calc(50%-12px)] max-w-[380px]" 
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProjectPlotsWrapper;
