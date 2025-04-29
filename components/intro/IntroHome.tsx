'use client'

import TextFadeIn from "../animations/TextFadeIn";
import CountUp from 'react-countup';


const IntroHome = () => {
  return (
    <section className=" bg-[#FFF3C5]">
    <div className="containerX pt-[50px] lg:pt-[60px] pb-[40px] lg:pb-[50px] flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
      <div
        className="w-full lg:max-w-[522px] text-3xl md:text-4xl lg:text-[48px] font-[700] !leading-[1] text-text-850 tracking-wide"
      >A Smarter Way to Manage Your Institution</div>
      <div className="w-full lg:w-2/5">
      <section className="py-6 lg:py-12">
      <h2 className="text-gray-700 text-lg md:text-xl max-w-3xl mb-7 lg:mb-10 font-medium leading-relaxed">
        A Smart & Trusted Solution Helping Schools, Teachers, and Students Streamline Learning and Management
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        <div>
          <div className="text-4xl font-bold  text-text-850">
            <CountUp end={50} duration={2} separator="," suffix="k" /><span className="text-skyish-700">+</span>
          </div>
          <p className="text-gray-600 mt-2 text-sm">Total Students</p>
        </div>

        <div>
          <div className="text-4xl font-bold  text-text-850">
            <CountUp end={400} duration={2} suffix="" /><span className="text-skyish-700">+</span>
          </div>
          <p className="text-gray-600 mt-2 text-sm">Total Institutes</p>
        </div>

        <div>
          <div className="text-4xl font-bold text-text-850">
            <CountUp end={800} duration={2} suffix="" /><span className="text-skyish-700">+</span>
          </div>
          <p className=" text-text-850 mt-2 text-sm">Total Teachers</p>
        </div>
      </div>
    </section>
      </div>
      
    </div>
    </section>
  );
};

export default IntroHome;
