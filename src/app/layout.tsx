import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";
import HeaderSection from "@/components/home-page/Header-section";
import FooterSection from "@/components/home-page/Footer-section";
import CompanyFeatures from "@/components/home-page/CompanyFeatures";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
  weight: ['100', '200','300', '400', '500', '600', '700', '800', '900'],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  display: 'swap',
  style: ['normal'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: "Promise Holding",
  description: " A platform for managing promises and commitments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      
      <body
        className={`${inter.variable} ${anton.variable} antialiased bg-slate-900`}
      >
        <header>
          <HeaderSection />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <>
          <CompanyFeatures />
          <FooterSection />
          </>
        </footer>

      </body>
    </html>
  );
}
