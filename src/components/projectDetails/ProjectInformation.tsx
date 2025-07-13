import ProjectContactForm from "./ProjectContactForm";
// import PropertyAmenities from "./PropertyAmenities";
import PropertyCalculator from "./PropertyCalculator";
import PropertyFeatures from "./PropertyFeatures";
import PropertyFloorPlans from "./PropertyFloorPlans";


const ProjectInformation = () => {
  return (
    <div className="bg-[var(--custom-bg-white)] py-12">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Left Column - Property Details */}
          <div className="lg:col-span-2">
              <PropertyFloorPlans/>
              <div className="pt-12">
                <PropertyFeatures buildingPage={true} />
              </div>
              {/* <PropertyAmenities /> */}
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