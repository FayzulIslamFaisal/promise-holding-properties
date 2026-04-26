import { Testimonial } from "@/types/api";
import TestimonialSlider from "../common/TestimonialSlider";
import { testimonialService } from "@/services";

interface ProjectTestimonialProps {
  autoplay?: boolean;
}

const ProjectTestimonial = async ({ autoplay = false }: ProjectTestimonialProps) => {
  let testimonials: Testimonial[] = [];
  try {
    const res = await testimonialService.getTestimonials();
    testimonials = res.data || [];
  } catch (error) {
    console.error("Error fetching testimonials:", error);
  }

  return <TestimonialSlider autoplay={autoplay} titleAlign="center" testimonials={testimonials} />;
};

export default ProjectTestimonial;
