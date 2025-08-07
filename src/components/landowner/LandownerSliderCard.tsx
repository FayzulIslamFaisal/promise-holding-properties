import { Card, CardContent } from "@/components/ui/card";

interface CardData {
  id: number;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

interface Props {
  card: CardData;
  Icon: React.ComponentType<{ className?: string }>;
}

const LandownerSliderCard = ({ card, Icon }: Props) => {
  return (
    <Card className="group relative h-70 py-0 border-0 bg-transparent cursor-pointer transition-all duration-500 hover:scale-102 overflow-hidden">
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-[var(--custom-bg-white)]/10 backdrop-blur-md rounded-xl border border-[var(--custom-bg-white)]/20 transition-all duration-500 group-hover:bg-[var(--custom-bg-primary)]/20 group-hover:border-[var(--custom-bg-white)]/40 z-10" />

      {/* Glowing Border Layer */}
      <div className="absolute inset-0 z-10 rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--custom-bg-primary)]/40 via-[var(--custom-bg-accent)]/20 to-[var(--custom-bg-primary)]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-[1px] rounded-xl bg-[var(--custom-bg-white)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <CardContent className="relative z-20 h-full flex flex-col items-center justify-center px-6 py-8 text-center">
        <div className="mb-6 p-4 rounded-full bg-[var(--custom-bg-white)]/10 backdrop-blur-sm border border-[var(--custom-bg-white)]/20 transition-all duration-500 group-hover:bg-bg-[var(--custom-bg-primary)]/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-white/40">
          <Icon className="w-8 h-8 text-[var(--custom-bg-white)] transition-all duration-500 group-hover:text-[var(--custom-bg-white)]" />
        </div>

        <h3 className="text-md font-bold text-[var(--custom-bg-white)] mb-3 transition-all duration-500 group-hover:text-[var(--custom-bg-white)] group-hover:scale-105">
          {card.title}
        </h3>

        <p className="text-[var(--custom-bg-white)]/80 text-sm leading-relaxed transition-all duration-500 group-hover:text-[var(--custom-bg-white)]/90">
          {card.description}
        </p>

        <div className="mt-4 w-0 h-0.5 bg-gradient-to-r from-[var(--custom-bg-primary)] to-[var(--custom-bg-primary)] transition-all duration-500 group-hover:w-16" />
      </CardContent>
    </Card>
  );
};

export default LandownerSliderCard;
