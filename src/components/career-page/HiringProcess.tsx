"use client";
import React from "react";
import { Send, FileSearch, UserCheck, Briefcase } from "lucide-react";
import SectionTitle from "../common/SectionTitle";

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const HiringProcess = () => {
  const steps: Step[] = [
    {
      number: "01",
      icon: <Send className="h-6 w-6 text-white" />,
      title: "Apply Online",
      description: "Browse our open positions and submit your application with a current resume/portfolio.",
    },
    {
      number: "02",
      icon: <FileSearch className="h-6 w-6 text-white" />,
      title: "Profile Screening",
      description: "Our hiring managers evaluate your credentials against role requirements within 5-7 working days.",
    },
    {
      number: "03",
      icon: <UserCheck className="h-6 w-6 text-white" />,
      title: "Interviews",
      description: "Engage in dialogue about the position through collaborative technical and behavioral evaluation rounds.",
    },
    {
      number: "04",
      icon: <Briefcase className="h-6 w-6 text-white" />,
      title: "Final Offer",
      description: "If there's a match, we issue a formal proposal detailing compensation, benefits, and start schedules.",
    },
  ];

  return (
    <section className="px-4 py-16 darkLight-body-bg-color">
      <div className="container mx-auto sectionSpaceBorder pb-16">
        <SectionTitle
          title="Our Hiring Process"
          subtitle="A transparent, straightforward recruitment lifecycle designed to ensure mutual alignment and fit."
          border_b={false}
        />

        <div className="relative mt-12">
          {/* Connecting Line (Vertical on Mobile, Horizontal on Desktop) */}
          <div className="absolute left-[39px] top-10 bottom-24 w-0.5 md:left-[12.5%] md:right-[12.5%] md:top-10 md:bottom-auto md:w-auto md:h-0.5 md:-translate-y-1/2 bg-gradient-to-b md:bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 z-0 block" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-1">
            {steps.map((step, index) => (
              <div key={index} className="flex md:flex-col items-start md:items-center text-left md:text-center group">
                {/* Step Circle & Icon */}
                <div className="relative flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-full bg-[var(--brand-dark)] dark:bg-black border-2 border-primary shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0.5 rounded-full bg-primary/20 animate-ping group-hover:animate-none opacity-50" />
                  <div className="absolute -top-2 -right-2 bg-primary text-black font-bold text-xs rounded-full w-6 h-6 flex items-center justify-center shadow-lg border border-black/20">
                    {step.number}
                  </div>
                  {step.icon}
                </div>

                {/* Text Content */}
                <div className="ml-6 md:ml-0 md:mt-6 pt-1 md:pt-0">
                  <h3 className="text-lg md:text-xl font-bold darkLight-text-color tracking-wide mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm darkLight-text-color/70 leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringProcess;
