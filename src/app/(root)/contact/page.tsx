import { Metadata } from "next";
import ContactWrapper from "@/components/contact/ContactWrapper"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Promise Holding Properties for any inquiries, project details, or partnership opportunities.",
};



const ContactPage = () => {
  return (
    <ContactWrapper />
  )
}

export default ContactPage
