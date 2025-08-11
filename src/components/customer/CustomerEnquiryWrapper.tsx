import dynamic from 'next/dynamic';
import CustomerBanner from "./CustomerBanner"
const CustomerForm = dynamic(() => import('./CustomerForm'));

const CustomerEnquiryWrapper = () => {
  return (
    <>
      <CustomerBanner />
      <CustomerForm />
    </>
  )
}

export default CustomerEnquiryWrapper
