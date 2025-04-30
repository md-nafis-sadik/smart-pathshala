"use client";

import { cn } from "@/lib/utils";
import { images } from "@/services";
import Image from "next/image";
import {
  AtTheRateIcon,
  CallIcon,
  DividerFadingDashes,
} from "@/services/assets/svgs";
import { footerData } from "@/services/data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#082237] py-10 md:py-20">
      <div className="containerX">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 min-[1120px]:grid-cols-4 gap-10 md:gap-6">
          {/* Inquiries */}
          <div className=" text-white col-span-1 md:col-span-2 flex items-center sm:items-start flex-col max-w-[363px]">
          <Link href='/' className="h-fit">
        <div className="flex items-center gap-2">
          <Image alt="logo" src={images.LogoWhite} className="w-[51px]"/>
          <span className="font-bold text-lg leading-tight">SMART PATHSHALA</span>
          </div>
        </Link>
            <p
              className={cn(
                "footer_el_text mt-4 md:mt-8 text-center sm:text-start font-inter"
              )}
            >
              {footerData.inquiries.description}
            </p>
            <div className="flex items-center gap-3 mt-4 md:mt-6">
              
                <div>Call:</div>
              
              <p className="footer_el_text">{footerData.inquiries.phone}</p>
            </div>
            <div className="flex items-center gap-3 mt-4 md:mt-2">
            <div>Email:</div>
              <p className="footer_el_text">{footerData.inquiries.email}</p>
            </div>
          </div>

          {/* Company Info */}
          <div className=" text-white col-span-2 md:col-span-1 flex items-center sm:items-start flex-col">
            <p
              className={cn(
                "text-center sm:text-start font-semibold text-xl"
              )}
            >
              {footerData.companyInfo.title}
            </p>
            <ul className="mt-4 md:mt-6">
              {footerData.companyInfo.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={cn(
                      "footer_el_text block mb-2 text-center sm:text-start font-inter"
                    )}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className=" text-white col-span-2 md:col-span-1 flex items-center sm:items-start flex-col">
            <p
              className={cn(
                " text-center sm:text-start font-semibold text-xl"
              )}
            >
              {footerData.support.title}
            </p>
            <ul className="mt-4 md:mt-6">
              {footerData.support.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={cn(
                      "footer_el_text block mb-2 text-center sm:text-start font-inter"
                    )}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

         
        </div>

      
      </div>
    </footer>
  );
};

export default Footer;
