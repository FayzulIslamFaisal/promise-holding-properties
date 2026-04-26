"use client";
import { useEffect, useState } from 'react';
import { InsightCard } from './InsightCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import Link from 'next/link';
import { ArrowRight, Loader2 } from 'lucide-react';
import { blogService } from '@/services';
import { Blog } from '@/types/api';

const InsightsSection: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await blogService.getBlogs({ per_page: 10 });
        if (response.status === "success") {
          setBlogs(response.data.blogs);
        }
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="px-4">
      <div className="container mx-auto sectionSpaceBorder">
        <div className="mb-6 lg:mb-10 flex items-center justify-between">
          <h2 className="text-3xl sm:text-4xl md:text-5xl capitalize font-bold darkLight-text-color">
             Insights
          </h2>
          <div className="">
            <Link
              href="/media-center"
              className="btn-glow-accent flex items-center gap-2"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 animate-pulse" />
            </Link>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-[var(--custom-bg-accent)]" />
          </div>
        ) : blogs.length > 0 ? (
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
            loop={blogs.length >= 4}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog.id}>
                <InsightCard 
                  id={blog.slug} // Using slug for link as per common practice
                  title={blog.title}
                  category={blog.tags.split(',')[0] || "Blog"} // Assuming tags is comma separated
                  date={new Date(blog.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  image={blog.banner}
                  excerpt={blog.short_description}
                  views={blog.view_count}
                />
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev custom-prev"></div>
            <div className="swiper-button-next custom-next"></div>
          </Swiper>
        ) : (
          <div className="text-center py-20 text-[var(--custom-text-muted)]">
            No insights found.
          </div>
        )}
      </div>
    </section>
  );
};

export default InsightsSection;
