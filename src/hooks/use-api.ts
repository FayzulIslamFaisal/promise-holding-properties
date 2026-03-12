"use client";

// =============================================================================
// useApi — Generic data-fetching hook for client components
// =============================================================================
// Usage:
//   const { data, error, isLoading, refetch } = useApi(() => contentService.getTestimonials());
// =============================================================================

import { useState, useEffect, useCallback, useRef } from "react";

interface UseApiReturn<T> {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
  refetch: () => Promise<void>;
}

export function useApi<T>(
  fetcher: () => Promise<T>,
  /** Set to false to defer fetching until manually triggered via refetch() */
  immediate = true
): UseApiReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(immediate);
  const fetcherRef = useRef(fetcher);
  fetcherRef.current = fetcher;

  const refetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await fetcherRef.current();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (immediate) {
      refetch();
    }
  }, [immediate, refetch]);

  return { data, error, isLoading, refetch };
}
