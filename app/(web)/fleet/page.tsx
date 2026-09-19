import { FleetCapabilitiesSection } from "@/features/fleet/FleetCapabilitiesSection";
import { FleetHeroSection } from "@/features/fleet/FleetHeroSection";
import { FleetShowcaseSection } from "@/features/fleet/FleetShowcaseSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clio Is the Best Ship Safety Management in Dubai | UAE",
  description:
    "Clio is the best ship safety management in Dubai, providing vessel safety,compliance,risk management,and reliable maritime solutions for safer operations",
  alternates: {
    canonical: "https://clio-maritime.com/fleet",
  },
};

const page = () => {
  return (
    <div className="mt-33 lg:mt-45 space-y-16 lg:space-y-24 pb-20">
      <section className="w-full px-6 lg:px-20">
        <div className="mx-auto w-full max-w-[1400px]">
          <FleetHeroSection />
        </div>
      </section>
      <FleetShowcaseSection />
      <FleetCapabilitiesSection />
    </div>
  );
};

export default page;
