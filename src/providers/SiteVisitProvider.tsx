"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import BookSiteVisitModal from "@/components/site-visit/BookSiteVisitModal";

interface SiteVisitContextType {
  isModalOpen: boolean;
  openSiteVisitModal: (projectId?: number) => void;
  closeSiteVisitModal: () => void;
}

const SiteVisitContext = createContext<SiteVisitContextType | undefined>(undefined);

export const SiteVisitProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<number | undefined>(undefined);

  const openSiteVisitModal = (projectId?: number) => {
    if (projectId !== undefined) {
      setSelectedProjectId(projectId);
    }
    setIsOpen(true);
  };

  const closeSiteVisitModal = () => {
    setIsOpen(false);
  };

  return (
    <SiteVisitContext.Provider
      value={{
        isModalOpen: isOpen,
        openSiteVisitModal,
        closeSiteVisitModal,
      }}
    >
      {children}
      <BookSiteVisitModal
        isOpen={isOpen}
        onClose={closeSiteVisitModal}
        initialProjectId={selectedProjectId}
      />
    </SiteVisitContext.Provider>
  );
};

export const useSiteVisitModal = () => {
  const context = useContext(SiteVisitContext);
  if (context === undefined) {
    throw new Error("useSiteVisitModal must be used within a SiteVisitProvider");
  }
  return context;
};
