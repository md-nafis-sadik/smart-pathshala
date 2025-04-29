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

const HeroHome = () => {
  return (
    <section className="containerX w-full pt-10 md:pt-20 lg:pt-[140px] pb-20 lg:pb-[20px] relative">
    <div className="flex flex-col md:flex-row gap-10">
      {/* Left portion */}
      <div className="flex flex-col w-full md:w-[50%]">

      <TextFadeIn
          text="The Future of"
          className="text-3xl md:text-[80px] !leading-[1.2] mt-6 md:mt-10 text-text-800"
        />
        <TextFadeIn
          text="Education Management"
          className="text-3xl md:text-[80px] font-extrabold !leading-[1.2] mt-1 md:mt-2 text-text-800"
        />

        <p className="mt-4 text-sm md:text-lg font-light text-gray-700">A Powerful School & College Management System Designed to Streamline Administration, Enhance Learning, and Connect Everyone Seamlessly</p>

        <div className="mt-10 flex items-center gap-2 md:gap-4">
          <Button className="w-fit group bg-skyish-700 py-2.5">
            <span className="!leading-none py-1">Get Started</span>
          </Button>
        </div>
      </div>

      {/* Right portion */}
      <div className="w-full md:w-[50%] flex justify-end relative overflow-hidden">
      <Image
  alt="hero star glass image"
  src={images.heroPathshala}
  className="w-full h-auto max-h-[466px] max-w-[550px] object-contain"
  width={0}
  height={0}
  sizes="100vw"
/>

      <div>

      </div>
      </div>
    </div>
    <div className="flex flex-col lg:flex-row justify-between items-center py-4 rounded-lg mt-12">
 
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
</div>

  </section>
  );
};

export default HeroHome;
