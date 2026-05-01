import { CareerHeroSection } from "@/features/career/CareerHeroSection";
import { CareerWhoWeAreBanner } from "@/features/career/CareerWhoWeAreBanner";
import { OpenPositionsSection } from "@/features/career/OpenPositionsSection";

const page = () => {
  return (
    <div className="mt-32 space-y-12 lg:space-y-60">
      <CareerHeroSection />
      <CareerWhoWeAreBanner />
      <OpenPositionsSection />
    </div>
  );
};

export default page;
