import { apiClient } from "@/lib/api-client";
import type {
  ApiResponse,
  AvailableSlotsResponse,
  BookSiteVisitRequest,
  BookSiteVisitResponse,
  Project,
} from "@/types/api";

const SITE_VISIT_API_BASE =
  process.env.NEXT_PUBLIC_SITE_VISIT_API_URL || "https://dev.promiseassets.com/api";

export const siteVisitService = {
  /**
   * Get available time slots for a project for next N days
   * GET /api/site-visits/available-slots
   */
  async getAvailableSlots(projectId: number, visitDate?: string, days: number = 10) {
    const params = new URLSearchParams({
      project_id: projectId.toString(),
      days: days.toString(),
    });
    if (visitDate) {
      params.append("visit_date", visitDate);
    }

    const response = await apiClient.get<AvailableSlotsResponse>(
      `/site-visits/available-slots?${params.toString()}`,
      { baseUrl: SITE_VISIT_API_BASE }
    );

    const slots = response?.available_slots || response?.data || [];
    return {
      ...response,
      slots,
    };
  },

  /**
   * Book a site visit
   * POST /api/site-visits/book
   */
  async bookSiteVisit(data: BookSiteVisitRequest) {
    return apiClient.post<BookSiteVisitResponse>("/site-visits/book", data, {
      baseUrl: SITE_VISIT_API_BASE,
    });
  },

  /**
   * Fetch projects list for project dropdown
   * GET /api/projects
   */
  async getProjects() {
    return apiClient.get<ApiResponse<Project[]>>("/projects", {
      baseUrl: SITE_VISIT_API_BASE,
    });
  },
};
