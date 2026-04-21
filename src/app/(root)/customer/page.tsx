import { Metadata } from "next";
import CustomerEnquiryWrapper from '@/components/customer/CustomerEnquiryWrapper'

export const metadata: Metadata = {
  title: "Customer Enquiry",
  description: "Send us your property inquiries and our team will get back to you with the best options.",
};

import React from 'react'

const CustomerEnquiryPage = () => {
  return (
    <CustomerEnquiryWrapper />
  )
}

export default CustomerEnquiryPage
