import { FleetCapabilitiesSection } from "@/features/fleet/FleetCapabilitiesSection";
import { FleetHeroSection } from "@/features/fleet/FleetHeroSection";
import { FleetShowcaseSection } from "@/features/fleet/FleetShowcaseSection";
import React from "react";

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
