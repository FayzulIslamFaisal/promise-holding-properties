import { Button } from "../ui/button"
import { PhoneCall, Headphones, CheckCircle2 } from "lucide-react"

const features = [
  {
    id: 1,
    icon: PhoneCall,
    title: "Free Consultation",
    description: "Get expert advice tailored to your needs",
  },
  {
    id: 2,
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock assistance when you need it",
  },
  {
    id: 3,
    icon: CheckCircle2,
    title: "Proven Results",
    description: "Track record of successful transactions",
  },
]

const GetStartedService = () => {
  return (
    <section className="px-4">
      <div className="container mx-auto py-10 md:py-12 border-b border-[var(--custom-bg-accent)]/40">
        
        {/* Heading */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] mb-6">
            Ready to{" "}
            <span className="text-[var(--custom-text-secondary)]">Get Started?</span>
          </h2>
          <p className="text-xl text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] pb-2 leading-relaxed max-w-full md:max-w-3xl mx-auto">
            Take the next step in your real estate journey. Our expert team is ready to provide personalized solutions
            tailored to your specific needs.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          {features.map(({ id, icon: Icon, title, description }) => (
            <div
              key={id}
              className="text-center bg-[var(--custom-bg-accent)]/10 hover:bg-[var(--custom-bg-accent)]/20 dark:bg-[var(--custom-bg-primary)] rounded-2xl p-4 md:p-8"
            >
              <div className="w-20 h-20 bg-[var(--custom-bg-accent)] rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-[var(--custom-bg-accent)]/80 transition-colors duration-300">
                <Icon className="w-10 h-10 text-[var(--custom-bg-white)]" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--custom-text-secondary)] mb-3">
                {title}
              </h3>
              <p className="text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 md:mb-8">
          <Button
            variant={"default"}
            className="btn-glow-accent"
          >
            Schedule Consultation
          </Button>
          <Button
            variant="default"
            className="btn-glow-accent"
          >
            View Our Portfolio
          </Button>
        </div>

        {/* Footer Message */}
        <p className="text-center text-slate-500 text-lg">
          Join thousands of satisfied clients who trust us with their real estate needs
        </p>
      </div>
    </section>
  )
}

export default GetStartedService
