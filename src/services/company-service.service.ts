import { apiClient } from "@/lib/api-client";
import type { ApiResponse, OurService } from "@/types/api";

export const companyServiceService = {
  /** Get all active services */
  async getOurServices() {
    return apiClient.get<ApiResponse<OurService[]>>("/our-services");
  },
};
