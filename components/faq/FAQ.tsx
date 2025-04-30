'use client'



import { useState, useRef } from "react";
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
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  "General Information",
  "Features & Benefits",
  "Security & Privacy",
  "Getting Started",
  "Mobile App & Access",
];

const FAQ = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredFaqs = faqData.filter((item) => item.category === selectedCategory);

  const scrollTabs = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -150 : 150,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white flex_center flex-col w-full py-20">
      <div>
        <h2 className="text-center text-3xl md:text-[50px] xl:text-[64px] font-bold text-gray-900">FAQ</h2>
        <p className="text-center mt-6 text-gray-600 text-base">
          Find answers to common questions about Smart Pathshala.
        </p>
      </div>

      {/* Category Tabs with Scroll */}
      <div className="relative w-full containerX mt-10">
        
        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar space-x-4 lg:space-x-8 w-[95%] lg:w-full  mx-auto scroll"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "flex-shrink-0 px-5 lg:px-8 py-2.5 lg:py-4 rounded-full border text-sm font-medium transition-all",
                selectedCategory === cat
                  ? "bg-skyish-700 text-white"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
        
      </div>

      {/* Accordion */}
      <div className="containerX mt-10">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="w-full mx-auto flex flex-col gap-3"
        >
          {filteredFaqs.map(({ question, answer }, index) => (
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
                  "text-xs md:text-base text-gray-600 font-normal font-inter"
                )}
              >
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

<div className="hidden lg:flex gap-6 mt-10">
      <div className="">
          <button onClick={() => scrollTabs("left")} className="p-3 lg:p-[18px] bg-white hover:bg-skyish-700 hover:text-white transition-all shadow-lg rounded-full hover:-translate-y-1">
            <ChevronLeft />
          </button>
        </div>
        <div className="">
          <button onClick={() => scrollTabs("right")} className="p-3 lg:p-[18px] bg-white hover:bg-skyish-700 hover:text-white transition-all shadow-lg rounded-full hover:-translate-y-1">
            <ChevronRight />
          </button>
        </div>
        </div>
    </section>
  );
};

export default FAQ;
