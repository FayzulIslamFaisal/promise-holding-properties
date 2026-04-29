'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

import AllProjectContentCard from '../projects/AllProjectContentCard';
import SectionTitle from '../common/SectionTitle';
import { Project } from '@/types/api';

interface ProjectTabViewsProps {
  projects?: Project[];
  currentTab?: string;
}

const ProjectTabViewsClient = ({ projects = [], currentTab = 'all' }: ProjectTabViewsProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleTabChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === 'all') {
      params.delete('product_status');
    } else {
      params.set('product_status', value);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <section className="w-full sectionSpaceBorder container mx-auto px-4">
      <div className="text-center md:pt-14 pt-10">
        <SectionTitle title="Our Projects" subtitle="Discover our portfolio of innovative construction and architectural projects" border_b={true}/>
      </div>
      {/* Tabs */}
      <Tabs value={currentTab} onValueChange={handleTabChange} className="w-full text-[var(--custom-text-white)] mt-8 md:mt-10">
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

        <TabsContent value={currentTab} className="mt-8">
          {projects.length > 0 ? (
            <div className="w-full">
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
                loop={projects.length > 1}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 10 },
                  640: { slidesPerView: 2, spaceBetween: 10 },
                  768: { slidesPerView: 2, spaceBetween: 15 },
                  992: { slidesPerView: 3, spaceBetween: 15 },
                  1199: { slidesPerView: 3, spaceBetween: 15 },
                  1380: { slidesPerView: 4, spaceBetween: 15 },
                }}
                className="w-full overflow-hidden"
              >
                {projects.map((project) => (
                  <SwiperSlide key={project.id} className="!h-auto pb-8 pt-2">
                    <AllProjectContentCard project={project} />
                  </SwiperSlide>
                ))}
                <div className="swiper-button-prev custom-prev"></div>
                <div className="swiper-button-next custom-next"></div>
              </Swiper>
            </div>
          ) : (
            <div className="w-full py-12 text-center border-2 border-dashed border-[var(--custom-bg-accent)]/30 rounded-xl bg-[var(--custom-bg-accent)]/5">
              <p className="text-lg md:text-xl font-medium darkLight-text-color">
                No projects found for this category at the moment.
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default ProjectTabViewsClient;
