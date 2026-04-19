import { apiClient } from "@/lib/api-client";
import type { ApiResponse, Project, ProjectDetail, ConnectExploreRequest } from "@/types/api";

export const projectService = {
  /** Get all active projects */
  async getProjects() {
    return apiClient.get<ApiResponse<Project[]>>("/projects");
  },

  /** Get project details by slug */
  async getProjectDetails(slug: string) {
    return apiClient.get<ApiResponse<ProjectDetail>>(`/project-details/${slug}`);
  },

  /** Submit connect & explore form */
  async submitConnectExplore(data: ConnectExploreRequest) {
    return apiClient.post<ApiResponse<null>>("/connect-explore", data);
  },
};
