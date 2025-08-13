import { Card, CardContent } from "@/components/ui/card";
import { DotIcon } from "lucide-react";

interface Service {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  tags: string[];
}

const OurServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const ServiceIcon = service.icon;

  return (
    <Card className="group relative py-0 overflow-hidden border border-[var(--custom-bg-accent)]/40 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-[var(--custom-bg-white)] dark:bg-[var(--custom-bg-primary)]">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--custom-bg-primary)]/10 to-from-[var(--custom-bg-accent)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardContent className="p-8 relative z-10">
        <div className="mb-6">
          <div className="w-16 h-16 bg-[var(--custom-bg-primary)] dark:bg-[var(--custom-bg-accent)] rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[var(--custom-bg-accent)] dark:group-hover:bg-[var(--custom-bg-white)] transition-all duration-500">
            <ServiceIcon className="w-10 h-10 text-[var(--custom-bg-body)] dark:text-[var(--custom-bg-primary)]" />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-[var(--custom-text-primary)] dark:text-[var(--custom-text-secondary)] dark:group-hover:text-[var(--custom-bg-white)] mb-4 ">
          {service.title}
        </h3>

        <p className="text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] leading-relaxed text-lg">{service.description}</p>

        <ul className="mt-4 list-disc list-inside text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]">
          {service.tags.map((tag, index) => (
            <li key={index} className="text-md list-none flex gap-2 items-center"><DotIcon /><span>{tag}</span></li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default OurServiceCard;
