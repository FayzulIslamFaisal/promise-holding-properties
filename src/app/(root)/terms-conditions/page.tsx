
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Review the Terms and Conditions of Promise Assets for using our services and website.",
};

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import SecondaryBanner from "@/components/common/SecondaryBanner";


import { Building2, Shield, Users, FileText, CreditCard, Scale, Phone, AlertTriangle } from "lucide-react"

const termsData = [
    {
      id: "introduction",
      title: "Introduction",
      icon: <FileText className="h-5 w-5" />,
      content:
        "Welcome to our real estate platform. These Terms and Conditions govern your use of our website and services. By accessing or using our platform, you acknowledge that you have read, understood, and agree to be bound by these terms.",
    },
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: <Shield className="h-5 w-5" />,
      content:
        "By using our website, creating an account, or engaging with our services, you expressly agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.",
    },
    {
      id: "eligibility",
      title: "Eligibility",
      icon: <Users className="h-5 w-5" />,
      content:
        "You must be at least 18 years old and legally capable of entering into binding contracts to use our services. By using our platform, you represent and warrant that you meet these eligibility requirements and that all information you provide is accurate and complete.",
    },
    {
      id: "website-use",
      title: "Use of Website / Services",
      icon: <Building2 className="h-5 w-5" />,
      content:
        "Our platform is designed to facilitate real estate transactions and provide property-related information. You may use our services for lawful purposes only. You agree not to use the platform for any fraudulent, abusive, or illegal activities, including but not limited to unauthorized data scraping or system interference.",
    },
    {
      id: "property-listings",
      title: "Property Listings Disclaimer",
      icon: <AlertTriangle className="h-5 w-5" />,
      content:
        "Property listings on our platform are provided by third-party agents, brokers, and property owners. While we strive to ensure accuracy, we do not guarantee the completeness, accuracy, or timeliness of any listing information. All property details, prices, and availability are subject to change without notice.",
    },
    {
      id: "user-responsibilities",
      title: "User Responsibilities",
      icon: <Users className="h-5 w-5" />,
      content:
        "As a user, you are responsible for maintaining the confidentiality of your account credentials, providing accurate information, and complying with all applicable laws. You must not share your account with others, post false or misleading information, or engage in any activity that could harm our platform or other users.",
    },
    {
      id: "broker-disclaimer",
      title: "Broker / Agent Disclaimer",
      icon: <Building2 className="h-5 w-5" />,
      content:
        "We are not a licensed real estate broker or agent. We provide a platform that connects users with licensed professionals. All real estate transactions must be conducted through licensed brokers or agents in accordance with local and state regulations. We do not provide real estate advice or representation.",
    },
    {
      id: "payment-booking",
      title: "Payment, Booking & Refund",
      icon: <CreditCard className="h-5 w-5" />,
      content:
        "Payment terms vary by service and will be clearly disclosed before any transaction. Booking fees, if applicable, are non-refundable unless otherwise specified. Refund policies for specific services will be outlined in the relevant service agreement. All payments are processed securely through our approved payment processors.",
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      icon: <Shield className="h-5 w-5" />,
      content:
        "All content on our platform, including but not limited to text, graphics, logos, images, and software, is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without explicit written permission. User-generated content remains the property of the respective users.",
    },
    {
      id: "third-party-services",
      title: "Third-Party Services",
      icon: <Building2 className="h-5 w-5" />,
      content:
        "Our platform may integrate with third-party services such as mapping tools, payment processors, and property databases. We are not responsible for the availability, accuracy, or performance of these third-party services. Your use of such services is subject to their respective terms and conditions.",
    },
    {
      id: "limitation-liability",
      title: "Limitation of Liability",
      icon: <Scale className="h-5 w-5" />,
      content:
        "To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our platform. Our total liability shall not exceed the amount paid by you for our services in the twelve months preceding the claim.",
    },
    {
      id: "termination",
      title: "Termination of Use",
      icon: <AlertTriangle className="h-5 w-5" />,
      content:
        "We reserve the right to terminate or suspend your access to our platform at any time, with or without cause, and with or without notice. Upon termination, your right to use our services will cease immediately, and you must discontinue all use of our platform.",
    },
    {
      id: "amendments",
      title: "Amendments / Changes to Terms",
      icon: <FileText className="h-5 w-5" />,
      content:
        "We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our platform after any changes constitutes acceptance of the new terms. We recommend reviewing these terms periodically.",
    },
    {
      id: "governing-law",
      title: "Governing Law",
      icon: <Scale className="h-5 w-5" />,
      content:
        "These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which our company is incorporated. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in that jurisdiction.",
    },
    {
      id: "contact",
      title: "Contact Information",
      icon: <Phone className="h-5 w-5" />,
      content:
        "If you have any questions about these Terms and Conditions, please contact us at legal@yourrealestate.com or call us at (555) 123-4567. Our legal team is available Monday through Friday, 9:00 AM to 5:00 PM EST.",
    },
  ]

const TermsConditions = () => {
 
  return (
    <>
      <SecondaryBanner 
        title="Terms & Conditions"
        subtitle="Legal Governance & Service Agreement"
        badge="SERVICE AGREEMENT & COMPLIANCE"
        imageSrc="/assets/images/banners/terms-banner-v2.jpg"
      />

      <section className="px-4 ">
        <div className="container mx-auto py-10 md:py-12 border-b border-primary/20">
          <div className="grid gap-6">
            {termsData.map((section, index) => (
              <Card key={section.id} className="gap-2 hover:scale-100" variant={"hoverEffect"}>
                <CardHeader className="pb-0">
                  <CardTitle className="flex items-center text-xl gap-4">
                    <div className="p-3 rounded-lg text-white bg-primary">{section.icon}</div>
                    <span className="font-semibold text-lg md:text-2xl border-b border-primary/40 pb-1">
                      {index + 1}. {section.title}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="darkLight-text-color  leading-relaxed">{section.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <Card className="mt-8 hover:scale-100 " variant={"hoverEffect"}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-10 w-10 text-white bg-primary rounded-lg p-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary text-lg md:text-2xl mb-2">Important Notice</h3>
                  <p className="text-sm darkLight-text-color  leading-relaxed">
                    These terms and conditions constitute a legally binding agreement. If you have any questions or
                    concerns about these terms, please consult with a legal professional or contact our legal department
                    before using our services.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default TermsConditions;
