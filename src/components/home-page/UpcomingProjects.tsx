// "UpcomingProjects.tsx"

'use client';

import { ArrowRight, BellRing, MoveRightIcon } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface ProjectItem {
  id: number;
  name: string;
  imageUrl: string | StaticImageData;
  description: string;
}

interface SectionTitles {
  title: string;
  subTitle: string;
}

interface UpcomingProjectsProps {
  sectionTitle: SectionTitles;
  projects: ProjectItem[];
}

const UpcomingProjects: React.FC<UpcomingProjectsProps> = ({ sectionTitle, projects }) => {

  return (
    <section className=" bg-[var(--custom-bg-white)] ">
      <div className="container mx-auto px-4  py-12 border-b-1 border-[var(--custom-bg-primary)]/10">
        <div className="flex flex-col xl:flex-row items-center gap-4 lg:gap-8">
          {/* Left Column */}
          <div className="w-full lg:w-[100%] xl:w-[20%] flex flex-col items-center xl:items-start gap-4 group">
            <div className="flex items-center gap-2 transition-all duration-300 ease-in-out">
              <ArrowRight className="w-6 h-6 text-black opacity-75 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-1" />
              <h2 className="text-2xl xl:text-xl text-black opacity-75 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:tracking-wide">
                {sectionTitle.title}
              </h2>
            </div>
            <p className="text-black opacity-75 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-[1px]">
              {sectionTitle.subTitle}
            </p>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[100%] xl:w-[80%]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-4">
              {projects.map((project) => (
                
                <Card
                    key={project.id}
                    className="group relative rounded-lg border-2 border-[var(--custom-text-hover)] bg-[var(--custom-border-primary)]  shadow-lg transition-all duration-300 hover:scale-102 hover:shadow-xl h-[350px] py-0 "
                  >
                    <div className="absolute right-4 top-4 z-30 rounded-full bg-[var(--custom-bg-accent)] px-3 py-1 text-xs font-medium text-[var(--custom-text-secondary)]">
                      New
                    </div>
                  
                    <CardContent className="relative w-full h-full overflow-hidden p-3">
                        <div className="relative w-full h-full overflow-hidden rounded-lg">
                          <Image
                            src={project.imageUrl}
                            alt={project.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            priority={project.id <= 3}
                          />
                          <div className="absolute inset-0 bg-[var(--custom-bg-primary)] opacity-10 group-hover:opacity-25 transition-opacity duration-300" />
                          
                          {/* Wave effect container */}
                          <div className="absolute bottom-0 left-0 right-0 h-50 overflow-hidden z-0">
                            <svg 
                              viewBox="0 0 500 50" 
                              preserveAspectRatio="none" 
                              className="w-full h-full text-[var(--custom-text-primary)]/50 group-hover:text-[var(--custom-bg-primary)]/25 transition-all duration-300 ease-in-out"
                            >
                              <path d="M0,12 C120,0 380,64 500,32 L500,100 L0,100 Z"
                                  fill="currentColor"
                                  fillOpacity="0.8"
                                  className="transition-all duration-500 group-hover:fill-opacity-90 ease-in-out"
                                  stroke="currentColor"
                                  strokeWidth="0.5"
                                  strokeOpacity="0.3"
                                />
                            </svg>
                          </div>
                          
                          {/* Content overlay (moved above wave) */}
                          <div className="absolute bottom-0 left-0 right-0 z-10 p-4">
                            <CardTitle className="text-lg text-[var(--custom-text-secondary)]">
                              {project.name}
                            </CardTitle>
                            <CardDescription
                              className="
                                mt-2 text-sm text-[var(--custom-text-secondary)]
                                min-h-0 opacity-0 overflow-hidden
                                group-hover:min-h-0 group-hover:opacity-100 group-hover:pb-2
                                transition-all duration-300 ease-in-out
                              "
                            >
                              {project.description}
                            </CardDescription>

                            <CardAction className="mt-2 flex justify-self-start">
                              <Button
                                variant="unstyled"
                                className="btn-glow-accent flex items-center gap-2 text-[var(--custom-text-secondary)]"
                              >
                                <MoveRightIcon className="w-4 h-4 animate-pulse" />
                                View Details
                              </Button>
                              
                            </CardAction>
                          </div>
                        </div>
                      </CardContent>
                  </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingProjects;


