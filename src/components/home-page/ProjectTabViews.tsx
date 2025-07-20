


'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

import ProjectTabCard from './ProjectTabCard';
interface Project {
  id: string;
  title: string;
  location: string;
  category: 'Running' | 'Upcoming' | 'Complete';
  image: string;
}

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Nexus Corporate Tower',
    location: 'New York, NY',
    category: 'Running',
    image: "/assets/images/projects/project1.jpg",
  },
  {
    id: '2',
    title: 'Innovation Hub Office',
    location: 'San Francisco, CA',
    category: 'Complete',
    image: "/assets/images/projects/project2.jpg",
  },
  {
    id: '3',
    title: 'Skyline Residences',
    location: 'Miami, FL',
    category: 'Upcoming',
    image: "/assets/images/projects/project3.jpg",
  },
  {
    id: '4',
    title: 'Metro Shopping Center',
    location: 'Los Angeles, CA',
    category: 'Running',
    image: "/assets/images/projects/project4.jpg",
  },
  {
    id: '5',
    title: 'Green Valley Homes',
    location: 'Austin, TX',
    category: 'Complete',
    image: "/assets/images/projects/project5.jpeg",
  },
  {
    id: '6',
    title: 'Tech Campus Plaza',
    location: 'Seattle, WA',
    category: 'Upcoming',
    image: "/assets/images/projects/project6.jpg",
  },
  {
    id: '7',
    title: 'Harbor View Condos',
    location: 'Boston, MA',
    category: 'Running',
    image: "/assets/images/projects/project7.jpg",
  },
  {
    id: '8',
    title: 'Crystal Lake Villas',
    location: 'Denver, CO',
    category: 'Upcoming',
    image: "/assets/images/projects/project8.jpg",
  },
  {
    id: '9',
    title: 'Sunset Business Park',
    location: 'Phoenix, AZ',
    category: 'Complete',
    image: "/assets/images/projects/project9.jpg",
  },
  {
    id: '10',
    title: 'Riverfront Towers',
    location: 'Chicago, IL',
    category: 'Running',
    image: "/assets/images/projects/project10.jpg",
  },
  {
    id: '11',
    title: 'Urban Heights Complex',
    location: 'Philadelphia, PA',
    category: 'Upcoming',
    image: "/assets/images/projects/project11.jpg",
  },
  {
    id: '12',
    title: 'Maplewood Townhomes',
    location: 'Nashville, TN',
    category: 'Complete',
    image: "/assets/images/projects/project12.jpg",
  },
  {
    id: '13',
    title: 'Pinecrest Corporate Campus',
    location: 'Charlotte, NC',
    category: 'Running',
    image: "/assets/images/projects/project13.jpg",
  },
  {
    id: '14',
    title: 'Coastal Business Hub',
    location: 'Tampa, FL',
    category: 'Upcoming',
    image: "/assets/images/projects/project14.jpg",
  },
  {
    id: '15',
    title: 'Lakeside Shopping Mall',
    location: 'Orlando, FL',
    category: 'Complete',
    image: "/assets/images/projects/project15.jpg",
  },
];


 const ProjectTabViews = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = mockProjects.filter(project => {
    if (activeTab === 'all') return true;
    return project.category.toLowerCase() === activeTab.replace('-', '');
  });

  return (
    <section className="w-full px-4 pb-14 border-b border-[var(--custom-bg-accent)]/40">
      {/* Header */}
      <div className="text-center pt-14">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--custom-bg-white)] mb-6">
          Our Projects
        </h1>
        <p className="text-lg text-[var(--custom-bg-white)]/80 mx-auto pb-6">
          Discover our portfolio of innovative construction and architectural projects
        </p>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full text-white">
        <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto gap-2 h-14 p-2  bg-[var(--custom-bg-accent)] rounded-xl text-[var(--custom-text-white)] border border-[var(--custom-bg-white)]/50 shadow">
          <TabsTrigger 
            value="all" 
            className="rounded-lg text-sm font-medium cursor-pointer text-[var(--custom-text-white)] transition-all duration-200 data-[state=active]:bg-[var(--custom-bg-white)] data-[state=active]:text-[var(--custom-text-secondary)] data-[state=active]:shadow-md"
          >
            All
          </TabsTrigger>
          <TabsTrigger 
            value="running" 
            className="rounded-lg text-sm font-medium cursor-pointer text-[var(--custom-text-white)] transition-all duration-200 data-[state=active]:bg-[var(--custom-bg-white)] data-[state=active]:text-[var(--custom-text-secondary)] data-[state=active]:shadow-md"
          >
            Running Project
          </TabsTrigger>
          <TabsTrigger 
            value="upcoming" 
            className="rounded-lg text-sm font-medium cursor-pointer text-[var(--custom-text-white)] transition-all duration-200 data-[state=active]:bg-[var(--custom-bg-white)] data-[state=active]:text-[var(--custom-text-secondary)] data-[state=active]:shadow-md"
          >
            Upcoming Project
          </TabsTrigger>
          <TabsTrigger 
            value="complete" 
            className="rounded-lg text-sm font-medium cursor-pointer text-[var(--custom-text-white)] transition-all duration-200 data-[state=active]:bg-[var(--custom-bg-white)] data-[state=active]:text-[var(--custom-text-secondary)] data-[state=active]:shadow-md"
          >
            Complete Project
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-8">
          {/* Project Swiper */}
          <div className="w-full">
            <Swiper
              slidesPerView={1}
              spaceBetween={24}
              autoplay={{
              delay: 3000, 
              disableOnInteraction: false,
          }}
            navigation
            modules={[Navigation, Autoplay]}
            loop
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 16,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 24,
                },
              }}
              className="!overflow-visible px-6 md:px-8"
            >
              {filteredProjects.map((project) => (
                <SwiperSlide key={project.id} className="!h-auto">
                  <ProjectTabCard project={project} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default ProjectTabViews
