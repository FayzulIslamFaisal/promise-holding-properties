import { Award, Clock, Shield, TrendingUp } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import SectionTitle from "../common/SectionTitle";
import { companyServiceService } from "@/services";
import { ChooseService } from "@/types/api";
import Image from "next/image";

interface Feature {
  icon: React.ElementType | string;
  title: string;
  description: string;
  id: number;
}

const fallbackFeatures: Feature[] = [
  { id: 1, icon: Shield, title: "Trusted", description: "Proven reliability" },
  { id: 2, icon: Award, title: "Award-Winning", description: "Industry recognition" },
  { id: 3, icon: Clock, title: "Verified Properties", description: "Always available" },
  { id: 4, icon: TrendingUp, title: "Results-Driven", description: "Measurable success" },
];

const WhyChooseOurServices = async () => {
  let featuresRes: ChooseService[] = [];
  try {
    const res = await companyServiceService.getChooseServices();
    featuresRes = res.data || [];
  } catch (error) {
    console.error("Error fetching choose services:", error);
  }

  const features: (ChooseService | Feature)[] = (featuresRes && featuresRes.length) ? featuresRes : fallbackFeatures;

  return (
    <section className="px-4">
      <div className="container mx-auto sectionSpaceBorder">
        <SectionTitle title="Why Choose Our Services" border_b={true} />

        {/* New 4-column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {features.map((feature: ChooseService | Feature, index: number) => {
            const f = feature as ChooseService & Feature;
            const isStringIcon = typeof f.icon === "string";
            const IconComponent = !isStringIcon ? f.icon as React.ComponentType<{ className?: string }> : null;

            return (
              <Card
                key={f.id || index}
                className="group relative py-4 gap-2 highlight-box" variant={"hoverEffect"}
              >
                <CardHeader className="pb-0 mb-0">
                  <div className="w-14 h-14 p-2 mb-2 bg-primary rounded-md flex items-center justify-center">
                    {isStringIcon ? (
                      <Image src={f.icon as string} alt={f.title} width={40} height={40} className="object-contain group-hover:animate-pulse" />
                    ) : (
                      IconComponent && <IconComponent className="text-white w-full h-full group-hover:animate-pulse" />
                    )}
                  </div>
                  <CardTitle className="text-md sm:text-xl font-semibold darkLight-text-color">
                    {f.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="darkLight-text-color">{f.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseOurServices;
