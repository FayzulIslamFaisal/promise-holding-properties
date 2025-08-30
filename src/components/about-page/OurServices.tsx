import { Home, Key, Settings, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import SectionTitle from "../common/SectionTitle"

interface Service {
  id: number    
  title: string
  description: string    
  icon: React.ReactNode
}
const services: Service[] = [
    {
      id: 1,
      title: "Property Buying & Selling",
      description:
        "Expert guidance through every step of buying or selling your property with market insights and negotiation expertise.",
      icon: <Home className="h-8 w-8 text-primary" />,
    },
    {
      id: 2,
      title: "Rental & Leasing",
      description:
        "Comprehensive rental services including tenant screening, lease management, and property marketing.",
      icon: <Key className="h-8 w-8 text-primary" />,
    },
    {
      id: 3,
      title: "Property Management",
      description: "Full-service property management including maintenance, rent collection, and tenant relations.",
      icon: <Settings className="h-8 w-8 text-primary" />,
    },
    {
      id: 4,
      title: "Investment Consultancy",
      description:
        "Strategic investment advice to help you build and optimize your real estate portfolio for maximum returns.",
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
    },
  ]
const OurServices = () => {
  return (
    <section className="px-4">
        <div className="container mx-auto sectionSpaceBorder">
          
          <SectionTitle
              title="Our Services"
              border_b={true}
              subtitle="Comprehensive real estate solutions tailored to your needs"
          />

          <div className="grid md:grid-cols-2 gap-5">
            {services.map((service) => (
              <Card key={service.id} className="p-8 gap-4 highlight-box" variant={"hoverEffect"}>
                <CardHeader className="pb-0 px-0">
                  <CardTitle className="flex items-center gap-4 text-xl">
                    {service.icon}
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <p className="text-lg darkLight-text-color leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}

export default OurServices
