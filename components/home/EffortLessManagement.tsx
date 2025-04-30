'use client'

import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import { CheckMarkIcon, images } from '@/services'
import TextFadeIn from '../animations/TextFadeIn'

const features = [
  {
    title: 'Student & Teacher Management',
    description: 'Easily track and manage student & staff details.',
  },
  {
    title: 'Attendance Tracking',
    description: 'Automated attendance system with real-time insights.',
  },
  {
    title: 'Fee & Payment Management',
    description: 'Hassle-free fee collection, invoices & reminders.',
  },
  {
    title: 'Reports & Analytics',
    description: 'Get real-time insights on institution performance.',
  },
]

export default function EffortLessManagement() {
  return (
<section className="containerX gap-10 py-20 lg:py-[220px] flex flex-col-reverse lg:flex-row items-center justify-between relative">
  {/* Left: Text */}
  <div className="w-full lg:w-2/5 md:3/5">
  <TextFadeIn text="Effortless Management" className="w-full lg:max-w-[522px] text-2xl md:text-4xl lg:text-[48px] font-[700] !leading-[1.2] text-text-850 tracking-wide mb-6"
        />
        <p className="text-[#4f4f4f] text-xs md:text-sm lg:text-lg mb-7 lg:mb-10 font-medium leading-relaxed
        transition-opacity duration-1000 ease-out text-center lg:text-left">
          All-in-One Admin Dashboard – Manage Everything with Ease
        </p>
        <div className='flex justify-center'>
        <ul className="space-y-6 max-w-xl">
          {features.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckMarkIcon className="text-skyish-700 w-6 h-6 shrink-0" />
              <div>
                <p className="text-sm md:text-base lg:text-lg font-semibold text-text-850">{item.title}</p>
                <p className="text-xs md:text-sm lg:text-base text-gray-600">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
        </div>
  </div>

  {/* Right: Circle + Image */}
  <div className="w-full lg:w-3/5 md:2/5 relative flex justify-center items-center pt-[15%] md:pt-[12%] lg:pt-0 pb-[25%] md:pb-[20%] lg:pb-0 px-4 lg:px-0">
    {/* Soft Circle Background */}
    <div className="absolute w-full max-w-[600px] lg:max-w-[712px] aspect-square bg-gradient-to-bl from-sky-100/60 to-white rounded-full" />
    
    {/* Overlapping Image */}
    <div className="relative z-10 w-full max-w-[550px] md:max-w-[670px]">
      <Image
        src={images.LaptopProject}
        alt="Dashboard Screenshot"
        width={681}
        height={381}
        className="w-full h-auto "
        priority
      />
    </div>
  </div>
</section>
  )
}
