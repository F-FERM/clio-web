import { FleetCapabilitiesSection } from "@/features/fleet/FleetCapabilitiesSection";
import { FleetHeroSection } from "@/features/fleet/FleetHeroSection";
import { FleetShowcaseSection } from "@/features/fleet/FleetShowcaseSection";
import React from "react";

const page = () => {
  return (
    <div className="mt-32">
      <FleetHeroSection />
      <FleetShowcaseSection />
      <FleetCapabilitiesSection />
    </div>
  );
};

export default page;
