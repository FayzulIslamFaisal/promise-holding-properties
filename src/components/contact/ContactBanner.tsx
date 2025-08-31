import Image from "next/image"
const ContactBanner = () => {
  return (
    <section className=" pb-10 md:pb-14 border-b border-[var(--custom-bg-accent)]/40 ">
        <div className="relative h-[calc(100vh-200px)] md:h-[calc(100vh-200px)]">
            <Image
                src="/assets/images/contact/banner.jpg"
                alt="Media Center Banner"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-[var(--custom-bg-primary)]/20 backdrop-filter dark:bg-[var(--custom-bg-accent)]/20 z-10" />
            <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
                <div className="max-w-full px-4 md:max-w-4xl mx-auto">
                    <h1 className="bannerText">
                        Contact Us
                    </h1>
                    <p className="text-[var(--custom-text-white)] capitalize text-lg md:text-xl ">contact our team of professionals for support</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactBanner
