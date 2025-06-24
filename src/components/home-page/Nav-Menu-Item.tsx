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
      <nav className="flex items-center gap-6">
        {navLinks.map((item ) => (

        <Link 
          key={item.id}
          href={item.path}
          className="text-[var(--custom-text-secondary)] 
             font-semibold 
             tracking-wide 
             px-4 py-2 
             rounded-md 
             border border-transparent 
             hover:text-[var(--custom-text-hover)] 
             hover:bg-[var(--custom-bg-accent-hover)] 
             hover:border-[var(--custom-border-primary)] 
             transform 
             hover:scale-[1.03] 
             hover:shadow-[0_2px_12px_rgba(255,255,255,0.15)] 
             transition-transform transition-colors transition-shadow 
             duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
          >{item?.label}
        </Link>
        ))}
      </nav>
      <Button variant="unstyled" className="btn-glow-accent">
        <LogIn className="mr-2 animate-pulse" /> Login
      </Button>
    </div>
  )
}

export default NavMenuItem