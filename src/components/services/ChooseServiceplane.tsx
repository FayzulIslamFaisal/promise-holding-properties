import { Award, Check, Clock, Shield, TrendingUp } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import SectionTitle from "../common/SectionTitle";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  id: number;
}

const whyChooseUs: string[] = [
  "25+ years of luxury real estate expertise",
  "Exclusive access to premium property listings",
  "Personalized service tailored to your needs",
  "Proven track record of successful transactions",
  "Comprehensive market analysis and insights",
  "White-glove concierge service throughout",
];

const features: Feature[] = [
  { id: 1, icon: Shield, title: "Trusted", description: "Proven reliability" },
  { id: 2, icon: Award, title: "Award-Winning", description: "Industry recognition" },
  { id: 3, icon: Clock, title: "Verified Properties", description: "Always available" },
  { id: 4, icon: TrendingUp, title: "Results-Driven", description: "Measurable success" },
];

const ChooseServiceplane: React.FC = () => {
  return (
    <section className="px-4">
      <div className="container mx-auto  sectionSpaceBorder">
        {/* Left Side */}
        <div className="grid lg:grid-cols-2 md:gap-12 gap-8 items-center">
            <div>
              <SectionTitle title="Choose Our Services"  border_b={false} />
              <div className="space-y-4">
                  {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 w-8 h-8 bg-[var(--custom-bg-accent)] rounded-full flex items-center justify-center mt-1 group-hover:bg-[var(--custom-bg-accent)]/80 transition-colors duration-300">
                      <Check className="w-4 h-4 darkLight-text-color" />
                      </div>
                      <p className="text-lg darkLight-text-color leading-relaxed">
                      {item}
                      </p>
                  </div>
                  ))}
              </div>
            </div>

            {/* Right Side - Features */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={feature.id}
                    className="group relative py-4 gap-2 highlight-box" variant={"hoverEffect"}
                  >
                    <CardHeader className="pb-0 mb-0">
                      <div className="w-14 h-14 p-2 mb-2 bg-[var(--custom-bg-accent)] rounded-md">
                        <Icon className="text-[var(--custom-bg-white)] w-full h-full group-hover:animate-pulse" />
                      </div>
                      <CardTitle className="text-md sm:text-xl font-semibold darkLight-text-color">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="darkLight-text-color">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseServiceplane;
