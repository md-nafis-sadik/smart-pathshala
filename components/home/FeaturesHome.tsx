'use client'

import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import { CheckMarkIcon, FeatureIcon1, FeatureIcon2, FeatureIcon3, images } from '@/services'
import TextFadeIn from '../animations/TextFadeIn'

const features = [
  {
    title: 'Student & Teacher Management',
    description: 'Smart PathShala provides end-to-end support throughout a student’s academic journey — from the moment of admission to the issuance of their final certificate — ensuring a seamless and well-managed educational experience.',
    icon: <FeatureIcon1/>
  },
  {
    title: 'Attendance Tracking',
    description: 'This software has been developed by skilled programmers with experience in the European and American software industries, ensuring it is optimized for both mobile devices and desktop computers.',
    icon: <FeatureIcon2/>
  },
  {
    title: 'Reports & Analytics',
    description: 'Designed to be highly efficient, this software ensures minimal internet data usage, providing a seamless experience even with limited connectivity.',
    icon: <FeatureIcon3/>
  },
]

export default function FeaturesHome() {
  return (
    <section className="containerX py-20 md:py-[130px] flex flex-col-reverse lg:flex-row items-center justify-between gap-12 relative">
      {/* Left: Text */}
       <div className="w-full lg:w-1/2">
        <div className="w-full max-w-full lg:max-w-[522px] text-3xl md:text-[50px] xl:text-[64px] font-bold !leading-[1.2] text-text-850 tracking-wide mb-4"
            >Our Features</div>
              <p className="text-gray-600 text-base mb-12">
              Discover the Features That Empower Education Management              </p>
              <ul className="space-y-6">
                {features.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div>{item.icon}</div>
                    <div>
                    
                      <p className="text-base text-gray-600">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
        </div>

      {/* Right: Circle + Image */}
      <div className="w-full  lg:w-1/2 relative flex justify-center items-center">
        {/* Soft Circle Background */}
        {/* Overlapping Image */}
        <Image
          src={images.FeatureImage}
          alt="Dashboard Screenshot"
          width={681}
          height={381}
          className="relative z-10 w-full max-w-[580px]"
          priority
        />
      </div>
    </section>
  )
}
