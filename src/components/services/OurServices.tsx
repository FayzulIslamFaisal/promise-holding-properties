import { OurService } from "@/types/api";
import OurServiceCard from "./OurServiceCard";
import SectionTitle from "../common/SectionTitle";
import { companyServiceService } from "@/services";

const OurServices = async () => {
  let services: OurService[] = [];
  try {
    const res = await companyServiceService.getOurServices();
    services = res.data || [];
  } catch (error) {
    console.error("Error fetching services:", error);
  }

  return (
    <section className="px-4">
      <div className="container mx-auto border-b border-primary/40 py-10 md:py-16">
        <SectionTitle
          title="Our Services"
          subtitle="Comprehensive real estate solutions tailored to your needs"
          border_b={true}
        />

        {services && services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mx-auto mt-8 md:mt-12">
            {services.map((service: OurService, index: number) => (
              <OurServiceCard
                key={service.id || index}
                service={service}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl font-semibold text-gray-700 dark:text-zinc-300">
              No services found
            </p>
            <p className="text-sm text-gray-500 dark:text-zinc-400 mt-1">
              Please check back later or contact us for more information.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurServices;
