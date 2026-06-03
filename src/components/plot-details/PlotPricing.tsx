'use client';

import { useState, useEffect } from "react";
import { DollarSign, Calculator, Percent } from "lucide-react";
import { Card } from "@/components/ui/card";
import SectionTitle from "../common/SectionTitle";

interface PlotPricingProps {
  pricePerSqft: number;
  defaultAreaSqft: number;
}

const PlotPricing = ({ pricePerSqft, defaultAreaSqft }: PlotPricingProps) => {
  const [length, setLength] = useState<string>("60");
  const [width, setWidth] = useState<string>("66");
  const [calcPrice, setCalcPrice] = useState<number>(pricePerSqft * defaultAreaSqft);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Initialize dimensions based on default area
  useEffect(() => {
    // Standard layouts
    if (defaultAreaSqft === 3960) { setLength("60"); setWidth("66"); }
    else if (defaultAreaSqft === 2880) { setLength("60"); setWidth("48"); }
    else if (defaultAreaSqft === 5400) { setLength("90"); setWidth("60"); }
    else if (defaultAreaSqft === 7200) { setLength("100"); setWidth("72"); }
    else if (defaultAreaSqft === 2520) { setLength("60"); setWidth("42"); }
    else { setLength("80"); setWidth("54"); }
  }, [defaultAreaSqft]);

  // Recalculate price when dimensions change
  useEffect(() => {
    const l = parseFloat(length) || 0;
    const w = parseFloat(width) || 0;
    const area = l * w;
    setCalcPrice(area * pricePerSqft);
  }, [length, width, pricePerSqft]);

  const totalPlotPrice = pricePerSqft * defaultAreaSqft;
  const bookingMoney = totalPlotPrice * 0.10; // 10%
  const downPayment = totalPlotPrice * 0.20; // 20%
  const installment48 = (totalPlotPrice - bookingMoney - downPayment) / 48;

  const isLabelFloating = (field: string, value: string) => {
    return focusedField === field || value.length > 0;
  };

  return (
    <section className="px-4">
      <div className="container mx-auto sectionSpaceBorder">
        <SectionTitle
          title="Pricing & Investment Details"
          border_b={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8">
          {/* Left Side: Price Details Card */}
          <div className="lg:col-span-6 flex">
            <Card className="w-full p-6 md:p-8 flex flex-col justify-between border-primary/20 bg-white dark:bg-[var(--brand-dark)] shadow-xl rounded-xl">
              <div>
                <h3 className="text-xl md:text-2xl font-bold dark:text-white text-[var(--brand-dark)] mb-6 flex items-center gap-2">
                  <DollarSign className="text-primary w-6 h-6" /> Price Breakdown
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100 dark:border-gray-800">
                    <span className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium">Base Rate</span>
                    <span className="text-base md:text-lg font-bold dark:text-white text-[var(--brand-dark)]">{pricePerSqft.toLocaleString()} BDT / sqft</span>
                  </div>

                  <div className="flex justify-between items-center pb-3 border-b border-gray-100 dark:border-gray-800">
                    <span className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium">Total Area</span>
                    <span className="text-base md:text-lg font-bold dark:text-white text-[var(--brand-dark)]">{defaultAreaSqft.toLocaleString()} sqft</span>
                  </div>

                  <div className="flex justify-between items-center pb-3 border-b border-gray-100 dark:border-gray-800">
                    <span className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium">Booking Money (10%)</span>
                    <span className="text-base md:text-lg font-semibold text-primary">{bookingMoney.toLocaleString()} BDT</span>
                  </div>

                  <div className="flex justify-between items-center pb-3 border-b border-gray-100 dark:border-gray-800">
                    <span className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium">Down Payment (20%)</span>
                    <span className="text-base md:text-lg font-semibold text-primary">{downPayment.toLocaleString()} BDT</span>
                  </div>

                  <div className="flex justify-between items-center pb-3 border-b border-gray-100 dark:border-gray-800">
                    <span className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium">Estimated Installment (48 Months)</span>
                    <span className="text-base md:text-lg font-bold dark:text-white text-[var(--brand-dark)]">{Math.round(installment48).toLocaleString()} BDT / month</span>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20 flex gap-3 items-start">
                  <Percent className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    Flexible installment plans up to 60 months are available. Special discounts apply for 100% upfront cash purchases. Contact our representative to customize your payment schedule.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-primary/10 border border-primary/30 rounded-xl p-4 text-center">
                <span className="text-xs text-gray-500 uppercase tracking-widest block font-bold mb-1">Standard Plot Value</span>
                <span className="text-2xl md:text-3xl font-extrabold text-primary">{totalPlotPrice.toLocaleString()} BDT</span>
              </div>
            </Card>
          </div>

          {/* Right Side: Interactive Dimensions Calculator */}
          <div className="lg:col-span-6 flex">
            <Card className="w-full p-6 md:p-8 flex flex-col justify-between border-primary/20 bg-white dark:bg-[var(--brand-dark)] shadow-xl rounded-xl">
              <div>
                <h3 className="text-xl md:text-2xl font-bold dark:text-white text-[var(--brand-dark)] mb-6 flex items-center gap-2">
                  <Calculator className="text-primary w-6 h-6" /> Custom Area Estimator
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  Estimate total cost by defining your custom plot width and length.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="relative flex-1">
                      <input
                        type="number"
                        id="length"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        onFocus={() => setFocusedField("length")}
                        onBlur={() => setFocusedField(null)}
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
                        onFocus={() => setFocusedField("width")}
                        onBlur={() => setFocusedField(null)}
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
                    <p className="text-xs text-primary font-bold uppercase tracking-wider mb-1">Estimated Custom Area</p>
                    <p className="text-3xl font-extrabold text-[var(--brand-dark)] dark:text-white">
                      {((parseFloat(length) || 0) * (parseFloat(width) || 0)).toFixed(2)} <span className="text-lg font-medium text-gray-500 dark:text-gray-400">sq.ft</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-semibold dark:text-white text-[var(--brand-dark)]">Estimated Cost:</span>
                  <span className="text-2xl font-extrabold text-primary">{Math.round(calcPrice).toLocaleString()} BDT</span>
                </div>

                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact-form-section');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full bg-primary hover:bg-primary/95 text-white font-bold py-3 px-4 rounded-lg transition-colors flex justify-center items-center gap-2 shadow-lg shadow-primary/30"
                >
                  <span>Book This Plot</span>
                  <Calculator className="w-4 h-4" />
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlotPricing;
