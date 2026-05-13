import { Metadata } from "next";
import ServiceWrapper from "@/components/services/ServiceWrapper"

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore the comprehensive real estate services offered by Promise Assets, including development, consultancy, and management.",
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const ServicesPage = () => {
  return (
    <ServiceWrapper />
  )
}

export default ServicesPage
