"use client"

import { useState, useEffect } from "react"
import { Calculator } from "lucide-react"

interface LandCalculatorProps {
  pricePerUnit?: number // price per sqft/katha, default 5000
}

const LandCalculator = ({ pricePerUnit = 5000 }: LandCalculatorProps) => {
  const [length, setLength] = useState<string>("50")
  const [width, setWidth] = useState<string>("40")
  const [totalPrice, setTotalPrice] = useState<string>("")
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleFocus = (field: string) => setFocusedField(field)
  const handleBlur = () => setFocusedField(null)
  
  const isLabelFloating = (field: string, value: string) => {
    return focusedField === field || value.toString().length > 0
  }

  // Effect to calculate price when length/width change
  useEffect(() => {
    if (focusedField === 'price') return; // Don't override price if user is typing it

    const l = parseFloat(length) || 0;
    const w = parseFloat(width) || 0;
    const area = l * w;
    if (area > 0) {
      setTotalPrice(Math.round(area * pricePerUnit).toString());
    } else {
      setTotalPrice("");
    }
  }, [length, width, pricePerUnit, focusedField])

  // Function to handle price change and auto-calculate length/width
  const handlePriceChange = (value: string) => {
    setTotalPrice(value);
    const price = parseFloat(value);
    
    if (price && price > 0) {
      const area = price / pricePerUnit;
      // Assuming a square for simplicity when calculating backwards
      const side = Math.sqrt(area);
      setLength(side.toFixed(2));
      setWidth(side.toFixed(2));
    } else {
      setLength("");
      setWidth("");
    }
  }

  return (
    <div className="bg-white dark:bg-[var(--brand-dark)] p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-primary/10 p-3 rounded-lg">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[var(--brand-dark)] dark:text-white">Land Area & Price</h3>
          <p className="text-sm text-gray-500">Calculate plot dimensions or total price</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <input
              type="number"
              id="length"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              onFocus={() => handleFocus("length")}
              onBlur={handleBlur}
              className="w-full pe-4 pt-8 pb-1 text-[var(--brand-dark)] dark:text-white bg-transparent border-b border-[var(--brand-dark)] dark:border-primary focus:border-primary focus:bg-transparent transition-all duration-200 outline-none peer"
            />
            <label
              htmlFor="length"
              className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                isLabelFloating("length", length)
                  ? "top-2 text-xs text-primary font-medium"
                  : "top-6 text-[var(--brand-dark)] dark:text-white"
              }`}
            >
              Length (ft)
            </label>
          </div>

          <div className="relative flex-1">
            <input
              type="number"
              id="width"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              onFocus={() => handleFocus("width")}
              onBlur={handleBlur}
              className="w-full pe-4 pt-8 pb-1 text-[var(--brand-dark)] dark:text-white bg-transparent border-b border-[var(--brand-dark)] dark:border-primary focus:border-primary focus:bg-transparent transition-all duration-200 outline-none peer"
            />
            <label
              htmlFor="width"
              className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                isLabelFloating("width", width)
                  ? "top-2 text-xs text-primary font-medium"
                  : "top-6 text-[var(--brand-dark)] dark:text-white"
              }`}
            >
              Width (ft)
            </label>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 flex flex-col justify-center items-center shadow-inner">
          <p className="text-xs text-primary font-bold uppercase tracking-wider mb-1">Total Plot Area</p>
          <p className="text-3xl font-extrabold text-[var(--brand-dark)] dark:text-white">
            {((parseFloat(length) || 0) * (parseFloat(width) || 0)).toFixed(2)} <span className="text-lg font-medium text-gray-500 dark:text-gray-400">sq.ft</span>
          </p>
        </div>

        <div className="relative">
          <input
            type="number"
            id="totalPrice"
            value={totalPrice}
            onChange={(e) => handlePriceChange(e.target.value)}
            onFocus={() => handleFocus("price")}
            onBlur={handleBlur}
            className="w-full pe-4 pt-8 pb-1 text-2xl font-bold text-primary bg-transparent border-b-2 border-primary/30 focus:border-primary focus:bg-transparent transition-all duration-200 outline-none peer"
          />
          <label
            htmlFor="totalPrice"
            className={`absolute left-0 transition-all duration-200 pointer-events-none ${
              isLabelFloating("price", totalPrice)
                ? "top-2 text-xs text-primary font-medium"
                : "top-6 text-[var(--brand-dark)] dark:text-white"
            }`}
          >
            Estimated Price (BDT)
          </label>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 text-xs text-gray-500 text-center">
          * Calculation based on base rate of {pricePerUnit} BDT/sq.ft. Price may vary based on exact plot location.
        </div>

        <div className="pt-4">
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact-form-section');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg transition-colors flex justify-center items-center gap-2 shadow-lg shadow-primary/30"
          >
            <span>Book This Plot</span>
            <Calculator className="w-4 h-4" /> {/* Or ArrowRight */}
          </button>
        </div>
      </div>
    </div>
  )
}

export default LandCalculator
