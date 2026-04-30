import { CareerHeroSection } from "@/features/career/CareerHeroSection";
import { CareerWhoWeAreBanner } from "@/features/career/CareerWhoWeAreBanner";
import { OpenPositionsSection } from "@/features/career/OpenPositionsSection";
import React from "react";

const page = () => {
  return (
    <div className="mt-32">
      <CareerHeroSection />
      <CareerWhoWeAreBanner />
      <OpenPositionsSection />
    </div>
  );
};

export default page;
