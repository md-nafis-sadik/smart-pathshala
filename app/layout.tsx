import type { Metadata } from "next";
import { bonbon, inter, scout, scoutCond, yesevaOne } from "@/lib/fonts";
import "@/styles/globals.css";
import "@/styles/app.css";
import Footer from "@/components/footer/Footer";
import LetsTalk from "@/components/letsTalk/LetsTalkHome";
import Navbar from "@/components/navigation/Navbar";
import { cn } from "@/lib/utils";
import "@/styles/app.css";
import "@/styles/globals.css";
import { FacebookLineIcon, InstaLineIcon, LinkedInLineIcon, TwitterLineIcon, YoutubeLineIcon } from "@/services";

export const metadata: Metadata = {
  title: "Smart Pathshala",
  description: "A Powerful School & College Management System Designed to Streamline Administration, Enhance Learning, and Connect Everyone Seamlessly",
  icons: {
    icon: "/images/logo-book.png", // Path to your favicon in the public directory
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.variable,
          bonbon.variable,
          yesevaOne.variable,
          scoutCond.variable,
          scout.variable,
          "bg-white min-h-screen text-neutral-700 relative"
        )}
      >
        <Navbar />
        {children}
        <LetsTalk />
        <Footer />
        <div className="bg-[#082237]">
      <div className="flex flex-col lg:flex-row items-center justify-between  containerX py-6 ">
          <div className="text-white pb-5 lg:pb-0">© Copyright 2025 <a href="/" className="text-skyish-700">Smart Pathshala</a> | All rights are reserved</div>
          <div className="flex items-center gap-4">
            <div><a href="/"><FacebookLineIcon/></a></div>
            <div><a href="/"><TwitterLineIcon/></a></div>
            <div><a href="/"><InstaLineIcon/></a></div>
            <div><a href="/"><LinkedInLineIcon/></a></div>
            <div><a href="/"><YoutubeLineIcon/></a></div>
          </div>
        </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
