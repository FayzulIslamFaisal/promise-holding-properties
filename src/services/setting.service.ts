import { apiClient } from "@/lib/api-client";
import type { ApiResponse, WebsiteSettings } from "@/types/api";

export const settingService = {
  /**
   * Get all website settings
   */
  async getSettings() {
    return apiClient.get<ApiResponse<WebsiteSettings>>("/settings");
  },
};
