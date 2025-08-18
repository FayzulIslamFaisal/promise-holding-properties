import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  CheckCircle2,
  DollarSign,
  Headphones,
  MapPin,
  Users,
  ShieldCheck,
  ThumbsUp,
  Clock,
} from "lucide-react";
import { ReactNode } from "react";

type HighlightItem = {
  icon: ReactNode;
  label: string;
};

type HighlightColumn = {
  title: string;
  items: HighlightItem[];
};

const highlightData: HighlightColumn[] = [
  {
    title: "Property Highlights",
    items: [
      {
        icon: <MapPin className="h-4 w-4 text-[var(--custom-text-white)]" />,
        label: "Prime Locations",
      },
      {
        icon: <DollarSign className="h-4 w-4 text-[var(--custom-text-white)]" />,
        label: "Competitive Prices",
      },
      {
        icon: <Building2 className="h-4 w-4 text-[var(--custom-text-white)]" />,
        label: "Modern Facilities",
      },
    ],
  },
  {
    title: "Why Choose Us",
    items: [
      {
        icon: <CheckCircle2 className="h-4 w-4 text-[var(--custom-text-white)]" />,
        label: "Trusted Service",
      },
      {
        icon: <Users className="h-4 w-4 text-[var(--custom-text-white)]" />,
        label: "Experienced Team",
      },
      {
        icon: <Headphones className="h-4 w-4 text-[var(--custom-text-white)]" />,
        label: "24/7 Support",
      },
    ],
  },
  {
    title: "Our Commitment",
    items: [
      {
        icon: <ShieldCheck className="h-4 w-4 text-[var(--custom-text-white)]" />,
        label: "Secure Transactions",
      },
      {
        icon: <ThumbsUp className="h-4 w-4 text-[var(--custom-text-white)]" />,
        label: "Customer Satisfaction",
      },
      {
        icon: <Clock className="h-4 w-4 text-[var(--custom-text-white)]" />,
        label: "On-Time Delivery",
      },
    ],
  },
];

const CustomerHighLights = () => {
  return (
    <section className="w-full flex items-start justify-center px-4 py-10 md:py-14 border-b border-[var(--custom-bg-accent)]/40">
      <div className="container mx-auto">
        <Card className="rounded-2xl border border-[var(--custom-bg-accent)]/20 py-0 shadow-sm bg-[var(--custom-bg-accent)]/10 dark:bg-[var(--custom-bg-primary)]">
          <CardContent className="p-5 sm:p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {highlightData.map((highlight, colIndex) => (
                <div key={colIndex}>
                  <h2
                    id={`highlight-${colIndex}`}
                    className="text-lg md:text-xl font-semibold text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] mb-4"
                  >
                    {highlight?.title}
                  </h2>
                  <ul className="space-y-4">
                    {highlight?.items.map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 text-center justify-center items-center rounded-full bg-[var(--custom-bg-accent)]">
                          {item?.icon}
                        </span>
                        <span className="text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] text-sm md:text-base">
                          {item?.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CustomerHighLights;
