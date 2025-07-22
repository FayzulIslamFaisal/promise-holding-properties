import Link from "next/link"
import { Button } from "../ui/button"
import { LogIn } from "lucide-react"


const NavMenuItem = () => {
  const navLinks = [
    { id:1, path: '/', label: 'Home' },
    { id:2, path: '/product', label: 'Products' },
    { id:3, path: '/about', label: 'About Us' },
    { id:4, path: '/services', label: 'Services' },
    { id:5, path: '/contact', label: 'Contact' },
  ];
  return (
    <div className="hidden lg:flex w-[75%] items-center justify-between">
      <nav className="flex items-center gap-10">
        {navLinks.map((item ) => (

        <Link 
          key={item.id}
          href={item.path}
          className="
          text-[var(--custom-text-white)] 
            font-semibold 
            tracking-wide 
            text-[16px]
            duration-300 linear"
          >{item?.label}
        </Link>
        ))}
      </nav>
      <Button variant="default" className="btn-glow-accent">
        <LogIn className="mr-2 animate-pulse" /> Login
      </Button>
    </div>
  )
}

export default NavMenuItem