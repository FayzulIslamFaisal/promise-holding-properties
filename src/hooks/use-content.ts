"use client";

// =============================================================================
// Content Hooks — Convenience hooks for fetching public content
// =============================================================================
// Usage:
//   const { data, isLoading } = useHeaderBanners();
//   const banners = data?.data ?? [];
// =============================================================================

import { contentService } from "@/services/content.service";
import { useApi } from "./use-api";

export function useHeaderBanners() {
  return useApi(() => contentService.getHeaderBanners());
}

export function useManagementMembers() {
  return useApi(() => contentService.getManagementMembers());
}

export function useOurServices() {
  return useApi(() => contentService.getOurServices());
}

export function useOurValues() {
  return useApi(() => contentService.getOurValues());
}

export function useTestimonials() {
  return useApi(() => contentService.getTestimonials());
}

export function useWhyChooseUs() {
  return useApi(() => contentService.getWhyChooseUs());
}
