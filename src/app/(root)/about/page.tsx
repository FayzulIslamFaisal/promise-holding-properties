import { Metadata } from "next";
import AboutWrapper from "@/components/about-page/AboutWrapper"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Promise Assets, our mission, vision, and commitment to excellence in real estate development.",
};


export const dynamic = "force-dynamic";

const AboutPage = () => {
  return (
    <AboutWrapper />
  )
}

export default AboutPage
