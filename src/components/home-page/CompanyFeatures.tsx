
// CompanyFeatures.tsx
import { Users, BadgeCheck, Clock, Headset } from "lucide-react"

interface FeatureItem {
  id: number
  icon: React.ElementType
  title: string
}

const featureItems: FeatureItem[] = [
  {
    id: 1,
    icon: Users,
    title: "Government approved project",
  },
  {
    id: 2,
    icon: BadgeCheck,
    title: "100% transparent policies",
  },
  {
    id: 3,
    icon: Clock,
    title: "Clear Title / NA / NOC",
  },
  {
    id: 4,
    icon: Headset,
    title: "High returns on Investments",
  },
]

const CompanyFeatures = () => {
 return (
    <section className="dark:bg-[var(--custom-bg-body)] bg-[var(--custom-bg-white)]/10 py-10 md:py-14 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {featureItems.map(({ id, icon: Icon, title }) => (
            <div key={id} className="group relative h-full shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl">
              {/* Hover effect layer (appears from bottom on hover) */}
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[var(--custom-bg-accent)]/60 to-[var(--custom-bg-accent)] opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 z-0 hover:animate-pulse"></div>
              
              {/* Main card content */}
              <div className="relative h-full dark:bg-[var(--custom-bg-primary)] bg-[var(--custom-bg-accent)]/10 hover:bg-[var(--custom-bg-white)] border border-[var(--custom-bg-primary)]/20 dark:border-[var(--custom-bg-accent)]/20 rounded-xl transition-all duration-300 p-6 flex flex-col items-center text-center group-hover:-translate-y-1 z-10 ">
                <div className=" text-[var(--custom-text-white)] rounded-full p-4 mb-4 bg-[var(--custom-bg-accent)] shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Icon className="size-8" />
                </div>
                <p className="text-[var(--custom-text-secondary)] text-sm font-semibold leading-snug">
                  {title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompanyFeatures