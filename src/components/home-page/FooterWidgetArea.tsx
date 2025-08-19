

import {
  ChevronRight,
  MailCheck,
  MapPinCheck,
  PhoneCallIcon,
  SendHorizontalIcon,
} from 'lucide-react'
import Link from 'next/link';

interface QuickLink {
  id: number;
  title: string;
  path: string;
}
interface CompanyLink {
  id: number;
  title: string;
  path: string;
}

const FooterWidgetArea = () => {
    const quickLinks: QuickLink[] = [
      { id: 1, title: "Customer Enquiry", path: "/customer" },
      { id: 2, title: "Our Services", path: "/services" },
      { id: 3, title: "About Us", path: "/about-us" },
      { id: 4, title: "Contact Us", path: "/contact" },
    ],
    companyLinks: CompanyLink[] = [
       { 
        id: 1,
        title: "Privacy Policy", 
        path: "/privacy-policy" 
      },
      { 
        id: 2,
        title: "terms & conditions", 
        path: "/terms-conditions" 
      },
      { 
        id: 3,
        title: "Property For Buy", 
        path: "/properties?type=buy" 
      },
      { 
        id: 4,
        title: "Our Agents", 
        path: "/agents" 
      },
    ]

  return (
    <div className="px-4 pt-6">
      <div className="container mx-auto  relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 border-b border-[var(--custom-bg-accent)]/25 pb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <p className="text-xl tracking-normal">
              Specializing in high-class tours, float & plate booking services
            </p>
            <div className="space-y-2">
              <p className="text-gray-300 flex items-start gap-2">
                <MapPinCheck className="size-5 mt-1 text-[var(--custom-bg-white)]" />
                <span>
                  Khaja Super Market, 2nd to 7th Floor, Kallyanpur Bus Stop,
                  Mirpur Road, Dhaka-1207.
                </span>
              </p>
              <p className="text-gray-300 flex items-center gap-2">
                <PhoneCallIcon className="size-4 text-[var(--custom-bg-white)]" />
                <span>09647 444 444</span>
              </p>
              <p className="text-gray-300 flex items-center gap-2">
                <MailCheck className="size-4 text-[var(--custom-bg-white)]" />
                <span>info@promiseholding.com</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {quickLinks.map((item) => (
                <li
                  key={item?.id}
                  className="hover:text-[var(--custom-text-white)] transition-colors duration-300"
                >
                  <Link href={item?.path} className="flex items-center gap-1">
                    <ChevronRight className="size-4" />
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-lg tracking-wider">Our Company</h4>
            <ul className="space-y-2 text-gray-400">
              {companyLinks.map((item) => (
                <li
                  key={item.id}
                  className="hover:text-[var(--custom-text-white)] transition-colors duration-300 cursor-pointer flex items-center gap-1"
                >
                  <Link href={item.path} className="flex items-center gap-1">
                    <ChevronRight className="size-4" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg tracking-wider">Newsletter</h4>
            <p className="text-gray-400">
              Your Weekly Monthly Dose of Knowledge and Inspiration
            </p>

            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-gray-300">
                Your Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-gray-800 border border-gray-700 rounded px-4 py-2 text-[var(--custom-text-white)] focus:outline-none focus:ring-1 focus:ring-gray-100/25 w-full pr-12 transition duration-200 shadow-sm hover:shadow-md"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="absolute top-1/2 -translate-y-1/2 right-0 bg-[var(--custom-bg-accent)] hover:bg-[var(--custom-bg-accent)] text-[var(--custom-text-white)] px-3 py-2 rounded transition duration-200"
                >
                  <SendHorizontalIcon className="size-4 inline-block" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterWidgetArea
