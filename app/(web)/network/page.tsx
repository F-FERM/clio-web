import BlogHeroSection from "@/features/blog/BlogHeroSection";
import { BlogInsightsSection } from "@/features/blog/BlogInsightsSection";
import { BlogLatestArticleSection } from "@/features/blog/BlogLatestArticleSection";
import MaritimeNetwork from "@/features/network/networkHeroSection";
import { SmartGlobalOperations } from "@/features/network/SmartGlobalOperations";
import React from "react";

const page = () => {
  return (
    <div className="mt-40">
      <MaritimeNetwork />
      <SmartGlobalOperations />
    </div>
  );
};

export default page;
