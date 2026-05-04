import { CoreSafetyPillarsSection } from "@/features/safety-compilence/CoreSafetyPillarsSection";
import { SafetyComplianceHeroSection } from "@/features/safety-compilence/SafetyComplianceHeroSection";
import { SafetyPrinciplesSection } from "@/features/safety-compilence/SafetyPrinciplesSection";

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
