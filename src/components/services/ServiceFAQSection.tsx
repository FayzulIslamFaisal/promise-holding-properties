import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionTitle from "../common/SectionTitle";
import { companyServiceService } from "@/services";
import { FaqItem } from "@/types/api";

const fallbackFaqs: FaqItem[] = [
  {
    id: 1,
    question: 'What is the "Shared Land Development" model?',
    answer:
      'The Shared Land Development model allows multiple buyers to collectively purchase a parcel of land and jointly develop residential apartments at actual construction cost. By eliminating third-party developer profit margins, buyers can acquire premium flats and land shares at 30-40% lower costs than conventional market rates.',
    status: 1,
  },
  {
    id: 2,
    question: "Where is Promise Haven City located?",
    answer:
      "Promise Haven City is strategically located in an upcoming prime residential zone with rapid connectivity to Dhaka city centers, major expressways, metro access, top educational institutions, and healthcare facilities. Contact our team for detailed site maps and guided visits.",
    status: 1,
  },
  {
    id: 3,
    question: "How do I book a land share or flat in this project?",
    answer:
      "Booking is simple: visit our corporate office or book online by submitting your NID/passport copy, passport-size photographs, and completing the initial booking money. You will receive an official allotment receipt, verified project documentation, and legal deed agreements.",
    status: 1,
  },
  {
    id: 4,
    question: "Can I pay for my property share in installments?",
    answer:
      "Yes, we offer flexible, construction-linked installment plans. After the initial down payment for the land share, construction expenses are distributed across easy monthly or quarterly milestones tailored to your financial convenience.",
    status: 1,
  },
  {
    id: 5,
    question: "What happens if my booking is canceled or I want a refund?",
    answer:
      "Our policies are completely transparent. If you choose to cancel your booking within the stipulated agreement period, your invested funds will be processed for refund according to the terms outlined in your deed and booking contract with zero hidden penalties.",
    status: 1,
  },
  {
    id: 6,
    question: "How are the specific flats or units distributed among buyers?",
    answer:
      "Unit and floor allocations are carried out transparently through a democratic lottery system or priority-based selection among registered shareholders, supervised by an independent legal committee to ensure 100% fair distribution.",
    status: 1,
  },
  {
    id: 7,
    question: "Who manages the construction work and architectural design?",
    answer:
      "The entire architectural planning, structural engineering, and construction supervision are managed by renowned architectural firms and Promise Holding's certified engineering team adhering to Bangladesh National Building Code (BNBC) and RAJUK standards.",
    status: 1,
  },
  {
    id: 8,
    question: "Is car parking included with every flat share?",
    answer:
      "Car parking spaces are systematically planned across basement and ground levels. Depending on your share type and allotment package, dedicated covered car parking is either included or available through standard mutual allocation.",
    status: 1,
  },
  {
    id: 9,
    question: "Can I sell or transfer my share to someone else during the project?",
    answer:
      "Yes, shareholders have full legal rights to transfer, assign, or sell their land share and flat entitlement to a third party with formal authorization and record updating through Promise Holding's legal desk.",
    status: 1,
  },
  {
    id: 10,
    question: "What amenities will be available in the completed buildings?",
    answer:
      "Completed projects feature high-speed European lifts, 24/7 solar backup generators, CCTV security, fire safety systems, rooftop gardens, community hall, gym facilities, modern water purification, and children's play zones.",
    status: 1,
  },
];

const ServiceFAQSection = async () => {
  let faqsRes: FaqItem[] = [];
  try {
    const res = await companyServiceService.getFaqs();
    faqsRes = res.data || [];
  } catch (error) {
    console.error("Error fetching FAQs:", error);
  }

  const faqs = faqsRes.length > 0 ? faqsRes : fallbackFaqs;

  const mid = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, mid);
  const rightFaqs = faqs.slice(mid);

  return (
    <section className="px-4">
      <div className="container mx-auto sectionSpaceBorder">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Have a question? We've got answers!"
          border_b={true}
        />

        {/* 2-column grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
          <Accordion type="single" collapsible className="space-y-4">
            {leftFaqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={`item-${faq.id}`}
                className="border border-primary/30 rounded-xl px-5 bg-primary/10 hover:bg-primary/15 dark:bg-[var(--brand-dark)] transition-colors"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg font-semibold text-[var(--brand-dark)] dark:text-primary hover:no-underline focus:outline-none [&>svg]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[var(--brand-dark)] dark:text-white text-sm sm:text-base pt-2 pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Accordion type="single" collapsible className="space-y-4">
            {rightFaqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={`item-${faq.id}`}
                className="border border-primary/30 rounded-xl px-5 bg-primary/10 hover:bg-primary/15 dark:bg-[var(--brand-dark)] transition-colors"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg font-semibold text-light-black dark:text-white hover:text-primary active:text-primary hover:no-underline focus:outline-none [&>svg]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-light-black dark:text-white text-sm sm:text-base pt-2 pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQSection;
