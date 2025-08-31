import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"
import Link from "next/link"
const CustomerFaq = () => {
  return (
    <section className="px-4">
        <div className="container mx-auto sectionSpaceBorder">
            <Card className="py-0"  variant={"hoverEffect"}>
                <CardContent className="p-5 sm:p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* FAQs */}
                        <div>
                            <h2 id="faqs" className="text-lg md:text-xl font-semibold text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] mb-4">
                            FAQs
                            </h2>
                            <div className="space-y-5">
                            <div>
                                <p className="font-semibold text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] text-sm md:text-base">
                                What is the process for buying a property?
                                </p>
                                <p className="mt-1 text-[var(--custom-text-secondary)] text-sm">
                                Answer a common requirements as a natural approach to perfection depths.
                                </p>
                            </div>

                            <div>
                                <p className="font-semibold text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] text-sm md:text-base">
                                Are there any additional fees or charges?
                                </p>
                                <p className="mt-1 text-[var(--custom-text-secondary)] text-sm">
                                More information on any tanning fees or charges.
                                </p>
                            </div>
                            </div>
                        </div>

                        {/* Contact Us */}
                        <div className="flex flex-col gap-4">
                            <h2
                            id="contact-us"
                            className="text-lg md:text-xl font-semibold text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] mb-2"
                            >
                            Contact Us
                            </h2>

                            <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--custom-bg-accent)]">
                                <Phone className="h-4 w-4 text-[var(--custom-text-white)]" aria-hidden="true" />
                                </span>
                                <span className="text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] text-sm md:text-base">09647 444 444</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--custom-bg-accent)]">
                                <Mail className="h-4 w-4 text-[var(--custom-text-white)]" aria-hidden="true" />
                                </span>
                                <span className="text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] text-sm md:text-base">
                            info@promiseholding.com
                                </span>
                            </li>
                            </ul>

                            <div className="pt-2">
                            <Link
                                href="tel:09647 444 444"
                                className=" btn-glow-accent inline-block"
                            >
                                Book a Free Consultation
                            </Link>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
      
    </section>
  )
}

export default CustomerFaq
