'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TextFadeIn from '../animations/TextFadeIn'
import AnimatedText from '../ui/AnimatedTitle'
import { GradientButton } from '../ui/gradient-button'
import Image from 'next/image'
import { images } from '@/services'

// Import other components & assets...
// (your existing imports)

gsap.registerPlugin(ScrollTrigger)

const HeroHome = () => {
  const sectionRef = useRef(null)
  const imageRef = useRef<HTMLImageElement | null>(null)
  const textBlockRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text from bottom
      gsap.fromTo(
        textBlockRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      )

      // Animate image
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[url('/images/patterns/hero-bg.png')] bg-cover bg-center">
      <section className="containerX font-[600] w-full pt-10 md:pt-20 lg:pt-0 pb-0 relative px-0 lg:px-16 2xl:px-20">
        <div className="flex flex-col lg:flex-row gap-10 px-4 sm:px-8">
          {/* Left portion */}
          <div ref={textBlockRef} className="flex flex-col w-full lg:w-[50%] py-0 lg:py-[100px]">
            <TextFadeIn text="The Future of" className="justify-center text-4xl md:text-[50px] lg:text-[65px] xl:text-[80px] !leading-[1.2] mt-6 md:mt-10 text-text-800 font-medium" />
            <TextFadeIn text="Education Management" className="text-center lg:text-left text-5xl md:text-[50px] lg:text-[65px] xl:text-[80px] font-extrabold !leading-[1.2] mt-3 md:mt-2 text-text-800" />
            <AnimatedText text="A Powerful School & College Management System Designed to Streamline Administration, Enhance Learning, and Connect Everyone Seamlessly" className="mt-5 text-center text-[#4F4F4F] lg:text-left text-xs md:text-sm lg:text-base" />

            <div className="mt-5 lg:mt-10 flex items-center justify-center lg:justify-start gap-2 md:gap-4">
              <GradientButton className="w-fit group bg-skyish-700 hover:bg-sky-600 py-2.5">
                <span className="!leading-none py-1 text-sm lg:text-base">Get Started</span>
              </GradientButton>
            </div>
          </div>

          {/* Right portion */}
          <div className="w-full lg:w-[50%] flex flex-col justify-end relative overflow-hidden">
            <Image
              ref={imageRef}
              alt="hero star glass image"
              src={images.heroPathshala}
              className="w-auto h-76 sm:h-auto"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
      </section>
    </section>
  )
}

export default HeroHome
