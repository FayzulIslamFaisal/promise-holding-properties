
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
    <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {featureItems.map(({ id, icon: Icon, title }) => (
            <div
              key={id}
              className="group bg-(var(--custom-bg-white)) rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center hover:scale-[1.03] transform transition-transform"
            >
              <div className="bg-[var(--custom-bg-accent)] text-[var(--custom-bg-white)] rounded-full p-4 mb-4 transition duration-300 group-hover:bg-[var(--custom-bg-black)] group-hover:text-white">
                <Icon className="size-8" />
              </div>
              <p className="text-[var(--custom-text-white)] text-sm font-semibold leading-snug">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompanyFeatures
