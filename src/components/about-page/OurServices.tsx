import { Home, Key, Settings, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

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
        <div className="container mx-auto py-10 md:py-12 border-b border-[var(--custom-bg-accent)]/40">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 darkLight-text-color">Our Services</h2>
            <div className="w-24 h-1 bg-[var(--custom-bg-accent)] mx-auto mb-6"></div>
            <p className="text-xl darkLight-text-color max-w-3xl mx-auto">
              Comprehensive real estate solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {services.map((service) => (
              <Card key={service.id} className="p-8 gap-4" variant={"hoverEffect"}>
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
