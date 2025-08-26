import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Award, Heart, Lightbulb, Shield } from 'lucide-react'

interface ValueData {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}
const OurValues = () => {
    const valuesData: ValueData[] = [
    {
      id: 1,
      title: "Honesty",
      description: "We believe in transparent communication and honest dealings in every transaction.",
      icon: <Shield className="h-13 w-13 text-[var(--custom-text-white)]" />,
    },
    {
      id: 2,
      title: "Trust",
      description: "Building long-term relationships based on trust and reliability with our clients.",
      icon: <Heart className="h-13 w-13 text-[var(--custom-text-white)]" />,
    },
    {
      id: 3,
      title: "Innovation",
      description: "Leveraging cutting-edge technology and innovative marketing strategies for better results.",
      icon: <Lightbulb className="h-13 w-13 text-[var(--custom-text-white)]" />,
    },
    {
      id: 4,
      title: "Excellence",
      description: "Committed to delivering exceptional service and exceeding client expectations.",
      icon: <Award className="h-13 w-13 text-[var(--custom-text-white)]" />,
    },
  ]
  return (
    <section className=" px-4 ">
        <div className="container mx-auto py-10 md:py-12 border-b border-[var(--custom-bg-accent)]/40">
        {/* Title */}
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 darkLight-text-color">
                Our Values
            </h2>
            <div className="w-24 h-1 bg-[var(--custom-text-secondary)] mx-auto mb-3"></div>
            <p className="text-xl darkLight-text-color mx-auto">
              The principles that guide everything we do
            </p>
        </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
            {valuesData.map((value) => (
            <Card
                key={value.id}
                className="text-center group p-4 md:p-8 "
                variant={"hoverEffect"}
                >
                <CardContent className="px-2">
                    <div
                        className="inline-block p-2 mx-auto mb-2 bg-[var(--custom-bg-accent)] rounded-xl 
                        transition-all duration-300 ease-in-out 
                        drop-shadow-[0_2px_4px_rgba(255,255,255,0.4)] 
                        group-hover:drop-shadow-[0_6px_12px_rgba(255,255,255,0.4)] 
                        group-hover:scale-105 group-hover:animate-pulse"
                    >
                    {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 darkLight-text-color">
                    {value.title}
                    </h3>
                    <p className=" text-base darkLight-text-color leading-relaxed">
                    {value.description}
                    </p>
                </CardContent>
            </Card>
            ))}
          </div>
        </div>
    </section>
  )
}

export default OurValues
