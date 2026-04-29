import { apiClient } from "@/lib/api-client";
import type { ApiResponse, Project, ProjectDetail, ConnectExploreRequest } from "@/types/api";

export const projectService = {
  async getProjects(product_status?: string) {
    const url = product_status ? `/projects?product_status=${product_status}` : "/projects";
    return apiClient.get<ApiResponse<Project[]>>(url);
  },

  /** Get project details by slug */
  async getProjectDetails(slug: string) {
    return apiClient.get<ApiResponse<ProjectDetail>>(`/project-details/${slug}`);
  },

  /** Submit connect & explore form */
  async submitConnectExplore(data: ConnectExploreRequest) {
    return apiClient.post<ApiResponse<null>>("/connect-explore", data);
  },

  /** Submit landowner info */
  async submitLandownerInfo(data: Record<string, any>) {
    return apiClient.post<ApiResponse<any>>("/landowner-submit", data);
  },

  /** Subscribe to newsletter */
  async subscribeNewsletter(data: { email: string }) {
    return apiClient.post<ApiResponse<any>>("/newsletter-subscribe", data);
  },
};
