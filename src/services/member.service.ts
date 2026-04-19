import { apiClient } from "@/lib/api-client";
import type { ApiResponse, ManagementMember } from "@/types/api";

export const memberService = {
  /** Get all active management members */
  async getManagementMembers() {
    return apiClient.get<ApiResponse<ManagementMember[]>>("/managements");
  },
};
