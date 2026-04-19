import { apiClient } from "@/lib/api-client";
import type { ApiResponse, OurValue } from "@/types/api";

export const valueService = {
  /** Get all active values */
  async getOurValues() {
    return apiClient.get<ApiResponse<OurValue[]>>("/our-values");
  },
};
