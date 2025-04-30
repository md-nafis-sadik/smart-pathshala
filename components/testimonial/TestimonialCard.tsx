import { inter, scoutCond } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { QuoteIconv2 } from "@/services";
import { QuoteIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface IFTestimonialCard {
  message: string;
  avatar: StaticImageData;
  name: string;
  title: string;
}

const TestimonialCard = ({
  message,
  avatar,
  name,
  title,
}: IFTestimonialCard) => {
  return (
    <div className="flex rounded-2xl bg-[#F0F8FF] flex-col mt-10 md:mt-20 flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] select-none p-8">
      <QuoteIconv2 className="w-5 h-5 md:w-[33px] md:h-[27px] text-primary-500 mb-6" />
      <div className="text-base md:text-lg font-semibold text-center lg:text-left mb-3 twxt-[#191919]">{title}</div>
      <div className="text-sm md:text-base !leading-[1.6] text-center lg:text-left max-w-full">
        {message}
      </div>

      <div className="flex gap-3 items-center mt-6 w-full">
        <Image
          src={avatar}
          alt="avatar"
          className="w-[52px] md:w-[60px] h-[52px] md:h-[60px]"
          width={500}
          height={500}
        />
        <div className="flex flex-col">
          <p className="text-base font-bold uppercase">
            {name}
          </p>
          <p className="text-sm text-text-600">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;