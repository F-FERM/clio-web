import { CareerHeroSection } from "@/features/career/CareerHeroSection";
import { CareerWhoWeAreBanner } from "@/features/career/CareerWhoWeAreBanner";
import { OpenPositionsSection } from "@/features/career/OpenPositionsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Maritime Career Opportunities in UAE | CLIO Maritime",
  description:
    "Explore top maritime career opportunities in UAE with CLIO Maritime.Find rewarding jobs,career growth,and professional opportunities in the marine industry",
  alternates: { canonical: "https://www.clio-maritime.com/career" },
};

const page = () => {
  return (
    <div className="mt-32 space-y-6 lg:space-y-40">
      <CareerHeroSection />
      <CareerWhoWeAreBanner />
      <OpenPositionsSection />
    </div>
  );
};

export default page;
