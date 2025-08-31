import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, Facebook, Instagram, Linkedin, Share2, Twitter } from "lucide-react"
import Image from "next/image"

const InsightPage = ({ params }: { params: { slug: string } }) => {
    const { slug } = params
    console.log(slug);
  return (
    <section className="px-4">
      <div className="container mx-auto sectionSpaceBorder">
        {/* Article Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">
          Promise Asset: Leading the Way in Sustainable Urban Development
          </h2>

          <div className="flex items-center gap-4 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>25 December, 2024</span>
            </div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            As cities around the world continue to expand rapidly, ensuring a balance between the environment and human well-being is becoming increasingly challenging. Among the United Nations’ 17 Sustainable Development Goals, the 11th goal is “Sustainable Cities and Communities,” which emphasizes the need to build cities that are safe, inclusive, and sustainable for all. With this vision in mind, Promise Asset is consciously working to achieve sustainable development goals in every project. In this era of rapid urbanization, Promise Asset is planning its projects with a focus on eco-friendly construction, social harmony, and a sustainable future.
          </p>
        </div>

        <Card className="mb-8 overflow-hidden py-0 rounded-lg p-4 md:p-8 bg-primaryAccent">
          <div className="w-full h-[400px] md:h-[500px] relative">
            <Image
              src="/assets/images/landowner/banner.jpg"
              alt="কৃত্রিম বুদ্ধিমত্তার ভবিষ্যৎ"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </Card>

        <div className="prose prose-lg max-w-none mb-8">
          <div className="text-foreground leading-relaxed space-y-6">
            <p className="text-pretty">
              Founded in 1988, this institution has been widely acclaimed for its quality construction, timely handover, and customer service. As one of the country’s leading real estate companies, Promise Asset Ltd. has achieved the ‘Best Sustainable Real Estate Company 2025’ award in the ‘SDG Brand Champion Award 2025’ category. Organized by the Sustainable Brand Initiative, Bangladesh Brand Forum, and Bangladesh Innovation Conclave, a total of 35 organizations from various sectors were recognized as winners. Promise Asset is the only real estate company to have received this prestigious recognition in the category. In today’s article, we will learn how Promise Asset has been contributing to sustainable urban development.
            </p>
            <h4>Sustainable Thinking in Design</h4>
            <p className="text-pretty">
              Over the past 37 years, Promise Asset has handed over more than 4,145 residential and commercial units in Dhaka. The company’s commitment to sustainable urban development is most evident in its design approach. Every project features open spaces, rooftop gardens, walkways, and relaxation areas. Planned rooftop gardens help reduce city temperatures, purify the air, and bring mental tranquility. Open spaces are designed not only for children to play but also for adults to walk or find a moment of fresh air. Each apartment by Promise Asset is designed to maximize natural light and ventilation throughout the day, thereby reducing the need for artificial lighting and air conditioning.
            </p>
          </div>
        </div>

        <Card className="mb-8 overflow-hidden py-0 rounded-lg p-4 md:p-8 bg-primaryAccent">
          <div className="w-full h-[400px] md:h-[500px] relative">
            <Image
              src="/assets/images/landowner/banner.jpg"
              alt="কৃত্রিম বুদ্ধিমত্তার ভবিষ্যৎ"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </Card>

        <div className="prose prose-lg max-w-none mb-8">
          <div className="text-foreground leading-relaxed space-y-6">
            <h4>Use of Modern Technology for Environmental Protection</h4>
            <p className="text-pretty">
              In its projects, Promise Asset consistently incorporates technologies such as solar power and rainwater harvesting. The use of solar energy helps save electricity and reduce carbon emissions, thereby contributing to environmental balance. Rainwater harvesting systems have been installed in Promise Asset’s projects to collect and store rainwater. This preserved water is then used for purposes like washing cars and watering plants, effectively reducing water wastage.
            </p>
            <h4>Universal Accessibility</h4>
            <p className="text-pretty">
              Promise Asset believes that true joy lies in living together with everyone. With this philosophy, every project includes ramps at entryways, wide walkways, wheelchair-accessible restrooms with ramps, spacious lifts, safety bars, and visual signage for direction. These facilities for people with special needs set a remarkable example in the real estate sector.
            </p>
            <h4>Community Engagement and Social Responsibility</h4>
            <p className="text-pretty">
              Promise Asset regularly organizes community events and social awareness programs. These initiatives foster a sense of community among residents and promote social harmony. The company also actively participates in various social welfare activities, including educational scholarships, healthcare services, and environmental conservation efforts.
            </p>
          </div>
        </div>

        <Card className="p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Share2 className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">এই আর্টিকেলটি শেয়ার করুন:</span>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:border-blue-200 bg-transparent">
                <Facebook className="w-4 h-4 text-blue-600" />
                <span className="sr-only">Facebook এ শেয়ার করুন</span>
              </Button>

              <Button variant="outline" size="sm" className="hover:bg-sky-50 hover:border-sky-200 bg-transparent">
                <Twitter className="w-4 h-4 text-sky-500" />
                <span className="sr-only">Twitter এ শেয়ার করুন</span>
              </Button>

              <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:border-blue-200 bg-transparent">
                <Linkedin className="w-4 h-4 text-blue-700" />
                <span className="sr-only">LinkedIn এ শেয়ার করুন</span>
              </Button>

              <Button variant="outline" size="sm" className="hover:bg-pink-50 hover:border-pink-200 bg-transparent">
                <Instagram className="w-4 h-4 text-pink-600" />
                <span className="sr-only">Instagram এ শেয়ার করুন</span>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default InsightPage
