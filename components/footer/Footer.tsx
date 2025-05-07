import { cn } from "@/lib/utils";
import { FacebookLineIcon, images, InstaLineIcon, LinkedInLineIcon, TwitterLineIcon, YoutubeLineIcon } from "@/services";
import Image from "next/image";
import { footerData } from "@/services/data";
import Link from "next/link";


const Footer = () => {

  return (
    <footer  className="bg-[#082237] py-10 md:py-20 border-b border-[#0F456B]">
      <div className="containerX">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
          {/* Inquiries */}
          <div  className=" text-white col-span-1 md:col-span-2 flex-col flex items-center md:items-start max-w-auto md:max-w-[363px]">

            <div className="max-w-[363px] flex flex-col  items-center md:items-start"><Link href='/' className="h-fit">
              <div className="flex items-center gap-2">
                <Image alt="logo" src={images.LogoWhite} className="w-[51px]" />
                <span className="font-bold text-lg leading-tight">SMART PATHSHALA</span>
              </div>
            </Link>
              <p
                className={cn(
                  "text-xs md:text-sm lg:text-base mt-4 md:mt-6 text-center md:text-start font-inter"
                )}
              >
                {footerData.inquiries.description}
              </p>
              <div className="flex items-center gap-3 mt-3 lg:mt-4 md:mt-6">

                <div className="text-sm lg:text-base">Call:</div>

                <p className="footer_el_text">{footerData.inquiries.phone}</p>
              </div>
              <div className="flex items-center gap-3  mt-3 lg:mt-4 md:mt-6">
                <div className="text-sm lg:text-base">Email:</div>
                <p className="footer_el_text">{footerData.inquiries.email}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-6">
              <div><FacebookLineIcon /></div>
              <div><TwitterLineIcon /></div>
              <div><InstaLineIcon /></div>
              <div><LinkedInLineIcon /></div>
              <div><YoutubeLineIcon /></div>
            </div>
          </div>

          {/* Company Info */}
          <div  className=" text-white col-span-1 flex items-center md:items-start flex-col">
            <p
              className={cn(
                "text-center sm:text-start font-semibold text-lg lg:text-xl"
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
          <div  className=" text-white col-span-1 flex items-center md:items-start flex-col">
            <p
              className={cn(
                " text-center sm:text-start font-semibold text-lg lg:text-xl"
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
