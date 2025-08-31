import { Calendar } from 'lucide-react'

const InsightHeader = () => {
  return (
    <div className="mb-8">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-balance darkLight-text-color">
            Promise Asset: Leading the Way in Sustainable Urban Development
        </h2>

        <div className="flex items-center gap-4 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span className="darkLight-text-color">25 December, 2024</span>
            </div>
        </div>

        <p className="text-base md:text-lg darkLight-text-color leading-relaxed">
            As cities around the world continue to expand rapidly, ensuring a balance between the environment and human well-being is becoming increasingly challenging. Among the United Nations’ 17 Sustainable Development Goals, the 11th goal is “Sustainable Cities and Communities,” which emphasizes the need to build cities that are safe, inclusive, and sustainable for all. With this vision in mind, Promise Asset is consciously working to achieve sustainable development goals in every project. In this era of rapid urbanization, Promise Asset is planning its projects with a focus on eco-friendly construction, social harmony, and a sustainable future.
        </p>
    </div>
  )
}

export default InsightHeader
