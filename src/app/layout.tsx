import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import HeaderSection from "@/components/home-page/Header-section";
import FooterSection from "@/components/home-page/Footer-section";
import CompanyFeatures from "@/components/home-page/CompanyFeatures";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "@/components/providers/SessionProvider";
import { settingService } from "@/services";
import { SettingsProvider } from "@/providers/SettingsProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export async function generateMetadata(): Promise<Metadata> {
  try {
    const response = await settingService.getSettings();
    const settings = response.data;
    
    return {
      title: {
        default: settings.general_settings.site_name || "Promise Assets",
        template: `%s | ${settings.general_settings.site_name || "Promise Assets"}`,
      },
      description: settings.seo_settings.meta_description || "Crafting Your Dream Home",
      keywords: settings.seo_settings.meta_keywords || "",
      icons: {
        icon: settings.logo_settings.site_favicon || "/favicon.ico",
      },
    };
  } catch (error) {
    return {
      title: "Promise Assets",
      description: "Crafting Your Dream Home",
    };
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let settings = null;
  try {
    const response = await settingService.getSettings();
    settings = response.data;
  } catch (error) {
    console.error("Failed to fetch settings:", error);
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        <SessionProvider>
          <SettingsProvider settings={settings}>
            <ThemeProvider
              attribute="class"
              disableTransitionOnChange
              enableSystem={false}
              defaultTheme="dark"
            >
              <HeaderSection />
              <main>
                {children}
              </main>
              <footer>
                <>
                  <CompanyFeatures />
                  <FooterSection />
                </>
              </footer>
              <Toaster />
            </ThemeProvider>
          </SettingsProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
