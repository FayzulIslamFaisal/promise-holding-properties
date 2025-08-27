
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Building2, Shield, Users, FileText, CreditCard, Scale, Phone, AlertTriangle, Lock, Eye } from "lucide-react"

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
      <section>
        <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/images/projects/project10.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-[var(--custom-bg-primary)]/20 dark:bg-[var(--custom-bg-accent)]/20 "></div>
          <div className="absolute inset-0 privacy-gradient animate-gradient-shift opacity-20"></div>
          <div className="absolute top-20 left-20">
            <Shield className="w-16 h-16 text-[var(--custom-text-secondary)] animate-float" />
          </div>
          <div className="absolute top-32 right-32">
            <Lock className="w-12 h-12 text-[var(--custom-text-secondary)] animate-float animation-delay-1000" />
          </div>
          <div className="absolute bottom-40 left-32">
            <Eye className="w-14 h-14 text-[var(--custom-text-secondary)] animate-float animation-delay-3000" />
          </div>
          <div className="absolute bottom-20 right-20">
            <FileText className="w-10 h-10 text-[var(--custom-text-secondary)] animate-float animation-delay-1000" />
          </div>
          <div className="relative z-10 text-center max-w-full sm:max-w-4xl mx-auto px-6">
            <div className="glass-morphism rounded-3xl p-8 md:p-12 border border-[var(--custom-text-white)]/20">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-[var(--custom-text-white)]">
                Terms & Conditions
              </h1>
              <p className="text-lg md:text-xl text-[var(--custom-text-white)]/80 mb-6 leading-relaxed">
                Professional real estate services governed by clear,
                comprehensive terms and conditions.
              </p>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-[var(--custom-text-white)]/80">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[var(--custom-text-white)]" />
                  <span>Last Updated: January 15, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[var(--custom-text-white)]" />
                  <span>Effective: January 15, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 ">
        <div className="container mx-auto py-10 md:py-12 border-b border-[var(--custom-bg-accent)]/20">
          <div className="grid gap-6">
            {termsData.map((section, index) => (
              <Card key={section.id} className="gap-2 hover:scale-100" variant={"hoverEffect"}>
                <CardHeader className="pb-0">
                  <CardTitle className="flex items-center text-xl gap-4">
                    <div className="p-3 rounded-lg text-[var(--custom-text-white)] bg-[var(--custom-bg-accent)]">{section.icon}</div>
                    <span className="font-semibold text-lg md:text-2xl border-b border-[var(--custom-text-secondary)]/40 pb-1">
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
                <AlertTriangle className="h-10 w-10 text-[var(--custom-text-white)] bg-[var(--custom-bg-accent)] rounded-lg p-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[var(--custom-text-secondary)] text-lg md:text-2xl mb-2">Important Notice</h3>
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
