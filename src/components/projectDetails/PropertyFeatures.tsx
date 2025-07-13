import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Home,
  Shield,
  Cctv,
  Users,
  DollarSign,
  Landmark,
  ShoppingCart,
  Trees,
  Volleyball,
  Snowflake,
  MoveUpRight ,
  Flame,
  Lightbulb,
  Wifi,
  Phone,
  BatteryCharging,
  ParkingSquare,
  BedDouble,
  Building2,
  Droplets,
} from "lucide-react";

import { LucideIcon } from "lucide-react";


interface Feature {
  icon: LucideIcon;
  label: string;
  value: string;
}
interface BuildingFeature {
  icon: LucideIcon;
  label: string;
  value: string;
}
interface PropertyFeaturesProps {
  buildingPage?: boolean;
}


const PropertyFeatures = ({ buildingPage = false }: PropertyFeaturesProps) => {
  const features: Feature[] = [
  {
    icon: Home,
    label: "PARKING",
    value: "Yes",
  },
  {
    icon: Shield,
    label: "SECURITY",
    value: "Yes",
  },
  {
    icon: Cctv,
    label: "CCTV",
    value: "Yes",
  },
  {
    icon: Users,
    label: "CONFERENCE HALL",
    value: "Yes",
  },
  {
    icon: Snowflake,
    label: "COOLING",
    value: "Yes",
  },
  {
    icon: DollarSign,
    label: "$/SQFT",
    value: "342",
  },
  {
    icon: Trees,
    label: "GREEN ZONE",
    value: "Yes",
  },
  {
    icon: Volleyball,
    label: "PLAY GROUND",
    value: "Yes",
  },
  {
    icon: Landmark,
    label: "MOSQUE",
    value: "Yes",
  },
  {
    icon: ShoppingCart,
    label: "SUPER SHOP",
    value: "Yes",
  },
];
 const buildingFeatures:BuildingFeature[] = [
  {
    icon: Home,
    label: "Parking",
    value: "Available",
  },
  {
    icon: Shield,
    label: "Security",
    value: "24/7 Guard",
  },
  {
    icon: Cctv,
    label: "CCTV",
    value: "Installed",
  },
  {
    icon: MoveUpRight ,
    label: "Lift",
    value: "Yes",
  },
  {
    icon: Flame,
    label: "Fire Safety",
    value: "Fire Extinguisher",
  },
  {
    icon: Trees,
    label: "Green Zone",
    value: "Yes",
  },
  {
    icon: Wifi,
    label: "Internet",
    value: "Wi-Fi Ready",
  },
  {
    icon: DollarSign,
    label: "$/SQFT",
    value: "342",
  },
  {
    icon: Landmark,
    label: "Mosque",
    value: "Nearby",
  },
  {
    icon: ShoppingCart,
    label: "Super Shop",
    value: "Inside",
  },
  {
    icon: Volleyball,
    label: "Play Area",
    value: "Available",
  },
  {
    icon: Snowflake,
    label: "Cooling",
    value: "Central",
  },
  {
    icon: Users,
    label: "Community Hall",
    value: "Yes",
  },
  {
    icon: BatteryCharging,
    label: "Generator",
    value: "Backup Available",
  },
  {
    icon: Lightbulb,
    label: "Electricity",
    value: "WASA / DESCO",
  },
  {
    icon: Phone,
    label: "Intercom",
    value: "Connected",
  },
  {
    icon: Droplets,
    label: "Water Supply",
    value: "24/7",
  },
  {
    icon: BedDouble,
    label: "Guest Room",
    value: "Optional",
  },
  {
    icon: ParkingSquare,
    label: "Bike Parking",
    value: "Yes",
  },
  {
    icon: Building2,
    label: "Roof Access",
    value: "Allowed",
  },
];

  return (
    <section>
      <div className="container mx-auto">
        <div className=" border-[var(--custom-bg-primary)]/10 border-b pb-12">
          <Card className="gap-4 border-0 shadow border-[var(--custom-bg-primary)]/10 border">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-[var(--custom-text-primary)]/75">{buildingPage? "Building Features ":"Project Features"}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`grid grid-cols-2 gap-3 ${buildingPage ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'}`}>
                
                {(buildingPage ? buildingFeatures : features).map((feature, index) => (
                  <div key={index} className="flex items-center flex-col justify-center sm:justify-start sm:flex-row gap-3 p-4 bg-[var(--custom-bg-accent)]/15 rounded-lg hover:bg-[var(--custom-bg-primary)]/25 transition-colors relative h-full">
                      <div className={`p-2 rounded-full bg-[var(--custom-bg-white)] text-[var(--custom-bg-primary)]`}>
                          <feature.icon className="h-8 w-8" />
                      </div>
                    <div>
                      <p className="text-sm font-medium text-[var(--custom-text-primary)] uppercase tracking-wide text-center">
                        {feature.label}
                      </p>
                      <p className="text-lg font-semibold text-[var(--custom-text-primary)] text-center">
                        {feature.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PropertyFeatures;
