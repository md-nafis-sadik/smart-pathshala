import React from "react";
import ArrowLineupButton from "../ui/arrow-lineup-button";
import colors from "@/lib/colors";
import { uxUiServicesData } from "@/services/data";
import Image from "next/image";
import { images } from "@/services";

const UXUIService = () => {
  return (
    <section className="containerX flex flex-col md:flex-row-reverse gap-6 md:gap-20 border-t border-dashed border-natural-300 py-10 md:py-20 font-inter">
      <div className="w-full md:w-2/5 !aspect-[0.87/1] md:h-fit !shrink-0 relative md:sticky md:top-10 overflow-hidden">
        <Image
          src={images.blog1}
          alt="Software development related image"
          className="min-h-full min-w-full max-h-[636px] absolute_center !shrink-0"
        />
      </div>

      <div className="w-full md:w-3/5 flex-col gap-4 md:gap-6">
        <p className="font-scoutcond text-[48px] lg:text-[96px] font-bold !leading-none text-text-900 uppercase">
          UXUI Design
        </p>

        <p className="text-sm lg:text-2xl font-normal !leading-[1.4] text-text-700 mt-4 md:mt-6">
          We design intuitive, engaging, and stunning interfaces that blend
          functionality and aesthetics to elevate your brand and enhance user
          experience.
        </p>

        <div className="flex flex-col mt-4 md:mt-6">
          {uxUiServicesData.map(({ serial, title }, index) => (
            <div
              className="flex flex-row items-center gap-6 lg:gap-12 py-4 lg:py-8"
              key={index}
            >
              <p className="text-text-200 text-lg font-semibold lg:font-bold !leading-[1.4]">
                {serial}
              </p>

              <p className="text-sm lg:text-lg !leading-[1.6] lg:!leading-[1.4] font-normal text-text-900">
                {title}
              </p>
            </div>
          ))}
        </div>

        <ArrowLineupButton color={colors.main[400]} className="mt-6 md:mt-10">
          See full details
        </ArrowLineupButton>
      </div>
    </section>
  );
};

export default UXUIService;
