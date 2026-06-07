import { apiClient } from "@/lib/api-client";
import type { ApiResponse, Project, ProjectDetail, ConnectExploreRequest, ConnectExploreResponse, NewsletterResponse, ProjectPlotsData, PlotDetailsData } from "@/types/api";

export const projectService = {
  async getProjects(product_status?: string) {
    const url = product_status ? `/projects?product_status=${product_status}` : "/projects";
    return apiClient.get<ApiResponse<Project[]>>(url);
  },

  /** Get project details by slug */
  async getProjectDetails(slug: string) {
    return apiClient.get<ApiResponse<ProjectDetail>>(`/project-details/${slug}`);
  },

  /** Get project plots by project slug */
  async getProjectPlots(slug: string) {
    return apiClient.get<ApiResponse<ProjectPlotsData>>(`/project-plots/${slug}`);
  },

  /** Get plot details by slug */
  async getPlotDetails(slug: string) {
    return apiClient.get<ApiResponse<PlotDetailsData>>(`/plot-details/${slug}`);
  },

  /** Submit connect & explore form */
  async submitConnectExplore(data: ConnectExploreRequest) {
    return apiClient.post<ApiResponse<ConnectExploreResponse>>("/connect-explore", data);
  },

  /** Submit landowner info */
  async submitLandownerInfo(data: Record<string, unknown>) {
    return apiClient.post<ApiResponse<null>>("/landowner-submit", data);
  },

  /** Subscribe to newsletter */
  async subscribeNewsletter(data: { email: string }) {
    return apiClient.post<NewsletterResponse>("/newsletter-subscribe", data);
  },
};
