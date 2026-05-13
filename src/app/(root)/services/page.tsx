import { Metadata } from "next";
import ServiceWrapper from "@/components/services/ServiceWrapper"

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore the comprehensive real estate services offered by Promise Assets, including development, consultancy, and management.",
};


const ServicesPage = () => {
  return (
    <ServiceWrapper />
  )
}

export default ServicesPage
