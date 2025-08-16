import { Award, Check, Clock, Shield, TrendingUp } from "lucide-react";
import React from "react";

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
      <div className="container mx-auto  border-b border-[var(--custom-bg-accent)]/40 py-10 md:py-12">
        {/* Left Side */}
        <div className="grid lg:grid-cols-2 md:gap-12 gap-8 items-center">
            <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] mb-8">
                Why Choose <span className="text-[var(--custom-text-secondary)]">Our Team</span>
            </h2>
            <p className="text-xl text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] leading-relaxed mb-8">
                Experience the difference that comes with working alongside industry leaders who are committed to your success.
            </p>

            <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 bg-[var(--custom-bg-accent)] rounded-full flex items-center justify-center mt-1 group-hover:bg-[var(--custom-bg-accent)]/80 transition-colors duration-300">
                    <Check className="w-4 h-4 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]" />
                    </div>
                    <p className="text-lg text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] leading-relaxed">
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
                <div
                    key={feature.id}
                    className="bg-[var(--custom-bg-accent)]/10 hover:bg-[var(--custom-bg-accent)]/20 
                            dark:bg-[var(--custom-bg-primary)]/50 hover:dark:bg-[var(--custom-bg-primary)] 
                            border border-[var(--custom-bg-accent)]/20 backdrop-blur-sm 
                            rounded-2xl p-6 flex flex-col items-start transition-all duration-300"
                >
                    <div className="mb-4 bg-[var(--custom-bg-accent)] p-2 rounded-md ">
                        <Icon className="text-[var(--custom-bg-white)] w-8 h-8" />
                    </div>
                    <h4 className="text-md sm:text-xl font-semibold text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] mb-2">
                    {feature.title}
                    </h4>
                    <p className="text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]">
                    {feature.description}
                    </p>
                </div>
                );
            })}
            </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseServiceplane;
