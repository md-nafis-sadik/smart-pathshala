'use client'

import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import { BenefitIcon, images } from '@/services'
import TextFadeIn from '../animations/TextFadeIn'

const educationFeatures = [
  {
    title: 'Streamlined Administration',
    description: 'Automates tasks like admissions, attendance, fee management, and reporting—saving time and reducing errors.',
  },
  {
    title: 'Centralized Data & Easy Access',
    description: 'Stores student, staff, and academic data in one secure place, making it accessible anytime from anywhere.',
  },
  {
    title: 'Improved Academic Performance',
    description: 'Enables better communication, resource sharing, and progress tracking, leading to more effective teaching and learning.',
  },
]
const teacherFeatures = [
  {
    title: 'Efficient Class Management',
    description: 'Apps help teachers schedule classes, take attendance, track assignments, and manage grades with ease, saving time and reducing manual work.',
  },
  {
    title: 'Better Communication with Students & Parents',
    description: 'Software enables real-time updates, sharing of study materials, and smooth communication with students and parents outside classroom hours.',
  },
  {
    title: 'Personalized Learning & Progress Tracking',
    description: 'Teachers can monitor individual student progress, identify learning gaps, and provide tailored support using data-driven insights.',
  },
]
const parentsFeatures = [
  {
    title: 'Real-Time Updates & Communication',
    description: 'Parents receive instant notifications about attendance, homework, grades, and school events, keeping them closely involved in their child’s education.',
  },
  {
    title: 'Transparency & Progress Tracking',
    description: 'Apps allow parents to monitor academic performance, behavior, and teacher feedback, helping them support their childs learning more effectively.',
  },
  {
    title: 'Convenient Access to Information',
    description: 'From fee payments to exam schedules, all important information is easily accessible in one place, saving time and reducing confusion.',
  },
]

export default function Benefits() {
  return (
    <section className='bg-[#FFFBEA]'>
    
    <div className='containerX py-16 md:py-[120px] space-y-16'>
    <div>
    <div className="w-full text-2xl md:text-4xl lg:text-[48px] font-[700] !leading-[1.2] text-text-850 tracking-wide mb-6 text-center"
        >Benefits</div>
        <p className="text-[#4f4f4f] text-xs md:text-sm lg:text-lg mb-7 lg:mb-10 font-medium leading-relaxed
        transition-opacity duration-1000 ease-out text-center">
          Setting the Path for a Smarter, More Connected Future in Education
        </p>
          </div>
    <div className="rounded-[5%] bg-white p-6 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative">
      {/* Left: Text */}

      {/* Right: Circle + Image */}
      <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start items-center">
        {/* Soft Circle Background */}
        {/* Overlapping Image */}
        <Image
          src={images.BenifitsImage1}
          alt="Dashboard Screenshot"
          width={322}
          height={618}
          className="relative z-10 w-auto lg:w-full h-[300px] lg:h-auto max-w-[322px]"
          priority
        />
      </div>

       <div className="w-full lg:w-1/2 pb-4 lg:pb-0">
       
        <div className="text-center lg:text-left w-full max-w-full lg:max-w-[522px] text-2xl md:text-[24px] xl:text-[28px] font-bold !leading-[1.2] text-text-850 tracking-wide mb-10"
            >Benefits of Educational Institutions</div>
              
              <div className="space-y-6">
                {educationFeatures.map((item, idx) => (
                  <div key={idx} className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
                    <BenefitIcon className="flex justify-center shrink-0" />
                    <div>
                        <p className="text-center lg:text-left text-base lg:text-lg font-semibold text-text-850">{item.title}</p>
                      <p className="text-center lg:text-left text-xs md:text-sm lg:text-base text-gray-600 mt-1 max-w-lg">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
        </div>

      
    </div>

    <div className="rounded-[5%] bg-white p-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 relative">
      {/* Left: Text */}
       <div className="w-full lg:w-1/2">
        <div className="w-full max-w-full lg:max-w-[522px] text-xl md:text-[24px] xl:text-[28px] font-bold !leading-[1.2] text-text-850 tracking-wide mb-10"
            >Benefits of Teachers</div>
              
              <ul className="space-y-6">
                {teacherFeatures.map((item, idx) => (
                  <li key={idx} className="flex justify-center lg:items-start gap-3">
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
      <div className="w-full  lg:w-1/2 relative flex justify-center lg:justify-end items-center">
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
      <div className="w-full  lg:w-1/2 relative flex justify-center lg:justify-start items-center">
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
            >Benefits of Parents</div>
              
              <ul className="space-y-6">
                {parentsFeatures.map((item, idx) => (
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
