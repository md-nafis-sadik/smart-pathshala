'use client'

import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import { BenefitIcon, images } from '@/services'
import TextFadeIn from '../animations/TextFadeIn'

const features = [
  {
    title: 'Student & Teacher Management',
    description: 'Mobipath covers all stages of a students education, from school admission to receiving their final certificate from school.',
  },
  {
    title: 'Attendance Tracking',
    description: 'Skilled programmers working in the European and American software industries have worked to create this software that is suitable for use on mobile phones and desktop computers.',
  },
  {
    title: 'Reports & Analytics',
    description: 'Minimal internet data usage. real-time insights on institution performance.',
  },
]

export default function Benefits() {
  return (
    <section className='bg-[#FFFBEA]'>
    
    <div className='containerX py-16 md:py-[120px] space-y-16'>
    <div>
    <h2 className="text-center text-3xl md:text-[50px] xl:text-[64px] font-bold text-gray-900">Our Goals</h2>
          <p className="text-center mt-6 text-gray-600 text-base">
            Setting the Path for a Smarter, More Connected Future in Education
          </p>
          </div>
    <div className="rounded-[5%] bg-white p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative">
      {/* Left: Text */}

      {/* Right: Circle + Image */}
      <div className="w-full  lg:w-1/2 relative flex justify-start items-center">
        {/* Soft Circle Background */}
        {/* Overlapping Image */}
        <Image
          src={images.BenifitsImage1}
          alt="Dashboard Screenshot"
          width={322}
          height={618}
          className="relative z-10 w-full max-w-[322px]"
          priority
        />
      </div>

       <div className="w-full lg:w-1/2">
        <div className="w-full max-w-full lg:max-w-[522px] text-xl md:text-[24px] xl:text-[28px] font-bold !leading-[1.2] text-text-850 tracking-wide mb-10"
            >Benefits of Educational Institutions</div>
              
              <ul className="space-y-6">
                {features.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <BenefitIcon className=" shrink-0" />
                    <div>
                        <p className="text-lg font-semibold text-text-850">{item.title}</p>
                      <p className="text-base text-gray-600">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
        </div>

      
    </div>

    <div className="rounded-[5%] bg-white p-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 relative">
      {/* Left: Text */}
       <div className="w-full lg:w-1/2">
        <div className="w-full max-w-full lg:max-w-[522px] text-xl md:text-[24px] xl:text-[28px] font-bold !leading-[1.2] text-text-850 tracking-wide mb-10"
            >Benefits of Educational Institutions</div>
              
              <ul className="space-y-6">
                {features.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <BenefitIcon className=" shrink-0" />
                    <div>
                        <p className="text-lg font-semibold text-text-850">{item.title}</p>
                      <p className="text-base text-gray-600">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
        </div>

      {/* Right: Circle + Image */}
      <div className="w-full  lg:w-1/2 relative flex justify-end items-center">
        {/* Soft Circle Background */}
        {/* Overlapping Image */}
        <Image
          src={images.BenifitsImage1}
          alt="Dashboard Screenshot"
          width={322}
          height={618}
          className="relative z-10 w-full max-w-[322px]"
          priority
        />
      </div>
    </div>

    <div className="rounded-[5%] bg-white p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative">
      {/* Left: Text */}

      {/* Right: Circle + Image */}
      <div className="w-full  lg:w-1/2 relative flex justify-start items-center">
        {/* Soft Circle Background */}
        {/* Overlapping Image */}
        <Image
          src={images.BenifitsImage1}
          alt="Dashboard Screenshot"
          width={322}
          height={618}
          className="relative z-10 w-full max-w-[322px]"
          priority
        />
      </div>

       <div className="w-full lg:w-1/2">
        <div className="w-full max-w-full lg:max-w-[522px] text-xl md:text-[24px] xl:text-[28px] font-bold !leading-[1.2] text-text-850 tracking-wide mb-10"
            >Benefits of Educational Institutions</div>
              
              <ul className="space-y-6">
                {features.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <BenefitIcon className=" shrink-0" />
                    <div>
                        <p className="text-lg font-semibold text-text-850">{item.title}</p>
                      <p className="text-base text-gray-600">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
        </div>

      
    </div>
    </div>
    </section>
  )
}
