// UpcomingProjects.tsx
import { ArrowRight } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface Project {
  id: number;
  name: string;
  imageUrl: string | StaticImageData;
}

const UpcomingProjects: React.FC = () => {
  const projects: Project[] = [
    { id: 1, name: 'Project 01', imageUrl: '/assets/images/projects/project1.jpg' },
    { id: 2, name: 'Project 02', imageUrl: '/assets/images/projects/project2.jpg' },
    { id: 3, name: 'Project 03', imageUrl: '/assets/images/projects/project3.jpg' },
    { id: 4, name: 'Project 04', imageUrl: '/assets/images/projects/project4.jpg' },
    { id: 5, name: 'Project 05', imageUrl: '/assets/images/projects/project5.jpeg' },
    { id: 6, name: 'Project 06', imageUrl: '/assets/images/projects/project6.jpg' },
  ];

  return (
    <section className="py-12 bg-[var(--custom-bg-white)]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-[20%] flex flex-col items-start gap-4">
            <div className="flex items-center gap-2">
              <ArrowRight className="w-6 h-6 text-[var(--custom-text-primary)]" />
              <h2 className="text-xl font-semibold text-[var(--custom-text-primary)]">
                Running Projects
              </h2>
            </div>
            <p className="text-[var(--custom-text-third)]">
              Explore our current and upcoming initiatives
            </p>
          </div>
          
          <div className="w-full md:w-[80%]">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-4">
              {projects.map((project) => (
                <div 
                    key={project.id}
                    className="group relative overflow-hidden rounded-lg border-2 border-[var(--custom-text-hover)] bg-[var(--custom-border-primary)] p-4 shadow-lg transition-all duration-300 hover:scale-102 hover:bg-[var(--custom-border-primary)]/100 hover:shadow-xl"
                    >
                    {/* Image Container with Hover Effects */}
                    <div className="relative h-[250px] w-full overflow-hidden rounded-lg lg:h-[350px]">
                        {/* Image with optimized loading and hover scale */}
                        <Image
                        src={project.imageUrl || '/assets/images/projects/project8.jpg'}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={project.id <= 3} // Only prioritize first 3 images
                        />
                        
                        {/* Overlay Effects */}
                        <div className="absolute inset-0 z-10 bg-[var(--custom-bg-primary)] opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
                        
                        {/* Title Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-[var(--custom-bg-black)]/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <h3 className="text-lg font-semibold text-[var(--custom-text-secondary)]">
                            {project.name}
                        </h3>
                        <p className="mt-1 text-sm text-[var(--custom-text-hover)]">
                            View Details
                        </p>
                        </div>
                    </div>

                    {/* Optional: Badge for Status */}
                    <div className="absolute right-4 top-4 z-20 rounded-full bg-[var(--custom-bg-accent)] px-3 py-1 text-xs font-medium text-[var(--custom-text-secondary)]">
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