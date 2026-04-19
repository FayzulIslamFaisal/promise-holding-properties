import { apiClient } from "@/lib/api-client";
import type { ApiResponse, Testimonial } from "@/types/api";

export const testimonialService = {
  /** Get all active testimonials */
  async getTestimonials() {
    return apiClient.get<ApiResponse<Testimonial[]>>("/testimonials");
  },
};
