
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check } from "lucide-react";

const PropertyAmenities = () => {
  const amenities = [
    "24-hour security",
    "Central Heating", 
    "Emergency Exit",
    "Furnished offices",
    "Gym",
    "IT support",
    "Kitchen",
    "Lawn",
    "Meeting rooms",
    "On-Site Parking",
    "Printing Facilities",
    "Shared Internet",
    "Window Coverings"
  ];

  return (
    <Card className="mt-6 pb-6">
      <CardTitle className="px-6 py-0 text-xl text-[var(--custom-text-primary)]">
        Offices Amenities
      </CardTitle>
      <CardContent className="pt-0">
        <div className="border rounded-lg p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="p-1 rounded-sm bg-[var(--custom-bg-accent)]">
                  <Check className="h-4 w-4 text-[var(--custom-text-secondary)]" />
                </div>
                <span className="text-sm font-medium text-[var(--custom-text-primary)]/75">
                  {amenity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>

  );
};

export default PropertyAmenities;
