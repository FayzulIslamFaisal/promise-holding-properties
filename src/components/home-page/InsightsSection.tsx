"use client";
import { InsightCard } from './InsightCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const insightsData = [
  {
    id: '1',
    title: '5 Reasons Families Are Choosing Premium Residential Communities',
    category: 'Blog',
    date: 'April 2025',
    image: "/assets/images/projects/project2.jpg",
    excerpt: 'Discover why modern families are increasingly attracted to premium residential communities that offer luxury amenities, security, and lifestyle benefits.',
    readTime: '5 min read',
    views: 2840,
    featured: true,
  },
  {
    id: '2',
    title: 'Grand Opening Ceremony of Our Latest Development Project',
    category: 'Events',
    date: 'April 2025',
    image: "/assets/images/projects/project3.jpg",
    excerpt: 'Join us as we celebrate the opening of our newest luxury development with special offers and exclusive previews.',
    readTime: '3 min read',
    views: 1560,
  },
  {
    id: '3',
    title: 'Best Luxury Apartments in Premium Locations',
    category: 'Property',
    date: 'March 2025',
    image: "/assets/images/projects/project4.jpg",
    excerpt: 'Explore our curated selection of luxury apartments featuring world-class amenities and prime locations.',
    readTime: '7 min read',
    views: 3200,
  },
  {
    id: '4',
    title: 'Successful Handover Ceremony for Phase 1 Residents',
    category: 'Events',
    date: 'March 2025',
    image: "/assets/images/projects/project6.jpg",
    excerpt: 'Celebrating the successful completion and handover of keys to our valued residents in the first phase.',
    readTime: '4 min read',
    views: 980,
  },
  {
    id: '5',
    title: 'Why Sustainable Living Is the Future of Real Estate',
    category: 'Blog',
    date: 'February 2025',
    image: "/assets/images/projects/project7.jpg",
    excerpt: 'Learn how eco-friendly building practices and sustainable communities are reshaping real estate trends.',
    readTime: '6 min read',
    views: 2175,
  },
  {
    id: '6',
    title: 'Top Investment Tips for First-Time Property Buyers',
    category: 'Blog',
    date: 'January 2025',
    image: "/assets/images/projects/project8.jpg",
    excerpt: 'A guide for first-time buyers to make smart and safe investments in the real estate market.',
    readTime: '5 min read',
    views: 1340,
  },
  {
    id: '7',
    title: 'Inside Look: Our Upcoming Premium Tower Design Reveal',
    category: 'Events',
    date: 'January 2025',
    image: "/assets/images/projects/project9.jpg",
    excerpt: 'Get a sneak peek into the design of our most anticipated premium residential tower yet.',
    readTime: '4 min read',
    views: 2890,
    featured: true,
  },
  {
    id: '8',
    title: 'Creating Community: More Than Just Building Homes',
    category: 'Blog',
    date: 'December 2024',
    image: "/assets/images/projects/project10.jpg",
    excerpt: 'Discover how we’re fostering a sense of belonging and community in our residential developments.',
    readTime: '6 min read',
    views: 1730,
  },
  {
    id: '9',
    title: 'Modern Amenities That Define Luxury Living Today',
    category: 'Property',
    date: 'November 2024',
    image: "/assets/images/projects/project11.jpg",
    excerpt: 'Explore the must-have modern amenities that elevate the living experience in today’s luxury apartments.',
    readTime: '5 min read',
    views: 2410,
  },
  {
    id: '10',
    title: 'Reflecting on a Year of Real Estate Innovation',
    category: 'Blog',
    date: 'October 2024',
    image: "/assets/images/projects/project12.jpg",
    excerpt: 'A look back at the innovative projects, milestones, and trends that shaped the year.',
    readTime: '7 min read',
    views: 1980,
  },
];


const InsightsSection: React.FC = () => {
  return (
    <section className="px-4">
      <div className="container mx-auto md:py-14 py-10 border-b border-[var(--custom-bg-accent)]/40">
        <div className="mb-6 lg:mb-10 flex items-center justify-between">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]">
             Insights
          </h2>
          <div className="">
            <Link
              href="/media-center"
              target="_blank"
              className="btn-glow-accent flex items-center gap-2"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 animate-pulse" />
            </Link>
          </div>
        </div>

        <Swiper
          spaceBetween={15}
          slidesPerView={1}
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
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {insightsData.map((insight) => (
            <SwiperSlide key={insight.id}>
              <InsightCard {...insight} />
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev custom-prev"></div>
          <div className="swiper-button-next custom-next"></div>
        </Swiper>
      </div>
    </section>
  );
};
export default InsightsSection;