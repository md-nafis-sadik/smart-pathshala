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

      </body>
    </html>
  );
};

export default RootLayout;
