'use client'

import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import { images } from '@/services'
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

export default function FeaturesHome() {
  return (
    <section className="containerX py-20 md:py-[250px] flex flex-col-reverse lg:flex-row items-center justify-between gap-12 relative">
      {/* Left: Text */}
      <div className="w-full md:w-1/3">
      <TextFadeIn
        text="Our Features"
        className="w-full md:max-w-[522px] text-2xl md:text-[48px] font-bold !leading-[1.4] text-text-850 tracking-wide mb-4"
      />
        <p className="text-gray-600 text-sm md:text-base mb-8">
          All-in-One Admin Dashboard – Manage Everything with Ease
        </p>
        <ul className="space-y-6">
          {features.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle className="text-skyish-700 w-6 h-6 shrink-0" />
              <div>
                <p className="font-semibold text-text-850">{item.title}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Circle + Image */}
      <div className="w-full md:w-2/3 relative flex justify-center items-center">
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
