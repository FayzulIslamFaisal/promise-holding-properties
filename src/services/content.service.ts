// =============================================================================
// Content Service — Public content endpoints (no auth required)
// =============================================================================
// Endpoints:
//   GET /header-banners   — Active header banners
//   GET /managements      — Management team members
//   GET /our-services     — Company services
//   GET /our-values       — Company values
//   GET /testimonials     — Customer testimonials
//   GET /why-choose-us    — Why choose us statistics
// =============================================================================

import { apiClient } from "@/lib/api-client";
import type {
  ApiResponse,
  HeaderBanner,
  ManagementMember,
  OurService,
  OurValue,
  Testimonial,
  WhyChooseUs,
} from "@/types/api";

export const contentService = {
  /** Get all active header banners */
  async getHeaderBanners() {
    return apiClient.get<ApiResponse<HeaderBanner[]>>("/header-banners");
  },

  /** Get all active management members */
  async getManagementMembers() {
    return apiClient.get<ApiResponse<ManagementMember[]>>("/managements");
  },

  /** Get all active services */
  async getOurServices() {
    return apiClient.get<ApiResponse<OurService[]>>("/our-services");
  },

  /** Get all active values */
  async getOurValues() {
    return apiClient.get<ApiResponse<OurValue[]>>("/our-values");
  },

  /** Get all active testimonials */
  async getTestimonials() {
    return apiClient.get<ApiResponse<Testimonial[]>>("/testimonials");
  },

  /** Get all active "Why Choose Us" records */
  async getWhyChooseUs() {
    return apiClient.get<ApiResponse<WhyChooseUs[]>>("/why-choose-us");
  },
};
