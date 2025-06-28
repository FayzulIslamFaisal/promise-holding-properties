'use client';

import { ArrowRight, BellRing } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { Button } from '../ui/button';

interface Project {
  id: number;
  name: string;
  imageUrl: string | StaticImageData;
  description: string;
}

const UpcomingProjects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      name: 'Project 01',
      imageUrl: '/assets/images/projects/project1.jpg',
      description: 'Luxury apartments near the city center.',
    },
    {
      id: 2,
      name: 'Project 02',
      imageUrl: '/assets/images/projects/project2.jpg',
      description: 'Modern villas in a serene environment.',
    },
    {
      id: 3,
      name: 'Project 03',
      imageUrl: '/assets/images/projects/project3.jpg',
      description: 'Upcoming business plaza in the downtown area. ',
    },
    {
      id: 4,
      name: 'Project 04',
      imageUrl: '/assets/images/projects/project4.jpg',
      description: 'Eco-friendly housing project in the suburbs.',
    },
    {
      id: 5,
      name: 'Project 05',
      imageUrl: '/assets/images/projects/project5.jpeg',
      description: 'Innovative smart homes launching soon.',
    },
    {
      id: 6,
      name: 'Project 06',
      imageUrl: '/assets/images/projects/project6.jpg',
      description: 'A new standard in coastal living.',
    },
  ];

  return (
    <section className="py-12 bg-[var(--custom-bg-white)]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row items-center gap-4 lg:gap-8">
          {/* Left Column: Title */}
          <div className="w-full lg:w-[100%] xl:w-[20%] flex flex-col items-center xl:items-start gap-4">
            <div className="flex items-center gap-2">
              <ArrowRight className="w-6 h-6 text-[var(--custom-text-primary)]" />
              <h2 className="text-2xl xl:text-xl text-[var(--custom-text-primary)]">
                Running Projects
              </h2>
            </div>
            <p className="text-[var(--custom-text-third)]">
              Explore our current and upcoming initiatives
            </p>
          </div>

          {/* Right Column: Project Cards */}
          <div className="w-full lg:w-[100%] xl:w-[80%]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-lg border-2 border-[var(--custom-text-hover)] bg-[var(--custom-border-primary)] p-4 shadow-lg transition-all duration-300 hover:scale-102 hover:bg-[var(--custom-border-primary)]/100 hover:shadow-xl"
                >
                  {/* Image Section */}
                  <div className="relative h-[250px] w-full overflow-hidden rounded-lg lg:h-[350px]">
                    <Image
                      src={project.imageUrl}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={project.id <= 3}
                    />

                    {/* Dark Overlay on Hover */}
                    <div className="absolute inset-0 z-10 bg-[var(--custom-bg-primary)] opacity-0 transition-opacity duration-300 group-hover:opacity-20" />

                    {/* Bottom Overlay Content */}
                    <div className="absolute bottom-0 left-0 right-0 z-20 p-4 bg-gradient-to-t from-[var(--custom-bg-black)]/80 to-transparent transition-all duration-300">
                      <h3 className="text-lg text-[var(--custom-text-secondary)]">
                        {project.name}
                      </h3>

                      {/* Description with fade + slide animation */}
                      
                      <p
                        className="
                          mt-2 text-sm text-[var(--custom-text-secondary)]
                          min-h-0 opacity-0 overflow-hidden
                          group-hover:min-h-0 group-hover:opacity-100 group-hover:pb-2
                          transition-all duration-300 ease-in-out
                        "
                      >
                        {project.description}
                      </p>

                      {/* View Details Button */}
                      <Button
                        variant="unstyled"
                        className="btn-glow-accent mt-2 flex items-center gap-2 text-[var(--custom-text-secondary)]"
                      >
                        <BellRing className="w-4 h-4 animate-pulse" />
                        View Details
                      </Button>
                    </div>
                  </div>

                  {/* Top Right Badge */}
                  <div className="absolute right-4 top-4 z-30 rounded-full bg-[var(--custom-bg-accent)] px-3 py-1 text-xs font-medium text-[var(--custom-text-secondary)]">
                    New
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingProjects;
