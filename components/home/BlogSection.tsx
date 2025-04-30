"use client";

import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { LeftSignIcon, RightSignIcon } from "@/services/assets/svgs";
import useEmblaButtons from "@/hooks/EmblaCarousel";
import Image from "next/image";
import { images } from "@/services";
import { ChevronLeft, ChevronRight } from "lucide-react";

const blogData = [
  {
    id: 1,
    image: images.blogImage1, // replace with real paths
    date: "June 24, 2024",
    title: "The Future of Digital Education in Bangladesh",
    desc: "How technology is transforming schools and colleges for a smarter, more efficient learning experience.",
  },
  {
    id: 2,
    image: images.blogImage2,
    date: "June 24, 2024",
    title: "5 Ways a Smart School Management System Benefits Teachers",
    desc: "Discover how automation and digital tools improve communication, reduce workload, and enhance learning.",
  },
  {
    id: 3,
    image: images.blogImage3,
    date: "June 24, 2024",
    title: "Connecting Students, Teachers & Parents with Smart Apps",
    desc: "The role of mobile applications in bridging communication gaps and improving academic performance.",
  },
  {
    id: 4,
    image: images.blogImage1,
    date: "June 24, 2024",
    title: "Connecting Students, Teachers & Parents with Smart Apps",
    desc: "The role of mobile applications in bridging communication gaps and improving academic performance.",
  },
  {
    id: 5,
    image: images.blogImage2,
    date: "June 24, 2024",
    title: "Connecting Students, Teachers & Parents with Smart Apps",
    desc: "The role of mobile applications in bridging communication gaps and improving academic performance.",
  },
  {
    id: 6,
    image: images.blogImage3,
    date: "June 24, 2024",
    title: "Connecting Students, Teachers & Parents with Smart Apps",
    desc: "The role of mobile applications in bridging communication gaps and improving academic performance.",
  }
];

const BlogSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 4000 }),
  ]);
  const { onPrevButtonClick, onNextButtonClick } = useEmblaButtons(emblaApi);
  const [hovered, setHovered] = useState(false);

  return (
    <section className="w-full py-20 bg-[#f0f8ff]">
        <div className="containerX">
      <div className=" text-center">
        <h2 className="text-3xl md:text-[50px] xl:text-[64px] font-bold text-gray-900">Our Blog</h2>
        <p className="mt-4 text-base text-gray-600">
          Setting the Path for a Smarter, More Connected Future in Education
        </p>
      </div>

      <div className="mt-16 overflow-hidden" ref={emblaRef}>
        <div className="flex gap-8 pr-8 lg:pr-16">
          {blogData.map((blog) => (
            <div
              key={blog.id}
              className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] bg-white rounded-3xl overflow-hidden p-7"
            >
              <Image src={blog.image} alt={blog.title} width={500} height={300} className="w-full h-[224px] object-cover rounded-2xl" />
              <div className="text-left">
                <p className="text-sm text-gray-500 my-4">{blog.date}</p>
                <h3 className="text-xl font-semibold text-gray-900">{blog.title}</h3>
                <p className="text-base text-gray-600 mt-2">{blog.desc}</p>
                <button className="mt-8 text-base font-semibold text-gray-900 hover:underline flex items-center gap-1">
                  Learn More <span>&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="flex_center gap-6 mt-10">
        <button
          onClick={onPrevButtonClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="p-3 lg:p-[18px] bg-white hover:bg-skyish-700 hover:text-white transition-all shadow-lg rounded-full hover:-translate-y-1"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={onNextButtonClick}
          className="p-3 lg:p-[18px] bg-white hover:bg-skyish-700 hover:text-white transition-all shadow-lg rounded-full hover:-translate-y-1"
        >
          <ChevronRight />
        </button>
      </div>
      </div>
    </section>
  );
};

export default BlogSection;
