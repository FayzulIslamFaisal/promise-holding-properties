
import InsightBanner from "./InsightBanner"
import InsightHeader from "./InsightHeader"
import InsightImageBox from "./InsightImageBox"
import InsightContent from "./InsightContent"

interface InsightData {
    id: number;
    title: string;
    content: string;
}

const insightData: InsightData[] = [
  {
    id: 1,
    title: "Your Investment Journey, Powered by Our Insights",
    content: `Founded in 1988, this institution has been widely acclaimed for its quality construction, timely handover, and customer service. As one of the country's leading real estate companies, Promise Asset Ltd. has achieved the 'Best Sustainable Real Estate Company 2025' award in the 'SDG Brand Champion Award 2025' category. Organized by the Sustainable Brand Initiative, Bangladesh Brand Forum, and Bangladesh Innovation Conclave, a total of 35 organizations from various sectors were recognized as winners. Promise Asset is the only real estate company to have received this prestigious recognition in the category. In today's article, we will learn how Promise Asset has been contributing to sustainable urban development.`
  },
  {
    id: 2,
    title: "Sustainable Thinking in Design",
    content: `Over the past 37 years, Promise Asset has handed over more than 4,145 residential and commercial units in Dhaka. The company's commitment to sustainable urban development is most evident in its design approach. Every project features open spaces, rooftop gardens, walkways, and relaxation areas. Planned rooftop gardens help reduce city temperatures, purify the air, and bring mental tranquility. Open spaces are designed not only for children to play but also for adults to walk or find a moment of fresh air. Each apartment by Promise Asset is designed to maximize natural light and ventilation throughout the day, thereby reducing the need for artificial lighting and air conditioning.`
  },
];

const insightDataInfo: InsightData[] = [
  {
    id: 1,
    title: "Use of Modern Technology for Environmental Protection",
    content: `In its projects, Promise Asset consistently incorporates technologies such as solar power and rainwater harvesting. The use of solar energy helps save electricity and reduce carbon emissions, thereby contributing to environmental balance. Rainwater harvesting systems have been installed in Promise Asset's projects to collect and store rainwater. This preserved water is then used for purposes like washing cars and watering plants, effectively reducing water wastage.`
  },
  {
    id: 2,
    title: "Universal Accessibility",
    content: `Promise Asset believes that true joy lies in living together with everyone. With this philosophy, every project includes ramps at entryways, wide walkways, wheelchair-accessible restrooms with ramps, spacious lifts, safety bars, and visual signage for direction. These facilities for people with special needs set a remarkable example in the real estate sector.`
  },
  {
    id: 3,
    title: "Community Engagement and Social Responsibility ",
    content: `Promise Asset regularly organizes community events and social awareness programs. These initiatives foster a sense of community among residents and promote social harmony. The company also actively participates in various social welfare activities, including educational scholarships, healthcare services, and environmental conservation efforts.`
  },
];

const InsightWrapper = () => {
  return (
    <>
      <InsightBanner/>
      <section className="px-4">
          <div className="container mx-auto sectionSpaceBorder">
              <InsightHeader/>
              <InsightImageBox/>
              {insightData.map((item) => (
                <InsightContent key={item.id} itemData={item}/>
              ))}
              <InsightImageBox/>
              {insightDataInfo.map((item) => (
                <InsightContent key={item.id} itemData={item}/>
              ))}
          </div>
      </section>
    </>
  )
}

export default InsightWrapper