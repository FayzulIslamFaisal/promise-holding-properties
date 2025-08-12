import dynamic from 'next/dynamic';
import CustomerBanner from "./CustomerBanner"
import CustomerHighLights from './CustomerHighLights';
import CustomerFaq from './CustomerFaq';
const CustomerForm = dynamic(() => import('./CustomerForm'));
const CustomerTestimonial = dynamic(() => import('./CustomerTestimonial'));

const CustomerEnquiryWrapper = () => {
  return (
    <>
      <CustomerBanner />
      <CustomerHighLights />
      <CustomerForm />
      <CustomerFaq />
      <CustomerTestimonial autoplay={true} />
    </>
  )
}

export default CustomerEnquiryWrapper
