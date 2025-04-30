'use client'
import { cn } from "@/lib/utils";
import { images } from "@/services";
import { ArrowLongTailIcon, CallMissedIcon } from "@/services/assets/svgs";
import Image from "next/image";
import { GradientButton } from "@/components/ui/gradient-button";
import { socialsData } from "@/services/data/shared.data";
import BallBounceText from "../animations/BallBounceText";
import ZRotationText from "../animations/ZRotationText";
import { Button } from "../ui/button";
import SectionSubHeader from "../common/SectionSubHeader";
import TextFadeIn from "../animations/TextFadeIn";
import ArrowLineupButton from "../ui/arrow-lineup-button";
import colors from "@/lib/colors";
import { Import } from "lucide-react";
import AnimatedTitle from "../ui/AnimatedTitle";
import { useEffect, useRef, useState } from "react";
import AnimatedText from "../ui/AnimatedTitle";

const HeroHome = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after mount
    setIsVisible(true);
  }, []);
  
  return (
    <section className="bg-[url('/images/patterns/hero-bg.png')]  bg-cover bg-center">
    <section className="containerX font-[600] w-full pt-10 md:pt-20 lg:pt-[0px] pb-[0px] relative px-0 lg:px-16 2xl:px-20">
    <div className="flex flex-col lg:flex-row gap-10 px-4 sm:px-8">
      {/* Left portion */}
      <div className="flex flex-col w-full lg:w-[50%]  py-[0px] lg:py-[100px] ">
      
      <TextFadeIn text="The Future of" className="justify-center text-4xl md:text-[50px] lg:text-[65px] xl:text-[80px] !leading-[1.2] mt-6 md:mt-10 text-text-800 font-medium"
        />
        <TextFadeIn text="Education Management" className="text-center lg:text-left text-5xl md:text-[50px] lg:text-[65px] xl:text-[80px] font-extrabold !leading-[1.2] mt-3 md:mt-2 text-text-800"
        />
      <AnimatedText text="A Powerful School & College Management System Designed to Streamline Administration, Enhance Learning, and Connect Everyone Seamlessly" className="mt-5 text-center lg:text-left text-xs md:text-sm" />
        

        <div className="mt-5 lg:mt-10 flex items-center justify-center lg:justify-start gap-2 md:gap-4">
          
          
          <GradientButton className="w-fit group bg-skyish-700 hover:bg-sky-600 py-2.5">
            <span className="!leading-none py-1 text-sm lg:text-base">Get Started</span>
          </GradientButton>
        </div>
      </div>

      {/* Right portion */}
      <div className="w-full lg:w-[50%] flex flex-col justify-end relative overflow-hidden">
      <Image
        alt="hero star glass image"
        src={images.heroPathshala}
        className={`w-auto lg:w-full h-[300px] lg:h-auto object-contain transition-all duration-700 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        width={0}
        height={0}
        sizes="100vw"
      />
    </div>
    </div>
    {/* <div className="flex flex-col lg:flex-row justify-between items-center py-4 rounded-lg mt-12">
 
  <div className="flex items-center space-x-4">

    <div className="flex space-x-[-20px]">
      <Image src={images.Sponsor1} alt="Badge 1" className="w-[50px] md:w-[60px] h-[50px] md:h-[60px] rounded-full border-2 border-white" />
      <Image src={images.Sponsor2} alt="Badge 2" className="w-[50px] md:w-[60px] h-[50px] md:h-[60px] rounded-full border-2 border-white" />
      <Image src={images.Sponsor3} alt="Badge 3" className="w-[50px] md:w-[60px] h-[50px] md:h-[60px] rounded-full border-2 border-white" />
      <Image src={images.Sponsor4} alt="Badge 4" className="w-[50px] md:w-[60px] h-[50px] md:h-[60px] rounded-full border-2 border-white" />
      <div className="w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-amber-500 text-white text-sm font-bold flex items-center justify-center rounded-full border-2 border-white">400+</div>
    </div>
    <span className="text-gray-800 font-medium text-base md:text-lg">Institutes Enrolled</span>
  </div>

  <div className="flex items-center space-x-4 lg:space-x-16 mt-6 lg:mt-0 md:space-x-8">
    <Image src={images.NetroLogo} alt="Netro" className="w-24" />
    <Image src={images.BkashLogo} alt="bKash" className="w-16" />
    <Image src={images.NagadLogo} alt="Nagad" className="w-16" />
    <Image src={images.RocketLogo} alt="Rocket" className="w-14" />
  </div>
</div> */}

  </section>
  </section>
  );
};

export default HeroHome;
