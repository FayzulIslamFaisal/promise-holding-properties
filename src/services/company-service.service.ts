import { apiClient } from "@/lib/api-client";
import type { ApiResponse, OurService, HowItWorks, FaqItem, ChooseService } from "@/types/api";

export const companyServiceService = {
  /** Get all active services */
  async getOurServices() {
    return apiClient.get<ApiResponse<OurService[]>>("/our-services", { cache: "no-store" });
  },

  /** Get How It Works steps */
  async getHowItWorks() {
    return apiClient.get<ApiResponse<HowItWorks[]>>("/how-it-works", { cache: "no-store" });
  },

  /** Get all active FAQs */
  async getFaqs() {
    return apiClient.get<ApiResponse<FaqItem[]>>("/faqs", { cache: "no-store" });
  },

  /** Get Choose Services */
  async getChooseServices() {
    return apiClient.get<ApiResponse<ChooseService[]>>("/choose-services", { cache: "no-store" });
  },
};
