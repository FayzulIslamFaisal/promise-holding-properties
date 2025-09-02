import Link from "next/link"
import { LogIn } from "lucide-react"
import ModeToggle from "../ModeToggle";
import { usePathname } from "next/navigation";


const NavMenuItem = () => {
  const pathname = usePathname()
  const navLinks = [
    { id:1, path: '/', label: 'Home' },
    { id:2, path: '/about', label: 'About' },
    { id:3, path: '/project', label: 'Projects' },
    { id:4, path: '/landowner', label: 'Landowner' },
    { id:5, path: '/services', label: 'Services' },
    { id:6, path: '/contact', label: 'Contact' },
  ];
  return (
    <div className="hidden lg:flex w-[75%] items-center justify-between">
      <nav className="flex items-center gap-6 xl:gap-10">
        {navLinks.map((item ) => {
        const isActive = pathname === item.path
        return (
          <Link 
          key={item.id}
          href={item.path}
          className={`
            font-semibold 
            tracking-wide 
            text-[16px]
            duration-300 linear 
            ${isActive ? "text-[var(--custom-text-secondary)] font-bold border-b-2 border-[var(--custom-bg-accent)]" : "text-[var(--custom-text-white)] font-semibold"}
          `}
          >{item?.label}
        </Link>
        )})}
      </nav>
      <div className=" flex items-center gap-4">
        <ModeToggle />
        <Link href="/login" className="btn-glow-accent">
          <LogIn className="mr-2 animate-pulse" /> Login
        </Link>
      </div>
      
    </div>
  )
}

export default NavMenuItem