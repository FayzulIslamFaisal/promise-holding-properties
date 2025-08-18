"use client";

import { useState } from "react";
import { ArrowBigRightIcon } from "lucide-react";
import { Button } from "../ui/button";

const LandContactForm = () => {
  const [formData, setFormData] = useState({
    locality: "",
    address: "",
    landSize: "",
    frontRoadWidth: "",
    landCategory: "",
    facing: "",
    attractiveBenefits: "",
    landownerName: "",
    contactPerson: "",
    email: "",
    phone: "",
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
    <form
      onSubmit={handleSubmit}
      className="space-y-3 max-w-full mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="col-span-1">
          <p className="text-lg md:text-2xl  font-semibold text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]">Land Information</p>
          <div className="relative">
            <input
              type="text"
              id="locality"
              value={formData.locality}
              onChange={(e) => handleInputChange("locality", e.target.value)}
              onFocus={() => handleFocus("locality")}
              onBlur={handleBlur}
              className="w-full pe-4 pt-8 pb-1 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] bg-transparent border-b border-[var(--custom-bg-primary)] dark:border-[var(--custom-bg-accent)] focus:border-[var(--custom-bg-accent)] transition-all duration-200 outline-none peer"
            />
            <label
              htmlFor="locality"
              className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                isLabelFloating("locality", formData.locality)
                  ? "top-2 text-xs text-[var(--custom-text-secondary)] font-medium"
                  : "top-6 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]"
              }`}
            >
              Locality *
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
              className="w-full pe-4 pt-8 pb-1 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] bg-transparent border-b border-[var(--custom-bg-primary)] dark:border-[var(--custom-bg-accent)] focus:border-[var(--custom-bg-accent)] transition-all duration-200 outline-none peer"
            />
            <label
              htmlFor="address"
              className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                isLabelFloating("address", formData.address)
                  ? "top-2 text-xs text-[var(--custom-text-secondary)] font-medium"
                  : "top-6 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]"
              }`}
            >
              Address *
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              id="landSize"
              value={formData.landSize}
              onChange={(e) => handleInputChange("landSize", e.target.value)}
              onFocus={() => handleFocus("landSize")}
              onBlur={handleBlur}
              className="w-full pe-4 pt-8 pb-1 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] bg-transparent border-b border-[var(--custom-bg-primary)] dark:border-[var(--custom-bg-accent)] focus:border-[var(--custom-bg-accent)] transition-all duration-200 outline-none peer"
            />
            <label
              htmlFor="landSize"
              className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                isLabelFloating("landSize", formData.landSize)
                  ? "top-2 text-xs text-[var(--custom-text-secondary)] font-medium"
                  : "top-6 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]"
              }`}
            >
              Land Size
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              id="frontRoadWidth"
              value={formData.frontRoadWidth}
              onChange={(e) => handleInputChange("frontRoadWidth", e.target.value)}
              onFocus={() => handleFocus("frontRoadWidth")}
              onBlur={handleBlur}
              className="w-full pe-4 pt-8 pb-1 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] bg-transparent border-b border-[var(--custom-bg-primary)] dark:border-[var(--custom-bg-accent)] focus:border-[var(--custom-bg-accent)] transition-all duration-200 outline-none peer"
            />
            <label
              htmlFor="frontRoadWidth"
              className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                isLabelFloating("frontRoadWidth", formData.frontRoadWidth)
                  ? "top-2 text-xs text-[var(--custom-text-secondary)] font-medium"
                  : "top-6 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]"
              }`}
            >
              Front Road Width
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              id="landCategory"
              value={formData.landCategory}
              onChange={(e) => handleInputChange("landCategory", e.target.value)}
              onFocus={() => handleFocus("landCategory")}
              onBlur={handleBlur}
              className="w-full pe-4 pt-8 pb-1 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] bg-transparent border-b border-[var(--custom-bg-primary)] dark:border-[var(--custom-bg-accent)] focus:border-[var(--custom-bg-accent)] transition-all duration-200 outline-none peer"
            />
            <label
              htmlFor="landCategory"
              className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                isLabelFloating("landCategory", formData.landCategory)
                  ? "top-2 text-xs text-[var(--custom-text-secondary)] font-medium"
                  : "top-6 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]"
              }`}
            >
              Land Category
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              id="facing"
              value={formData.facing}
              onChange={(e) => handleInputChange("facing", e.target.value)}
              onFocus={() => handleFocus("facing")}
              onBlur={handleBlur}
              className="w-full pe-4 pt-8 pb-1 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] bg-transparent border-b border-[var(--custom-bg-primary)] dark:border-[var(--custom-bg-accent)] focus:border-[var(--custom-bg-accent)] transition-all duration-200 outline-none peer"
            />
            <label
              htmlFor="facing"
              className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                isLabelFloating("facing", formData.facing)
                  ? "top-2 text-xs text-[var(--custom-text-secondary)] font-medium"
                  : "top-6 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]"
              }`}
            >
              Facing
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              id="attractiveBenefits"
              value={formData.attractiveBenefits}
              onChange={(e) =>
                handleInputChange("attractiveBenefits", e.target.value)
              }
              onFocus={() => handleFocus("attractiveBenefits")}
              onBlur={handleBlur}
              className="w-full pe-4 pt-8 pb-1 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] bg-transparent border-b border-[var(--custom-bg-primary)] dark:border-[var(--custom-bg-accent)] focus:border-[var(--custom-bg-accent)] transition-all duration-200 outline-none peer"
            />
            <label
              htmlFor="attractiveBenefits"
              className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                isLabelFloating("attractiveBenefits", formData.attractiveBenefits)
                  ? "top-2 text-xs text-[var(--custom-text-secondary)] font-medium"
                  : "top-6 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]"
              }`}
            >
              Attractive Benefits (if any)
            </label>
          </div>
        </div>

        <div className="col-span-1">
          <p className="text-lg md:text-2xl  font-semibold text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]">Landowner{"'"}s Profile</p>

          {/* Landowner Name */}
          <div className="relative">
            <input
              type="text"
              id="landownerName"
              value={formData.landownerName}
              onChange={(e) => handleInputChange("landownerName", e.target.value)}
              onFocus={() => handleFocus("landownerName")}
              onBlur={handleBlur}
              className="w-full pe-4 pt-8 pb-1 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] bg-transparent border-b border-[var(--custom-bg-primary)] dark:border-[var(--custom-bg-accent)] focus:border-[var(--custom-bg-accent)] transition-all duration-200 outline-none peer"
            />
            <label
              htmlFor="landownerName"
              className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                isLabelFloating("landownerName", formData.landownerName)
                  ? "top-2 text-xs text-[var(--custom-text-secondary)] font-medium"
                  : "top-6 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]"
              }`}
            >
              Landowner Name *
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              id="contactPerson"
              value={formData.contactPerson}
              onChange={(e) => handleInputChange("contactPerson", e.target.value)}
              onFocus={() => handleFocus("contactPerson")}
              onBlur={handleBlur}
              className="w-full pe-4 pt-8 pb-1 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] bg-transparent border-b border-[var(--custom-bg-primary)] dark:border-[var(--custom-bg-accent)] focus:border-[var(--custom-bg-accent)] transition-all duration-200 outline-none peer"
            />
            <label
              htmlFor="contactPerson"
              className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                isLabelFloating("contactPerson", formData.contactPerson)
                  ? "top-2 text-xs text-[var(--custom-text-secondary)] font-medium"
                  : "top-6 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]"
              }`}
            >
              Contact Person
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
              className="w-full pe-4 pt-8 pb-1 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] bg-transparent border-b border-[var(--custom-bg-primary)] dark:border-[var(--custom-bg-accent)] focus:border-[var(--custom-bg-accent)] transition-all duration-200 outline-none peer"
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
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              onFocus={() => handleFocus("phone")}
              onBlur={handleBlur}
              className="w-full pe-4 pt-8 pb-1 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] bg-transparent border-b border-[var(--custom-bg-primary)] dark:border-[var(--custom-bg-accent)] focus:border-[var(--custom-bg-accent)] transition-all duration-200 outline-none peer"
            />
            <label
              htmlFor="phone"
              className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                isLabelFloating("phone", formData.phone)
                  ? "top-2 text-xs text-[var(--custom-text-secondary)] font-medium"
                  : "top-6 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]"
              }`}
            >
              Phone *
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
                className="w-full pe-4 pt-8 pb-1 text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] bg-transparent border-b border-[var(--custom-bg-primary)] dark:border-[var(--custom-bg-accent)] focus:border-[var(--custom-bg-accent)] transition-all duration-200 outline-none peer"
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
      <div className="flex items-center justify-center pt-5">
        <Button
          type="submit"
          variant={"default"}
          className="btn-glow-accent inline-block "
        >
          <div className="flex items-center gap-4">
            <ArrowBigRightIcon className="w-8 h-8 animate-pulse" />
            <span>Submit</span>
          </div>
        </Button>
      </div>
    </form>
  );
};

export default LandContactForm;
