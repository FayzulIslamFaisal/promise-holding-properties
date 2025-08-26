import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Users, LucideIcon } from "lucide-react"

// Interfaces
interface StoryCard {
  id: number
  icon: LucideIcon
  heading: string
  content: string
}

interface StoryData {
  title: string
  subtitle: string
  description: string[]
  cards: StoryCard[]
}

const OurStory: React.FC = () => {
  const storyData: StoryData = {
    title: "Our Story",
    subtitle: "Who We Are",
    description: [
      "Founded in 2025, Premier Real Estate has grown from a small local agency to one of the most trusted names in the industry. Our journey began with a simple mission: to provide honest, professional, and personalized real estate services to our community.",
      "Today, we continue to uphold these values while embracing innovation and technology to better serve our clients in an ever-evolving market."
    ],
    cards: [
      {
        id: 1,
        icon: Building2,
        heading: "Our Mission",
        content:
          "To provide exceptional real estate services that help our clients achieve their property goals while building lasting relationships based on trust and integrity.",
      },
      {
        id: 2,
        icon: Users,
        heading: "Our Vision",
        content:
          "To be the leading real estate agency recognized for innovation, excellence, and unwavering commitment to client satisfaction.",
      },
    ],
  }

  return (
    <section className="px-4">
      <div className="container mx-auto py-10 md:py-12 border-b border-[var(--custom-bg-accent)]/40">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 darkLight-text-color">
            {storyData.title}
          </h2>
          <div className="w-24 h-1 bg-[var(--custom-text-secondary)] mx-auto "></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 darkLight-text-color">
              {storyData.subtitle}
            </h3>
            {storyData.description.map((para, index) => (
              <p
                key={index}
                className="text-lg leading-relaxed darkLight-text-color mb-6 last:mb-0"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Right side - Cards */}
          <div className="space-y-4">
            {storyData.cards.map((card) => (
              <Card
                key={card.id}
                className="p-4 gap-2 group"
                variant={"hoverEffect"}
              >
                <CardHeader className="pb-0">
                  <CardTitle className="flex items-center gap-3">
                    <card.icon className="h-10 w-10 text-[var(--custom-text-white)] bg-[var(--custom-bg-accent)] p-1 roup-hover:scale-105 group-hover:animate-pulse rounded-lg" />
                    <h3 className="text-xl capitalize font-semibold">{card.heading}</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base darkLight-text-color">
                    {card.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurStory
