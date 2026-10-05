import Link from "next/link"
import ModeToggle from "../ModeToggle";
import { usePathname } from "next/navigation";
import { Calendar } from "lucide-react";
import { useSiteVisitModal } from "@/providers/SiteVisitProvider";

const NavMenuItem = () => {
  const pathname = usePathname();
  const { openSiteVisitModal } = useSiteVisitModal();

  const navLinks = [
    { id: 1, path: '/', label: 'Home' },
    { id: 2, path: '/about', label: 'About' },
    { id: 3, path: '/project', label: 'Projects' },
    { id: 4, path: '/landowner', label: 'Landowner' },
    { id: 5, path: '/services', label: 'Services' },
    // { id: 7, path: '/career', label: 'Career' },
    { id: 6, path: '/contact', label: 'Contact' },
  ];
  return (
    <div className="hidden lg:flex w-[75%] items-center justify-between">
      <nav className="flex items-center gap-6 xl:gap-8">
        {navLinks.map((item) => {
          const isActive = pathname === item.path
          return (
            <Link
              key={item.id}
              href={item.path}
              className={`
            font-semibold 
            tracking-wide 
            text-[15px] xl:text-[16px]
            duration-300 linear 
            ${isActive ? "text-primary font-bold border-b-2 border-primary" : "text-white font-semibold hover:text-primary"}
          `}
            >{item?.label}
            </Link>
          )
        })}
      </nav>
      <div className="flex items-center gap-3">
        <ModeToggle />
        <button
          type="button"
          onClick={() => openSiteVisitModal()}
          className="bg-primary hover:bg-primary/90 text-black font-semibold text-xs xl:text-sm px-4 py-2.5 rounded-xl transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md hover:shadow-primary/20 shrink-0 font-poppins"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Site Visit</span>
        </button>
      </div>

    </div>
  )
}

export default NavMenuItem
