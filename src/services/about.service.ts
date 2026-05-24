import { apiClient } from "@/lib/api-client";
import type { ApiResponse, AboutUs } from "@/types/api";

export const aboutService = {
  /** Get About Us information */
  async getAboutUs() {
    return apiClient.get<ApiResponse<AboutUs>>("/about-us");
  },
};
