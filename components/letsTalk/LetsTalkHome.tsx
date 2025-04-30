import SectionHeader from "@/components/common/SectionHeader";
import { GradientButton } from "@/components/ui/gradient-button";
import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ArrowTopRIghtIcon } from "@/services/assets/svgs";
import { footerData } from "@/services/data";
import { Button } from "../ui/button";

const LetsTalkHome = () => {
  return (
    <section className="relative">
      {/* Background image + gradient overlay */}
      <div className="absolute inset-0 bg-[url('/images/project/footer-background.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#183144]" />

      {/* Content container */}
      <div className="relative z-10 containerX py-[60px] md:py-20 items-center space-y-6 justify-between">
        <div>
          <div>
            <h2 className="text-center text-2xl md:text-[30px] xl:text-[48px] font-bold text-white">
            Stay Updated with Smart Pathshala
            </h2>
            <p className="text-center mt-6 text-white text-base">
            Subscribe today and never miss an update on smarter institute management            </p>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <form className="rounded-full border border-[#494949] ps-6 py-1 pe-1 md:pe-3 h-[54px] md:h-[65px] flex items-center justify-between gap-4 bg-white w-full max-w-[540px]">
            <input
              type="email"
              placeholder="Enter your email address"
              className={cn(
                "text-sm md:text-base font-normal !leading-[1.3] bg-transparent border-none outline-none text-white placeholder:bg-clip-text placeholder:text-gray-400 h-full font-inter max-w-[148px] md:max-w-full"
              )}
            />
            <Button
              type="submit"
              className="px-5 py-2 md:py-3 h-[38px] md:h-[46px] bg-skyish-700 hover:bg-sky-600"
            >
              <span>Submit</span>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};


export default LetsTalkHome;
