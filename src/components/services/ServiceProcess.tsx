import { CheckCircle } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "Initial meeting to understand your requirements, budget, and preferences.",
  },
  {
    number: "02",
    title: "Property Selection",
    description: "Curated property options based on your criteria and market analysis.",
  },
  {
    number: "03",
    title: "Legal Verification",
    description: "Thorough legal and technical verification of selected properties.",
  },
  {
    number: "04",
    title: "Deal Closure",
    description: "Negotiation, documentation, and completion of the transaction.",
  },
  {
    number: "05",
    title: "Handover",
    description: "Final handover with all necessary documents and ongoing support.",
  },
]
const ServiceProcess = () => {
  return (
    <section className="px-4">
      <div className="container mx-auto py-10 md:py-12 border-b border-[var(--custom-bg-accent)]/40">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] mb-4">How It <span className="text-[var(--custom-text-secondary)]">Works</span> </h2>
          <p className="text-xl text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] max-w-full md:max-w-2xl mx-auto">
            Our streamlined process ensures a smooth and hassle-free real estate experience.
          </p>
        </div>

          <div className="relative max-w-[100%] md:max-w-[60%] mx-auto">
            {/* Progress Line */}
            <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-border hidden md:block" />
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-16 h-16 bg-[var(--custom-bg-accent)]/90 text-[var(--custom-text-white)] rounded-full flex items-center justify-center font-bold text-lg relative z-10">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] flex items-center gap-4">{step.title} <CheckCircle className="h-6 w-6 text-[var(--custom-text-secondary)]" /></h3>
                    <p className="text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]/60 text-md sm:text-lg">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceProcess
