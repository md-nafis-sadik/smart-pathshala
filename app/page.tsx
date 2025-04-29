import FAQ from "@/components/faq/FAQ";
import Testimonial from "@/components/testimonial/Testimonial";
import Team from "@/components/team/Team";
import OurJournal from "@/components/journal/JournalHome";
import Products from "@/components/products/Products";
import HeroHome from "@/components/hero/HeroHome";
import EffortLessManagement from "@/components/projects/EffortLessManagement";
import ServicesHome from "@/components/services/ServicesHome";
import WorkCultureHome from "@/components/workCulture/WorkCultureHome";
import PricingHome from "@/components/pricing/PricingHome";
import StatisticsHome from "@/components/statistics/StatisticsHome";
import IntroHome from "@/components/intro/IntroHome";
import MarqueeHome from "@/components/marquee/MarqueeHome";
import FeaturesHome from "@/components/projects/FeaturesHome";
import OurGoals from "@/components/home/OurGoals";
import Benifits from "@/components/projects/Benefits";

const HomePage = () => {
  return (
    <main className="relative overflow-hidden">
      <HeroHome />
      {/* <div className="w-full relative -mt-40">
        <MarqueeHome
          dark={true}
          className="absolute -bottom-20 md:bottom-0 left-1/2 -translate-x-1/2"
        />
        <MarqueeHome
          dark={false}
          className="absolute -bottom-16 md:bottom-10 left-1/2 -translate-x-1/2"
        />
      </div> */}
      <IntroHome />
      <EffortLessManagement />

      <OurGoals />
      
      <FeaturesHome />
      <Benifits/>
      <Testimonial />


      <FAQ />
    </main>
  );
};

export default HomePage;
