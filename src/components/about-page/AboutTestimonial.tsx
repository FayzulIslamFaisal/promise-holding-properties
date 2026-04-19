import { Testimonial } from "@/types/api";
import TestimonialSlider from "../common/TestimonialSlider";
import { testimonialService } from "@/services";

interface AboutTestimonialProps {
  autoplay?: boolean;
}

const AboutTestimonial = async ({ autoplay = false }: AboutTestimonialProps) => {
  let testimonials: Testimonial[] = [];
  try {
    const res = await testimonialService.getTestimonials();
    testimonials = res.data || [];
  } catch (error) {
    console.error("Error fetching testimonials:", error);
  }

  return <TestimonialSlider autoplay={autoplay} titleAlign="center" testimonials={testimonials} />;
};

export default AboutTestimonial;