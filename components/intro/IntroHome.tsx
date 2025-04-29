'use client'

import TextFadeIn from "../animations/TextFadeIn";
import CountUp from 'react-countup';


const IntroHome = () => {
  return (
    <div className="containerX pt-[110px] pb-[60px] md:py-[70px] flex flex-col md:flex-row justify-between bg-[#FFF3C5] items-center">
      <TextFadeIn
        text="A Smarter Way to Manage Your Institution"
        className="w-full md:max-w-[522px] text-2xl md:text-[48px] font-bold !leading-[1.4] text-text-850 tracking-wide"
      />
      <div className="w-full md:w-2/5">
      <section className=" py-12">
      <h2 className="text-gray-700 text-xl max-w-3xl mb-10 font-medium leading-relaxed">
        A Smart & Trusted Solution Helping Schools, Teachers, and Students Streamline Learning and Management
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
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
          <div className="text-3xl md:text-4xl font-bold text-text-850">
            <CountUp end={800} duration={2} suffix="" /><span className="text-skyish-700">+</span>
          </div>
          <p className=" text-text-850 mt-2 text-sm">Total Teachers</p>
        </div>
      </div>
    </section>
      </div>
      
    </div>
  );
};

export default IntroHome;
