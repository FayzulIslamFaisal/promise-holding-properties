import { WhyChooseUs } from "@/types/api"
import SectionTitle from "../common/SectionTitle"
import { Card, CardContent } from "../ui/card"
import { Award, Calendar, Users, DollarSign } from "lucide-react"
import Image from "next/image"
import { metricService } from "@/services"

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
    icon: <Calendar className="w-10 h-10 text-[var(--brand-primary)] mb-3" />,
  },
  {
    id: 2,
    number: "1000+",
    label: "Happy Clients",
    description: "Successful transactions completed",
    icon: <Users className="w-10 h-10 text-[var(--brand-primary)] mb-3" />,
  },
  {
    id: 3,
    number: "50+",
    label: "Awards Won",
    description: "Industry recognition and accolades",
    icon: <Award className="w-10 h-10 text-[var(--brand-primary)] mb-3" />,
  },
  {
    id: 4,
    number: "$500M+",
    label: "Properties Sold",
    description: "Total value of transactions",
    icon: <DollarSign className="w-10 h-10 text-[var(--brand-primary)] mb-3" />,
  },
]

const WhyChoose = async () => {
  let metricsRes: WhyChooseUs[] = [];
  try {
    const res = await metricService.getWhyChooseUs();
    metricsRes = res.data || [];
  } catch (error) {
    console.error("Error fetching metrics:", error);
  }

  const achievements: (WhyChooseUs | Achievement)[] = (metricsRes && metricsRes.length) ? metricsRes : fallbackAchievements;

  return (
    <section className="px-4 ">
      <div className="container mx-auto sectionSpaceBorder">
        <SectionTitle
            title="Why Choose Us"
            border_b={true}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {achievements.map((achievement, index: number) => {
            const a = achievement as WhyChooseUs & Achievement;
            return (
            <Card
              key={achievement.id || index}
              className="text-center p-8"
              variant={"hoverEffect"}
            >
              <CardContent className="px-0 flex flex-col items-center">
                {/* 🔹 Icon */}
                {a.icon && typeof a.icon === "string" ? (
                  <Image src={a.icon} alt={a.title || a.label || ""} width={40} height={40} className="w-10 h-10 object-contain mb-3" />
                ) : (
                  a.icon
                )}

                <div className="text-2xl md:text-4xl font-bold darkLight-text-color mb-2">
                  {a.number || a.counter_value}
                </div>
                <h3 className="text-md md:text-xlfont-semibold mb-2 darkLight-text-color">
                  {a.label || a.title}
                </h3>
                <p className="darkLight-text-color">{a.description || a.short_description}</p>
              </CardContent>
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
