import { apiClient } from "@/lib/api-client";
import type { ApiResponse, WhyChooseUs } from "@/types/api";

export const metricService = {
  /** Get all active "Why Choose Us" records */
  async getWhyChooseUs() {
    return apiClient.get<ApiResponse<WhyChooseUs[]>>("/why-choose-us");
  },
};
