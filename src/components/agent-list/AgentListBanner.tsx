import Image from "next/image"

const AgentListBanner = () => {
  return (
    <section className="sectionSpaceBorder pt-0">
        <div className="relative h-[calc(100vh-200px)] md:h-[calc(100vh-200px)]">
            <Image
                src="/assets/images/media-center/img1.jpg"
                alt="agent Banner"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-[var(--custom-bg-primary)]/20 backdrop-filter dark:bg-[var(--custom-bg-accent)]/20 z-10" />
            <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
                <div className="max-w-full px-4 md:max-w-4xl mx-auto">
                    <h1 className="bannerText">
                       Meet Our Elite Agents
                    </h1>
                    <p className="text-[var(--custom-text-white)] text-lg md:text-xl ">Connect with our exceptional team of real estate professionals who deliver unparalleled service and expertise in luxury property transactions.e</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AgentListBanner
