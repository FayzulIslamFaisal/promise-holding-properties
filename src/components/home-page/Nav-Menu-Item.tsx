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
      <nav className="flex items-center space-x-10">
        {navLinks.map((item ) => (

        <Link 
          key={item.id}
          href={item.path} 
          className="text-[var(--custom-text-secondary)] hover:text-[var(--custom-text-hover)] font-semibold tracking-wider"
          >{item?.label}
        </Link>
        ))}
      </nav>
      <Button className="ml-6 bg-[var(--custom-bg-accent)] text-[var(--custom-text-secondary)] :hover:bg-[var(--custom-bg-accent-hover)] shadow-md hover:shadow-lg" size="lg">
        <LogIn className="mr-2" /> Login
      </Button>
    </div>
  )
}

export default NavMenuItem