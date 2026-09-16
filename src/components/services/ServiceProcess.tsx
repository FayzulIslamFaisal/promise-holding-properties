import { companyServiceService } from "@/services";
import { HowItWorks } from "@/types/api";
import ProcessStepsClient from "./ProcessStepsClient";

const fallbackSteps = [
  {
    id: 1,
    number: "01",
    title: "Application & Selection",
    description: "Select your preferred project and unit share",
  },
  {
    id: 2,
    number: "02",
    title: "Booking & Confirmation",
    description: "Lock in allotment with initial down payment",
  },
  {
    id: 3,
    number: "03",
    title: "Joint Management",
    description: "Formation of investor oversight committee",
  },
  {
    id: 4,
    number: "04",
    title: "Phase Construction",
    description: "Supervised structural execution & finishes",
  },
  {
    id: 5,
    number: "05",
    title: "Inspection & Handover",
    description: "Final quality checks and legal key handover",
  },
];

const ServiceProcess = async () => {
  let stepsRes: HowItWorks[] = [];
  try {
    const res = await companyServiceService.getHowItWorks();
    stepsRes = res.data || [];
  } catch (error) {
    console.error("Error fetching how it works:", error);
  }

  const steps = stepsRes.length > 0 ? stepsRes : fallbackSteps;

  return (
    <section className="px-4">
      <div className="container mx-auto sectionSpaceBorder">
        <ProcessStepsClient steps={steps} />
      </div>
    </section>
  );
};

export default ServiceProcess;
