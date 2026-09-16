"use client";

import React, { useState } from "react";
import { HowItWorks } from "@/types/api";
import { Phone } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import SectionTitle from "../common/SectionTitle";

interface StepItem {
  id: number;
  number?: string;
  title: string;
  description: string;
}

interface ProcessStepsClientProps {
  steps: (HowItWorks | StepItem)[];
}

const ProcessStepsClient: React.FC<ProcessStepsClientProps> = ({ steps }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <div className="w-full">
      {/* Title & Subtitle */}
      <SectionTitle title="How It Works" subtitle="Our streamlined process ensures a smooth and hassle-free real estate experience." />
      {/* Stepper Progress Bar (Desktop & Tablet) */}
      <div className="relative w-full mb-6 hidden md:block">
        {/* Connecting Line */}
        <div className="absolute top-6 left-[10%] right-[10%] h-[2px] bg-gray-200 dark:bg-gray-700 z-0" />

        {/* 5 Stepper Nodes */}
        <div className="grid grid-cols-5 relative z-10">
          {steps.map((step, index) => {
            const isActive = activeStep === index;
            const stepNumber = String(index + 1).padStart(2, "0");

            return (
              <button
                key={index}
                type="button"
                onClick={() => setActiveStep(index)}
                className="flex flex-col items-center group cursor-pointer focus:outline-none"
              >
                {/* Circle Node */}
                <div
                  className={cn(
                    "w-12 h-12 rounded-full font-bold text-sm flex items-center justify-center transition-all duration-300",
                    isActive
                      ? "bg-primary text-white ring-4 ring-primary/25 shadow-lg shadow-primary/30 scale-110"
                      : "bg-card dark:bg-[var(--brand-dark)] border-2 border-gray-200 dark:border-gray-700 text-muted-foreground group-hover:border-primary/50 group-hover:text-foreground"
                  )}
                >
                  {stepNumber}
                </div>

                {/* Subtitle Label */}
                <span
                  className={cn(
                    "text-[10px] md:text-xs font-bold tracking-wider uppercase mt-2.5 transition-colors duration-300",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground/80 group-hover:text-foreground"
                  )}
                >
                  {isActive ? "ACTIVE" : `STEP ${index + 1}`}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Stepper */}
      <div className="relative max-w-sm mx-auto mb-6 px-2 md:hidden">
        <div className="absolute top-5 left-8 right-8 h-[2px] bg-gray-200 dark:bg-gray-700 z-0" />
        <div className="flex justify-between items-center relative z-10">
          {steps.map((_, index) => {
            const isActive = activeStep === index;
            const stepNumber = String(index + 1).padStart(2, "0");

            return (
              <button
                key={index}
                type="button"
                onClick={() => setActiveStep(index)}
                className="flex flex-col items-center cursor-pointer"
              >
                <div
                  className={cn(
                    "w-10 h-10 rounded-full font-bold text-xs flex items-center justify-center transition-all duration-300",
                    isActive
                      ? "bg-primary text-white ring-4 ring-primary/25 shadow-md scale-105"
                      : "bg-card dark:bg-[var(--brand-dark)] border-2 border-gray-200 dark:border-gray-700 text-muted-foreground"
                  )}
                >
                  {stepNumber}
                </div>
                <span
                  className={cn(
                    "text-[9px] font-bold tracking-wider uppercase mt-1.5",
                    isActive ? "text-primary" : "text-muted-foreground/80"
                  )}
                >
                  {isActive ? "ACTIVE" : `S${index + 1}`}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 5 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 w-full">
        {steps.map((step, index) => {
          const isActive = activeStep === index;

          return (
            <div
              key={index}
              onClick={() => setActiveStep(index)}
              className={cn(
                "rounded-2xl p-5 md:p-6 text-center transition-all duration-300 cursor-pointer flex flex-col items-center justify-start border",
                isActive
                  ? "bg-card dark:bg-[var(--brand-dark)] border-primary/60 shadow-xl shadow-primary/5 ring-1 ring-primary/30 -translate-y-1"
                  : "bg-card/80 dark:bg-[var(--brand-dark)]/80 border-border/70 dark:border-primary/20 hover:border-primary/40 hover:bg-card dark:hover:bg-[var(--brand-dark)] shadow-sm hover:shadow-md hover:-translate-y-0.5"
              )}
            >
              <h3
                className={cn(
                  "text-sm md:text-base font-bold mb-2 leading-tight transition-colors duration-200",
                  isActive
                    ? "text-primary dark:text-primary"
                    : "text-[var(--brand-dark)] dark:text-white"
                )}
              >
                {step.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground dark:text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Centered CTA Button */}
      <div className="flex justify-center mt-10 md:mt-12">
        <Link
          href="/contact"
          className="btn-glow-accent inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm sm:text-base shadow-xl hover:scale-105 transition-all duration-300"
        >
          <Phone className="w-4 h-4" />
          <span>Start Your Journey</span>
        </Link>
      </div>
    </div>
  );
};

export default ProcessStepsClient;
