
import InsightBanner from "./InsightBanner"
import InsightHeader from "./InsightHeader"
import { Blog } from "@/types/api"

interface InsightWrapperProps {
  blog: Blog;
}

const InsightWrapper: React.FC<InsightWrapperProps> = ({ blog }) => {
  return (
    <>
      <InsightBanner banner={blog.banner} title={blog.title} />
      <section className="px-4">
          <div className="container mx-auto sectionSpaceBorder">
              <InsightHeader 
                title={blog.title} 
                date={blog.created_at} 
                shortDescription={blog.short_description} 
              />
              
              <div 
                className="prose prose-lg dark:prose-invert max-w-none darkLight-text-color mt-8 space-y-4"
                dangerouslySetInnerHTML={{ __html: blog.description || "" }}
              />
          </div>
      </section>
    </>
  )
}

export default InsightWrapper