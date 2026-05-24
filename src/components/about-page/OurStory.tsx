import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Users, LucideIcon } from "lucide-react"
import SectionTitle from "../common/SectionTitle"
import { aboutService } from "@/services"
import type { AboutUs } from "@/types/api"

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

const OurStory = async () => {
  let storyData: StoryData | null = null
  let error: string | null = null

  try {
    const response = await aboutService.getAboutUs()
    
    if (response.data) {
      const aboutData: AboutUs = response.data
      
      // Transform API data to component data structure
      storyData = {
        title: aboutData.title,
        subtitle: aboutData.short_title,
        description: [aboutData.description],
        cards: [
          {
            id: 1,
            icon: Building2,
            heading: "Our Mission",
            content: aboutData.mission,
          },
          {
            id: 2,
            icon: Users,
            heading: "Our Vision",
            content: aboutData.vision,
          },
        ],
      }
    }
  } catch (err) {
    console.error("Error fetching about data:", err)
    error = "Failed to load about information"
  }

  if (error || !storyData) {
    return (
      <section className="px-4">
        <div className="container mx-auto sectionSpaceBorder">
          <div className="flex justify-center items-center py-12">
            <p className="text-lg text-red-500">{error || "Failed to load about information"}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="px-4">
      <div className="container mx-auto sectionSpaceBorder">
        {/* Title */}
          <SectionTitle 
              title={storyData.subtitle}
              border_b={true}
          />
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
                className="p-4 gap-2 group highlight-box"
                variant={"hoverEffect"}
              >
                <CardHeader className="pb-0">
                  <CardTitle className="flex items-center gap-3">
                    <card.icon className="h-10 w-10 text-white bg-primary p-1 roup-hover:scale-105 group-hover:animate-pulse rounded-lg" />
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
