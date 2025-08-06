import Image from "next/image"

const AllProjectBanner = () => {
  return (
    <section className=" pb-10 md:pb-14 border-b border-[var(--custom-bg-accent)]/40 ">
        <div className="relative h-[calc(100vh-250px)] md:h-[calc(100vh-200px)]">
            <Image
                src="/assets/images/slider/banner7.png"
                alt="Media Center Banner"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-[var(--custom-bg-primary)]/20 backdrop-filter dark:bg-[var(--custom-bg-accent)]/20 z-10" />
            <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
                <div className="max-w-full px-4 md:max-w-4xl mx-auto">
                    <h1 className="text-[var(--custom-text-white)] text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-4">
                       Our All Projects
                    </h1>
                    <p className="text-[var(--custom-text-white)] text-lg md:text-xl ">Crafting Your Dream Home</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AllProjectBanner
