"use client";
import { Shield, Lock, Eye, FileText,Users, Mail, MailCheck, MapPinPlus  } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link';
interface Section {
  id: string;
  title: string;
}   
const sections: Section[] = [
    { id: 'info', title: 'Information We Collect' },
    { id: 'use', title: 'How We Use Your Data' },
    { id: 'sharing', title: 'Data Sharing & Disclosure' },
    { id: 'rights', title: 'Your Rights & Choices' },
    { id: 'security', title: 'Data Security' },
    { id: 'contact', title: 'Contact Information' },
  ];

const PrivacyPolicyPage = () => {
     // Handle scroll to section
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
    
  return (
    <>

    <section>
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/projects/project11.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-[var(--custom-bg-primary)]/20 dark:bg-[var(--custom-bg-accent)]/20 "></div>
        <div className="absolute inset-0 privacy-gradient animate-gradient-shift opacity-20"></div>
        <div className="absolute top-20 left-20">
          <Shield className="w-16 h-16 text-[var(--custom-text-white)]/50 animate-float" />
        </div>
        <div className="absolute top-32 right-32">
          <Lock className="w-12 h-12 text-[var(--custom-text-white)]/40 animate-float animation-delay-1000" />
        </div>
        <div className="absolute bottom-40 left-32">
          <Eye className="w-14 h-14 text-[var(--custom-text-white)]/35 animate-float animation-delay-3000" />
        </div>
        <div className="absolute bottom-20 right-20">
          <FileText className="w-10 h-10 text-[var(--custom-text-white)]/50 animate-float animation-delay-1000" />
        </div>
        <div className="relative z-10 text-center max-w-full sm:max-w-4xl mx-auto px-6">
          <div className="glass-morphism rounded-3xl p-8 md:p-12 border border-[var(--custom-text-white)]/20">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-[var(--custom-text-white)]">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-[var(--custom-text-white)]/80 mb-6 leading-relaxed">
              Your privacy is our priority. Learn how we protect and handle your personal information.
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
      <div className="container mx-auto md:py-14 py-10 border-b border-[var(--custom-bg-accent)]/40 ">
        <Card className="hover:scale-100 group py-0 mb-8" variant={"hoverEffect"}>
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <Eye className="h-10 w-10 text-[var(--custom-text-secondary)] mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4 dark:text-[var(--custom-text-secondary)] text-[var(--custom-text-primary)]">
                  Our Commitment to Your Privacy
                </h2>
                <p className="text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] leading-relaxed text-lg">
                  We believe privacy is a fundamental right. This Privacy Policy
                  describes how we collect, use, store, and share your
                  information when you use our services. We{"'"}re committed to
                  being transparent about our practices and giving you control
                  over your data.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:scale-100 group py-0 mb-8" variant={"hoverEffect"}>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 dark:text-[var(--custom-text-secondary)] text-[var(--custom-text-primary)]">
              Quick Navigation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {sections.map((item, index) => (
                <Button
                  key={item.id}
                  variant="default"
                  className="justify-center cursor-pointer h-auto p-3 text-center"
                  onClick={() => handleScroll(item.id)}
                >
                  <span className="font-medium mr-2">
                    {index + 1}.
                  </span>
                  {item.title}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="hover:scale-100 group py-0 mb-8" variant={"hoverEffect"} id="info">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <FileText className="h-10 w-10 text-[var(--custom-text-white)] bg-[var(--custom-bg-accent)] rounded-md p-1 mt-1 flex-shrink-0" />
              <h2 className="text-2xl font-bold dark:text-[var(--custom-text-secondary)] text-[var(--custom-text-primary)]">
                1. Information We Collect
              </h2>
            </div>
            <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.</p>
            
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
              <div className="highlight-box p-4 rounded-lg transition-all duration-300 hover:shadow-lg">
                <h4 className="font-bold text-base text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] mb-2">Service Delivery</h4>
                <p className="text-sm text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]">
                   We collect information to provide better services to all our users. The types of information we collect depend on how you use our services.
                </p>
              </div>

              <div className="highlight-box p-4 rounded-lg transition-all duration-300 hover:shadow-lg">
                <h4 className="font-bold text-base text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] mb-2">Communication</h4>
                <p className="text-sm text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]">
                  We collect information about how you interact with our services, including the pages you visit, the features you use, and the time spent on our platform.
                </p>
              </div>
              <div className="highlight-box p-4 rounded-lg transition-all duration-300 hover:shadow-lg">
                <h4 className="font-bold text-base text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] mb-2">Usage Data</h4>
                <p className="text-sm text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]">
                 We collect information about how you interact with our services, including the pages you visit, the features you use, and the time spent on our platform.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:scale-100 group py-0 mb-8" variant={"hoverEffect"} id="use">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <Users className="h-10 w-10 text-[var(--custom-text-white)] bg-[var(--custom-bg-accent)] rounded-md p-1 mt-1 flex-shrink-0" />
              <h2 className="text-2xl font-bold dark:text-[var(--custom-text-secondary)] text-[var(--custom-text-primary)]">
                2. How We Use Your Data
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] text-base">
                We use the information we collect to provide, maintain, and improve our services, as well as develop new ones.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]">Deliver and maintain our services</li>
                <li className="text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]">Improve and personalize your experience</li>
                <li className="text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]">Provide customer support</li>
                <li className="text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]">Communicate with you about updates and offers</li>
                <li className="text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]">Ensure the security of our services</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
              <div className="highlight-box p-4 rounded-lg transition-all duration-300 hover:shadow-lg">
                <h4 className="font-bold text-base text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] mb-2">Third-Party Services</h4>
                <p className="text-sm text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]">
                  Our service may contain links to third-party websites or integrate with external services. We are not responsible for the privacy practices of these third parties.
                </p>
              </div>
              <div className="highlight-box p-4 rounded-lg transition-all duration-300 hover:shadow-lg">
                <h4 className="font-bold text-base text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] mb-2">Cookies and Tracking</h4>
                <p className="text-sm text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]">
                  You can control cookie settings through your browser preferences. Note that disabling certain cookies may affect site functionality.
                </p>
              </div>
              <div className="highlight-box p-4 rounded-lg transition-all duration-300 hover:shadow-lg">
                <h4 className="font-bold text-base text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] mb-2">Policy Changes</h4>
                <p className="text-sm text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]">
                 We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the Last Updated date.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:scale-100 group py-0 mb-8" variant={"hoverEffect"} id="sharing">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <Lock className="h-10 w-10 text-[var(--custom-text-white)] bg-[var(--custom-bg-accent)] rounded-md p-1 mt-1 flex-shrink-0" />
              <h2 className="text-2xl font-bold dark:text-[var(--custom-text-secondary)] text-[var(--custom-text-primary)]">
                3. Data Sharing & Disclosure
              </h2>
            </div>
            <p className="text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] text-base">
                We do not share your personal information with companies, organizations, or individuals outside of our company except in the following cases:
              </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="highlight-box p-4 rounded-lg transition-all duration-300 hover:shadow-lg">
                <h4 className="font-bold text-base text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] mb-2">With Your Consent</h4>
                <p className="text-sm text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]">
                   We collect information to provide better services to all our users. The types of information we collect depend on how you use our services.
                </p>
              </div>
              <div className="highlight-box p-4 rounded-lg transition-all duration-300 hover:shadow-lg">
                <h4 className="font-bold text-base text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] mb-2">For Legal Reasons</h4>
                <p className="text-sm text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]">
                  We collect information about how you interact with our services, including the pages you visit, the features you use, and the time spent on our platform.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:scale-100 group py-0 mb-8" variant={"hoverEffect"} id="rights">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <Shield className="h-10 w-10 text-[var(--custom-text-white)] bg-[var(--custom-bg-accent)] rounded-md p-1 mt-1 flex-shrink-0" />
              <h2 className="text-2xl font-bold dark:text-[var(--custom-text-secondary)] text-[var(--custom-text-primary)]">
                4. Your Rights & Choices
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] text-base">
                You have rights regarding your personal information. These may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]">Accessing or correcting your data</li>
                <li className="text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]">Requesting deletion of your data</li>
                <li className="text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]">Objecting to or restricting processing</li>
                <li className="text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]">Withdrawing consent</li>
                <li className="text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]">Lodging a complaint with authorities</li>
              </ul>
              <p className="text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] text-base">
                You can exercise these rights by contacting us through the information provided in the Contact section.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:scale-100 group py-0 mb-8" variant={"hoverEffect"} id="security">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <Lock className="h-10 w-10 text-[var(--custom-text-white)] bg-[var(--custom-bg-accent)] rounded-md p-1 mt-1 flex-shrink-0" />
              <h2 className="text-2xl font-bold dark:text-[var(--custom-text-secondary)] text-[var(--custom-text-primary)]">
                5. Data Security
              </h2>
            </div>
            <div className="space-y-2 bg-[var(--custom-bg-body)] border border-[var(--custom-bg-accent)]/30 p-4 rounded-lg">
              <p className="text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] text-base">
                We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p className="text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] text-base">
                While we strive to protect your information, no security system is impenetrable, and we cannot guarantee the security of our systems 100%.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="highlight-box p-4 rounded-lg transition-all duration-300 hover:shadow-lg">
                <h4 className="font-bold text-base text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] mb-2">Encryption</h4>
                <p className="text-sm text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]">
                   All data transmissions are encrypted using TLS 1.3, ensuring secure communication between you and our servers.
                </p>
              </div>
              <div className="highlight-box p-4 rounded-lg transition-all duration-300 hover:shadow-lg">
                <h4 className="font-bold text-base text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] mb-2">Access Controls</h4>
                <p className="text-sm text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]">
                  Strict authentication and authorization protocols are in place to ensure that only authorized individuals have access to your data.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:scale-100 group py-0 " variant={"hoverEffect"} id="contact">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <Mail className="h-10 w-10 text-[var(--custom-text-white)] bg-[var(--custom-bg-accent)] rounded-md p-1 mt-1 flex-shrink-0" />
              <h2 className="text-2xl font-bold dark:text-[var(--custom-text-secondary)] text-[var(--custom-text-primary)]">
                6. Contact Information
              </h2>
            </div>
            <div className="space-y-3">
              <p className="text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] text-base">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="highlight-box p-4 rounded-lg transition-all duration-300 group-hover:shadow-lg">
                <Link href={"mailto:promiseassets@gmail.com"} className=" flex items-center mb-1 gap-2 dark:text-[var(--custom-text-white)] text-[var(--custom-text-primary)] text-base">
                  <MailCheck className="h-6 w-6 text-[var(--custom-text-white)] bg-[var(--custom-bg-accent)] rounded-md p-1 mt-1 flex-shrink-0" />  promiseassets@gmail.com
                </Link>
                <p className="font-medium flex items-center gap-2">
                  <MapPinPlus className="h-6 w-6 text-[var(--custom-text-white)] bg-[var(--custom-bg-accent)] rounded-md p-1 mt-1 flex-shrink-0" />Khaja Super Market, 2nd to 7th Floor, Kallyanpur Bus Stop, Mirpur Road, Dhaka-1207.
                </p>
              </div>
              <p className="text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] text-base">
                We may update this Privacy Policy from time to time. We{"'"}ll notify you of any changes by posting the new Privacy Policy on this page.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
    </>
  )
}

export default PrivacyPolicyPage
