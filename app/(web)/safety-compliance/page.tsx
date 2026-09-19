import { CoreSafetyPillarsSection } from "@/features/safety-compilence/CoreSafetyPillarsSection";
import { SafetyComplianceHeroSection } from "@/features/safety-compilence/SafetyComplianceHeroSection";
import { SafetyPrinciplesSection } from "@/features/safety-compilence/SafetyPrinciplesSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Ship Safety Management in Dubai | CLIO Maritime",
  description:
    "Best Ship Safety Management in Dubai,offering reliable safety systems,vessel compliance,risk management,and professional maritime solutions for shipowners",
  alternates: {
    canonical: "https://www.clio-maritime.com/safety-compliance",
  },
};

const page = () => {
  return (
    <div className="mt-32">
      <SafetyComplianceHeroSection />
      <SafetyPrinciplesSection />
      <CoreSafetyPillarsSection />
    </div>
  );
};

export default page;
