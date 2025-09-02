import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import HeaderSection from "@/components/home-page/Header-section";
import FooterSection from "@/components/home-page/Footer-section";
import CompanyFeatures from "@/components/home-page/CompanyFeatures";
import { ThemeProvider } from "@/components/ThemeProvider";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
  weight: ['100', '200','300', '400', '500', '600', '700', '800', '900'],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          disableTransitionOnChange
          enableSystem={false}
          defaultTheme="dark"
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
        </ThemeProvider>
      </body>
    </html>
  );
}
