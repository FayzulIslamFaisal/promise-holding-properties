import ProjectContactForm from "./ProjectContactForm";
import PropertyAmenities from "./PropertyAmenities";
import PropertyCalculator from "./PropertyCalculator";
import PropertyDescription from "./PropertyDescription";
import PropertyFeatures from "./PropertyFeatures";
import PropertyFloorPlans from "./PropertyFloorPlans";

const ProjectInformation = () => {
  return (
    <div className="bg-[var(--custom-bg-white)] py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl text-[var(--custom-text-primary)] sm:text-4xl">
            Project One Details
          </h1>
          <p className="mt-4 text-lg text-[var(--custom-text-primary)]/75 ">
            Explore all the features and specifications of this property
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Left Column - Property Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <PropertyDescription />
            </div>
            <div className="rounded-lg shadow-lg overflow-hidden">
              <PropertyFeatures />
            </div>
              <PropertyAmenities />
              <PropertyFloorPlans />
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-1">
              <div className="">
                <ProjectContactForm />
                <PropertyCalculator/>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInformation;