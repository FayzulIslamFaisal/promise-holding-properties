
import SectionTitle from "../common/SectionTitle"
import AgentListCardItems from "./AgentListCardItems"


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

const agents: Agent[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "AI Strategy Consultant",
    rating: 4.9,
    totalReviews: 127,
    avatar: "/assets/images/team-member/img6.jpg",
    isOnline: true,
    responseTime: "< 2 hours",
    completedTasks: 89,
    phone: "+1 234 567 890",
    email: "sarah.johnson@example.com",
  },
  {
    id: 2,
    name: "Marcus Chen",
    title: "Data Science Expert",
    rating: 4.8,
    totalReviews: 94,
    avatar: "/assets/images/team-member/img1.jpg",
    isOnline: false,
    responseTime: "< 4 hours",
    completedTasks: 156,
    phone: "+1 987 654 321",
    email: "marcus.chen@example.com",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    title: "UX/AI Designer",
    rating: 5.0,
    totalReviews: 73,
    avatar: "/assets/images/team-member/img2.jpg",
    isOnline: true,
    responseTime: "< 1 hour",
    completedTasks: 67,
    phone: "+34 678 123 456",
    email: "elena.rodriguez@example.com",
  },
  {
    id: 4,
    name: "David Kim",
    title: "Automation Specialist",
    rating: 4.7,
    totalReviews: 112,
    avatar: "/assets/images/team-member/img3.jpg",
    isOnline: true,
    responseTime: "< 3 hours",
    completedTasks: 203,
    phone: "+82 10 2345 6789",
    email: "david.kim@example.com",
  },
  {
    id: 5,
    name: "Amara Okafor",
    title: "AI Ethics Advisor",
    rating: 4.9,
    totalReviews: 58,
    avatar: "/assets/images/team-member/img4.jpeg",
    isOnline: false,
    responseTime: "< 6 hours",
    completedTasks: 41,
    phone: "+234 809 123 4567",
    email: "amara.okafor@example.com",
  },
  {
    id: 6,
    name: "Thomas Anderson",
    title: "Technical Implementation Lead",
    rating: 4.8,
    totalReviews: 89,
    avatar: "/assets/images/team-member/img5.jpg",
    isOnline: true,
    responseTime: "< 2 hours",
    completedTasks: 134,
    phone: "+1 555 234 567",
    email: "thomas.anderson@example.com",
  },
  {
    id: 7,
    name: "Priya Sharma",
    title: "Machine Learning Engineer",
    rating: 4.9,
    totalReviews: 102,
    avatar: "/assets/images/team-member/img7.jpg",
    isOnline: true,
    responseTime: "< 2 hours",
    completedTasks: 178,
    phone: "+91 98765 43210",
    email: "priya.sharma@example.com",
  },
  {
    id: 8,
    name: "James Wilson",
    title: "Cloud Solutions Architect",
    rating: 4.8,
    totalReviews: 76,
    avatar: "/assets/images/team-member/img8.jpg",
    isOnline: false,
    responseTime: "< 5 hours",
    completedTasks: 95,
    phone: "+44 7700 900123",
    email: "james.wilson@example.com",
  },
  {
    id: 9,
    name: "Sophia Lee",
    title: "AI Research Scientist",
    rating: 5.0,
    totalReviews: 142,
    avatar: "/assets/images/team-member/img5.jpg",
    isOnline: true,
    responseTime: "< 1 hour",
    completedTasks: 210,
    phone: "+82 10 8765 4321",
    email: "sophia.lee@example.com",
  },
  {
    id: 10,
    name: "Carlos Mendes",
    title: "Robotics Engineer",
    rating: 4.7,
    totalReviews: 64,
    avatar: "/assets/images/team-member/img3.jpg",
    isOnline: true,
    responseTime: "< 3 hours",
    completedTasks: 120,
    phone: "+55 21 99999 1234",
    email: "carlos.mendes@example.com",
  },
  {
    id: 11,
    name: "Aisha Khan",
    title: "AI Product Manager",
    rating: 4.9,
    totalReviews: 83,
    avatar: "/assets/images/team-member/img2.jpg",
    isOnline: false,
    responseTime: "< 4 hours",
    completedTasks: 150,
    phone: "+971 50 123 4567",
    email: "aisha.khan@example.com",
  },
  {
    id: 12,
    name: "Liam O'Connor",
    title: "Cybersecurity Specialist",
    rating: 4.8,
    totalReviews: 99,
    avatar: "/assets/images/team-member/img1.jpg",
    isOnline: true,
    responseTime: "< 2 hours",
    completedTasks: 175,
    phone: "+353 85 123 4567",
    email: "liam.oconnor@example.com",
  },
]

const AgentListCard = () => {
  return (
    <section className="px-4">
      <div className="container mx-auto sectionSpaceBorder">
        <SectionTitle
          title="Our Agents"
          subtitle="Each agent brings unique expertise and proven track record in delivering exceptional AI solutions"
          border_b={true}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          {agents.map((agent) => (
            <AgentListCardItems key={agent.id} agent={agent} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AgentListCard
