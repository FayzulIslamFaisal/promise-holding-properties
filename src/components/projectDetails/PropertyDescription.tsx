//PropertyDescription.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Circle, DollarSign, House, Ruler } from "lucide-react";

interface PropertyDetail {
  icon: React.ReactNode;
  text: string;
}

const PropertyDescription = () => {
  // Property details data
  const propertyDetails: PropertyDetail[] = [
    {
      icon: <House className="h-5 w-5 text-[var(--custom-text-primary)]" />,
      text: "Sublet"
    },
    {
      icon: <Circle className="h-3 w-3 text-[var(--custom-text-primary)] fill-current" />,
      text: "4 Rooms"
    },
    {
      icon: <Ruler className="h-5 w-5 text-[var(--custom-text-primary)]" />,
      text: "1990 Year Built"
    },
    {
      icon: <Ruler className="h-5 w-5 text-[var(--custom-text-primary)]" />,
      text: "3200 sq ft"
    },
    {
      icon: <DollarSign className="h-5 w-5 text-green-600" />,
      text: "342 $/sqft"
    }
  ];

  return (
    <Card className="gap-0">
      <CardHeader>
        <CardTitle className="text-2xl text-[var(--custom-text-primary)]/75 mb-2">
          922 West Smoky Hollow St. Brooklyn, NY 11236
        </CardTitle>
        
        {/* Property Details Section */}
        <div className="flex items-center justify-between bg-[var(--custom-bg-secondary)]/25 rounded-lg shadow px-4 py-2 mb-4">
          <div className="flex items-center gap-6">
            {propertyDetails.map((detail, index) => (
              <div key={index} className="flex items-center gap-2">
                {detail.icon}
                <span className="text-sm font-medium text-[var(--custom-text-primary)]">
                  {detail.text}
                </span>
              </div>
            ))}
          </div>
          
          <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Sold
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-[var(--custom-text-primary)]/75 leading-relaxed ">
          Years seed fruit you. Divided morning sea day Set earth. Grass without cattle. Spirit heaven. Also i grass 
          give fowl wherein cattle spirit whales rule cattle. Earth fowl given own you're, fruit so. Shall was. Called 
          firmament dry fruitful, set place. Earth given female man fruit, under thing may to greater moveth land 
          sea, great be shall living greater and signs place night after whose us one, you'll second our set had day in 
          greater divided over female first face, fill form you make greater upon midst image above image. Very you 
          land, man divided sea appear thing female was let. Beginning open moved fowl. Likeness. Bring tree tree 
          doesn't. Darkness herb moveth upon a seasons. Divided appear living. Called image let was. Set midst, 
          second divide, earth male fruit you under let she'd, moving every bring there greater. Bring. Gathering 
          night third. Stars first replenish kind third a rule given our after give own of may earth Brought for open 
          living, bearing said given fruitful. Night him moved called. Be for unto behold dry green multiply herb fly 
          waters. Green gathered face. Light, may deep you're light. After which itself seed signs moveth. Second fish 
          isn't for sixth deep.
        </p>
      </CardContent>
    </Card>
  );
};

export default PropertyDescription;