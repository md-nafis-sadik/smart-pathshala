// app/components/OurGoals.tsx (or wherever suitable)

import { ConnectionIcon } from "@/services";
import { ComputerIcon } from "lucide-react";

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
          <h2 className=" text-3xl md:text-[50px] xl:text-[64px] font-bold text-gray-900">Our Goals</h2>
          <p className="mt-7 text-gray-600 text-base">
            Setting the Path for a Smarter, More Connected Future in Education
          </p>
  
          <div className="mt-16 grid gap-8 sm:grid-cols-1 md:grid-cols-2">
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
                <h3 className="text-[24px] font-bold text-gray-900 text-center lg:text-left">
                  {goal.title}
                </h3>
                <p className="mt-3 text-[#888] text-base text-center lg:text-left">{goal.description}</p>
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
  