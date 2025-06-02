import Link from 'next/link'
import { Button } from '../ui/button'
import { LogIn } from 'lucide-react'

const MobileNavMenu = ({onMobileMenuToggle}) => {
  return (
    <div className="fixed top-36 left-0 z-50 h-screen w-[320px] bg-(--cus-bg-pr) p-4 lg:hidden shadow-lg overlay-header">
          <nav className="flex flex-col space-y-4 mt-8 relative z-10">
            <Link href="/" onClick={() => onMobileMenuToggle(false)} className="text-[var(--cus-tx-sec)] font-semibold hover:bg-(--cus-bg-sec) p-2 rounded tracking-wider">
              Home
            </Link>
            <Link href="/about" onClick={() => onMobileMenuToggle(false)} className="text-[var(--cus-tx-sec)] font-semibold hover:bg-(--cus-bg-sec) p-2 rounded tracking-wider">
              About Us
            </Link>
            <Link href="/services" onClick={() => onMobileMenuToggle(false)} className="text-[var(--cus-tx-sec)] font-semibold hover:bg-(--cus-bg-sec) p-2 rounded tracking-wider">
              Services
            </Link>
            <Link href="/contact" onClick={() => onMobileMenuToggle(false)} className="text-[var(--cus-tx-sec)] font-semibold hover:bg-(--cus-bg-sec) p-2 rounded tracking-wider">
              Contact
            </Link>
          </nav>
          <div className="mt-6 relative z-10">
            <Button className=" bg-[var(--cus-bg-accent)] text-[var(--cus-tx-sec)] :hover:bg-(--cus-bg-accent-hover) ">
              <LogIn className="mr-2" /> Login
            </Button>
          </div>
        </div>
  )
}

export default MobileNavMenu