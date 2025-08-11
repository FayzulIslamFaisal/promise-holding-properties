"use client";

import { useState } from "react";
import { ArrowBigRightIcon } from "lucide-react";
import { Button } from "../ui/button";

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    category: "",
    location: "",
    size: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFocus = (field: string) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const isLabelFloating = (field: string, value: string) => {
    return focusedField === field || value.length > 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="px-4">
        <div className="container mx-auto py-10 md:py-12 border-b border-[var(--custom-bg-accent)]/40">
            <form
            onSubmit={handleSubmit}
            className="space-y-3 max-w-full mx-auto"
            >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="col-span-1">
                    <p className="text-lg md:text-2xl  font-semibold text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]">Customer Information</p>
                    <div className="pt-4">
                        <div className="relative">
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            onFocus={() => handleFocus("name")}
                            onBlur={handleBlur}
                            className="w-full pe-4 pt-8 pb-1 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] bg-transparent border-b border-[var(--custom-bg-primary)] dark:border-[var(--custom-bg-white)] focus:border-[var(--custom-bg-accent)] transition-all duration-200 outline-none peer"
                            />
                            <label
                            htmlFor="name"
                            className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                                isLabelFloating("name", formData.name)
                                ? "top-2 text-xs text-[var(--custom-text-secondary)] font-medium"
                                : "top-6 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]"
                            }`}
                            >
                            Name *
                            </label>
                        </div>

                        <div className="relative">
                            <input
                            type="text"
                            id="address"
                            value={formData.address}
                            onChange={(e) => handleInputChange("address", e.target.value)}
                            onFocus={() => handleFocus("address")}
                            onBlur={handleBlur}
                            className="w-full pe-4 pt-8 pb-1 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] bg-transparent border-b border-[var(--custom-bg-primary)] dark:border-[var(--custom-bg-white)] focus:border-[var(--custom-bg-accent)] transition-all duration-200 outline-none peer"
                            />
                            <label
                            htmlFor="address"
                            className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                                isLabelFloating("address", formData.address)
                                ? "top-2 text-xs text-[var(--custom-text-secondary)] font-medium"
                                : "top-6 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]"
                            }`}
                            >
                            Address 
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
                            className="w-full pe-4 pt-8 pb-1 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] bg-transparent border-b border-[var(--custom-bg-primary)] dark:border-[var(--custom-bg-white)] focus:border-[var(--custom-bg-accent)] transition-all duration-200 outline-none peer"
                            />
                            <label
                            htmlFor="email"
                            className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                                isLabelFloating("email", formData.email)
                                ? "top-2 text-xs text-[var(--custom-text-secondary)] font-medium"
                                : "top-6 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]"
                            }`}
                            >
                            Email 
                            </label>
                        </div>

                        <div className="relative">
                            <input
                            type="email"
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            onFocus={() => handleFocus("phone")}
                            onBlur={handleBlur}
                            className="w-full pe-4 pt-8 pb-1 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] bg-transparent border-b border-[var(--custom-bg-primary)] dark:border-[var(--custom-bg-white)] focus:border-[var(--custom-bg-accent)] transition-all duration-200 outline-none peer"
                            />
                            <label
                            htmlFor="phone"
                            className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                                isLabelFloating("phone", formData.phone)
                                ? "top-2 text-xs text-[var(--custom-text-secondary)] font-medium"
                                : "top-6 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]"
                            }`}
                            >
                            Phone Number *
                            </label>
                        </div>
                    </div>
                </div>

                <div className="col-span-1">
                    <p className="text-lg md:text-2xl  font-semibold text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]">Requirements</p>
                    <div className="pt-4">
                        <div className="relative">
                            <input
                            type="text"
                            id="category"
                            value={formData.category}
                            onChange={(e) => handleInputChange("category", e.target.value)}
                            onFocus={() => handleFocus("category")}
                            onBlur={handleBlur}
                            className="w-full pe-4 pt-8 pb-1 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] bg-transparent border-b border-[var(--custom-bg-primary)] dark:border-[var(--custom-bg-white)] focus:border-[var(--custom-bg-accent)] transition-all duration-200 outline-none peer"
                            />
                            <label
                            htmlFor="category"
                            className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                                isLabelFloating("category", formData.category)
                                ? "top-2 text-xs text-[var(--custom-text-secondary)] font-medium"
                                : "top-6 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]"
                            }`}
                            >
                            Category *
                            </label>
                        </div>
                        <div className="relative">
                            <input
                            type="text"
                            id="location"
                            value={formData.location}
                            onChange={(e) => handleInputChange("location", e.target.value)}
                            onFocus={() => handleFocus("location")}
                            onBlur={handleBlur}
                            className="w-full pe-4 pt-8 pb-1 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] bg-transparent border-b border-[var(--custom-bg-primary)] dark:border-[var(--custom-bg-white)] focus:border-[var(--custom-bg-accent)] transition-all duration-200 outline-none peer"
                            />
                            <label
                            htmlFor="location"
                            className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                                isLabelFloating("location", formData.location)
                                ? "top-2 text-xs text-[var(--custom-text-secondary)] font-medium"
                                : "top-6 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]"
                            }`}
                            >
                            Location *
                            </label>
                        </div>
                        <div className="relative">
                            <input
                            type="text"
                            id="size"
                            value={formData.size}
                            onChange={(e) => handleInputChange("size", e.target.value)}
                            onFocus={() => handleFocus("size")}
                            onBlur={handleBlur}
                            className="w-full pe-4 pt-8 pb-1 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] bg-transparent border-b border-[var(--custom-bg-primary)] dark:border-[var(--custom-bg-white)] focus:border-[var(--custom-bg-accent)] transition-all duration-200 outline-none peer"
                            />
                            <label
                            htmlFor="size"
                            className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                                isLabelFloating("size", formData.size)
                                ? "top-2 text-xs text-[var(--custom-text-secondary)] font-medium"
                                : "top-6 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]"
                            }`}
                            >
                            Size(sft)
                            </label>
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                id="message"
                                value={formData.message}
                                onChange={(e) => handleInputChange("message", e.target.value)}
                                onFocus={() => handleFocus("message")}
                                onBlur={handleBlur}
                                className="w-full pe-4 pt-8 pb-1 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] bg-transparent border-b border-[var(--custom-bg-primary)] dark:border-[var(--custom-bg-white)] focus:border-[var(--custom-bg-accent)] transition-all duration-200 outline-none peer"
                            />
                            <label
                                htmlFor="message"
                                className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                                isLabelFloating("message", formData.message)
                                    ? "top-2 text-xs text-[var(--custom-text-secondary)] font-medium"
                                    : "top-6 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]"
                                }`}
                            >
                                Message
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center pt-5">
                <Button
                type="submit"
                variant={"default"}
                className="btn-glow-accent inline-block "
                >
                <div className="flex items-center gap-4">
                    <span>Submit Enquiry</span>
                    <ArrowBigRightIcon className="w-8 h-8 animate-pulse" />
                </div>
                </Button>
            </div>
            </form>
        </div>
    </section>
  );
};

export default CustomerForm;

