"use client";
import { GradientButton } from "@/components/ui/gradient-button";
import colors from "@/lib/colors";
import { cn } from "@/lib/utils";
import {
  AppLogoIcon,
  Dividericon,
  GraphicIcon,
  MenuIcon,
  PlusRoundedSecondaryIcon,
} from "@/services/assets/svgs";
import { navbarData, routes } from "@/services/data/shared.data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useState } from "react";
import NavigationSheet from "./NavigationSheet";
import { Button } from "../ui/button";
import { images } from "@/services";
import Image from "next/image";

const Navbar: FC = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const pathname = usePathname();

  return (
    <nav
      className={cn(
        pathname === routes.homepage.link
          ? "bg-transparent border-natural-300"
          : "bg-transparent border-natural-300",
        "border-b"
      )}
    >
      <div className="containerX flex flex-row items-center justify-between gap-4 py-3">
        <div className="flex items-center gap-12">
        <Link href={routes.homepage.link} className="h-fit">
        <div className="flex items-center gap-2">
          <Image alt="logo" src={images.LogoBook}/>
          <span className="font-bold text-lg leading-tight">SMART PATHSHALA</span>
          </div>
        </Link>

        <div className="hidden min-[1160px]:flex flex-row items-center">
          {navbarData.map(({ link, name, megaMenu }, index) => (
            <div className="flex flex-row items-center" key={index}>
              <Link
                href={link}
                className="h-[34px] w-fit py-2 px-4 border-none outline-none group flex items-center gap-1 relative"
              >
                <span
                  className={cn(
                    pathname === link &&
                      (pathname === routes.homepage.link
                        ? "navbar-btn-gradient-dark"
                        : "navbar-btn-gradient-lite"),
                    "block navbar-btn-gradient absolute w-full h-1/2 bottom-0 left-0 z-[1]"
                  )}
                />

                <span
                  className={cn(
                    pathname === link 
                      ? "text-text-800 font-semibold"
                      : "text-text-600 font-normal",
                    "text-sm !leading-[1.4] relative z-[2] font-inter"
                  )}
                >
                  {name}
                </span>
                {megaMenu && (
                  <PlusRoundedSecondaryIcon
                    className="!h-5 !w-5 !shrink-0 transition_common group-hover:rotate-180 relative z-[3]"
                    color={
                      pathname === link
                        ? colors.text[750]
                        : colors.text[600]
                    }
                  />
                )}
              </Link>
              {/* {index < navbarData.length - 1 && (
                <Dividericon
                  className="w-[7px] h-7"
                  color={
                    pathname === routes.homepage.link
                      ? colors.natural[900]
                      : colors.natural[200]
                  }
                />
              )} */}
            </div>
          ))}
        </div>
        </div>

        <div className="hidden md:flex flex-row items-center gap-2 md:gap-3">
          {/* ON/OFF MUSIC */}
     
              <Button className="bg-yellowish-700 flex_center gap-2 group ps-3 md:px-5 font-semibold text-text-800 text-sm">
                <span className="!leading-none">School Login</span>
              </Button>


          {/* GET IN TOUCH */}
          <Button className="bg-skyish-700 flex_center gap-2 group ps-3 md:px-5 font-semibold text-white text-sm">
                <span className="!leading-none">Register Now</span>
              </Button>

          {/* MOBILE MENU */}
          <GradientButton
            className={cn("bg-black flex_center gap-2 group ps-[10px] md:px-3")}
            containerClassName="block min-[1160px]:hidden"
            onClick={() => setIsSheetOpen(true)}
          >
            <MenuIcon className="!h-5 !w-5 !shrink-0" />
            <span
              className={cn(
                pathname === routes.homepage.link
                  ? "text-white"
                  : "text-text-900",
                "font-scoutcond text-lg font-bold text-white uppercase !leading-[0.9] group-hover:text-white transition_common"
              )}
            >
              
            </span>
          </GradientButton>
        </div>
      </div>

      <NavigationSheet
        isSheetOpen={isSheetOpen}
        closeSheet={() => setIsSheetOpen(false)}
        pathname={pathname}
      />
    </nav>
  );
};

export default Navbar;
