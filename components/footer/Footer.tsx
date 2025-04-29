import { inter, scoutCond } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import {
  AtTheRateIcon,
  CallIcon,
  DividerFadingDashes,
} from "@/services/assets/svgs";
import { footerData } from "@/services/data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white py-10 md:py-20">
      <div className="containerX">
        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-7 min-[1120px]:grid-cols-11 gap-10 md:gap-6">
          {/* Inquiries */}
          <div className="col-span-2 md:col-span-3 flex items-center sm:items-start flex-col">
            <p
              className={cn(
                "footer_el_title text-center sm:text-start font-scoutcond"
              )}
            >
              {footerData.inquiries.title}
            </p>
            <p
              className={cn(
                "footer_el_text mt-4 md:mt-8 text-center sm:text-start font-inter"
              )}
            >
              {footerData.inquiries.address}
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-6">
              <div className="h-8 w-8 rounded-full bg-natural-100 flex_center">
                <CallIcon className="h-[14px] w-[14px] !shrink-0" />
              </div>
              <p className="footer_el_text">{footerData.inquiries.phone}</p>
            </div>
            <div className="flex items-center gap-6 mt-4 md:mt-2">
              <div className="h-8 w-8 rounded-full bg-natural-100 flex_center">
                <AtTheRateIcon className="h-[14px] w-[14px] !shrink-0" />
              </div>
              <p className="footer_el_text">{footerData.inquiries.email}</p>
            </div>
          </div>

          {/* Company Info */}
          <div className="col-span-2 flex items-center sm:items-start flex-col">
            <p
              className={cn(
                "footer_el_title text-center sm:text-start font-scoutcond"
              )}
            >
              {footerData.companyInfo.title}
            </p>
            <ul className="mt-4 md:mt-10">
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
          <div className="col-span-2 flex items-center sm:items-start flex-col">
            <p
              className={cn(
                "footer_el_title text-center sm:text-start font-scoutcond"
              )}
            >
              {footerData.services.title}
            </p>
            <ul className="mt-4 md:mt-10">
              {footerData.services.links.map((link, index) => (
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

          {/* Support */}
          <div className="col-span-2 flex items-center sm:items-start flex-col">
            <p
              className={cn(
                "footer_el_title text-center sm:text-start font-scoutcond"
              )}
            >
              {footerData.support.title}
            </p>
            <ul className="mt-4 md:mt-10">
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

          {/* Resources */}
          <div className="col-span-2 flex items-center sm:items-start flex-col">
            <p
              className={cn(
                "footer_el_title text-center sm:text-start font-scoutcond"
              )}
            >
              {footerData.resources.title}
            </p>
            <ul className="mt-4 md:mt-10">
              {footerData.resources.links.map((link, index) => (
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
