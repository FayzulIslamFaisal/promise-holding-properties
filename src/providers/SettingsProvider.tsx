"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { WebsiteSettings } from "@/types/api";

interface SettingsContextType {
  settings: WebsiteSettings | null;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ settings: WebsiteSettings | null; children: ReactNode }> = ({ settings, children }) => {
  return (
    <SettingsContext.Provider value={{ settings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context.settings;
};
