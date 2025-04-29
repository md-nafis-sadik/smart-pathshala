import SectionHeader from "@/components/common/SectionHeader";
import SectionSubHeader from "@/components/common/SectionSubHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { faqData } from "@/services/data";

const FAQ = () => {
  return (
    <section className="bg-white flex_center flex-col w-full py-20">
      <SectionSubHeader dark text="Frequently asked questions" />
      <SectionHeader lite text="Common Queries" className="mt-6" />

      <div className="containerX mt-10 md:mt-20">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="w-full max-w-[844px] mx-auto flex flex-col gap-3"
        >
          {faqData.map(({ question, answer }, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger
                className={cn(
                  "text-sm md:text-xl font-medium md:font-bold text-black !leading-[1.4] md:!leading-[1.1] text-start font-inter"
                )}
              >
                {question}
              </AccordionTrigger>
              <AccordionContent
                className={cn(
                  "text-xs md:text-base text-white font-normal font-inter"
                )}
              >
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
