'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

import ProjectCard from '../common/ProjectCard';
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

  const [slidesPerView, setSlidesPerView] = useState(1);
  const [shouldShowNavigation, setShouldShowNavigation] = useState(false);

  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      let spv = 1;
      if (width >= 1380) spv = 4;
      else if (width >= 992) spv = 3;
      else if (width >= 640) spv = 2;
      else spv = 1;
      
      setSlidesPerView(spv);
      setShouldShowNavigation(projects.length > spv);
    };

    updateSlides();
    window.addEventListener('resize', updateSlides);
    return () => window.removeEventListener('resize', updateSlides);
  }, [projects.length]);

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
        <SectionTitle title="Our Projects" subtitle="Discover our portfolio of innovative construction and architectural projects" border_b={true} />
      </div>
      {/* Tabs */}
      <Tabs value={currentTab} onValueChange={handleTabChange} className="w-full text-white mt-8 md:mt-10">
        <TabsList className="grid w-full grid-cols-4  max-w-2xl mx-auto gap-2 h-full sm:h-14 p-2 bg-primary rounded-xl text-white border border-white/50 shadow">
          <TabsTrigger
            value="all"
            className="rounded-lg text-sm font-medium cursor-pointer w-full text-white dark:text-black transition-all duration-200 data-[state=active]:!bg-white data-[state=active]:!text-primary data-[state=active]:shadow-md hover:!bg-white hover:!text-primary"
          >
            All
          </TabsTrigger>
          <TabsTrigger
            value="running"
            className="rounded-lg text-sm font-medium cursor-pointer w-full text-white dark:text-black transition-all duration-200 data-[state=active]:!bg-white data-[state=active]:!text-primary data-[state=active]:shadow-md hover:!bg-white hover:!text-primary"
          >
            Running
          </TabsTrigger>
          <TabsTrigger
            value="upcoming"
            className="rounded-lg text-sm font-medium cursor-pointer w-full text-white dark:text-black transition-all duration-200 data-[state=active]:!bg-white data-[state=active]:!text-primary data-[state=active]:shadow-md hover:!bg-white hover:!text-primary"
          >
            Upcoming
          </TabsTrigger>
          <TabsTrigger
            value="complete"
            className="rounded-lg text-sm font-medium cursor-pointer w-full text-white dark:text-black transition-all duration-200 data-[state=active]:!bg-white data-[state=active]:!text-primary data-[state=active]:shadow-md hover:!bg-white hover:!text-primary"
          >
            Completed
          </TabsTrigger>
        </TabsList>

        <TabsContent value={currentTab} className="mt-8">
          {projects.length > 0 ? (
            <div className="w-full relative group">
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
                loop={shouldShowNavigation}
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
                    <ProjectCard project={project} />
                  </SwiperSlide>
                ))}
              </Swiper>
              
              {/* Navigation Buttons */}
              {shouldShowNavigation && (
                <>
                  <div className="swiper-button-prev custom-prev !-left-4 md:!-left-6 !bg-primary hover:!bg-black transition-colors"></div>
                  <div className="swiper-button-next custom-next !-right-4 md:!-right-6 !bg-primary hover:!bg-black transition-colors"></div>
                </>
              )}
            </div>
          ) : (
            <div className="w-full py-12 text-center border-2 border-dashed border-primary/30 rounded-xl bg-primary/5">
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
