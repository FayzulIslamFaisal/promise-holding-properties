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
                            <h2 id="faqs" className="text-lg md:text-xl font-semibold text-[var(--brand-dark)] dark:text-white mb-4">
                            FAQs
                            </h2>
                            <div className="space-y-5">
                            <div>
                                <p className="font-semibold text-[var(--brand-dark)] dark:text-white text-sm md:text-base">
                                What is the process for buying a property?
                                </p>
                                <p className="mt-1 text-primary text-sm">
                                We guide you step-by-step from property selection, site visits, legal verification, documentation, booking, to final registration and handover.
                                </p>
                            </div>

                            <div>
                                <p className="font-semibold text-[var(--brand-dark)] dark:text-white text-sm md:text-base">
                                Are there any additional hidden fees or charges?
                                </p>
                                <p className="mt-1 text-primary text-sm">
                                We maintain 100% pricing transparency. All utility connections, registration fees, and documentation costs are clearly specified upfront without any hidden charges.
                                </p>
                            </div>
                            </div>
                        </div>

                        {/* Contact Us */}
                        <div className="flex flex-col gap-4">
                            <h2
                            id="contact-us"
                            className="text-lg md:text-xl font-semibold text-[var(--brand-dark)] dark:text-white mb-2"
                            >
                            Contact Us
                            </h2>

                            <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary flex-shrink-0">
                                <Phone className="h-4 w-4 text-white" aria-hidden="true" />
                                </span>
                                <div className="text-[var(--brand-dark)] dark:text-white text-sm md:text-base flex flex-col leading-tight">
                                    <a href="tel:09647444444" className="hover:underline">09647 444 444</a>
                                    <a href="tel:01958063331" className="hover:underline">01958 063 331</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary flex-shrink-0">
                                <Mail className="h-4 w-4 text-white" aria-hidden="true" />
                                </span>
                                <a href="mailto:info@promiseassets.com" className="text-[var(--brand-dark)] dark:text-white text-sm md:text-base hover:underline">
                                    info@promiseassets.com
                                </a>
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
