import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface Faq {
  id: number;
  question: string;
  answer: string;
}

const faqs: Faq[] = [
  {
    id: 1,
    question: "How do I start the home buying process?",
    answer:
      "Begin with a consultation where we discuss your budget, preferences, and timeline. We then provide pre-approval assistance and start searching for properties that match your criteria.",
  },
  {
    id: 2,
    question: "What documents do I need to sell my property?",
    answer:
      "You'll need property deeds, tax records, mortgage information, HOA documents (if applicable), and any recent appraisals. We'll provide a complete checklist during our initial meeting.",
  },
  {
    id: 3,
    question: "How long does the typical transaction take?",
    answer:
      "Most transactions take 30-45 days from offer acceptance to closing. However, cash purchases can close in as little as 2 weeks, while complex transactions may take longer.",
  },
  {
    id: 4,
    question: "Do you provide property management services?",
    answer:
      "Yes, we offer comprehensive property management including tenant screening, rent collection, maintenance coordination, and financial reporting for investment properties.",
  },
  {
    id: 5,
    question: "What are your commission rates?",
    answer:
      "Our commission rates are competitive and vary based on the property type and services required. We provide transparent pricing with no hidden fees during our initial consultation.",
  },
  {
    id: 6,
    question: "Can you help with investment property analysis?",
    answer:
      "We provide detailed market analysis, ROI calculations, cash flow projections, and investment strategy recommendations to help you make informed decisions.",
  },
  {
    id: 7,
    question: "Do you work with first-time homebuyers?",
    answer:
      "Yes, we specialize in helping first-time buyers navigate the process. We provide education on financing options, guide you through inspections, and ensure you understand each step.",
  },
  {
    id: 8,
    question: "What areas do you serve?",
    answer:
      "We serve the entire metropolitan area including downtown, suburban communities, and surrounding counties. Contact us to confirm service availability in your specific area.",
  },
];

const ServiceFAQSection: React.FC = () => {
  return (
    <section className="px-4">
      <div className="container mx-auto py-10 md:py-12 border-b border-[var(--custom-bg-accent)]/40">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our real estate services.
          </p>
        </div>
        <div className="max-w-[100%] md:max-w-[70%] mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={`item-${faq.id}`}
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-card-foreground hover:no-underline focus:outline-none">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2 pb-4">
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

