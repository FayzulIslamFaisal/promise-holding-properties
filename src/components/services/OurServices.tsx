import { Briefcase, Home, TrendingUp, Users } from "lucide-react";
import OurServiceCard from "./OurServiceCard";
import SectionTitle from "../common/SectionTitle";

interface Service {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  tags: string[];
}

const services: Service[] = [
  {
    id: 1,
    icon: Home,
    title: "Property Sales",
    description:
      "Expert guidance through every step of buying or selling your luxury property with personalized service.",
    tags: [
      "Professional tenant screening",
      "Automated rent collection",
      "Maintenance coordination",
      "Property inspections",
    ],
  },
  {
    id: 2,
    icon: TrendingUp,
    title: "Investment Advisory",
    description:
      "Strategic real estate investment consulting to maximize your portfolio returns and long-term wealth.",
    tags: ["Portfolio analysis", "Risk management", "Market insights", "Long-term planning"],
  },
  {
    id: 3,
    icon: Users,
    title: "Property Management",
    description:
      "Comprehensive property management services ensuring your investments are maintained to the highest standards.",
    tags: ["Tenant communication", "Rent collection", "Maintenance scheduling", "Financial reporting"],
  },
  {
    id: 4,
    icon: Briefcase,
    title: "Real Estate Consulting",
    description:
      "Tailored advice to help clients navigate complex real estate markets and make informed decisions.",
    tags: ["Market research", "Investment strategies", "Risk assessment", "Client support"],
  },
];

const OurServices = () => {
  return (
    <section className="px-4">
      <div className="container mx-auto border-b border-[var(--custom-bg-accent)]/40 py-10 md:py-12">
        <SectionTitle title="Our Services" subtitle="Comprehensive real estate solutions tailored to your needs" border_b={true} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
          {services.map((service) => (
            <OurServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
