import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Shield,
  Home,
  Users,
  FileText,
  AlertCircle,
  CreditCard,
  Copyright,
  Settings,
  Gavel,
  Phone,
  CheckCircle,
  Building,
  Key,
  UserCheck,
  Briefcase,
  Lock,
  Eye,
} from "lucide-react";

const TermsConditions = () => {
  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      icon: Home,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Welcome to our real estate platform. These Terms and Conditions{" "}
            {"Terms"} govern your use of our website, services, and platform. By
            accessing or using our services, you acknowledge that you have read,
            understood, and agree to be bound by these Terms.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our platform connects buyers, sellers, agents, and brokers in the
            real estate market, providing comprehensive property listings,
            market insights, and professional services.
          </p>
        </div>
      ),
    },
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: CheckCircle,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            By creating an account, browsing our website, or using any of our
            services, you explicitly agree to these Terms and our Privacy
            Policy. If you do not agree with any part of these Terms, you must
            discontinue use of our platform immediately.
          </p>
          <div className="bg-real-estate-teal-light p-4 rounded-lg border-l-4 border-real-estate-teal">
            <p className="text-sm font-medium text-real-estate-navy">
              Your continued use of our services constitutes ongoing acceptance
              of any updates to these Terms.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "eligibility",
      title: "Eligibility",
      icon: UserCheck,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            To use our services, you must be at least 18 years old and legally
            capable of entering into binding contracts. You represent and
            warrant that all information you provide is accurate and current.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-real-estate-teal mt-1 flex-shrink-0" />
              Must be 18 years or older
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-real-estate-teal mt-1 flex-shrink-0" />
              Legally authorized to enter contracts
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-real-estate-teal mt-1 flex-shrink-0" />
              Provide accurate and truthful information
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "website-use",
      title: "Use of Website / Services",
      icon: Building,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Our platform is designed for legitimate real estate activities. You
            agree to use our services only for lawful purposes and in accordance
            with these Terms.
          </p>
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Permitted Uses:</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• Searching and viewing property listings</li>
              <li>• Contacting licensed agents and brokers</li>
              <li>• Scheduling property viewings</li>
              <li>• Accessing market data and reports</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "property-listings",
      title: "Property Listings Disclaimer",
      icon: Key,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Property information is provided by third-party sources including
            agents, brokers, and MLS systems. While we strive for accuracy, we
            cannot guarantee the completeness or accuracy of all listing
            information.
          </p>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-amber-800 mb-1">
                  Important Notice
                </h4>
                <p className="text-sm text-amber-700">
                  Always verify property details, pricing, and availability
                  directly with the listing agent before making any decisions or
                  commitments.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "user-responsibilities",
      title: "User Responsibilities",
      icon: Users,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            As a user of our platform, you are responsible for maintaining the
            security of your account and for all activities that occur under
            your account.
          </p>
          <div className="grid gap-3">
            <div className="flex items-start gap-3 p-3 bg-secondary rounded-lg">
              <Shield className="h-5 w-5 text-real-estate-teal flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-foreground mb-1">
                  Account Security
                </h4>
                <p className="text-sm text-muted-foreground">
                  Keep your login credentials secure and notify us immediately
                  of any unauthorized access.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-secondary rounded-lg">
              <FileText className="h-5 w-5 text-real-estate-teal flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-foreground mb-1">
                  Accurate Information
                </h4>
                <p className="text-sm text-muted-foreground">
                  Provide truthful and current information in all communications
                  and transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "broker-disclaimer",
      title: "Broker / Agent Disclaimer",
      icon: Briefcase,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Our platform connects users with licensed real estate professionals.
            We are not a real estate brokerage and do not represent buyers or
            sellers in real estate transactions.
          </p>
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">
              Professional Relationships:
            </h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• All agents and brokers are independent third parties</li>
              <li>• We do not provide real estate advice or representation</li>
              <li>
                • Direct all transaction-related questions to your chosen agent
              </li>
              <li>
                • Verify agent licensing through appropriate regulatory bodies
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "payment-booking",
      title: "Payment, Booking & Refund",
      icon: CreditCard,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Certain premium services on our platform may require payment. All
            payments are processed securely through our authorized payment
            processors.
          </p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                Payment Terms:
              </h4>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>• Payments are due upon service activation</li>
                <li>• All fees are non-refundable unless otherwise stated</li>
                <li>• Subscription services auto-renew unless cancelled</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                Refund Policy:
              </h4>
              <p className="text-muted-foreground text-sm">
                Refunds are considered on a case-by-case basis within 30 days of
                service purchase, subject to our refund policy terms.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      icon: Copyright,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            All content on our platform, including but not limited to text,
            graphics, logos, images, and software, is the property of our
            company or our licensors and is protected by intellectual property
            laws.
          </p>
          <div className="bg-real-estate-navy-light p-4 rounded-lg">
            <h4 className="font-medium text-foreground mb-2">Usage Rights:</h4>
            <p className="text-sm text-muted-foreground">
              You may use our platform for personal, non-commercial purposes
              only. Any reproduction, distribution, or commercial use requires
              explicit written permission.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "third-party",
      title: "Third-Party Services",
      icon: Settings,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Our platform may integrate with third-party services such as mapping
            providers, mortgage calculators, and market data services. We are
            not responsible for the availability, accuracy, or content of these
            services.
          </p>
          <div className="space-y-2 text-muted-foreground text-sm">
            <p>
              • Third-party services are governed by their own terms and privacy
              policies
            </p>
            <p>• We do not endorse or guarantee third-party service quality</p>
            <p>• Use of third-party services is at your own risk</p>
          </div>
        </div>
      ),
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            To the maximum extent permitted by law, our company shall not be
            liable for any indirect, incidental, special, or consequential
            damages arising from your use of our platform or services.
          </p>
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-red-800 mb-1">Disclaimer</h4>
                <p className="text-sm text-red-700">
                  Our platform is provided {"as is"} without warranties of any
                  kind. We do not guarantee uninterrupted access or error-free
                  operation.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "termination",
      title: "Termination of Use",
      icon: AlertCircle,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            We reserve the right to suspend or terminate your access to our
            platform at any time, with or without cause, and with or without
            notice.
          </p>
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">
              Grounds for Termination:
            </h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• Violation of these Terms and Conditions</li>
              <li>• Fraudulent or illegal activities</li>
              <li>• Misuse of platform features or services</li>
              <li>• Failure to pay applicable fees</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "amendments",
      title: "Amendments / Changes to Terms",
      icon: FileText,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            We may update these Terms from time to time to reflect changes in
            our services, legal requirements, or business practices. Material
            changes will be communicated through our platform or via email.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-700">
              <strong>Effective Date:</strong> Changes become effective 30 days
              after posting, unless otherwise specified. Your continued use
              constitutes acceptance of the updated Terms.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "governing-law",
      title: "Governing Law",
      icon: Gavel,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            These Terms are governed by and construed in accordance with the
            laws of the jurisdiction in which our company is incorporated,
            without regard to conflict of law principles.
          </p>
          <div className="space-y-2 text-muted-foreground text-sm">
            <p>• Any disputes will be resolved through binding arbitration</p>
            <p>
              • Jurisdiction: [Your Jurisdiction] courts have exclusive
              jurisdiction
            </p>
            <p>
              • Severability: Invalid provisions do not affect remaining terms
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "contact",
      title: "Contact Information",
      icon: Phone,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            If you have any questions about these Terms and Conditions, please
            contact us through the following channels:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">
                Legal Department
              </h4>
              <p className="text-sm text-muted-foreground">
                legal@yourrealestate.com
              </p>
              <p className="text-sm text-muted-foreground">1-800-REAL-EST</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">
                Business Address
              </h4>
              <p className="text-sm text-muted-foreground">
                123 Real Estate Plaza
                <br />
                Suite 456
                <br />
                Your City, State 12345
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];
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

      <section>
        <div className="container mx-auto px-4 py-16">
          <Card className="p-6 mb-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Table of Contents
            </h2>
            <div className="grid gap-2 md:grid-cols-2">
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
                >
                  <span className="text-sm font-medium text-real-estate-teal w-6">
                    {index + 1}.
                  </span>
                  <section.icon className="h-4 w-4 text-real-estate-teal flex-shrink-0" />
                  <span className="text-sm font-medium">{section.title}</span>
                </a>
              ))}
            </div>
          </Card>

          <div className="space-y-6">
            {sections.map((section, index) => (
              <Card
                key={section.id}
                id={section.id}
                className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-real-estate-teal-light rounded-full">
                      <section.icon className="h-6 w-6 text-real-estate-teal" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-real-estate-teal">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-2xl font-bold text-foreground">
                        {section.title}
                      </h2>
                    </div>
                    <Separator className="mb-4" />
                    {section.content}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsConditions;
