import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionTitle from "../common/SectionTitle";
import { companyServiceService } from "@/services";
import { FaqItem } from "@/types/api";

const fallbackFaqs: FaqItem[] = [
  {
    id: 1,
    question: "How do I start the home buying process?",
    answer:
      "Begin with a consultation where we discuss your budget, preferences, and timeline. We then provide pre-approval assistance and start searching for properties that match your criteria.",
    status: 1
  },
  {
    id: 2,
    question: "What documents do I need to sell my property?",
    answer:
      "You'll need property deeds, tax records, mortgage information, HOA documents (if applicable), and any recent appraisals. We'll provide a complete checklist during our initial meeting.",
    status: 1
  },
  {
    id: 3,
    question: "How long does the typical transaction take?",
    answer:
      "Most transactions take 30-45 days from offer acceptance to closing. However, cash purchases can close in as little as 2 weeks, while complex transactions may take longer.",
    status: 1
  },
  {
    id: 4,
    question: "Do you provide property management services?",
    answer:
      "Yes, we offer comprehensive property management including tenant screening, rent collection, maintenance coordination, and financial reporting for investment properties.",
    status: 1
  },
  {
    id: 5,
    question: "What are your commission rates?",
    answer:
      "Our commission rates are competitive and vary based on the property type and services required. We provide transparent pricing with no hidden fees during our initial consultation.",
    status: 1
  },
  {
    id: 6,
    question: "Can you help with investment property analysis?",
    answer:
      "We provide detailed market analysis, ROI calculations, cash flow projections, and investment strategy recommendations to help you make informed decisions.",
    status: 1
  },
  {
    id: 7,
    question: "Do you work with first-time homebuyers?",
    answer:
      "Yes, we specialize in helping first-time buyers navigate the process. We provide education on financing options, guide you through inspections, and ensure you understand each step.",
    status: 1
  },
  {
    id: 8,
    question: "What areas do you serve?",
    answer:
      "We serve the entire metropolitan area including downtown, suburban communities, and surrounding counties. Contact us to confirm service availability in your specific area.",
    status: 1
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

  return (
    <section className="px-4">
      <div className="container mx-auto sectionSpaceBorder">
        <SectionTitle title="Frequently Asked Questions" subtitle="Have a question? We've got answers!"  border_b={true} />
        <div className="max-w-[100%] lg:max-w-[70%] mx-auto p-4 border border-primary/30 bg-primary/20 dark:bg-[var(--brand-dark)] rounded-lg shadow-2xl">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={`item-${faq.id}`}
              className="border border-primary/30 rounded-lg px-6 bg-primary/10 hover:bg-primary/20 dark:bg-[var(--brand-dark)]"
            >
              <AccordionTrigger className="text-left text-md md:text-lg font-bold text-[var(--brand-dark)] dark:text-primary hover:no-underline focus:outline-none">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[var(--brand-dark)] dark:text-white text-base pt-2 pb-4">
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

