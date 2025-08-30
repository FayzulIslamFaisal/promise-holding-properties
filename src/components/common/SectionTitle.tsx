
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
    <div className="text-center mb-6 md:mb-10">
        <div className="mb-3 md:mb-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 capitalize font-bold darkLight-text-color">
                <span >{firstPart} {" "}</span>
                {secondPart && <span className="text-[var(--custom-text-secondary)]">{secondPart}</span>}
            </h1>
            {border_b && <div className="w-24 h-1 bg-[var(--custom-text-secondary)] mx-auto"></div>}
        </div>
        {subtitle && <p className="text-base darkLight-text-color">{subtitle}</p>}
    </div>
  )
}

export default SectionTitle
