"use client";
import React from "react";
import { 
  TrendingUp, 
  HeartHandshake, 
  Clock, 
  Sparkles, 
  Users, 
  GraduationCap 
} from "lucide-react";
import { Card, CardContent } from "../ui/card";
import SectionTitle from "../common/SectionTitle";

interface BenefitItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WhyJoinUs = () => {
  const benefits: BenefitItem[] = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Career Growth",
      description: "Continuous learning programs, mentorship, and clear promotion pathways to accelerate your professional growth.",
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-primary" />,
      title: "Health & Well-being",
      description: "Comprehensive health coverage for you and your family, along with wellness initiatives and resources.",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Flexible Environment",
      description: "Work-life harmony through flexible working hours, hybrid options, and generous paid time off plans.",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Skill Development",
      description: "Sponsored industry certifications, regular workshops, and training allowances to keep your skills sharp.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Inclusive Culture",
      description: "An open, transparent, and diverse environment where every voice is valued and celebrated.",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "Impactful Work",
      description: "Contribute to iconic real estate developments that shape communities and build the future of urban living.",
    },
  ];

  return (
    <section className="px-4 py-16 darkLight-body-bg-color">
      <div className="container mx-auto sectionSpaceBorder pb-16">
        <SectionTitle
          title="Why Promise Assets?"
          subtitle="We believe our people are our greatest assets. Here is what we offer to help you thrive both personally and professionally."
          border_b={false}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              variant="hoverEffect"
              className="p-8 h-full border border-primary/20 backdrop-blur-md relative overflow-hidden group transition-all duration-300"
            >
              {/* Subtle ambient light effect */}
              <div className="absolute -right-10 -top-10 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-500" />
              
              <CardContent className="p-0 space-y-4">
                <div className="p-3 bg-primary/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold darkLight-text-color tracking-wide">
                  {benefit.title}
                </h3>
                <p className="text-sm darkLight-text-color/70 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
