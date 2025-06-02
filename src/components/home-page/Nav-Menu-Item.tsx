import Link from "next/link"
import { Button } from "../ui/button"
import { LogIn } from "lucide-react"


const NavMenuItem = () => {
  return (
    <div className="hidden lg:flex w-[75%] items-center justify-between">
      <nav className="flex items-center space-x-10">
        <Link href="/" className="text-[var(--cus-tx-sec)] hover:text-[var(--cus-tx-hover)] font-semibold tracking-wider">Home</Link>
        <Link href="#" className="text-[var(--cus-tx-sec)] hover:text-[var(--cus-tx-hover)] font-semibold tracking-wider">About Us</Link>
        <Link href="#" className="text-[var(--cus-tx-sec)] hover:text-[var(--cus-tx-hover)] font-semibold tracking-wider">Services</Link>
        <Link href="#" className="text-[var(--cus-tx-sec)] hover:text-[var(--cus-tx-hover)] font-semibold tracking-wider">Contact</Link>
      </nav>
      <Button className="ml-6 bg-[var(--cus-bg-accent)] text-[var(--cus-tx-sec)] :hover:bg-[var(--cus-bg-accent-hover)]" size="lg">
        <LogIn className="mr-2" /> Login
      </Button>
    </div>
  )
}

export default NavMenuItem