import { apiClient } from "@/lib/api-client";
import type { ApiResponse, PaginatedBlogs, BlogSearchParams, Blog } from "@/types/api";

export const blogService = {
  /**
   * Get all blogs with pagination
   * @param params - Search and pagination parameters
   */
  async getBlogs(params?: BlogSearchParams) {
    const query = new URLSearchParams();
    
    if (params?.search) {
      query.append("search", params.search);
    }
    
    if (params?.per_page) {
      query.append("per_page", params.per_page.toString());
    }
    
    if (params?.page) {
      query.append("page", params.page.toString());
    }

    const queryString = query.toString() ? `?${query.toString()}` : "";
    return apiClient.get<ApiResponse<PaginatedBlogs>>(`/blogs${queryString}`);
  },

  /**
   * Get a single blog by its slug
   * @param slug - The blog slug
   */
  async getBlogBySlug(slug: string) {
    return apiClient.get<ApiResponse<Blog>>(`/blog-details/${slug}`);
  },
};
