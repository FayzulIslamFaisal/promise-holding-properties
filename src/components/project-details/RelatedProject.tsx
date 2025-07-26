// components/project-details/RelatedProject.tsx

'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import RelatedProjectCard from './RelatedProjectCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  location: string;
  category: 'Running' | 'Upcoming' | 'Complete';
  image: string;
  slug: string;
}

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Nexus Corporate Tower',
    slug: 'nexus-corporate-tower',
    location: 'New York, NY',
    category: 'Running',
    image: "/assets/images/projects/project1.jpg",
  },
  {
    id: '2',
    title: 'Innovation Hub Office',
    slug: 'innovation-hub-office',
    location: 'San Francisco, CA',
    category: 'Complete',
    image: "/assets/images/projects/project2.jpg",
  },
  {
    id: '3',
    title: 'Skyline Residences',
    slug: 'skyline-residences',
    location: 'Miami, FL',
    category: 'Upcoming',
    image: "/assets/images/projects/project3.jpg",
  },
  {
    id: '4',
    title: 'Metro Shopping Center',
    slug: 'metro-shopping-center',
    location: 'Los Angeles, CA',
    category: 'Running',
    image: "/assets/images/projects/project4.jpg",
  },
  {
    id: '5',
    title: 'Green Valley Homes',
    slug: 'green-valley-homes',
    location: 'Austin, TX',
    category: 'Complete',
    image: "/assets/images/projects/project5.jpeg",
  },
  {
    id: '6',
    title: 'Tech Campus Plaza',
    slug: 'tech-campus-plaza',
    location: 'Seattle, WA',
    category: 'Upcoming',
    image: "/assets/images/projects/project6.jpg",
  },
  {
    id: '7',
    title: 'Harbor View Condos',
    slug: 'harbor-view-condos',
    location: 'Boston, MA',
    category: 'Running',
    image: "/assets/images/projects/project7.jpg",
  },
  {
    id: '8',
    title: 'Crystal Lake Villas',
    slug: 'crystal-lake-villas',
    location: 'Denver, CO',
    category: 'Upcoming',
    image: "/assets/images/projects/project8.jpg",
  },
  {
    id: '9',
    title: 'Sunset Business Park',
    slug: 'sunset-business-park',
    location: 'Phoenix, AZ',
    category: 'Complete',
    image: "/assets/images/projects/project9.jpg",
  },
  {
    id: '10',
    title: 'Riverfront Towers',
    slug: 'riverfront-towers',
    location: 'Chicago, IL',
    category: 'Running',
    image: "/assets/images/projects/project10.jpg",
  },
  {
    id: '11',
    title: 'Urban Heights Complex',
    slug: 'urban-heights-complex',
    location: 'Philadelphia, PA',
    category: 'Upcoming',
    image: "/assets/images/projects/project11.jpg",
  },
  {
    id: '12',
    title: 'Maplewood Townhomes',
    slug: 'maplewood-townhomes',
    location: 'Nashville, TN',
    category: 'Complete',
    image: "/assets/images/projects/project12.jpg",
  },
  {
    id: '13',
    title: 'Pinecrest Corporate Campus',
    slug: 'pinecrest-corporate-campus',
    location: 'Charlotte, NC',
    category: 'Running',
    image: "/assets/images/projects/project13.jpg",
  },
  {
    id: '14',
    title: 'Coastal Business Hub',
    slug: 'coastal-business-hub',
    location: 'Tampa, FL',
    category: 'Upcoming',
    image: "/assets/images/projects/project14.jpg",
  },
  {
    id: '15',
    title: 'Lakeside Shopping Mall',
    slug: 'lakeside-shopping-mall',
    location: 'Orlando, FL',
    category: 'Complete',
    image: "/assets/images/projects/project15.jpg",
  },
];

const RelatedProject = () => {
  return (
    <div>
      <section className="px-4">
        <div className="container mx-auto pt-10 pb-10 md:pb-14 md:pt-14">
          <div className="mb-6 lg:mb-10 flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--custom-text-white)]">
            Related Projects
          </h2>
          <div className="">
            <Link
              href="#"
              className="btn-glow-accent flex items-center gap-2"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 animate-pulse" />
            </Link>
          </div>
          
        </div>
          {/* Project Swiper */}

            <Swiper
              slidesPerView={1}
              spaceBetween={15}
              autoplay={{
                delay: 3000, 
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
              }}
              modules={[Navigation, Autoplay]}
              loop
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
              }}
              className="swiper-wrapper "
            >
              {mockProjects.map((project) => (
                <SwiperSlide key={project.id}>
                  <RelatedProjectCard project={project} />
                </SwiperSlide>
              ))}
              <div className="swiper-button-prev custom-prev"></div>
              <div className="swiper-button-next custom-next"></div>
            </Swiper>
            

        </div>
      </section>
    </div>
  );
};

export default RelatedProject;