import { apiClient } from "@/lib/api-client";
import type { ApiResponse, HeaderBanner } from "@/types/api";

export const bannerService = {
  /** Get all active header banners */
  async getHeaderBanners() {
    return apiClient.get<ApiResponse<HeaderBanner[]>>("/header-banners");
  },
};
