"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import SectionTitle from "../common/SectionTitle"
import { contentService } from "@/services/content.service"

interface ContactFormProps {
  title?: string
  subtitle?: string
}

const ContactForm = ({ title = "Connect & Explore", subtitle }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<"success" | "error" | null>(null)
  
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus(null)

    try {
      const payload = {
        name: formData.fullName,
        number: formData.phoneNumber,
        email: formData.email,
        message: formData.message,
      }

      const response = await contentService.submitConnectExplore(payload)
      console.log(response)

      setStatus("success")
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        message: "",
      })
    } catch (error) {
      console.error("Form submission error:", error)
      setStatus("error")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="px-4">
    <div className="container mx-auto sectionSpaceBorder">
      <SectionTitle
          title={title}
          subtitle={subtitle}
          border_b={true}
        />

      <form onSubmit={handleSubmit} className="space-y-3 max-w-full lg:max-w-[1024px] mx-auto">
        <div className="relative">
          <input
            type="text"
            id="fullName"
            value={formData.fullName}
            onChange={(e) => handleInputChange("fullName", e.target.value)}
            onFocus={() => handleFocus("fullName")}
            onBlur={handleBlur}
            className="w-full pe-4 pt-8 pb-1 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] bg-transparent border-b border-[var(--custom-bg-primary)] dark:border-[var(--custom-bg-accent)] focus:border-[var(--custom-bg-accent)] focus:bg-transparent transition-all duration-200 outline-none peer"
          />
          <label
            htmlFor="fullName"
            className={`absolute left-0 transition-all duration-200 pointer-events-none ${
              isLabelFloating("fullName", formData.fullName)
                ? "top-2 text-xs text-[var(--custom-text-secondary)] font-medium"
                : "top-6 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]"
            }`}
          >
            Full Name
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
            className="w-full pe-4 pt-8 pb-1 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] bg-transparent border-b border-[var(--custom-bg-primary)] dark:border-[var(--custom-bg-accent)] focus:border-[var(--custom-bg-accent)] focus:bg-transparent transition-all duration-200 outline-none peer"
          />
          <label
            htmlFor="phoneNumber"
            className={`absolute left-0 transition-all duration-200 pointer-events-none ${
              isLabelFloating("phoneNumber", formData.phoneNumber)
                ? "top-2 text-xs text-[var(--custom-text-secondary)] font-medium"
                : "top-6 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]"
            }`}
          >
            Phone Number
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
            className="w-full pe-4 pt-8 pb-1 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] bg-transparent border-b border-[var(--custom-bg-primary)] dark:border-[var(--custom-bg-accent)] focus:border-[var(--custom-bg-accent)] focus:bg-transparent transition-all duration-200 outline-none peer"
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
            className="w-full pe-4 pt-6 pb-1 resize-none text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] bg-transparent border-b border-[var(--custom-bg-primary)] dark:border-[var(--custom-bg-accent)] focus:border-[var(--custom-bg-accent)] transition-all duration-200 outline-none peer"
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
      
        {status === "success" && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-sm dark:bg-green-900/30 dark:border-green-800 dark:text-green-400" role="alert">
            <span className="block sm:inline">Your request has been submitted successfully! We will get back to you soon.</span>
          </div>
        )}
        
        {status === "error" && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-sm dark:bg-red-900/30 dark:border-red-800 dark:text-red-400" role="alert">
            <span className="block sm:inline">Failed to submit your request. Please try again later.</span>
          </div>
        )}

        <div className="pt-4 flex justify-center gap-2">
          <Button
            type="submit"
            variant="default"
            className="btn-glow-accent"
            disabled={isLoading}
          >
            <span className="text-sm font-medium">{isLoading ? "Submitting..." : "Submit"}</span>
            {!isLoading && <ArrowRight className="w-4 h-4 animate-pulse" />}
            
          </Button>
        </div>
      </form>
    </div>
    </section>
  )
}
export default ContactForm
