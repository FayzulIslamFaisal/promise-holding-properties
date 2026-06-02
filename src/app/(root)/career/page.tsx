import { Metadata } from "next";
import CareerWrapper from "@/components/career-page/CareerWrapper";

export const metadata: Metadata = {
  title: "Careers | Promise Holding Properties",
  description: "Join the team at Promise Holding Properties. Explore our open positions, learn about our vibrant company culture, benefits, and start your real estate career in Bangladesh today.",
};

export const dynamic = "force-dynamic";

const CareerPage = () => {
  return <CareerWrapper />;
};

export default CareerPage;
