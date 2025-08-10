"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    reason: "",
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  })

  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleFocus = (field: string) => {
    setFocusedField(field)
  }

  const handleBlur = () => {
    setFocusedField(null)
  }

  const isLabelFloating = (field: string, value: string) => {
    return focusedField === field || value.length > 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="px-4">
    <div className="container mx-auto pt-10 pb-10 md:pb-14 md:pt-14 border-b border-[var(--custom-bg-accent)]/40">
      <div className="text-center mb-4 md:mb-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold dark:text-[var(--custom-bg-white)] text-[var(--custom-bg-primary)]">
          Get In Touch With Us
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3 max-w-full lg:max-w-[1024px] mx-auto">
        <div className="relative">
          <input
            type="text"
            id="reason"
            value={formData.reason}
            onChange={(e) => handleInputChange("reason", e.target.value)}
            onFocus={() => handleFocus("reason")}
            onBlur={handleBlur}
            className="w-full pe-4 pt-8 pb-1 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] bg-transparent border-b border-[var(--custom-bg-primary)] dark:border-[var(--custom-bg-white)] focus:border-[var(--custom-bg-accent)] focus:bg-transparent transition-all duration-200 outline-none peer"
          />
          <label
            htmlFor="reason"
            className={`absolute left-0 transition-all duration-200 pointer-events-none ${
              isLabelFloating("reason", formData.reason)
                ? "top-2 text-xs text-[var(--custom-text-secondary)] font-medium"
                : "top-6 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]"
            }`}
          >
            Reason for Contacting *
          </label>
        </div>
        <div className="relative">
          <input
            type="text"
            id="fullName"
            value={formData.fullName}
            onChange={(e) => handleInputChange("fullName", e.target.value)}
            onFocus={() => handleFocus("fullName")}
            onBlur={handleBlur}
            className="w-full pe-4 pt-8 pb-1 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] bg-transparent border-b border-[var(--custom-bg-primary)] dark:border-[var(--custom-bg-white)] focus:border-[var(--custom-bg-accent)] focus:bg-transparent transition-all duration-200 outline-none peer"
          />
          <label
            htmlFor="fullName"
            className={`absolute left-0 transition-all duration-200 pointer-events-none ${
              isLabelFloating("fullName", formData.fullName)
                ? "top-2 text-xs text-[var(--custom-text-secondary)] font-medium"
                : "top-6 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]"
            }`}
          >
            Full Name *
          </label>
        </div>

        <div className="relative">
          <input
            type="tel"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
            onFocus={() => handleFocus("phoneNumber")}
            onBlur={handleBlur}
            className="w-full pe-4 pt-8 pb-1 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] bg-transparent border-b border-[var(--custom-bg-primary)] dark:border-[var(--custom-bg-white)] focus:border-[var(--custom-bg-accent)] focus:bg-transparent transition-all duration-200 outline-none peer"
          />
          <label
            htmlFor="phoneNumber"
            className={`absolute left-0 transition-all duration-200 pointer-events-none ${
              isLabelFloating("phoneNumber", formData.phoneNumber)
                ? "top-2 text-xs text-[var(--custom-text-secondary)] font-medium"
                : "top-6 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]"
            }`}
          >
            Phone Number *
          </label>
        </div>

        <div className="relative">
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            onFocus={() => handleFocus("email")}
            onBlur={handleBlur}
            className="w-full pe-4 pt-8 pb-1 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] bg-transparent border-b border-[var(--custom-bg-primary)] dark:border-[var(--custom-bg-white)] focus:border-[var(--custom-bg-accent)] focus:bg-transparent transition-all duration-200 outline-none peer"
          />
          <label
            htmlFor="email"
            className={`absolute left-0 transition-all duration-200 pointer-events-none ${
              isLabelFloating("email", formData.email)
                ? "top-2 text-xs text-[var(--custom-text-secondary)] font-medium"
                : "top-6 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]"
            }`}
          >
            Email Address 
          </label>
        </div>

        <div className="relative">
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            onFocus={() => handleFocus("message")}
            onBlur={handleBlur}
            rows={2}
            className="w-full pe-4 pt-6 pb-1 resize-none text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] bg-transparent border-b border-[var(--custom-bg-primary)] dark:border-[var(--custom-bg-white)] focus:border-[var(--custom-bg-accent)] transition-all duration-200 outline-none peer"
          />
          <label
            htmlFor="message"
            className={`absolute left-0 transition-all duration-200 pointer-events-none ${
              isLabelFloating("message", formData.message)
                ? "top-2 text-xs text-[var(--custom-text-secondary)] font-medium"
                : "top-6 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]"
            }`}
          >
            Your Message
          </label>
        </div>
      
        <div className="pt-4 flex justify-center gap-2">
          <Button
            type="submit"
            variant="default"
            className="btn-glow-accent"
          >
            <span className="text-sm font-medium">Submit</span>
            <ArrowRight className="w-4 h-4 animate-pulse" />
            
          </Button>
        </div>
      </form>
    </div>
    </section>
  )
}
export default ContactForm

