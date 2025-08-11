import dynamic from 'next/dynamic';
import CustomerBanner from "./CustomerBanner"
import CustomerHighLights from './CustomerHighLights';
const CustomerForm = dynamic(() => import('./CustomerForm'));

const CustomerEnquiryWrapper = () => {
  return (
    <>
      <CustomerBanner />
      <CustomerHighLights />
      <CustomerForm />
    </>
  )
}

export default CustomerEnquiryWrapper
