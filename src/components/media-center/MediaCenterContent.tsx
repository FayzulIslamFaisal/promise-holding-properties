"use client";
import { useEffect, useState } from 'react';
import { InsightCard } from '@/components/home-page/InsightCard';
import { blogService } from '@/services';
import { Blog } from '@/types/api';
import { Loader2 } from 'lucide-react';

const MediaCenterContent = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await blogService.getBlogs({ per_page: 12 });
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
    <section className="px-4 dark:bg-[var(--custom-bg-body)] bg-[var(--custom-bg-white)]">
      <div className="container mx-auto">
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-[var(--custom-bg-accent)]" />
          </div>
        ) : blogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sectionSpaceBorder">
            {blogs.map((blog) => (
              <InsightCard 
                key={blog.id}
                id={blog.slug}
                title={blog.title}
                category={blog.tags.split(',')[0] || "Blog"}
                date={new Date(blog.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                image={blog.banner}
                excerpt={blog.short_description}
                views={blog.view_count}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-[var(--custom-text-muted)]">
            No newsletters found.
          </div>
        )}
      </div>
    </section>
  );
};

export default MediaCenterContent;
