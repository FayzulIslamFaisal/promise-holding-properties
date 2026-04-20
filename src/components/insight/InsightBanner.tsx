import Image from 'next/image'

interface InsightBannerProps {
    banner: string;
    title: string;
}

const InsightBanner: React.FC<InsightBannerProps> = ({ banner, title }) => {
  return (
    <section className="sectionSpaceBorder pt-0">
        <div className="relative h-[300px] md:h-[calc(100vh-200px)]">
            <Image
                src={banner}
                alt={title}
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-[var(--custom-bg-primary)]/20 backdrop-filter dark:bg-[var(--custom-bg-accent)]/20 z-1" />
            <div className="absolute inset-0 z-1 flex items-center justify-center text-center">
                <div className="max-w-full px-4 md:max-w-4xl mx-auto">
                    <h1 className="bannerText">
                        {title}
                    </h1>
                </div>
            </div>
        </div>
    </section>
  )
}

export default InsightBanner
