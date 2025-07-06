import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Shield, Cctv, Users, Thermometer, Snowflake, DollarSign, Activity } from "lucide-react";

const PropertyFeatures = () => {
  const features = [
    {
      icon: Home,
      label: "PARKING",
      value: "Yes",
      color: "text-blue-600"
    },
    {
      icon: Shield,
      label: "SECURITY",
      value: "Yes",
      color: "text-blue-600"
    },
    {
      icon: Cctv,
      label: "CCTV",
      value: "Yes",
      color: "text-blue-600"
    },
    {
      icon: Users,
      label: "CONFERENCE HALL",
      value: "Yes",
      color: "text-blue-600"
    },
    {
      icon: Thermometer,
      label: "HEATING",
      value: "Yes",
      color: "text-blue-600"
    },
    {
      icon: Snowflake,
      label: "COOLING",
      value: "Yes",
      color: "text-blue-600"
    },
    {
      icon: DollarSign,
      label: "$/SQFT",
      value: "342",
      color: "text-green-600"
    },
    {
      icon: Activity,
      label: "STATUS",
      value: "Active",
      color: "text-green-600"
    }
  ];

  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-[var(--custom-text-primary)]/75">Facts and Features</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className={`p-2 rounded-full bg-white ${feature.color}`}>
                <feature.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  {feature.label}
                </p>
                <p className="text-lg font-semibold text-gray-900">
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
