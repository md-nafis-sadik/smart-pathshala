"use client";
import SectionHeader from "@/components/common/SectionHeader";
import TestimonialCard from "./TestimonialCard";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import useEmblaButtons from "@/hooks/EmblaCarousel";
import {
  LeftSignIcon,
  QuoteStraightIcon,
  RightSignIcon,
} from "@/services/assets/svgs";
import Autoplay from "embla-carousel-autoplay";
import { testimonialsData } from "@/services/data/shared.data";

const Testimonial = () => {
  const autoplayOptions = { delay: 3000 };
  const options = { align: "start", loop: true } as const;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay(autoplayOptions),
  ]);
  const { onPrevButtonClick, onNextButtonClick } = useEmblaButtons(emblaApi);

  return (
    <div className="containerX w-full py-20 md:py-[120px] relative">
      <div className="w-fit relative mx-auto h-fit">
        <h2 className="text-center text-3xl md:text-[50px] font-bold text-gray-900">
          Trusted by Schools, Teachers & Administrators Across Bangladesh
        </h2>
      </div>

      {/* CAROUSEL */}
      <div className="w-full overflow-x-hidden">
        <div className="w-full" ref={emblaRef}>
          <div className="flex gap-3 md:gap-6 lg:gap-8 w-full">
            {testimonialsData.map(({ name, title, avatar, id, message }) => (
              <TestimonialCard
                key={id}
                name={name}
                title={title}
                avatar={avatar}
                message={message}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="hidden md:flex_center gap-8 mt-10 md:mt-[60px]">
        <button
          onClick={onPrevButtonClick}
          className="btn bg-white h-10 md:h-[60px] w-10 md:w-[60px] border border-natural-300 hover:bg-main-500 rounded-full flex_center"
        >
          <LeftSignIcon className="h-6 w-6 group-hover:text-white" />
        </button>
        <button
          onClick={onNextButtonClick}
          className="btn bg-white h-10 md:h-[60px] w-10 md:w-[60px] border border-natural-300 hover:bg-main-500 rounded-full flex_center"
        >
          <RightSignIcon className="h-6 w-6 group-hover:text-white" />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;