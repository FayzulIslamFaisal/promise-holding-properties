import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Users, MessageCircle, Phone, Mail } from "lucide-react"

interface Agent {
  id: number
  name: string
  title: string
  rating: number
  totalReviews: number
  avatar: string
  isOnline: boolean
  responseTime: string
  completedTasks: number
  phone: string
  email: string
}
interface AgentItemsProps {
  agent: Agent
}
const AgentListCardItems: React.FC<AgentItemsProps> = ({agent}) => {
  return (
    <Card key={agent.id} className=" group" variant={"hoverEffect"}>
              <CardHeader className="pb-0">
                <div className="flex items-start gap-4">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src={agent.avatar || "/placeholder.svg"}
                      alt={agent.name}
                      width={96}
                      height={96}
                      className="rounded-full object-cover border-2 border-primary/30 w-full h-full"
                    />
                    <div
                      className={`absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-[var(--brand-dark)] ${
                        agent.isOnline ? "bg-primary" : "bg-gray-400"
                      }`}
                    ></div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg darkLight-text-color font-bold ">
                      {agent.name}
                    </CardTitle>
                    <CardDescription className="darkLight-text-color font-medium">
                      {agent.title}
                    </CardDescription>

                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-[var(--brand-dark)] " />
                        <span className="darkLight-text-color font-medium">{agent.rating}</span>
                      </div>
                      <span className="darkLight-text-color text-sm">
                        ({agent.totalReviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Contact Info */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span className="darkLight-text-color">{agent.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span className="darkLight-text-color">{agent.email}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 pb-2 gap-4 pt-2 border-t border-primary/40">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 /60 text-xs mb-1">
                      <MessageCircle className="w-3 h-3" />
                      Response Time
                    </div>
                    <div className=" font-medium darkLight-text-color text-sm">{agent.responseTime}</div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 darkLight-text-color text-xs mb-1">
                      <Users className="w-3 h-3" />
                      Completed
                    </div>
                    <div className=" font-medium text-sm">
                      {agent.completedTasks} tasks
                    </div>
                  </div>
                </div>

                <Link href={`tel:${agent.phone}`} className="w-full mt-2 block text-center btn-glow-accent" >
                  Contact Agent
                </Link>
              </CardContent>
            </Card>
  )
}

export default AgentListCardItems
