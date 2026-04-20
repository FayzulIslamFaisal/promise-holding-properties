import InsightWrapper from "@/components/insight/InsightWrapper";
import { blogService } from "@/services";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Generate dynamic metadata for SEO
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const response = await blogService.getBlogBySlug(slug);
    const blog = response.data;

    return {
      title: blog.seo_content?.meta_title || blog.title,
      description: blog.seo_content?.meta_description || blog.short_description,
      keywords: blog.seo_content?.meta_keywords,
      openGraph: {
        title: blog.title,
        description: blog.short_description,
        images: [blog.banner],
        type: "article",
        publishedTime: blog.created_at,
      },
    };
  } catch (error) {
    return {
      title: "Blog Not Found",
    };
  }
}

const InsightPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  
  try {
    const response = await blogService.getBlogBySlug(slug);
    
    if (!response || response.status !== "success") {
      return notFound();
    }

    return <InsightWrapper blog={response.data} />;
  } catch (error) {
    console.error("Error loading blog details:", error);
    return notFound();
  }
};

export default InsightPage;
