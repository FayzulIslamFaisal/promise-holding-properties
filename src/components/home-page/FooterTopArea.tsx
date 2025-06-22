
import {
  Facebook,
  InstagramIcon,
  Linkedin,
  TwitterIcon,
  YoutubeIcon,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const FooterTopArea = () => {
    interface SocialIcon {
        href: string
        icon: LucideIcon
    }
  const socialIcons: SocialIcon[] = [
    { href: '#', icon: <Facebook className="size-5 md:size-6" /> },
    { href: '#', icon: <Linkedin className="size-5 md:size-6" /> },
    { href: '#', icon: <TwitterIcon className="size-5 md:size-6" /> },
    { href: '#', icon: <InstagramIcon className="size-5 md:size-6" /> },
    { href: '#', icon: <YoutubeIcon className="size-5 md:size-6" /> },
  ]

  return (
    <div className=" shadow-sm relative z-10">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          {/* Logo Area */}
          <div>
            <Image
              src="/assets/images/Promise-Holdings-Ltd-03.png"
              width={200}
              height={100}
              alt="PromiseHoldings Logo"
              className="object-contain"
            />
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 justify-start md:justify-end flex-wrap">
            <span className="text-sm md:text-base font-semibold text-[var(--custom-bg-white)]">
              Follow Us:
            </span>
            <div className="flex items-center gap-3">
              {socialIcons.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target="_blank"
                  className="bg-[var(--custom-bg-accent)] text-[var(--custom-bg-white)] hover:bg-[var(--custom-bg-black)] hover:text-white p-2 rounded-md transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterTopArea
