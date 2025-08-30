
interface TitleSubtitleProps {
  title: string;
  subtitle?: string;
  border_b?: boolean;
}
const SectionTitle: React.FC<TitleSubtitleProps> = ({ title, subtitle, border_b= false}) => {
    const titleParts = title.split(' ');
    const firstPart = titleParts[0];
    const secondPart = titleParts.slice(1).join(' ');
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl capitalize font-bold darkLight-text-color">
        <span >{firstPart}</span>
        {secondPart && <span className="text-[var(--custom-text-secondary)]"> {secondPart}</span>}
      </h1>
      {border_b && <div className="w-20 h-1 bg-primary my-2 rounded"></div>}
      {subtitle && <p className="text-base darkLight-text-color">{subtitle}</p>}
    </div>
  )
}

export default SectionTitle
