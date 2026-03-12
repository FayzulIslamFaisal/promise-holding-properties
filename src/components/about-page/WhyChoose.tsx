"use client"

import SectionTitle from "../common/SectionTitle"
import { Card, CardContent } from "../ui/card"
import { Award, Calendar, Users, DollarSign } from "lucide-react"
import Image from "next/image"
import { useWhyChooseUs } from "@/hooks"

interface Achievement {
  id: number
  number: string
  label: string
  description: string
  icon: React.ReactNode
}

const fallbackAchievements: Achievement[] = [
  {
    id: 1,
    number: "15+",
    label: "Years of Experience",
    description: "Serving the community with dedication",
    icon: <Calendar className="w-10 h-10 text-[var(--custom-bg-accent)] mb-3" />,
  },
  {
    id: 2,
    number: "1000+",
    label: "Happy Clients",
    description: "Successful transactions completed",
    icon: <Users className="w-10 h-10 text-[var(--custom-bg-accent)] mb-3" />,
  },
  {
    id: 3,
    number: "50+",
    label: "Awards Won",
    description: "Industry recognition and accolades",
    icon: <Award className="w-10 h-10 text-[var(--custom-bg-accent)] mb-3" />,
  },
  {
    id: 4,
    number: "$500M+",
    label: "Properties Sold",
    description: "Total value of transactions",
    icon: <DollarSign className="w-10 h-10 text-[var(--custom-bg-accent)] mb-3" />,
  },
]

const WhyChoose = () => {
  const { data, isLoading } = useWhyChooseUs()

  const achievements: Achievement[] = (!isLoading && data?.data?.length)
    ? data.data.map((item) => ({
        id: item.id,
        number: item.counter_value,
        label: item.title,
        description: item.short_description,
        icon: <Image src={item.icon} alt={item.title} width={40} height={40} className="w-10 h-10 object-contain mb-3" />,
      }))
    : fallbackAchievements

  return (
    <section className="px-4 ">
      <div className="container mx-auto sectionSpaceBorder">
        <SectionTitle
            title="Why Choose Us"
            border_b={true}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {achievements.map((achievement) => (
            <Card
              key={achievement.id}
              className="text-center p-8"
              variant={"hoverEffect"}
            >
              <CardContent className="px-0 flex flex-col items-center">
                {/* 🔹 Icon */}
                {achievement.icon}

                <div className="text-2xl md:text-4xl font-bold darkLight-text-color mb-2">
                  {achievement.number}
                </div>
                <h3 className="text-md md:text-xlfont-semibold mb-2 darkLight-text-color">
                  {achievement.label}
                </h3>
                <p className="darkLight-text-color">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
