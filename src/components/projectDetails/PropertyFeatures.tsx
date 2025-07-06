import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Shield, Cctv, Users, Thermometer, Snowflake, DollarSign, Activity } from "lucide-react";

const PropertyFeatures = () => {
  const features = [
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
      icon: Thermometer,
      label: "HEATING",
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
      icon: Activity,
      label: "STATUS",
      value: "Active",
    }
  ];

  return (
    <Card className="gap-4">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-[var(--custom-text-primary)]/75">Facts and Features</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3 p-4 bg-[var(--custom-bg-accent)]/15 rounded-lg hover:bg-[var(--custom-bg-primary)]/25 transition-colors">
                <div className={`p-2 rounded-full bg-[var(--custom-bg-white)] text-[var(--custom-bg-primary)]`}>
                    <feature.icon className="h-8 w-8" />
                </div>
              <div>
                <p className="text-sm font-medium text-[var(--custom-text-primary)] uppercase tracking-wide">
                  {feature.label}
                </p>
                <p className="text-lg font-semibold text-[var(--custom-text-primary)]">
                  {feature.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyFeatures;
