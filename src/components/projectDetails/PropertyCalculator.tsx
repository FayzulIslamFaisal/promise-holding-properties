"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Info } from "lucide-react";

const PropertyCalculator = () => {


  return (
    <Card className="mt-6 bg-[var(--custom-bg-white)] text-[var(--custom-text-primary)]">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Mortgage Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Input Fields Section */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="totalAmount" className="text-[var(--custom-text-primary)] font-medium">Total Amount</Label>
            <Input
              id="totalAmount"
              type="text"
              defaultValue={`$ 50000`}
            //   onChange={(e) => setTotalAmount(e.target.value.replace('$', ''))}
              className=" text-[var(--custom-text-primary)] placeholder-gray-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="downPayment" className="text-[var(--custom-text-primary)] font-medium">Down Payment</Label>
            <Input
              id="downPayment"
              type="text"
              defaultValue={`$ 10000`}
            //   onChange={(e) => setDownPayment(e.target.value.replace('$', ''))}
              className=" text-[var(--custom-text-primary)] placeholder-gray-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="interestRate" className="text-[var(--custom-text-primary)] font-medium">Interest Rate</Label>
            <Input
              id="interestRate"
              type="text"
              defaultValue={`$ 5%`}
            //   onChange={(e) => setInterestRate(e.target.value.replace('%', ''))}
              className=" text-[var(--custom-text-primary)] placeholder-gray-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="amortizationPeriod" className="text-[var(--custom-text-primary)] font-medium">Amortization Period</Label>
            <Input
              id="amortizationPeriod"
              type="text"
              defaultValue={`5 Years`}
            //   onChange={(e) => setAmortizationPeriod(e.target.value.replace(' Years', ''))}
              className=" text-[var(--custom-text-primary)] placeholder-gray-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="paymentPeriod" className="text-[var(--custom-text-primary)] font-medium">Payment Period</Label>
            <Select className="w-full">
              <SelectTrigger className=" text-[var(--custom-text-primary)] w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className=" w-full">
                <SelectItem defaultValue="Monthly" className="text-[var(--custom-text-primary)] hover:bg-gray-600">Monthly</SelectItem>
                <SelectItem defaultValue="Bi-weekly" className="text-[var(--custom-text-primary)] hover:bg-gray-600">Bi-weekly</SelectItem>
                <SelectItem defaultValue="Weekly" className="text-[var(--custom-text-primary)] hover:bg-gray-600">Weekly</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-[var(--custom-bg-secondary)]/25 rounded-lg p-4 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">Payments: Paid </span>
            <Info className="h-5 w-5 text-blue-200" />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Total cost of loan</span>
              <span>${50000}</span>
            </div>
            
            <div className="flex justify-between">
              <span>Total Interest Paid</span>
              <span>${500}</span>
            </div>
            
            <div className="flex justify-between">
              <span>Payment</span>
              <span>{500}</span>
            </div>
            
            <div className="flex justify-between font-medium">
              <span>Mortgage Payment</span>
              <span>${500}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCalculator;
