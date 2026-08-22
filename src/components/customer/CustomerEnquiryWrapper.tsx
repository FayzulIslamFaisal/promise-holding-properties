import dynamic from 'next/dynamic';
import SecondaryBanner from "@/components/common/SecondaryBanner"
import CustomerHighLights from './CustomerHighLights';
import CustomerFaq from './CustomerFaq';

const CustomerForm = dynamic(() => import('./CustomerForm'));
const ProjectTestimonial = dynamic(() => import('../home-page/ProjectTestimonial'));

const CustomerEnquiryWrapper = () => {
  return (
    <>
      <SecondaryBanner 
        title="Customer Support"
        subtitle="We are here for you"
        badge="PERSONALIZED CLIENT ADVISORY"
        imageSrc="/assets/images/banners/customer-enquiry-banner.jpg"
      />
      <CustomerHighLights />
      <CustomerForm />
      <CustomerFaq />
      <ProjectTestimonial autoplay={true} />
    </>
  )
}

export default CustomerEnquiryWrapper
