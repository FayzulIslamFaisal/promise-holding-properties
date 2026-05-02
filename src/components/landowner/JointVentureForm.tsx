import { Phone } from "lucide-react"
import Link from "next/link"
// import LandContactForm from "./LandContactForm"
import dynamic from "next/dynamic";
const LandContactForm = dynamic(() => import('./LandContactForm'));



const JointVentureForm = () => {
  return (
    <section className="px-4">
        <div className="container mx-auto py-10 md:py-12  border-b border-[var(--brand-primary)]/40">
            <div className="flex gap-8 lg:flex-row flex-col pb-6 md:pb-8">
                <h2 className="text-2xl flex-1 md:text-3xl lg:text-4xl font-bold capitalize dark:text-[var(--brand-white)] text-[var(--brand-dark)]">
                    Start Your Joint <span className="text-[var(--brand-primary)]">Venture Today</span> 
                </h2>
                <div className="flex-1">
                    <Link
                        href="tel:09606445544"
                        className="btn-glow-accent inline-block " 
                        >
                        <div className="flex items-center gap-4">
                            <Phone className="w-8 h-8" />
                            <div>
                                <p className="text-sm">Talk to our Land Experts</p>
                                <p className="font-semibold text-xl tracking-wider">09647 444 444</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <LandContactForm />
            
        </div>
    </section>
  )
}

export default JointVentureForm
