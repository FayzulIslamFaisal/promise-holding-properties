import { OurService } from "@/types/api";
import SectionTitle from "../common/SectionTitle";
import { companyServiceService } from "@/services";
import OurServiceCard from "@/components/services/OurServiceCard";

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
      <div className="container mx-auto sectionSpaceBorder">
        <SectionTitle
          title="Our Services"
          border_b={true}
          subtitle="Comprehensive real estate solutions tailored to your needs"
        />

        {services && services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto mt-8 md:mt-12">
            {services.map((service, index) => (
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
