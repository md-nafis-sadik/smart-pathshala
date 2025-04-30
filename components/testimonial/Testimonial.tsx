"use client";

import { useState } from 'react';
import TestimonialCard from "./TestimonialCard";
import useEmblaCarousel from "embla-carousel-react";
import useEmblaButtons from "@/hooks/EmblaCarousel";
import {
  LeftSignIcon,
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
  const [hovered, setHovered] = useState(false);

  return (
    <div className="containerX w-full py-20 md:py-[120px] relative">
      <div>
    <h2 className="text-center text-3xl md:text-[50px] xl:text-[64px] font-bold text-gray-900">Testimonials</h2>
          <p className="text-center mt-7 text-gray-600 text-base">
          Trusted by Schools, Teachers & Administrators Across Bangladesh
          </p>
          </div>

      {/* CAROUSEL */}
      <div className="w-full overflow-x-hidden">
        <div className="w-full" ref={emblaRef}>
          <div className="flex gap-3 md:gap-6 lg:gap-8 w-full">
            {testimonialsData.map(({ name, title, avatar, id, message,designation }) => (
              <TestimonialCard
                key={id}
                name={name}
                title={title}
                avatar={avatar}
                message={message}
                designation={designation}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="hidden md:flex_center gap-8 mt-10 md:mt-[60px]">
        <button
          onClick={onPrevButtonClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="btn bg-white h-10 md:h-[60px] w-10 md:w-[60px] border hover:text-white border-natural-50 shadow-lg hover:bg-skyish-700 rounded-full flex_center"
        >
          <LeftSignIcon className="h-6 w-6 " color= {hovered ? '#FFFFFF' : '#0C0C0C'}  />
        </button>
        <button
          onClick={onNextButtonClick}
          className="btn bg-white h-10 md:h-[60px] w-10 md:w-[60px] border hover:text-white border-natural-50 shadow-lg hover:bg-skyish-700 rounded-full flex_center"
        >
          <RightSignIcon className="h-6 w-6 " color= {hovered ? '#FFFFFF' : '#0C0C0C'}  />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;