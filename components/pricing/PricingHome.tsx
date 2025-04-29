import SectionHeader from "@/components/common/SectionHeader";
import SectionSubHeader from "@/components/common/SectionSubHeader";
import React from "react";
import { cn } from "@/lib/utils";
import { inter } from "@/lib/fonts";
import { pricingData } from "@/services/data";
import PricingCard from "./PricingHomeCard";

const PricingHome = () => {
  return (
    <section className="bg-black flex_center flex-col w-full py-20 overflow-hidden">
      <SectionSubHeader dark text="Our Pricing" />
      <SectionHeader
        lite
        text="Built to scale with"
        className="mt-5 md:mt-10"
      />
      <SectionHeader lite text="your ambitions." />

      <div className="containerX grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 my-10 md:my-20 sm:max-w-fit">
        {pricingData.map(
          ({ title, subtitle, price, popular, features }, index) => (
            <PricingCard
              key={index}
              index={index}
              title={title}
              subtitle={subtitle}
              price={price}
              popular={popular}
              features={features}
            />
          )
        )}
      </div>

      <p
        className={cn(
          "containerX text-center text-xs md:text-base font-normal !leading-[1.8] md:!leading-[1.4] text-text-200 font-inter"
        )}
      >
        Complete the form by clicking “Start Project” to send us a message. Our
        support team will promptly respond to your request.
      </p>
    </section>
  );
};

export default PricingHome;
