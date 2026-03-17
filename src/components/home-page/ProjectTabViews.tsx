'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

import ProjectTabCard from './ProjectTabCard';
import SectionTitle from '../common/SectionTitle';
import { useProjects } from '@/hooks/use-content';

const ProjectTabViews = () => {
  const { data, isLoading } = useProjects();
  const [activeTab, setActiveTab] = useState('all');

  const projects = data?.data ?? [];

  const filteredProjects = projects.filter(project => {
    if (activeTab === 'all') return true;
    if (!project.category) return false;
    return project.category.toLowerCase() === activeTab.replace('-', '');
  });

  return (
    <section className="w-full px-4 sectionSpaceBorder pt-0">
      <div className="text-center md:pt-14 pt-10">
        <SectionTitle title="Our Projects" subtitle="Discover our portfolio of innovative construction and architectural projects" border_b={true}/>
      </div>
      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full text-[var(--custom-text-white)]">
        <TabsList className="grid w-full grid-flow-row sm:grid-cols-4  max-w-full sm:max-w-2xl mx-auto gap-2 h-full sm:h-14 p-2  bg-[var(--custom-bg-accent)] rounded-xl text-[var(--custom-text-white)] border border-[var(--custom-bg-white)]/50 shadow">
          <TabsTrigger 
            value="all" 
            className="rounded-lg text-sm font-medium cursor-pointer w-full text-[var(--custom-text-white)] dark:text-[--custom-text-black] transition-all duration-200 data-[state=active]:bg-[var(--custom-bg-black)] dark:data-[state=active]:bg-[var(--custom-bg-white)] data-[state=active]:text-[var(--custom-text-white)] dark:data-[state=active]:text-[var(--custom-text-black)] data-[state=active]:shadow-md"
          >
            All
          </TabsTrigger>
          <TabsTrigger 
            value="running" 
            className="rounded-lg text-sm font-medium cursor-pointer w-full text-[var(--custom-text-white)] dark:text-[--custom-text-black] transition-all duration-200 data-[state=active]:bg-[var(--custom-bg-black)] dark:data-[state=active]:bg-[var(--custom-bg-white)] data-[state=active]:text-[var(--custom-text-white)] dark:data-[state=active]:text-[var(--custom-text-black)] data-[state=active]:shadow-md"
          >
            Running Project
          </TabsTrigger>
          <TabsTrigger 
            value="upcoming" 
            className="rounded-lg text-sm font-medium cursor-pointer w-full text-[var(--custom-text-white)] dark:text-[--custom-text-black] transition-all duration-200 data-[state=active]:bg-[var(--custom-bg-black)] dark:data-[state=active]:bg-[var(--custom-bg-white)] data-[state=active]:text-[var(--custom-text-white)] dark:data-[state=active]:text-[var(--custom-text-black)] data-[state=active]:shadow-md"
          >
            Upcoming Project
          </TabsTrigger>
          <TabsTrigger 
            value="complete" 
            className="rounded-lg text-sm font-medium cursor-pointer w-full text-[var(--custom-text-white)] dark:text-[--custom-text-black] transition-all duration-200 data-[state=active]:bg-[var(--custom-bg-black)] dark:data-[state=active]:bg-[var(--custom-bg-white)] data-[state=active]:text-[var(--custom-text-white)] dark:data-[state=active]:text-[var(--custom-text-black)] data-[state=active]:shadow-md"
          >
            Complete Project
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-8">
          {/* Project Swiper */}
          <div className="w-full">
            {isLoading ? (
              <div className="flex justify-center items-center h-64 w-full">
                <span className="loading loading-spinner loading-lg text-[var(--custom-bg-accent)]"></span>
              </div>
            ) : (
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                  delay: 3000, 
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: '.custom-next',
                  prevEl: '.custom-prev',
                }}
                modules={[Navigation, Autoplay]}
                loop={filteredProjects.length > 1}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 10 },
                  640: { slidesPerView: 2, spaceBetween: 10 },
                  768: { slidesPerView: 2, spaceBetween: 15 },
                  992: { slidesPerView: 3, spaceBetween: 15 },
                  1199: { slidesPerView: 4, spaceBetween: 15 },
                  1380: { slidesPerView: 5, spaceBetween: 15 },
                }}
                className="w-full overflow-hidden"
              >
                {filteredProjects.map((project) => (
                  <SwiperSlide key={project.id} className="!h-auto">
                    <ProjectTabCard project={project} />
                  </SwiperSlide>
                ))}
                <div className="swiper-button-prev custom-prev"></div>
                <div className="swiper-button-next custom-next"></div>
              </Swiper>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default ProjectTabViews;
