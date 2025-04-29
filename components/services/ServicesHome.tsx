"use client";
import SectionHeader from "@/components/common/SectionHeader";
import SectionSubHeader from "@/components/common/SectionSubHeader";
import ServiceCard from "./ServiceHomeCard";
import useEmblaCarousel from "embla-carousel-react";
import { servicesHomeData } from "@/services/data";
import { images } from "@/services";

const ServicesHome = () => {
  const options = { align: "start", loop: false } as const;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <section className="flex_center flex-col mt-20 mb-[120px]">
      <SectionSubHeader text="Services" />
      <SectionHeader dark text="Solutions for You" className="mt-6 md:mt-10" />

      <div className="containerX w-full mt-5 md:mt-10">
        <div className="w-full" ref={emblaRef}>
          <div className="w-full min-h-fit flex flex-row gap-6 md:gap-10 py-5 md:py-10 pe-4 md:pe-20">
            {/* Why noot looping this? -> Each image has different width */}
            <ServiceCard
              title={"Software \nDevelopment"}
              text="Building robust solutions to power your business growth."
              link=""
              imageComponent={{
                src: images.doubleLCrystal,
                alt: "Double L Crystal",
                className: "max-w-[142px] md:max-w-[194px] h-auto",
              }}
            />
            <ServiceCard
              title={"UXUI \nDesign"}
              text="Designing seamless and intuitive digital experiences."
              link=""
              imageComponent={{
                src: images.gemCrystal,
                alt: "Gem crystal image",
                className: "max-w-[96px] md:max-w-[135px] h-auto",
              }}
            />
            <ServiceCard
              title={"AI Apps \nCustom LLMs"}
              text="Building intelligent applications that revolutionize user experiences."
              link=""
              imageComponent={{
                src: images.starMixerCrystal,
                alt: "",
                className: "max-w-[133px] md:max-w-[156px] h-auto",
              }}
            />
            <ServiceCard
              title={"Branding \nSolution"}
              text="Building identities that leave a lasting impression."
              link=""
              imageComponent={{
                src: images.starCrystal,
                alt: "",
                className: "max-w-[136px] md:max-w-[184px] h-auto",
              }}
            />
            <ServiceCard
              title={"Server \nMaintenance"}
              text="24/7 server care to prevent downtime and ensure efficiency."
              link=""
              imageComponent={{
                src: images.honeycombCrystal,
                alt: "",
                className: "max-w-[116px] md:max-w-[180px] h-auto",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHome;
