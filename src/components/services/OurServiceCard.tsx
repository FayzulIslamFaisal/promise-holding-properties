import { Card, CardContent } from "@/components/ui/card";
import { DotIcon } from "lucide-react";
import Image from "next/image";

export interface ServiceCardData {
  id: number;
  icon: React.ElementType | string;
  title: string;
  description: string;
  tags?: string[];
}

const OurServiceCard: React.FC<{ service: ServiceCardData }> = ({ service }) => {
  const isImageIcon = typeof service.icon === "string";

  return (
    <Card className="group relative py-0" variant={"hoverEffect"}>
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--custom-bg-primary)]/10 to-from-[var(--custom-bg-accent)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardContent className="p-8 relative z-1">
        <div className="mb-6">
          <div className="w-16 h-16 bg-[var(--custom-bg-accent)] rounded-2xl flex items-center justify-center mb-4 transition-all duration-500">
            {isImageIcon ? (
              <Image src={service.icon as string} alt={service.title} width={40} height={40} className="w-10 h-10 object-contain group-hover:animate-pulse" />
            ) : (
              (() => { const ServiceIcon = service.icon as React.ElementType; return <ServiceIcon className="w-10 h-10 darkLight-text-color text-[var(--custom-bg-white)] group-hover:animate-pulse" />; })()
            )}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-[var(--custom-text-primary)] dark:text-[var(--custom-text-secondary)] dark:group-hover:text-[var(--custom-bg-white)] mb-4 ">
          {service.title}
        </h3>

        <p className="darkLight-text-color leading-relaxed text-lg">{service.description}</p>

        {service.tags && service.tags.length > 0 && (
          <ul className="mt-4 list-disc list-inside darkLight-text-color">
            {service.tags.map((tag, index) => (
              <li key={index} className="text-md list-none flex gap-2 items-center"><DotIcon /><span>{tag}</span></li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

export default OurServiceCard;
