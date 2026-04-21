import dynamic from 'next/dynamic';
import PageBanner from "@/components/common/PageBanner"
import CustomerHighLights from './CustomerHighLights';
import CustomerFaq from './CustomerFaq';

const CustomerForm = dynamic(() => import('./CustomerForm'));
const ProjectTestimonial = dynamic(() => import('../home-page/ProjectTestimonial'));

const CustomerEnquiryWrapper = () => {
  return (
    <>
      <PageBanner 
        title="Customer Enquiry"
        subtitle="Bridging Dreams with Reality"
        description="Connect with our exceptional team of real estate professionals who deliver unparalleled service and expertise in luxury property transactions."
        imageSrc="/assets/images/contact/banner.jpg"
      />
      <CustomerHighLights />
      <CustomerForm />
      <CustomerFaq />
      <ProjectTestimonial autoplay={true} />
    </>
  )
}

export default CustomerEnquiryWrapper
