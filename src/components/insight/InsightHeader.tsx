import { Calendar } from 'lucide-react'

interface InsightHeaderProps {
    title: string;
    date: string;
    shortDescription: string;
}

const InsightHeader: React.FC<InsightHeaderProps> = ({ title, date, shortDescription }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="mb-8">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-balance darkLight-text-color">
            {title}
        </h2>

        <div className="flex items-center gap-4 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span className="darkLight-text-color">{formattedDate}</span>
            </div>
        </div>

        <p className="text-base md:text-lg darkLight-text-color font-medium leading-relaxed italic border-l-4 border-[var(--custom-bg-accent)] pl-4">
            {shortDescription}
        </p>
    </div>
  )
}

export default InsightHeader
