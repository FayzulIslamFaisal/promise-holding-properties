import { Testimonial } from "@/types/api";
import TestimonialSlider from "./TestimonialSlider";
import { testimonialService } from "@/services";

interface TestimonialsProps {
  autoplay?: boolean;
  titleAlign?: "left" | "center" | "right";
  title?: string;
}

const Testimonials = async ({ 
  autoplay = false, 
  titleAlign = "center",
  title 
}: TestimonialsProps) => {
  let testimonials: Testimonial[] = [];
  let error: string | null = null;

  try {
    const res = await testimonialService.getTestimonials();
    testimonials = res.data || [];
  } catch (err) {
    console.error("Error fetching testimonials:", err);
    error = "Failed to load testimonials";
  }

  if (error || testimonials.length === 0) {
    return (
      <section className="px-4">
        <div className="container mx-auto sectionSpaceBorder">
          <div className="flex justify-center items-center py-12">
            <p className="text-lg text-red-500">{error || "No testimonials available"}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <TestimonialSlider 
      autoplay={autoplay} 
      titleAlign={titleAlign} 
      testimonials={testimonials}
      title={title}
    />
  );
};

export default Testimonials;
