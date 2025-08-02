"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {
      name: "",
      phone: "",
      email: "",
    }

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Enter your valid phone number"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter a valid email address"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    setErrors(newErrors)
    return !Object.values(newErrors).some((error) => error !== "")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      console.log("Form submitted:", formData)
      // Handle form submission here
    }
  }

  return (
    <section className="px-4">
    <div className="container mx-auto pt-10 pb-10 md:pb-14 md:pt-14 border-b border-[var(--custom-bg-accent)]/40">
      <div className="text-center mb-5 md:mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold dark:text-[var(--custom-bg-white)] text-[var(--custom-bg-primary)]">
            Connect & Explore
          </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3 max-w-full lg:max-w-[1024px] mx-auto">
        <div className="">
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            className="border-b border-[var(--custom-bg-accent)] dark:border-[var(--custom-bg-white)] px-4 md:py-6 py-4 w-full dark:text-[var(--custom-text-white)] text-[var(--custom-text-black)] placeholder:text-[var(--custom-text-primary)] dark:placeholder:text-[var(--custom-text-white)] "
            placeholder="Name *"
          />
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
        </div>

        <div className="">
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            className="border-b border-[var(--custom-bg-accent)] dark:border-[var(--custom-bg-white)] px-4 md:py-6 py-4 w-full dark:text-[var(--custom-text-white)] text-[var(--custom-text-black)] placeholder:text-[var(--custom-text-primary)] dark:placeholder:text-[var(--custom-text-white)] "
            placeholder="Phone *"
          />
          {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div className="">
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border-b border-[var(--custom-bg-accent)] dark:border-[var(--custom-bg-white)] px-4 md:py-6 py-4 w-full dark:text-[var(--custom-text-white)] text-[var(--custom-text-black)] placeholder:text-[var(--custom-text-primary)] dark:placeholder:text-[var(--custom-text-white)] "
            placeholder="Email *"
          />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="">
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="border-b border-[var(--custom-bg-accent)] dark:border-[var(--custom-bg-white)] px-4 md:py-6 py-4 w-full dark:text-[var(--custom-text-white)] text-[var(--custom-text-black)] placeholder:text-[var(--custom-text-primary)] dark:placeholder:text-[var(--custom-text-white)] "
            placeholder="Message..."
          />
        </div>

        <div className="pt-4 flex justify-center gap-2">
          <Button
            type="submit"
            variant="default"
            className="btn-glow-accent"
          >
            <span className="text-sm font-medium">Submit</span>
            <ArrowRight className="w-4 h-4" />
            
          </Button>
        </div>
      </form>
    </div>
    </section>
  )
}
export default ContactForm
