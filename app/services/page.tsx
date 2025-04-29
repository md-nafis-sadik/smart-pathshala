import SectionHeader from "@/components/common/SectionHeader";
import ClientServiceList from "@/components/services/ClientServiceList";
import ProductAnimationService from "@/components/services/ProductAnimationService";
import SaasDevelopmentService from "@/components/services/SaasDevelopmentService";
import ServiceStrengthAreas from "@/components/services/ServiceStrengthAreas";
import SoftwareService from "@/components/services/SoftwareService";
import UXUIService from "@/components/services/UXUIService";

const ServicePage = () => {
  return (
    <main className="relative">
      <div className="containerX py-10 md:py-[100px]">
        <SectionHeader
          dark
          text="What We Do"
          className="text-center md:text-start"
        />
        <p className="font-inter text-sm md:text-2xl font-normal md:font-light !leading-[1.4] uppercase text-center md:text-start text-text-600 mt-6">
          Know our strengths
        </p>
      </div>
      <SoftwareService />
      <UXUIService />
      <ProductAnimationService />
      <SaasDevelopmentService />
      <ServiceStrengthAreas />
      <ClientServiceList />
    </main>
  );
};

export default ServicePage;
