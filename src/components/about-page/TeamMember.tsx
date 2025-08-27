"use client";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
interface TeamMember {
  id: number;
  name: string;
  designation: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    designation: "CEO & Founder",
    bio: "15+ years in real estate with expertise in luxury properties and commercial developments.",
    image: "/assets/images/team-member/img1.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    designation: "Senior Property Advisor",
    bio: "Specializes in residential sales and investment properties with a track record of 500+ successful transactions.",
    image: "/assets/images/team-member/img2.jpg",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    designation: "Legal & Finance Director",
    bio: "Expert in property law and financing solutions, ensuring smooth and secure transactions for all clients.",
    image: "/assets/images/team-member/img3.jpg",
  },
  {
    id: 4,
    name: "David Thompson",
    designation: "Property Manager",
    bio: "Manages our extensive portfolio of rental properties with focus on tenant satisfaction and property maintenance.",
    image: "/assets/images/team-member/img4.jpg",
  },
  {
    id: 5,
    name: "Sophia Williams",
    designation: "Marketing Director",
    bio: "Leads our marketing strategy with innovative campaigns and a strong focus on brand growth.",
    image: "/assets/images/team-member/img5.jpg",
  },
  {
    id: 6,
    name: "James Anderson",
    designation: "Customer Relations Manager",
    bio: "Dedicated to ensuring client satisfaction by providing personalized support and long-term relationship building.",
    image: "/assets/images/team-member/img6.jpg",
  },
];

const TeamMember = () => {
  return (
    <section className="px-4">
      <div className="container mx-auto py-10 md:py-12 border-b border-[var(--custom-bg-accent)]/40">
        <div className="text-center mb-10">
          <h2 className="text-4xl capitalize md:text-5xl font-bold mb-6 darkLight-text-color">
            Meet Our management
          </h2>
          <div className="w-24 h-1 bg-[var(--custom-bg-accent)] mx-auto mb-8"></div>
          <p className="text-xl darkLight-text-color max-w-3xl mx-auto">
            Experienced professionals dedicated to your success
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 ">
          {teamMembers.map((member) => (
              <Card
                key={member.id}
                variant={"hoverEffect"}
                className="text-center group p-6 min-h-[400px] h-full my-3"
              >
                <CardContent className="p-0 h-full relative">
                  <div className="relative w-40 h-40 mx-auto mb-6">
                    <Image
                      src={
                        member.image || "/assets/images/placeholder.png"
                      }
                      className="rounded-full object-cover dark:shadow-[0_6px_4px_rgba(255,255,255,0.5)] shadow-[0_6px_4px_rgba(0,0,0,0.5)]"
                      fill
                      alt={member.name}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 darkLight-text-color">
                    {member.name}
                  </h3>
                  <p className="darkLight-text-color text-base font-medium mb-4">
                    {member.designation}
                  </p>
                  <p className="text-sm darkLight-text-color leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
