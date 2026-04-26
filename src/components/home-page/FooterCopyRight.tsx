"use client";
import { useSettings } from "@/providers/SettingsProvider";

const FooterCopyRight = () => {
  const settings = useSettings();
  const currentYear = new Date().getFullYear();

  return (
    <div className="container mx-auto px-4 py-6 text-center relative z-1">
        <p className="text-center">© {currentYear} {settings?.general_settings.site_name || "Promise Assets"}. All rights reserved.</p>
    </div>
  )
}

export default FooterCopyRight
