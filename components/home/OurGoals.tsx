// app/components/OurGoals.tsx (or wherever suitable)

import { ConnectionIcon } from "@/services";
import { ComputerIcon } from "lucide-react";
import TextFadeIn from "../animations/TextFadeIn";

export default function OurGoals() {
    const goals = [
      {
        title: "Digitizing Education Management",
        description:
          "Our Mission is to Transform Educational Institution Management by Replacing Traditional Methods with a Smart, Digital, and Efficient System That Simplifies Operations and Boosts Performance.",
        icon:  <img src="/images/computer-icon.png"/>,
        bg: "bg-sky-100",
        borderColor: "border-sky-200",
      },
      {
        title: "Connecting Students, Teachers & Parents",
        description:
          "Our Goal is to Build a Strong and Seamless Connection Between Students, Teachers, and Guardians Through a Smart Mobile App, Enhancing Communication and Learning.",
        icon: <ConnectionIcon/>, 
        bg: "bg-yellow-100",
        borderColor: "border-yellow-200",
      },
    ];
  
    return (
      <section className="py-10 md:py-20 xl:py-28 bg-skyish-200">
        <div className="containerX mx-auto text-center">
        <TextFadeIn text="Our Goals" className="w-full lg:max-w-[522px] text-2xl md:text-4xl lg:text-[48px] font-[700] !leading-[1.2] text-text-850 tracking-wide mb-6"
        />
        <p className="text-[#4f4f4f] text-xs md:text-sm lg:text-lg mb-7 lg:mb-10 font-medium leading-relaxed
        transition-opacity duration-1000 ease-out text-center lg:text-left">
          Setting the Path for a Smarter, More Connected Future in Education
        </p>
  
          <div className="mt-10 lg:mt-16 grid gap-8 grid-cols-1 sm:grid-cols-2">
            {goals.map((goal, index) => (
              <div
                key={index}
                className={`rounded-2xl p-7 bg-white transition-transform hover:scale-105`}
              >
                <div className="w-full flex justify-center lg:justify-start">
                <div
                  className={`w-[72px] h-[72px] mb-5 rounded-xl flex items-center justify-center ${goal.bg} `}
                >
                  {goal.icon}
                </div>
                </div>
                <h3 className="text-base md:text-lg lg:text-[24px] font-bold text-gray-900 text-center lg:text-left">
                  {goal.title}
                </h3>
                <p className="text-xs md:text-sm mt-3 text-[#888] lg:text-base text-center lg:text-left">{goal.description}</p>
                <div className="mt-6 mb-2 w-full flex justify-center lg:justify-start">
                  <a
                    href="#"
                    className="text-sm font-semibold text-black flex items-center gap-1 group hover:underline"
                  >
                    Learn More
                    <span className="transform transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  